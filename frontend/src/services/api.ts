import axios from 'axios'

const API_URL = import.meta.env.VITE_API_URL || '/api'

const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
})

// Add auth token to requests
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('admin_token')
  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  }
  return config
})

// Auth
export const login = async (email: string, password: string) => {
  const response = await api.post('/auth/login', { email, password })
  return response.data
}

export const validateToken = async () => {
  const response = await api.get('/auth/validate')
  return response.data
}

// Content
export const getContent = async () => {
  const response = await api.get('/content')
  return response.data
}

export const updateContent = async (content: unknown) => {
  const response = await api.put('/content', content)
  return response.data
}

// Analytics
export const trackClick = async (buttonId: string) => {
  try {
    await api.post('/analytics/click', { buttonId, timestamp: new Date().toISOString() })
  } catch (error) {
    console.error('Failed to track click:', error)
  }
}

export const getAnalytics = async (startDate?: string, endDate?: string) => {
  const params = new URLSearchParams()
  if (startDate) params.append('startDate', startDate)
  if (endDate) params.append('endDate', endDate)
  const response = await api.get(`/analytics?${params.toString()}`)
  return response.data
}

export const getClickStats = async () => {
  const response = await api.get('/analytics/clicks')
  return response.data
}

export default api

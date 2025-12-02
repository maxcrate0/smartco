// ============================================
// API SEM BACKEND - Tudo local + Google Analytics
// ============================================

// Credenciais do admin (pode mudar aqui ou usar variável de ambiente)
const ADMIN_EMAIL = import.meta.env.VITE_ADMIN_EMAIL || 'admin@smart-co.tech'
const ADMIN_PASSWORD = import.meta.env.VITE_ADMIN_PASSWORD || 'admin123'

// Chave para armazenamento local
const STORAGE_KEYS = {
  TOKEN: 'admin_token',
  CLICKS: 'smartco_clicks',
}

// ============================================
// AUTH (Local)
// ============================================

export const login = async (email: string, password: string) => {
  // Simula delay de rede
  await new Promise(resolve => setTimeout(resolve, 500))
  
  if (email === ADMIN_EMAIL && password === ADMIN_PASSWORD) {
    const token = btoa(`${email}:${Date.now()}`)
    localStorage.setItem(STORAGE_KEYS.TOKEN, token)
    return { token, email }
  }
  throw new Error('Invalid credentials')
}

export const validateToken = async () => {
  const token = localStorage.getItem(STORAGE_KEYS.TOKEN)
  if (!token) throw new Error('No token')
  
  try {
    const decoded = atob(token)
    const [email] = decoded.split(':')
    if (email === ADMIN_EMAIL) {
      return { valid: true, user: { email } }
    }
  } catch {
    throw new Error('Invalid token')
  }
  throw new Error('Invalid token')
}

// ============================================
// CONTENT (usa o contentStore do Zustand)
// ============================================

export const getContent = async () => {
  // O content é gerenciado pelo Zustand store com persistência
  return null
}

export const updateContent = async (_content: unknown) => {
  // O content é salvo automaticamente pelo Zustand
  return { success: true }
}

// ============================================
// ANALYTICS (Local + Google Analytics)
// ============================================

interface ClickEvent {
  buttonId: string
  timestamp: string
  date: string
}

// Envia evento para Google Analytics (se configurado)
const sendToGA = (buttonId: string) => {
  // Google Analytics 4
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('event', 'click', {
      event_category: 'CTA',
      event_label: buttonId,
    })
  }
}

// Salva clique localmente
const saveClickLocally = (buttonId: string) => {
  const clicks: ClickEvent[] = JSON.parse(localStorage.getItem(STORAGE_KEYS.CLICKS) || '[]')
  const now = new Date()
  clicks.push({
    buttonId,
    timestamp: now.toISOString(),
    date: now.toISOString().split('T')[0],
  })
  // Mantém apenas últimos 30 dias
  const thirtyDaysAgo = new Date(now.getTime() - 30 * 24 * 60 * 60 * 1000).toISOString().split('T')[0]
  const recentClicks = clicks.filter(c => c.date >= thirtyDaysAgo)
  localStorage.setItem(STORAGE_KEYS.CLICKS, JSON.stringify(recentClicks))
}

export const trackClick = async (buttonId: string) => {
  try {
    sendToGA(buttonId)
    saveClickLocally(buttonId)
  } catch (error) {
    console.error('Failed to track click:', error)
  }
}

export const getClickStats = async () => {
  const clicks: ClickEvent[] = JSON.parse(localStorage.getItem(STORAGE_KEYS.CLICKS) || '[]')
  const now = new Date()
  const today = now.toISOString().split('T')[0]
  const weekAgo = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000).toISOString().split('T')[0]
  const monthAgo = new Date(now.getTime() - 30 * 24 * 60 * 60 * 1000).toISOString().split('T')[0]

  return {
    total: clicks.length,
    today: clicks.filter(c => c.date === today).length,
    week: clicks.filter(c => c.date >= weekAgo).length,
    month: clicks.filter(c => c.date >= monthAgo).length,
    byButton: clicks.reduce((acc, c) => {
      acc[c.buttonId] = (acc[c.buttonId] || 0) + 1
      return acc
    }, {} as Record<string, number>),
  }
}

export const getAnalytics = async () => {
  const clicks: ClickEvent[] = JSON.parse(localStorage.getItem(STORAGE_KEYS.CLICKS) || '[]')
  
  // Agrupar por dia
  const dailyClicks = clicks.reduce((acc, c) => {
    const existing = acc.find(d => d.date === c.date)
    if (existing) {
      existing.clicks++
    } else {
      acc.push({ date: c.date, clicks: 1 })
    }
    return acc
  }, [] as Array<{ date: string; clicks: number }>)
  
  // Ordenar e formatar
  dailyClicks.sort((a, b) => a.date.localeCompare(b.date))
  const formattedDaily = dailyClicks.slice(-7).map(d => ({
    date: new Date(d.date).toLocaleDateString('pt-BR', { day: '2-digit', month: '2-digit' }),
    clicks: d.clicks,
  }))

  // Agrupar por hora
  const hourlyClicks = clicks.reduce((acc, c) => {
    const hour = new Date(c.timestamp).getHours()
    const hourStr = `${hour.toString().padStart(2, '0')}h`
    const existing = acc.find(h => h.hour === hourStr)
    if (existing) {
      existing.clicks++
    } else {
      acc.push({ hour: hourStr, clicks: 1 })
    }
    return acc
  }, [] as Array<{ hour: string; clicks: number }>)

  // Agrupar por botão
  const buttonStats = Object.entries(
    clicks.reduce((acc, c) => {
      acc[c.buttonId] = (acc[c.buttonId] || 0) + 1
      return acc
    }, {} as Record<string, number>)
  ).map(([name, value]) => ({ name, value }))

  return {
    dailyClicks: formattedDaily,
    hourlyClicks,
    buttonStats,
    totalClicks: clicks.length,
    conversionRate: 0, // Você pode calcular manualmente
  }
}

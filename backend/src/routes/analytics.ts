import { Router, Request, Response } from 'express'
import { authMiddleware } from '../middleware/auth'

const router = Router()

interface ClickEvent {
  buttonId: string
  timestamp: string
  date: string
}

// In-memory analytics storage (replace with Azure Cosmos DB in production)
const clickEvents: ClickEvent[] = []

// Track click (public)
router.post('/click', (req: Request, res: Response) => {
  try {
    const { buttonId, timestamp } = req.body

    if (!buttonId) {
      res.status(400).json({ error: 'buttonId is required' })
      return
    }

    const event: ClickEvent = {
      buttonId,
      timestamp: timestamp || new Date().toISOString(),
      date: new Date().toISOString().split('T')[0],
    }

    clickEvents.push(event)
    res.json({ success: true })
  } catch (error) {
    console.error('Track click error:', error)
    res.status(500).json({ error: 'Failed to track click' })
  }
})

// Get click stats (protected)
router.get('/clicks', authMiddleware, (_req: Request, res: Response) => {
  try {
    const now = new Date()
    const today = now.toISOString().split('T')[0]
    const weekAgo = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000).toISOString().split('T')[0]
    const monthAgo = new Date(now.getTime() - 30 * 24 * 60 * 60 * 1000).toISOString().split('T')[0]

    const stats = {
      total: clickEvents.length,
      today: clickEvents.filter(e => e.date === today).length,
      week: clickEvents.filter(e => e.date >= weekAgo).length,
      month: clickEvents.filter(e => e.date >= monthAgo).length,
      byButton: clickEvents.reduce((acc, e) => {
        acc[e.buttonId] = (acc[e.buttonId] || 0) + 1
        return acc
      }, {} as Record<string, number>),
    }

    res.json(stats)
  } catch (error) {
    console.error('Get click stats error:', error)
    res.status(500).json({ error: 'Failed to get stats' })
  }
})

// Get analytics (protected)
router.get('/', authMiddleware, (req: Request, res: Response) => {
  try {
    const { startDate, endDate } = req.query

    // Filter by date range if provided
    let filteredEvents = clickEvents
    if (startDate) {
      filteredEvents = filteredEvents.filter(e => e.date >= startDate)
    }
    if (endDate) {
      filteredEvents = filteredEvents.filter(e => e.date <= endDate)
    }

    // Group by date
    const dailyClicks = filteredEvents.reduce((acc, e) => {
      const date = e.date
      const existing = acc.find(d => d.date === date)
      if (existing) {
        existing.clicks++
      } else {
        acc.push({ date, clicks: 1 })
      }
      return acc
    }, [] as Array<{ date: string; clicks: number }>)

    // Sort by date
    dailyClicks.sort((a, b) => a.date.localeCompare(b.date))

    // Format dates for display
    const formattedDailyClicks = dailyClicks.map(d => ({
      date: new Date(d.date).toLocaleDateString('pt-BR', { day: '2-digit', month: '2-digit' }),
      clicks: d.clicks,
    }))

    // Group by hour
    const hourlyClicks = filteredEvents.reduce((acc, e) => {
      const hour = new Date(e.timestamp).getHours()
      const hourStr = `${hour.toString().padStart(2, '0')}h`
      const existing = acc.find(h => h.hour === hourStr)
      if (existing) {
        existing.clicks++
      } else {
        acc.push({ hour: hourStr, clicks: 1 })
      }
      return acc
    }, [] as Array<{ hour: string; clicks: number }>)

    // Group by button
    const buttonStats = Object.entries(
      filteredEvents.reduce((acc, e) => {
        acc[e.buttonId] = (acc[e.buttonId] || 0) + 1
        return acc
      }, {} as Record<string, number>)
    ).map(([name, value]) => ({ name, value }))

    res.json({
      dailyClicks: formattedDailyClicks,
      hourlyClicks,
      buttonStats,
      totalClicks: filteredEvents.length,
      conversionRate: 3.2, // Mock value
    })
  } catch (error) {
    console.error('Get analytics error:', error)
    res.status(500).json({ error: 'Failed to get analytics' })
  }
})

export default router

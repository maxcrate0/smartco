import { Router, Request, Response } from 'express'
import { authMiddleware } from '../middleware/auth'

const router = Router()

// In-memory content storage (replace with database in production)
let siteContent = {
  hero: {
    title: 'Domine a Arte de Estudar com Eficiência',
    subtitle: 'Descubra técnicas comprovadas cientificamente para aprender mais rápido, reter informações por mais tempo e alcançar seus objetivos acadêmicos.',
    ctaText: 'Quero Começar Agora',
    ctaLink: 'https://pay.hotmart.com/seu-produto',
  },
  about: {
    title: 'Transforme sua forma de aprender',
    description: 'Este guia foi desenvolvido com base em anos de pesquisa científica sobre aprendizado e memória. Você vai descobrir as técnicas usadas pelos melhores estudantes do mundo e como aplicá-las no seu dia a dia para alcançar resultados extraordinários.',
  },
  techniques: [],
  benefits: [],
  testimonials: [],
  cta: {
    title: 'Comece Sua Transformação Hoje',
    description: 'Invista no seu futuro com o guia completo de técnicas de estudo. Acesso vitalício e atualizações gratuitas.',
    price: '47',
    originalPrice: '97',
    ctaText: 'Garantir Meu Acesso',
    ctaLink: 'https://pay.hotmart.com/seu-produto',
  },
}

// Get content (public)
router.get('/', (_req: Request, res: Response) => {
  res.json(siteContent)
})

// Update content (protected)
router.put('/', authMiddleware, (req: Request, res: Response) => {
  try {
    const newContent = req.body

    // Merge with existing content
    siteContent = {
      ...siteContent,
      ...newContent,
      hero: { ...siteContent.hero, ...newContent.hero },
      about: { ...siteContent.about, ...newContent.about },
      cta: { ...siteContent.cta, ...newContent.cta },
    }

    res.json({ success: true, content: siteContent })
  } catch (error) {
    console.error('Update content error:', error)
    res.status(500).json({ error: 'Failed to update content' })
  }
})

export default router

import { create } from 'zustand'
import { persist } from 'zustand/middleware'

export interface ContentState {
  hero: {
    title: string
    subtitle: string
    ctaText: string
    ctaLink: string
  }
  about: {
    title: string
    description: string
  }
  techniques: Array<{
    title: string
    description: string
    color: string
  }>
  benefits: Array<{
    title: string
    description: string
  }>
  testimonials: Array<{
    name: string
    role: string
    content: string
    avatar: string
    rating: number
  }>
  cta: {
    title: string
    description: string
    price: string
    originalPrice: string
    ctaText: string
    ctaLink: string
  }
}

interface ContentStore {
  content: ContentState
  setContent: (content: Partial<ContentState>) => void
  updateSection: <K extends keyof ContentState>(section: K, data: ContentState[K]) => void
}

const defaultContent: ContentState = {
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

export const useContentStore = create<ContentStore>()(
  persist(
    (set) => ({
      content: defaultContent,
      setContent: (newContent) =>
        set((state) => ({
          content: { ...state.content, ...newContent },
        })),
      updateSection: (section, data) =>
        set((state) => ({
          content: { ...state.content, [section]: data },
        })),
    }),
    {
      name: 'smartco-content',
    }
  )
)

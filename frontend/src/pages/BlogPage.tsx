import { useEffect } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Calendar, Clock, ArrowRight, BookOpen, Brain, Target, Zap, TrendingDown, FileText } from 'lucide-react'
import { Button } from '../components/ui'

// Schema.org para a página do Blog
function useBlogSchema() {
  useEffect(() => {
    const script = document.createElement('script')
    script.type = 'application/ld+json'
    script.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Blog",
      "name": "Blog SmartCo - Técnicas de Estudo",
      "description": "Artigos sobre técnicas de estudo cientificamente comprovadas, produtividade e memorização.",
      "url": "https://smart-co.tech/blog",
      "image": "https://smart-co.tech/og-image.png",
      "publisher": {
        "@type": "Organization",
        "name": "SmartCo",
        "logo": {
          "@type": "ImageObject",
          "url": "https://smart-co.tech/favicon.svg"
        }
      }
    })
    document.head.appendChild(script)
    return () => { document.head.removeChild(script) }
  }, [])
}

const articles = [
  {
    slug: 'tecnica-pomodoro-guia-completo',
    title: 'Técnica Pomodoro: Guia Completo para Estudar com Foco Total',
    excerpt: 'Aprenda como usar a técnica Pomodoro para aumentar sua concentração e produtividade nos estudos. Método usado por milhares de estudantes aprovados.',
    image: '🍅',
    category: 'Produtividade',
    readTime: '8 min',
    date: '2025-12-01',
    icon: Clock,
  },
  {
    slug: 'metodo-feynman-como-usar',
    title: 'Método Feynman: Como Aprender Qualquer Coisa em 4 Passos',
    excerpt: 'Descubra a técnica do Nobel Richard Feynman para entender conceitos complexos de forma simples e nunca mais esquecer o que estudou.',
    image: '🧠',
    category: 'Memorização',
    readTime: '10 min',
    date: '2025-12-02',
    icon: Brain,
  },
  {
    slug: 'curva-do-esquecimento',
    title: 'O Que é a Curva do Esquecimento e Como Vencer Ela',
    excerpt: 'Descubra por que você esquece 70% do que estudou em 24 horas — e as técnicas cientificamente comprovadas para reter conhecimento por meses.',
    image: '📉',
    category: 'Neurociência',
    readTime: '15 min',
    date: '2025-12-03',
    icon: TrendingDown,
  },
  {
    slug: 'mapas-mentais-vs-resumos',
    title: 'Mapas Mentais vs Resumos: Qual é Melhor para o ENEM?',
    excerpt: 'Descubra quando usar cada técnica, como combinar as duas para máxima retenção, e veja exemplos práticos para cada matéria.',
    image: '🗺️',
    category: 'Comparativo',
    readTime: '12 min',
    date: '2025-12-03',
    icon: FileText,
  },
]

export default function BlogPage() {
  useBlogSchema()
  
  return (
    <div className="min-h-screen bg-dark-900 pt-24 pb-16">
      <div className="container mx-auto px-4 md:px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <span className="text-primary-400 font-semibold text-sm uppercase tracking-wider mb-4 block">
            Blog SmartCo
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Guias de <span className="text-gradient">Técnicas de Estudo</span>
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Artigos gratuitos com as melhores técnicas de estudo comprovadas cientificamente.
            Aprenda a estudar de forma mais inteligente.
          </p>
        </motion.div>

        {/* Articles Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {articles.map((article, index) => (
            <motion.article
              key={article.slug}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="group"
            >
              <Link to={`/blog/${article.slug}`}>
                <div className="bg-dark-800/50 border border-dark-700 rounded-2xl overflow-hidden hover:border-primary-500/30 transition-all duration-300 h-full flex flex-col">
                  {/* Image placeholder */}
                  <div className="h-48 bg-gradient-to-br from-primary-500/20 to-accent-500/20 flex items-center justify-center text-6xl">
                    {article.image}
                  </div>
                  
                  {/* Content */}
                  <div className="p-6 flex-1 flex flex-col">
                    {/* Meta */}
                    <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                      <span className="px-2 py-1 bg-primary-500/10 text-primary-400 rounded-md text-xs">
                        {article.category}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {article.readTime}
                      </span>
                    </div>
                    
                    {/* Title */}
                    <h2 className="text-xl font-bold text-white mb-3 group-hover:text-primary-400 transition-colors">
                      {article.title}
                    </h2>
                    
                    {/* Excerpt */}
                    <p className="text-gray-400 text-sm flex-1">
                      {article.excerpt}
                    </p>
                    
                    {/* Read more */}
                    <div className="mt-4 flex items-center text-primary-400 font-medium text-sm group-hover:gap-2 transition-all">
                      Ler artigo completo
                      <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              </Link>
            </motion.article>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mt-20 text-center"
        >
          <div className="max-w-2xl mx-auto p-8 rounded-2xl bg-gradient-to-r from-primary-500/10 to-accent-500/10 border border-primary-500/20">
            <BookOpen className="w-12 h-12 text-primary-400 mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-white mb-4">
              Quer todas as técnicas em um só lugar?
            </h2>
            <p className="text-gray-400 mb-6">
              Nosso e-book reúne mais de 15 técnicas de estudo comprovadas, com exercícios práticos
              e um plano de estudos pronto para você aplicar hoje mesmo.
            </p>
            <Link to="/">
              <Button variant="primary" size="lg" className="group">
                <Zap className="w-5 h-5 mr-2" />
                Conhecer o E-book Completo
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

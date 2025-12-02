import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Target, Brain, Lightbulb } from 'lucide-react'
import { useContentStore } from '../../stores/contentStore'

export default function AboutSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const { content } = useContentStore()
  const about = content.about

  const features = [
    {
      icon: Brain,
      title: 'Base Científica',
      description: 'Técnicas fundamentadas em neurociência e psicologia cognitiva.',
    },
    {
      icon: Target,
      title: 'Foco nos Resultados',
      description: 'Metodologia orientada para alcançar seus objetivos específicos.',
    },
    {
      icon: Lightbulb,
      title: 'Aprendizado Prático',
      description: 'Estratégias que você pode aplicar imediatamente nos seus estudos.',
    },
  ]

  return (
    <section id="sobre" className="py-24 relative overflow-hidden" ref={ref}>
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-dark-900 via-dark-800/50 to-dark-900" />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <span className="text-primary-400 font-semibold mb-4 block">SOBRE O GUIA</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              {about.title}
            </h2>
            <p className="text-gray-400 text-lg mb-8 leading-relaxed">
              {about.description}
            </p>

            {/* Feature List */}
            <div className="space-y-6">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                  className="flex gap-4"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-primary-500/20 to-accent-500/20 rounded-xl flex items-center justify-center flex-shrink-0 border border-primary-500/30">
                    <feature.icon className="w-6 h-6 text-primary-400" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-1">{feature.title}</h3>
                    <p className="text-gray-400 text-sm">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Visual */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative">
              {/* Main Card */}
              <div className="bg-gradient-to-br from-dark-700 to-dark-800 rounded-3xl p-8 border border-white/10 shadow-2xl">
                <div className="grid grid-cols-2 gap-4 mb-6">
                  {[
                    { emoji: '🧠', label: 'Memória Ativa' },
                    { emoji: '📚', label: 'Revisão Espaçada' },
                    { emoji: '🎯', label: 'Foco Total' },
                    { emoji: '⚡', label: 'Alta Performance' },
                  ].map((item, i) => (
                    <div
                      key={i}
                      className="bg-dark-800/50 rounded-xl p-4 border border-white/5 hover:border-primary-500/30 transition-colors"
                    >
                      <span className="text-3xl mb-2 block">{item.emoji}</span>
                      <span className="text-sm text-gray-400">{item.label}</span>
                    </div>
                  ))}
                </div>
                <div className="bg-gradient-to-r from-primary-500 to-accent-500 rounded-xl p-4">
                  <p className="text-white font-medium text-center">
                    🚀 Comece sua transformação hoje!
                  </p>
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-br from-accent-500 to-primary-500 rounded-2xl flex items-center justify-center shadow-lg shadow-accent-500/30 animate-float">
                <span className="text-4xl">📖</span>
              </div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-br from-primary-500 to-accent-500 rounded-xl flex items-center justify-center shadow-lg animate-float" style={{ animationDelay: '-2s' }}>
                <span className="text-2xl">✨</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

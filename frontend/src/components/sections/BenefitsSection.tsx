import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { CheckCircle, TrendingUp, Clock, Trophy, Star, Zap } from 'lucide-react'

export default function BenefitsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const defaultBenefits = [
    {
      icon: TrendingUp,
      title: 'Aumente sua Retenção em até 80%',
      description: 'Com técnicas de revisão espaçada e prática ativa, você retém muito mais informação por mais tempo.',
    },
    {
      icon: Clock,
      title: 'Estude Menos, Aprenda Mais',
      description: 'Otimize seu tempo de estudo com métodos eficientes e elimine horas desperdiçadas.',
    },
    {
      icon: Trophy,
      title: 'Alcance Suas Metas',
      description: 'Seja passar em concursos, vestibulares ou melhorar notas, você terá as ferramentas certas.',
    },
    {
      icon: Star,
      title: 'Confiança nos Estudos',
      description: 'Sinta-se seguro com uma metodologia comprovada que já ajudou milhares de estudantes.',
    },
    {
      icon: Zap,
      title: 'Resultados Rápidos',
      description: 'Veja melhorias já nas primeiras semanas de aplicação das técnicas.',
    },
    {
      icon: CheckCircle,
      title: 'Suporte Completo',
      description: 'Material detalhado, exemplos práticos e dicas para cada situação de estudo.',
    },
  ]

  return (
    <section id="beneficios" className="py-24 relative overflow-hidden" ref={ref}>
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-dark-900 via-dark-800 to-dark-900" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Visual */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="relative order-2 lg:order-1"
          >
            <div className="relative">
              {/* Main Visual */}
              <div className="bg-gradient-to-br from-primary-500/20 to-accent-500/20 rounded-3xl p-8 border border-primary-500/30">
                <div className="text-center mb-8">
                  <span className="text-6xl">🎓</span>
                  <h3 className="text-2xl font-bold text-white mt-4">Transformação Garantida</h3>
                </div>
                
                {/* Progress Bars */}
                <div className="space-y-4">
                  {[
                    { label: 'Memória', value: 85 },
                    { label: 'Concentração', value: 90 },
                    { label: 'Produtividade', value: 95 },
                  ].map((item, i) => (
                    <div key={i}>
                      <div className="flex justify-between text-sm mb-1">
                        <span className="text-gray-400">{item.label}</span>
                        <span className="text-primary-400">{item.value}%</span>
                      </div>
                      <div className="h-2 bg-dark-700 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={isInView ? { width: `${item.value}%` } : {}}
                          transition={{ duration: 1, delay: 0.5 + i * 0.2 }}
                          className="h-full bg-gradient-to-r from-primary-500 to-accent-500 rounded-full"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Floating Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.8 }}
                className="absolute -bottom-4 -right-4 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl px-6 py-3 shadow-lg shadow-green-500/30"
              >
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-white" />
                  <span className="text-white font-semibold">Satisfação Garantida</span>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right - Benefits List */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="order-1 lg:order-2"
          >
            <span className="text-primary-400 font-semibold mb-4 block">BENEFÍCIOS</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-8">
              Por que escolher o <span className="text-gradient">Smart Study</span>?
            </h2>

            <div className="grid gap-4">
              {defaultBenefits.map((benefit, index) => {
                const Icon = benefit.icon
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
                    className="flex gap-4 p-4 rounded-xl bg-dark-800/50 border border-white/5 hover:border-primary-500/30 transition-colors group"
                  >
                    <div className="w-10 h-10 bg-primary-500/20 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-primary-500/30 transition-colors">
                      <Icon className="w-5 h-5 text-primary-400" />
                    </div>
                    <div>
                      <h3 className="text-white font-semibold mb-1">{benefit.title}</h3>
                      <p className="text-gray-400 text-sm">{benefit.description}</p>
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

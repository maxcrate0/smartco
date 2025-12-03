import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Clock, Repeat, Brain, PenTool, MapPin, Users } from 'lucide-react'
import { Card } from '../ui'

export default function TechniquesSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const defaultTechniques = [
    {
      icon: Clock,
      title: 'Técnica Pomodoro',
      description: 'Divida seu tempo em blocos de 25 minutos de foco intenso, seguidos de pausas curtas. Aumente sua produtividade e mantenha a concentração.',
      color: 'from-red-500 to-orange-500',
    },
    {
      icon: Repeat,
      title: 'Revisão Espaçada',
      description: 'Revise o conteúdo em intervalos crescentes para consolidar a memória de longo prazo e nunca mais esquecer o que aprendeu.',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: Brain,
      title: 'Prática Ativa',
      description: 'Faça exercícios, resolva problemas e ensine o conteúdo. A prática ativa é mais eficaz que apenas ler ou assistir.',
      color: 'from-purple-500 to-pink-500',
    },
    {
      icon: PenTool,
      title: 'Anotações Eficientes',
      description: 'Use métodos como Cornell ou mapas mentais para organizar informações de forma visual e fácil de revisar.',
      color: 'from-green-500 to-teal-500',
    },
    {
      icon: MapPin,
      title: 'Palácio da Memória',
      description: 'Associe informações a locais imaginários para lembrar grandes quantidades de dados de forma surpreendente.',
      color: 'from-yellow-500 to-amber-500',
    },
    {
      icon: Users,
      title: 'Estudo em Grupo',
      description: 'Aprenda com outros estudantes, discuta conceitos e ensine para fixar ainda mais o conhecimento.',
      color: 'from-indigo-500 to-violet-500',
    },
  ]

  return (
    <section id="tecnicas" className="py-24 relative overflow-hidden" ref={ref}>
      {/* Background */}
      <div className="absolute inset-0 bg-dark-900" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(14,165,233,0.1),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(139,92,246,0.1),transparent_50%)]" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary-400 font-semibold mb-4 block">METODOLOGIA</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Técnicas que <span className="text-gradient">Transformam</span> seu Estudo
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Conheça as estratégias mais eficientes utilizadas por estudantes de alto desempenho em todo o mundo.
          </p>
        </motion.div>

        {/* Techniques Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {defaultTechniques.map((technique, index) => {
            const Icon = technique.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 * index }}
              >
                <Card hover className="h-full group">
                  <div className={`w-14 h-14 bg-gradient-to-br ${technique.color || 'from-primary-500 to-accent-500'} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{technique.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{technique.description}</p>
                </Card>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Star, Quote } from 'lucide-react'
import { useContentStore } from '../../stores/contentStore'

export default function TestimonialsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const { content } = useContentStore()

  const testimonials = content.testimonials.length > 0 ? content.testimonials : [
    {
      name: 'Maria Silva',
      role: 'Aprovada em Medicina - USP',
      content: 'O guia mudou completamente minha forma de estudar. Passei na primeira tentativa graças às técnicas de revisão espaçada!',
      avatar: '👩‍⚕️',
      rating: 5,
    },
    {
      name: 'João Santos',
      role: 'Concurseiro - Passou no TRF',
      content: 'Estudava 12 horas por dia sem resultado. Agora estudo 6 horas e rendo muito mais. As técnicas são transformadoras!',
      avatar: '👨‍💼',
      rating: 5,
    },
    {
      name: 'Ana Costa',
      role: 'Estudante de Engenharia',
      content: 'Minhas notas subiram 40% em apenas um semestre. O investimento mais valioso que fiz nos meus estudos.',
      avatar: '👩‍🎓',
      rating: 5,
    },
    {
      name: 'Pedro Lima',
      role: 'Aprovado no ENEM - 850 pontos',
      content: 'A técnica Pomodoro e os mapas mentais foram game changers. Recomendo para todos os vestibulandos!',
      avatar: '🧑‍🎓',
      rating: 5,
    },
    {
      name: 'Carla Mendes',
      role: 'Professora Universitária',
      content: 'Aplico as técnicas do guia nas minhas aulas e meus alunos têm melhorado significativamente.',
      avatar: '👩‍🏫',
      rating: 5,
    },
    {
      name: 'Lucas Oliveira',
      role: 'Estudante de Medicina',
      content: 'O palácio da memória salvou minha vida na anatomia. Decorar ficou muito mais fácil e divertido!',
      avatar: '🧑‍⚕️',
      rating: 5,
    },
  ]

  return (
    <section id="depoimentos" className="py-24 relative overflow-hidden" ref={ref}>
      {/* Background */}
      <div className="absolute inset-0 bg-dark-900" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(14,165,233,0.08),transparent_50%)]" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary-400 font-semibold mb-4 block">DEPOIMENTOS</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            O que nossos <span className="text-gradient">estudantes</span> dizem
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Veja o que estudantes têm a dizer sobre nossas técnicas de estudo.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              className="bg-dark-800/50 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:border-primary-500/30 transition-all duration-300 group"
            >
              {/* Quote Icon */}
              <Quote className="w-8 h-8 text-primary-500/30 mb-4 group-hover:text-primary-500/50 transition-colors" />
              
              {/* Content */}
              <p className="text-gray-300 mb-6 leading-relaxed">{testimonial.content}</p>
              
              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                ))}
              </div>
              
              {/* Author */}
              <div className="flex items-center gap-3">
                <span className="text-3xl">{testimonial.avatar}</span>
                <div>
                  <h4 className="text-white font-semibold">{testimonial.name}</h4>
                  <p className="text-sm text-gray-400">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 bg-gradient-to-r from-primary-500/10 to-accent-500/10 rounded-2xl border border-primary-500/20 p-8"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: 'R$ 24,70', label: 'Preço Promocional' },
              { value: '7 dias', label: 'Garantia de Reembolso' },
              { value: 'Imediato', label: 'Acesso ao Conteúdo' },
              { value: '50%', label: 'Melhora Média nas Notas' },
            ].map((stat, i) => (
              <div key={i}>
                <div className="text-2xl md:text-3xl font-bold text-gradient">{stat.value}</div>
                <div className="text-sm text-gray-400 mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

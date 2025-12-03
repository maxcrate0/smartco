import { motion } from 'framer-motion'
import { Star, Quote } from 'lucide-react'

const testimonials = [
  {
    name: 'Maria Eduarda',
    role: 'Estudante de Medicina',
    avatar: '👩‍🎓',
    content: 'Passei de 6 para 9 em biologia usando as técnicas de memorização. Parece mágica, mas é ciência!',
    rating: 5,
  },
  {
    name: 'Lucas Henrique',
    role: 'Vestibulando',
    avatar: '👨‍💻',
    content: 'Nunca consegui estudar mais de 30 min seguidos. Com o método do e-book, agora estudo 3 horas e nem vejo o tempo passar.',
    rating: 5,
  },
  {
    name: 'Ana Beatriz',
    role: 'Estudante de Direito',
    avatar: '👩‍⚖️',
    content: 'O palácio da memória mudou minha vida. Decorei 200 artigos em 2 semanas para a prova da OAB.',
    rating: 5,
  },
  {
    name: 'Pedro Augusto',
    role: 'Concurseiro',
    avatar: '📚',
    content: 'Tentei vários métodos antes. Esse foi o único que realmente funcionou. Aprovado no meu primeiro concurso!',
    rating: 5,
  },
]

const stats = [
  { value: '10.000+', label: 'Estudantes transformados' },
  { value: '4.9/5', label: 'Nota média de avaliação' },
  { value: '95%', label: 'Taxa de satisfação' },
]

export default function SocialProofSection() {
  return (
    <section className="py-20 bg-dark-900 relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-3 gap-4 md:gap-8 max-w-3xl mx-auto mb-16"
        >
          {stats.map((stat, index) => (
            <div key={index} className="text-center p-4 md:p-6 rounded-2xl bg-dark-800/50 border border-dark-700">
              <div className="text-2xl md:text-4xl font-bold text-gradient mb-2">{stat.value}</div>
              <div className="text-gray-400 text-xs md:text-sm">{stat.label}</div>
            </div>
          ))}
        </motion.div>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="text-green-400 font-semibold text-sm uppercase tracking-wider mb-4 block">
            Resultados Reais
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Veja o que estão <span className="text-gradient">falando</span>
          </h2>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative p-6 rounded-2xl bg-dark-800/50 border border-dark-700 hover:border-green-500/30 transition-colors"
            >
              {/* Quote icon */}
              <Quote className="absolute top-4 right-4 w-8 h-8 text-primary-500/20" />
              
              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                ))}
              </div>
              
              {/* Content */}
              <p className="text-gray-300 mb-6 leading-relaxed">
                "{testimonial.content}"
              </p>
              
              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center text-2xl">
                  {testimonial.avatar}
                </div>
                <div>
                  <div className="font-semibold text-white">{testimonial.name}</div>
                  <div className="text-sm text-gray-400">{testimonial.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trust badges */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <p className="text-gray-500 text-sm mb-4">Baseado em métodos cientificamente comprovados</p>
          <div className="flex flex-wrap justify-center gap-4 text-xs text-gray-400">
            <span className="px-4 py-2 rounded-full bg-dark-800 border border-dark-700">
              ✓ Técnica Pomodoro
            </span>
            <span className="px-4 py-2 rounded-full bg-dark-800 border border-dark-700">
              ✓ Repetição Espaçada
            </span>
            <span className="px-4 py-2 rounded-full bg-dark-800 border border-dark-700">
              ✓ Método Feynman
            </span>
            <span className="px-4 py-2 rounded-full bg-dark-800 border border-dark-700">
              ✓ Palácio da Memória
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

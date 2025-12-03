import { motion } from 'framer-motion'
import { AlertCircle, Clock, Brain, TrendingDown } from 'lucide-react'

const painPoints = [
  {
    icon: Clock,
    title: 'Horas estudando e nada fica na cabeça',
    description: 'Você passa horas na frente do livro, mas na hora da prova... branco total.',
  },
  {
    icon: Brain,
    title: 'Procrastinação constante',
    description: 'Você sabe que precisa estudar, mas sempre acha algo "mais importante" pra fazer.',
  },
  {
    icon: TrendingDown,
    title: 'Notas abaixo do esperado',
    description: 'Você se esforça, mas os resultados não aparecem. E a frustração só aumenta.',
  },
  {
    icon: AlertCircle,
    title: 'Ansiedade antes das provas',
    description: 'Aquele nervosismo que trava tudo. Você estudou, mas esquece na hora H.',
  },
]

export default function PainSection() {
  return (
    <section className="py-20 bg-dark-900 relative overflow-hidden">
      {/* Background effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-red-900/5 to-transparent" />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-red-400 font-semibold text-sm uppercase tracking-wider mb-4 block">
            Isso parece familiar?
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Você não é <span className="text-red-400">burro</span>.<br />
            Você só <span className="text-red-400">nunca aprendeu a estudar</span>.
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A escola ensina conteúdo, mas nunca ensinou como aprender de verdade.
            E você continua pagando o preço disso.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {painPoints.map((pain, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex gap-4 p-6 rounded-2xl bg-dark-800/50 border border-red-900/20 hover:border-red-500/30 transition-colors"
            >
              <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded-xl bg-red-500/10 flex items-center justify-center">
                  <pain.icon className="w-6 h-6 text-red-400" />
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">{pain.title}</h3>
                <p className="text-gray-400">{pain.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-12 text-xl text-gray-300"
        >
          <span className="text-white font-semibold">A boa notícia?</span> Isso tem solução.
          E é mais simples do que você imagina.
        </motion.p>
      </div>
    </section>
  )
}

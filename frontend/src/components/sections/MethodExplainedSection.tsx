import { motion } from 'framer-motion'
import { Brain, Clock, TrendingUp, Repeat, BookOpen, CheckCircle, ArrowRight, Zap } from 'lucide-react'
import { Button } from '../ui'
import { trackClick } from '../../services/api'

const PAYMENT_LINK = 'https://pay.kiwify.com.br/KGCSreQ'

export default function MethodExplainedSection() {
  const handleCTAClick = async () => {
    await trackClick('method_explained_cta')
    window.open(PAYMENT_LINK, '_blank')
  }

  return (
    <section className="py-20 bg-dark-800 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px]" />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-accent-400 font-semibold text-sm uppercase tracking-wider mb-4 block">
              A Ciência Por Trás
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Por que essas técnicas <span className="text-gradient">funcionam</span>?
            </h2>
            <p className="text-gray-400 text-lg max-w-3xl mx-auto">
              Não é mágica. São técnicas de estudo reconhecidas e testadas. Veja como cada uma 
              <strong className="text-white"> pode melhorar seu aprendizado</strong>.
            </p>
          </motion.div>

          {/* The problem vs solution */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {/* Problem */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-red-500/5 border border-red-500/20 rounded-2xl p-8"
            >
              <h3 className="text-xl font-bold text-red-400 mb-6 flex items-center gap-3">
                <Clock className="w-6 h-6" />
                Estudo Tradicional
              </h3>
              <ul className="space-y-4">
                {[
                  'Ler e reler o mesmo texto várias vezes',
                  'Estudar horas seguidas sem pausas',
                  'Grifar tudo achando que vai lembrar',
                  'Revisar só antes da prova',
                  'Decorar sem entender o conceito',
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3 text-gray-400">
                    <span className="text-red-400 mt-1">✗</span>
                    {item}
                  </li>
                ))}
              </ul>
              <div className="mt-6 p-4 bg-red-500/10 rounded-xl">
                <p className="text-red-300 text-sm">
                  <strong>Resultado:</strong> 70% do conteúdo esquecido em 24 horas (Curva do Esquecimento de Ebbinghaus)
                </p>
              </div>
            </motion.div>

            {/* Solution */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-green-500/5 border border-green-500/20 rounded-2xl p-8"
            >
              <h3 className="text-xl font-bold text-green-400 mb-6 flex items-center gap-3">
                <Brain className="w-6 h-6" />
                Método SmartCo
              </h3>
              <ul className="space-y-4">
                {[
                  'Active Recall: testar a si mesmo ativamente',
                  'Pomodoro: ciclos de foco com pausas estratégicas',
                  'Feynman: explicar para realmente entender',
                  'Repetição espaçada: revisar no momento certo',
                  'Palácio da memória: memorizar usando imagens',
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3 text-gray-300">
                    <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <div className="mt-6 p-4 bg-green-500/10 rounded-xl">
                <p className="text-green-300 text-sm">
                  <strong>Resultado:</strong> Retenção muito maior do conteúdo estudado
                </p>
              </div>
            </motion.div>
          </div>

          {/* How it multiplies */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-dark-700/30 border border-dark-600 rounded-2xl p-8 mb-12"
          >
            <h3 className="text-2xl font-bold text-white mb-6 text-center">
              Como cada técnica <span className="text-primary-400">multiplica</span> seus resultados:
            </h3>
            
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  icon: Repeat,
                  technique: 'Repetição Espaçada',
                  improvement: 'Memorização duradoura',
                  explanation: 'Revisar no momento certo ajuda a fixar o conteúdo na memória de longo prazo.',
                },
                {
                  icon: Brain,
                  technique: 'Active Recall',
                  improvement: 'Muito mais eficaz',
                  explanation: 'Testar a si mesmo é comprovadamente mais eficaz que apenas reler o conteúdo.',
                },
                {
                  icon: TrendingUp,
                  technique: 'Método Feynman',
                  improvement: 'Compreensão real',
                  explanation: 'Explicar em voz alta revela lacunas no entendimento antes da prova.',
                },
              ].map((item, index) => (
                <div key={index} className="text-center p-6 rounded-xl bg-dark-800/50 border border-dark-600">
                  <div className="w-14 h-14 rounded-full bg-primary-500/10 mx-auto mb-4 flex items-center justify-center">
                    <item.icon className="w-7 h-7 text-primary-400" />
                  </div>
                  <h4 className="font-semibold text-white mb-1">{item.technique}</h4>
                  <p className="text-green-400 font-bold text-lg mb-2">{item.improvement}</p>
                  <p className="text-gray-400 text-sm">{item.explanation}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Math explanation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <div className="inline-block bg-gradient-to-r from-primary-500/10 to-accent-500/10 border border-primary-500/20 rounded-2xl p-8">
              <p className="text-gray-300 text-lg mb-4">
                <strong className="text-white">A lógica é simples:</strong>
              </p>
              <p className="text-gray-400 mb-4">
                Quando você usa técnicas de estudo mais eficientes,
                <br />
                você <span className="text-green-400 font-bold">aprende mais</span> no mesmo tempo.
              </p>
              <p className="text-2xl font-bold text-white">
                Estude de forma <span className="text-gradient">mais inteligente</span>.
              </p>
              <p className="text-gray-500 text-sm mt-4">
                (E gaste menos tempo com métodos que não funcionam)
              </p>
            </div>
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <Button
              size="lg"
              variant="primary"
              onClick={handleCTAClick}
              className="group"
            >
              <Zap className="w-5 h-5 mr-2" />
              Quero Aprender as Técnicas
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <p className="text-gray-400 text-sm mt-4">
              Acesso imediato • Garantia de 7 dias
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

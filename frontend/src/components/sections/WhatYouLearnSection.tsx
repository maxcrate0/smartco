import { motion } from 'framer-motion'
import { CheckCircle, ArrowRight, Zap } from 'lucide-react'
import { Button } from '../ui'
import { trackClick } from '../../services/api'

const PAYMENT_LINK = 'https://pay.kiwify.com.br/KGCSreQ'

const modules = [
  {
    number: '01',
    title: 'Preparação Mental',
    items: [
      'Como eliminar a procrastinação de vez',
      'Técnica do foco de 25 minutos que funciona',
      'Mindset de alta performance para estudos',
    ],
  },
  {
    number: '02',
    title: 'Técnicas de Memorização',
    items: [
      'Método dos Loci (Palácio da Memória)',
      'Flashcards inteligentes com repetição espaçada',
      'Mapas mentais que grudam na sua cabeça',
    ],
  },
  {
    number: '03',
    title: 'Estratégias de Revisão',
    items: [
      'O ciclo perfeito de revisão (nunca mais esqueça)',
      'Técnica Feynman para entender qualquer assunto',
      'Como revisar em 10min o que levaria 1 hora',
    ],
  },
  {
    number: '04',
    title: 'Performance em Provas',
    items: [
      'Como controlar a ansiedade antes da prova',
      'Técnicas para não dar branco',
      'Gestão de tempo durante a prova',
    ],
  },
]

export default function WhatYouLearnSection() {
  const handleCTAClick = async () => {
    await trackClick('what_you_learn_cta')
    window.open(PAYMENT_LINK, '_blank')
  }

  return (
    <section className="py-20 bg-dark-800 relative overflow-hidden">
      {/* Background */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent-500/10 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary-400 font-semibold text-sm uppercase tracking-wider mb-4 block">
            Conteúdo do E-book
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            O que você vai <span className="text-gradient">aprender</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Um guia completo e direto ao ponto. Sem enrolação.
            Apenas o que funciona de verdade.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-16">
          {modules.map((module, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative p-6 rounded-2xl bg-dark-900/50 border border-dark-700 hover:border-primary-500/30 transition-all group"
            >
              {/* Module number */}
              <div className="absolute -top-4 -left-4 w-12 h-12 rounded-xl bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center shadow-lg shadow-primary-500/25">
                <span className="text-white font-bold text-sm">{module.number}</span>
              </div>
              
              <div className="ml-4">
                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-primary-400 transition-colors">
                  {module.title}
                </h3>
                <ul className="space-y-3">
                  {module.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-300">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bonus section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto p-8 rounded-2xl bg-gradient-to-r from-accent-500/10 to-primary-500/10 border border-accent-500/20 mb-12"
        >
          <div className="text-center">
            <span className="inline-block px-4 py-1 bg-accent-500/20 rounded-full text-accent-400 text-sm font-semibold mb-4">
              🎁 BÔNUS EXCLUSIVO
            </span>
            <h3 className="text-2xl font-bold text-white mb-4">
              Checklist de Estudos + Cronograma Semanal
            </h3>
            <p className="text-gray-400 mb-6">
              Templates prontos para você organizar seus estudos e nunca mais se perder.
              Valor: R$ 27 — <span className="text-green-400 font-semibold">GRÁTIS</span> hoje.
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
            className="group animate-pulse-glow text-lg px-10 py-6"
          >
            <Zap className="w-6 h-6 mr-2" />
            Quero Aprender Tudo Isso Agora
            <ArrowRight className="w-6 h-6 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
          <p className="text-gray-500 text-sm mt-4">
            Acesso imediato após a confirmação do pagamento
          </p>
        </motion.div>
      </div>
    </section>
  )
}

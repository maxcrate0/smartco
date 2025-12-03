import { motion } from 'framer-motion'
import { Shield, Clock, RefreshCw, Zap, ArrowRight, CheckCircle, Gift } from 'lucide-react'
import { Button } from '../ui'
import { trackClick } from '../../services/api'

const PAYMENT_LINK = 'https://pay.kiwify.com.br/KGCSreQ'

const guarantees = [
  {
    icon: Shield,
    title: 'Garantia de 7 dias',
    description: 'Não gostou? Devolvemos 100% do seu dinheiro. Sem perguntas.',
  },
  {
    icon: Clock,
    title: 'Acesso imediato',
    description: 'Receba o e-book no seu email assim que o pagamento for confirmado.',
  },
  {
    icon: RefreshCw,
    title: 'Atualizações grátis',
    description: 'Novas técnicas adicionadas? Você recebe automaticamente.',
  },
]

const bonuses = [
  { name: 'Checklist de Estudos Diário', value: 'R$ 17' },
  { name: 'Cronograma Semanal Editável', value: 'R$ 17' },
  { name: 'Guia Rápido Anti-Procrastinação', value: 'R$ 27' },
]

export default function FinalCTASection() {
  const handleCTAClick = async () => {
    await trackClick('final_cta')
    window.open(PAYMENT_LINK, '_blank')
  }

  return (
    <section className="py-20 bg-dark-900 relative overflow-hidden" id="comprar">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary-500/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent-500/20 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Urgency banner */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto mb-12"
        >
          <div className="bg-gradient-to-r from-red-500/20 to-orange-500/20 border border-red-500/30 rounded-2xl p-4 text-center">
            <p className="text-red-400 font-semibold">
              ⚡ OFERTA POR TEMPO LIMITADO — Preço sobe em breve
            </p>
          </div>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {/* Main card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative bg-gradient-to-b from-dark-800 to-dark-900 rounded-3xl border border-primary-500/30 overflow-hidden"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-primary-600 to-accent-600 p-6 text-center">
              <span className="inline-block px-4 py-1 bg-white/20 rounded-full text-white text-sm font-semibold mb-2">
                OFERTA ESPECIAL
              </span>
              <h2 className="text-2xl md:text-3xl font-bold text-white">
                Guia Completo de Técnicas de Estudo
              </h2>
            </div>

            {/* Content */}
            <div className="p-8 md:p-12">
              {/* What's included */}
              <div className="mb-8">
                <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  O que está incluso:
                </h3>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    E-book completo com +50 páginas
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    4 módulos de técnicas avançadas
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    Exercícios práticos
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    Acesso vitalício
                  </li>
                </ul>
              </div>

              {/* Bonuses */}
              <div className="mb-8 p-6 bg-accent-500/10 rounded-2xl border border-accent-500/20">
                <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                  <Gift className="w-5 h-5 text-accent-400" />
                  Bônus:
                </h3>
                <ul className="space-y-2">
                  {bonuses.map((bonus, index) => (
                    <li key={index} className="flex items-center justify-between">
                      <span className="text-gray-300 flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-accent-400" />
                        {bonus.name}
                      </span>
                      <span className="text-gray-500 line-through text-sm">{bonus.value}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Price */}
              <div className="text-center mb-8">
                <p className="text-gray-400 mb-2">De <span className="line-through">R$ 97</span> por apenas</p>
                <div className="flex items-center justify-center gap-2 mb-2">
                  <span className="text-4xl md:text-5xl font-bold text-white">R$</span>
                  <span className="text-6xl md:text-7xl font-bold text-gradient">24,70</span>
                </div>
                <p className="text-green-400 font-semibold">
                  Economia de mais de 74%!
                </p>
                <p className="text-gray-500 text-sm mt-2">
                  ou 3x de R$ 8,90 sem juros
                </p>
              </div>

              {/* CTA Button */}
              <div className="text-center mb-8">
                <Button
                  size="lg"
                  variant="primary"
                  onClick={handleCTAClick}
                  className="w-full md:w-auto group animate-pulse-glow text-lg px-12 py-6"
                >
                  <Zap className="w-6 h-6 mr-2" />
                  QUERO ESTUDAR MELHOR AGORA
                  <ArrowRight className="w-6 h-6 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
                <p className="text-gray-500 text-sm mt-4">
                  🔒 Pagamento totalmente seguro via Kiwify
                </p>
              </div>

              {/* Guarantees */}
              <div className="grid md:grid-cols-3 gap-4">
                {guarantees.map((item, index) => (
                  <div key={index} className="text-center p-4 rounded-xl bg-dark-800/50">
                    <item.icon className="w-8 h-8 text-primary-400 mx-auto mb-2" />
                    <h4 className="text-white font-semibold text-sm mb-1">{item.title}</h4>
                    <p className="text-gray-500 text-xs">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Final guarantee */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mt-8 text-center"
          >
            <div className="inline-flex items-center gap-3 px-6 py-4 rounded-2xl bg-green-500/10 border border-green-500/20">
              <Shield className="w-10 h-10 text-green-400" />
              <div className="text-left">
                <p className="text-white font-semibold">Garantia Incondicional de 7 Dias</p>
                <p className="text-gray-400 text-sm">
                  Se não gostar, devolvemos seu dinheiro. Sem burocracia.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

import { motion } from 'framer-motion'
import { MousePointer, CreditCard, Mail, Download, Shield, Clock, ArrowRight } from 'lucide-react'
import { Button } from '../ui'
import { trackClick } from '../../services/api'

const PAYMENT_LINK = 'https://pay.kiwify.com.br/KGCSreQ'

const steps = [
  {
    icon: MousePointer,
    step: '1',
    title: 'Clique no botão',
    description: 'Clique em "Quero Estudar Melhor" para ser redirecionado à página de pagamento segura.',
    color: 'from-sky-500 to-blue-500',
  },
  {
    icon: CreditCard,
    step: '2',
    title: 'Pagamento seguro',
    description: 'Escolha pagar por PIX, cartão ou boleto. A plataforma Kiwify garante 100% de segurança.',
    color: 'from-violet-500 to-purple-500',
  },
  {
    icon: Mail,
    step: '3',
    title: 'Receba por e-mail',
    description: 'Em segundos, você recebe o link de acesso direto no seu e-mail (verifique spam).',
    color: 'from-emerald-500 to-green-500',
  },
  {
    icon: Download,
    step: '4',
    title: 'Acesse seu e-book',
    description: 'Baixe o PDF e comece a estudar de verdade ainda hoje. Acesso vitalício!',
    color: 'from-orange-500 to-amber-500',
  },
]

export default function HowToBuySection() {
  const handleCTAClick = async () => {
    await trackClick('how_to_buy_cta')
    window.open(PAYMENT_LINK, '_blank')
  }

  return (
    <section className="py-20 bg-dark-900 relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-primary-400 font-semibold text-sm uppercase tracking-wider mb-4 block">
              Simples e Rápido
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Como funciona a <span className="text-gradient">compra</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Em menos de 2 minutos você já pode começar a transformar seus estudos
            </p>
          </motion.div>

          {/* Steps */}
          <div className="grid md:grid-cols-4 gap-6 mb-16">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative"
              >
                {/* Connector line */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-12 left-1/2 w-full h-0.5 bg-gradient-to-r from-dark-600 to-dark-700" />
                )}
                
                <div className="relative bg-dark-800/50 border border-dark-700 rounded-2xl p-6 text-center hover:border-primary-500/30 transition-colors">
                  {/* Step number */}
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${step.color} mx-auto mb-4 flex items-center justify-center shadow-lg`}>
                    <step.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  {/* Step badge */}
                  <span className="inline-block px-3 py-1 rounded-full bg-dark-700 text-gray-400 text-xs font-semibold mb-3">
                    Passo {step.step}
                  </span>
                  
                  <h3 className="text-lg font-bold text-white mb-2">{step.title}</h3>
                  <p className="text-gray-400 text-sm">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Trust elements */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-primary-500/10 to-accent-500/10 border border-primary-500/20 rounded-2xl p-8"
          >
            <div className="grid md:grid-cols-3 gap-8 mb-8">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-green-500/20 flex items-center justify-center flex-shrink-0">
                  <Shield className="w-6 h-6 text-green-400" />
                </div>
                <div>
                  <h4 className="font-semibold text-white">Pagamento Seguro</h4>
                  <p className="text-gray-400 text-sm">Via Kiwify, plataforma líder no Brasil</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-yellow-500/20 flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-yellow-400" />
                </div>
                <div>
                  <h4 className="font-semibold text-white">Acesso Imediato</h4>
                  <p className="text-gray-400 text-sm">Receba em segundos no seu e-mail</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center flex-shrink-0">
                  <Download className="w-6 h-6 text-blue-400" />
                </div>
                <div>
                  <h4 className="font-semibold text-white">Acesso Vitalício</h4>
                  <p className="text-gray-400 text-sm">Baixe quantas vezes quiser, para sempre</p>
                </div>
              </div>
            </div>

            <div className="text-center">
              <Button
                size="lg"
                variant="primary"
                onClick={handleCTAClick}
                className="group"
              >
                Quero Meu E-book Agora
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <p className="text-green-400 text-sm mt-3">
                🔒 Garantia de 7 dias ou seu dinheiro de volta
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

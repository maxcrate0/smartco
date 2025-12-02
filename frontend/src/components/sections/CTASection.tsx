import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { ArrowRight, Shield, CreditCard, Zap } from 'lucide-react'
import { Button } from '../ui'
import { useContentStore } from '../../stores/contentStore'
import { trackClick } from '../../services/api'

export default function CTASection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const { content } = useContentStore()
  const cta = content.cta

  const handleBuyClick = async () => {
    await trackClick('cta_buy')
    if (cta.ctaLink) {
      window.open(cta.ctaLink, '_blank')
    }
  }

  return (
    <section className="py-24 relative overflow-hidden" ref={ref}>
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-dark-900 via-dark-800 to-dark-900" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(14,165,233,0.15),transparent_60%)]" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          {/* Main Card */}
          <div className="bg-gradient-to-br from-dark-800 to-dark-700 rounded-3xl border border-white/10 overflow-hidden shadow-2xl">
            {/* Header */}
            <div className="bg-gradient-to-r from-primary-500 to-accent-500 p-6 text-center">
              <span className="inline-block px-4 py-1 bg-white/20 rounded-full text-sm font-medium mb-2">
                🔥 Oferta Especial por Tempo Limitado
              </span>
              <h2 className="text-2xl md:text-3xl font-bold text-white">
                {cta.title}
              </h2>
            </div>

            {/* Content */}
            <div className="p-8 md:p-12">
              <div className="text-center mb-8">
                <p className="text-gray-400 text-lg mb-6">
                  {cta.description}
                </p>
                
                {/* Price */}
                <div className="flex items-center justify-center gap-4 mb-6">
                  <span className="text-2xl text-gray-500 line-through">R$ {cta.originalPrice}</span>
                  <span className="text-5xl font-bold text-gradient">R$ {cta.price}</span>
                </div>
                <p className="text-primary-400 text-sm">Pagamento único • Acesso vitalício</p>
              </div>

              {/* Benefits */}
              <div className="grid md:grid-cols-2 gap-4 mb-8">
                {[
                  '✅ Acesso imediato ao conteúdo completo',
                  '✅ Atualizações gratuitas para sempre',
                  '✅ Suporte por e-mail exclusivo',
                  '✅ Garantia de 7 dias ou seu dinheiro de volta',
                  '✅ Bônus: Checklist de estudo diário',
                  '✅ Bônus: Templates de organização',
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-2 text-gray-300">
                    {item}
                  </div>
                ))}
              </div>

              {/* CTA Button */}
              <div className="text-center">
                <Button
                  size="lg"
                  variant="primary"
                  onClick={handleBuyClick}
                  className="w-full md:w-auto animate-pulse-glow text-lg"
                >
                  <Zap className="w-5 h-5 mr-2" />
                  {cta.ctaText}
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>

                {/* Trust Badges */}
                <div className="flex items-center justify-center gap-6 mt-6 text-sm text-gray-400">
                  <div className="flex items-center gap-2">
                    <Shield className="w-4 h-4 text-green-400" />
                    Compra Segura
                  </div>
                  <div className="flex items-center gap-2">
                    <CreditCard className="w-4 h-4 text-blue-400" />
                    Pix ou Cartão
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Urgency */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.5 }}
            className="mt-8 text-center"
          >
            <p className="text-gray-400">
              ⏰ Esta oferta pode expirar a qualquer momento. Garanta já o seu acesso!
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

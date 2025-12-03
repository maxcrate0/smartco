import { motion } from 'framer-motion'
import { ArrowRight, Sparkles, Star, Zap, Play, CheckCircle } from 'lucide-react'
import { Button } from '../ui'
import { trackClick } from '../../services/api'

const PAYMENT_LINK = 'https://pay.kiwify.com.br/KGCSreQ'

const quickBenefits = [
  'Memorize de forma mais eficiente',
  'Acabe com a procrastinação',
  'Pare de dar branco em provas',
]

export default function HeroSection() {
  const handleCTAClick = async () => {
    await trackClick('hero_cta')
    window.open(PAYMENT_LINK, '_blank')
  }

  const scrollToSection = () => {
    const element = document.getElementById('comprar')
    element?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-dark-900">
        {/* Gradient Orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-500/30 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent-500/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '-3s' }} />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-primary-500/10 to-accent-500/10 rounded-full blur-3xl" />
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:100px_100px]" />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-effect mb-8"
          >
            <Sparkles className="w-4 h-4 text-accent-400" />
            <span className="text-sm text-gray-300">Técnicas de estudo comprovadas</span>
            <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
          </motion.div>

          {/* Title - More impactful */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
          >
            <span className="text-white">Chega de estudar </span>
            <span className="text-red-400">horas</span>
            <br />
            <span className="text-white">e esquecer </span>
            <span className="text-gradient">tudo.</span>
          </motion.h1>

          {/* Subtitle - Problem + Solution */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg md:text-xl text-gray-400 mb-8 max-w-2xl mx-auto"
          >
            Descubra as <span className="text-white font-semibold">técnicas cientificamente comprovadas</span> que 
            vão fazer você aprender em <span className="text-primary-400 font-semibold">metade do tempo</span> — 
            mesmo que você ache que não consegue se concentrar.
          </motion.p>

          {/* Quick benefits */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="flex flex-wrap justify-center gap-4 mb-10"
          >
            {quickBenefits.map((benefit, index) => (
              <span key={index} className="flex items-center gap-2 text-gray-300 text-sm md:text-base">
                <CheckCircle className="w-5 h-5 text-green-400" />
                {benefit}
              </span>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8"
          >
            <Button
              size="lg"
              variant="primary"
              onClick={handleCTAClick}
              className="group animate-pulse-glow text-lg w-full sm:w-auto"
            >
              <Zap className="w-5 h-5 mr-2" />
              Quero Estudar Melhor Agora
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              onClick={scrollToSection}
              className="w-full sm:w-auto"
            >
              <Play className="w-5 h-5 mr-2" />
              Ver o que está incluso
            </Button>
          </motion.div>

          {/* Price teaser */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mb-12"
          >
            <p className="text-gray-400">
              Por apenas <span className="text-white font-bold text-2xl">R$ 24,70</span>
              <span className="text-gray-500 line-through ml-2">R$ 40</span>
            </p>
            <p className="text-green-400 text-sm mt-1">🔒 Garantia de 7 dias ou seu dinheiro de volta</p>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="grid grid-cols-3 gap-4 md:gap-8 max-w-lg mx-auto"
          >
            {[
              { value: '10K+', label: 'Estudantes' },
              { value: '7 dias', label: 'Garantia' },
              { value: 'PDF', label: 'Formato' },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-2xl md:text-4xl font-bold text-gradient mb-1">{stat.value}</div>
                <div className="text-gray-500 text-xs md:text-sm">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="w-6 h-10 rounded-full border-2 border-gray-600 flex justify-center pt-2"
        >
          <div className="w-1 h-2 bg-gray-400 rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  )
}

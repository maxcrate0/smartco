import { motion } from 'framer-motion'
import { BookOpen, CheckCircle } from 'lucide-react'

const features = [
  'Mais de 50 páginas de conteúdo prático',
  'Técnicas usadas por estudantes de elite',
  'Exercícios práticos em cada capítulo',
  'Checklists e templates inclusos',
  'Acesso vitalício + atualizações grátis',
]

export default function ProductSection() {
  return (
    <section className="py-20 bg-dark-800 relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="text-primary-400 font-semibold text-sm uppercase tracking-wider mb-4 block">
            O Produto
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Conheça o <span className="text-gradient">Guia Completo</span>
          </h2>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Mockup */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary-500/30 to-accent-500/30 blur-3xl" />
              
              {/* E-book mockup */}
              <div className="relative">
                {/* 3D Book Effect */}
                <div className="relative mx-auto w-64 md:w-80 transform perspective-1000 hover:rotate-y-6 transition-transform duration-500">
                  {/* Book cover */}
                  <div className="relative bg-gradient-to-br from-primary-600 via-primary-500 to-accent-600 rounded-lg shadow-2xl shadow-primary-500/30 overflow-hidden aspect-[3/4]">
                    {/* Spine effect */}
                    <div className="absolute left-0 top-0 bottom-0 w-4 bg-gradient-to-r from-black/30 to-transparent" />
                    
                    {/* Content */}
                    <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
                      <BookOpen className="w-16 h-16 text-white/90 mb-4" />
                      <h3 className="text-xl md:text-2xl font-bold text-white mb-2">
                        Guia de Técnicas
                      </h3>
                      <h4 className="text-lg md:text-xl font-bold text-white/90 mb-4">
                        de Estudo
                      </h4>
                      <div className="w-16 h-1 bg-white/30 rounded mb-4" />
                      <p className="text-white/70 text-sm">
                        O método definitivo para aprender mais em menos tempo
                      </p>
                    </div>
                    
                    {/* Shine effect */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent" />
                  </div>
                  
                  {/* Page edges */}
                  <div className="absolute right-0 top-2 bottom-2 w-2 bg-gray-200 rounded-r-sm transform translate-x-full">
                    <div className="h-full w-full bg-gradient-to-r from-gray-300 to-gray-100" />
                  </div>
                </div>

                {/* Floating elements */}
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ repeat: Infinity, duration: 3 }}
                  className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-br from-green-400 to-green-600 rounded-xl flex items-center justify-center shadow-lg"
                >
                  <span className="text-white font-bold text-xs text-center">PDF<br/>Instant</span>
                </motion.div>
                
                <motion.div
                  animate={{ y: [0, 10, 0] }}
                  transition={{ repeat: Infinity, duration: 3, delay: 0.5 }}
                  className="absolute -bottom-4 -left-4 w-20 h-20 bg-gradient-to-br from-accent-400 to-accent-600 rounded-xl flex items-center justify-center shadow-lg"
                >
                  <span className="text-white font-bold text-xs text-center">50+<br/>Páginas</span>
                </motion.div>
              </div>
            </motion.div>

            {/* Features */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold text-white mb-6">
                Tudo que você precisa para estudar melhor
              </h3>
              
              <ul className="space-y-4 mb-8">
                {features.map((feature, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center gap-3"
                  >
                    <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0" />
                    <span className="text-gray-300 text-lg">{feature}</span>
                  </motion.li>
                ))}
              </ul>

              {/* Format badges */}
              <div className="flex flex-wrap gap-3">
                <span className="px-4 py-2 bg-dark-700 rounded-lg text-gray-300 text-sm">
                  📱 Leia no celular
                </span>
                <span className="px-4 py-2 bg-dark-700 rounded-lg text-gray-300 text-sm">
                  💻 Leia no computador
                </span>
                <span className="px-4 py-2 bg-dark-700 rounded-lg text-gray-300 text-sm">
                  📖 Leia no tablet
                </span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

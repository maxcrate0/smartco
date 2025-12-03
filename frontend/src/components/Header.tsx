import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Menu, X, BookOpen, Sparkles, Zap } from 'lucide-react'
import { Button, cn } from './ui'
import { trackClick } from '../services/api'

const PAYMENT_LINK = 'https://pay.kiwify.com.br/KGCSreQ'

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleCTAClick = () => {
    trackClick('header_cta')
    window.open(PAYMENT_LINK, '_blank')
  }

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    element?.scrollIntoView({ behavior: 'smooth' })
    setIsMobileMenuOpen(false)
  }

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled
          ? 'bg-dark-900/95 backdrop-blur-lg border-b border-white/10 py-3'
          : 'bg-transparent py-4'
      )}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <div className="relative">
              <div className="w-9 h-9 bg-gradient-to-br from-primary-500 to-accent-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <BookOpen className="w-5 h-5 text-white" />
              </div>
              <Sparkles className="w-3 h-3 text-accent-400 absolute -top-1 -right-1 animate-pulse" />
            </div>
            <span className="text-lg font-bold text-gradient hidden sm:block">
              SmartCo
            </span>
          </Link>

          {/* Desktop - Price + CTA */}
          <div className="hidden md:flex items-center gap-6">
            <div className="text-right">
              <span className="text-gray-500 text-sm line-through">R$ 40</span>
              <span className="text-white font-bold text-lg ml-2">R$ 24,70</span>
            </div>
            <Button 
              variant="primary" 
              size="sm" 
              onClick={handleCTAClick}
              className="animate-pulse-glow"
            >
              <Zap className="w-4 h-4 mr-1" />
              Garantir Meu Acesso
            </Button>
          </div>

          {/* Mobile - CTA + Menu */}
          <div className="flex md:hidden items-center gap-2">
            <Button 
              variant="primary" 
              size="sm" 
              onClick={handleCTAClick}
              className="text-xs px-3 py-2"
            >
              <Zap className="w-3 h-3 mr-1" />
              R$ 24,70
            </Button>
            <button
              className="p-2 text-gray-300 hover:text-white transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t border-white/10 pt-4">
            <div className="flex flex-col gap-3">
              <button
                onClick={() => scrollToSection('comprar')}
                className="text-gray-300 hover:text-white transition-colors duration-200 py-2 text-left"
              >
                💰 Ver Oferta
              </button>
              <button
                onClick={() => scrollToSection('comprar')}
                className="text-gray-300 hover:text-white transition-colors duration-200 py-2 text-left"
              >
                📚 O que está incluso
              </button>
              <button
                onClick={() => scrollToSection('comprar')}
                className="text-gray-300 hover:text-white transition-colors duration-200 py-2 text-left"
              >
                ⭐ Depoimentos
              </button>
              <Button 
                variant="primary" 
                className="mt-2 w-full" 
                onClick={handleCTAClick}
              >
                <Zap className="w-4 h-4 mr-2" />
                Quero Estudar Melhor Agora
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}

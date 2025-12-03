import { Link } from 'react-router-dom'
import { BookOpen, Mail, Shield, CreditCard } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-dark-900 border-t border-white/10">
      <div className="container mx-auto px-4 md:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 bg-gradient-to-br from-primary-500 to-accent-500 rounded-xl flex items-center justify-center">
                <BookOpen className="w-5 h-5 text-white" />
              </div>
              <span className="text-lg font-bold text-gradient">SmartCo</span>
            </Link>
            <p className="text-gray-400 text-sm">
              Transforme sua forma de estudar com técnicas comprovadas cientificamente.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm">Conteúdo Gratuito</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/blog" className="text-gray-400 hover:text-primary-400 transition-colors text-sm">
                  Blog de Técnicas de Estudo
                </Link>
              </li>
              <li>
                <Link to="/blog/tecnica-pomodoro-guia-completo" className="text-gray-400 hover:text-primary-400 transition-colors text-sm">
                  Guia da Técnica Pomodoro
                </Link>
              </li>
              <li>
                <Link to="/blog/metodo-feynman-como-usar" className="text-gray-400 hover:text-primary-400 transition-colors text-sm">
                  Método Feynman
                </Link>
              </li>
            </ul>
          </div>

          {/* Trust badges */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm">Compra Segura</h4>
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-2 text-gray-400 text-sm">
                <Shield className="w-4 h-4 text-green-400" />
                Garantia de 7 dias
              </div>
              <div className="flex items-center gap-2 text-gray-400 text-sm">
                <CreditCard className="w-4 h-4 text-primary-400" />
                Pagamento via Kiwify
              </div>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm">Contato</h4>
            <a
              href="mailto:contato@smart-co.tech"
              className="text-gray-400 hover:text-primary-400 transition-colors flex items-center gap-2 text-sm mb-4"
            >
              <Mail className="w-4 h-4" />
              contato@smart-co.tech
            </a>
            <ul className="space-y-2">
              <li>
                <Link to="/privacidade" className="text-gray-400 hover:text-primary-400 transition-colors text-sm">
                  Política de Privacidade
                </Link>
              </li>
              <li>
                <Link to="/termos" className="text-gray-400 hover:text-primary-400 transition-colors text-sm">
                  Termos de Uso
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-xs">
            © {currentYear} SmartCo. Todos os direitos reservados.
          </p>
          <p className="text-gray-500 text-xs text-center md:text-right max-w-md">
            Este produto não garante a obtenção de resultados. Qualquer referência ao desempenho de uma estratégia não deve ser interpretada como uma garantia de resultados.
          </p>
        </div>
      </div>
    </footer>
  )
}

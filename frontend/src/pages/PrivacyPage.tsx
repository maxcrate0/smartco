import { useEffect } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowLeft, Shield } from 'lucide-react'

export default function PrivacyPage() {
  useEffect(() => {
    const script = document.createElement('script')
    script.type = 'application/ld+json'
    script.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "Política de Privacidade - SmartCo",
      "description": "Política de privacidade do SmartCo. Saiba como coletamos, usamos e protegemos seus dados.",
      "url": "https://smart-co.tech/privacidade",
      "publisher": {
        "@type": "Organization",
        "name": "SmartCo"
      }
    })
    document.head.appendChild(script)
    return () => { document.head.removeChild(script) }
  }, [])

  return (
    <div className="min-h-screen bg-dark-900 pt-24 pb-16">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="max-w-3xl mx-auto mb-8"
        >
          <Link to="/" className="inline-flex items-center text-gray-400 hover:text-primary-400 transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Voltar para a página inicial
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-3xl mx-auto"
        >
          <div className="flex items-center gap-4 mb-8">
            <Shield className="w-10 h-10 text-primary-400" />
            <h1 className="text-3xl md:text-4xl font-bold text-white">
              Política de Privacidade
            </h1>
          </div>

          <div className="prose prose-invert prose-lg">
            <p className="text-gray-400 text-sm mb-8">
              Última atualização: 03 de dezembro de 2025
            </p>

            <div className="text-gray-300 space-y-6">
              <section>
                <h2 className="text-xl font-bold text-white mt-8 mb-4">1. Introdução</h2>
                <p>
                  A SmartCo ("nós", "nosso" ou "empresa") está comprometida em proteger sua privacidade. 
                  Esta Política de Privacidade explica como coletamos, usamos e protegemos suas informações 
                  pessoais quando você visita nosso site smart-co.tech.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-white mt-8 mb-4">2. Informações que Coletamos</h2>
                <p>Podemos coletar os seguintes tipos de informações:</p>
                <ul className="list-disc pl-6 space-y-2 mt-4">
                  <li><strong className="text-white">Informações de navegação:</strong> páginas visitadas, 
                  tempo no site, cliques em botões</li>
                  <li><strong className="text-white">Informações do dispositivo:</strong> tipo de navegador, 
                  sistema operacional, endereço IP</li>
                  <li><strong className="text-white">Informações de contato:</strong> e-mail, caso você 
                  entre em contato conosco</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-bold text-white mt-8 mb-4">3. Como Usamos suas Informações</h2>
                <p>Utilizamos as informações coletadas para:</p>
                <ul className="list-disc pl-6 space-y-2 mt-4">
                  <li>Melhorar a experiência do usuário em nosso site</li>
                  <li>Analisar o desempenho e uso do site</li>
                  <li>Responder a solicitações e perguntas</li>
                  <li>Enviar comunicações relevantes (apenas se você autorizar)</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-bold text-white mt-8 mb-4">4. Processamento de Pagamentos</h2>
                <p>
                  Os pagamentos são processados pela plataforma Kiwify. Não armazenamos informações 
                  de cartão de crédito ou dados bancários em nossos servidores. Para mais informações, 
                  consulte a <a href="https://kiwify.com.br/politica-de-privacidade" target="_blank" 
                  rel="noopener noreferrer" className="text-primary-400 hover:underline">
                  Política de Privacidade da Kiwify</a>.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-white mt-8 mb-4">5. Cookies</h2>
                <p>
                  Utilizamos cookies para melhorar sua experiência. Cookies são pequenos arquivos 
                  de texto armazenados em seu navegador. Você pode configurar seu navegador para 
                  recusar cookies, mas isso pode afetar a funcionalidade do site.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-white mt-8 mb-4">6. Compartilhamento de Dados</h2>
                <p>
                  Não vendemos, alugamos ou compartilhamos suas informações pessoais com terceiros, 
                  exceto quando necessário para:
                </p>
                <ul className="list-disc pl-6 space-y-2 mt-4">
                  <li>Processar pagamentos (Kiwify)</li>
                  <li>Cumprir obrigações legais</li>
                  <li>Proteger nossos direitos e segurança</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-bold text-white mt-8 mb-4">7. Segurança</h2>
                <p>
                  Implementamos medidas de segurança técnicas e organizacionais para proteger suas 
                  informações contra acesso não autorizado, alteração, divulgação ou destruição.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-white mt-8 mb-4">8. Seus Direitos (LGPD)</h2>
                <p>De acordo com a Lei Geral de Proteção de Dados (LGPD), você tem direito a:</p>
                <ul className="list-disc pl-6 space-y-2 mt-4">
                  <li>Acessar seus dados pessoais</li>
                  <li>Corrigir dados incompletos ou inexatos</li>
                  <li>Solicitar a exclusão de seus dados</li>
                  <li>Revogar consentimento a qualquer momento</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-bold text-white mt-8 mb-4">9. Contato</h2>
                <p>
                  Para questões sobre esta Política de Privacidade ou para exercer seus direitos, 
                  entre em contato:
                </p>
                <p className="mt-4">
                  <strong className="text-white">E-mail:</strong>{' '}
                  <a href="mailto:contato@smart-co.tech" className="text-primary-400 hover:underline">
                    contato@smart-co.tech
                  </a>
                </p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-white mt-8 mb-4">10. Alterações</h2>
                <p>
                  Podemos atualizar esta Política de Privacidade periodicamente. Recomendamos que 
                  você revise esta página regularmente para se manter informado sobre nossas práticas.
                </p>
              </section>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

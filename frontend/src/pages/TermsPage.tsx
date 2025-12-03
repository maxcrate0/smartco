import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowLeft, FileText } from 'lucide-react'

export default function TermsPage() {
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
            <FileText className="w-10 h-10 text-primary-400" />
            <h1 className="text-3xl md:text-4xl font-bold text-white">
              Termos de Uso
            </h1>
          </div>

          <div className="prose prose-invert prose-lg">
            <p className="text-gray-400 text-sm mb-8">
              Última atualização: 03 de dezembro de 2025
            </p>

            <div className="text-gray-300 space-y-6">
              <section>
                <h2 className="text-xl font-bold text-white mt-8 mb-4">1. Aceitação dos Termos</h2>
                <p>
                  Ao acessar e usar o site smart-co.tech e adquirir nossos produtos, você concorda 
                  em cumprir estes Termos de Uso. Se você não concordar com qualquer parte destes 
                  termos, não utilize nosso site ou serviços.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-white mt-8 mb-4">2. Descrição do Produto</h2>
                <p>
                  O "Guia de Técnicas de Estudo" é um produto digital (e-book) em formato PDF que 
                  contém técnicas e estratégias de estudo. O produto é entregue digitalmente após 
                  a confirmação do pagamento.
                </p>
                <p className="mt-4">
                  <strong className="text-white">Importante:</strong> Este produto é informativo e 
                  educacional. Os resultados podem variar de acordo com a dedicação e aplicação 
                  individual de cada usuário.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-white mt-8 mb-4">3. Pagamento e Entrega</h2>
                <p>
                  Os pagamentos são processados pela plataforma Kiwify, que oferece diversas formas 
                  de pagamento (cartão de crédito, PIX, boleto). Após a confirmação do pagamento:
                </p>
                <ul className="list-disc pl-6 space-y-2 mt-4">
                  <li>Você receberá um e-mail com o link de acesso ao produto</li>
                  <li>O acesso é imediato para pagamentos via PIX e cartão</li>
                  <li>Pagamentos via boleto podem levar até 3 dias úteis para compensar</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-bold text-white mt-8 mb-4">4. Garantia e Reembolso</h2>
                <p>
                  Oferecemos <strong className="text-white">garantia incondicional de 7 dias</strong>. 
                  Se você não estiver satisfeito com o produto por qualquer motivo, pode solicitar 
                  o reembolso integral dentro deste prazo.
                </p>
                <p className="mt-4">
                  Para solicitar reembolso, entre em contato pelo e-mail contato@smart-co.tech ou 
                  diretamente pela plataforma Kiwify.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-white mt-8 mb-4">5. Propriedade Intelectual</h2>
                <p>
                  Todo o conteúdo do site e do e-book, incluindo textos, imagens, design e marca, 
                  são de propriedade da SmartCo e protegidos por leis de direitos autorais.
                </p>
                <p className="mt-4">
                  <strong className="text-white">É expressamente proibido:</strong>
                </p>
                <ul className="list-disc pl-6 space-y-2 mt-4">
                  <li>Reproduzir, distribuir ou compartilhar o e-book com terceiros</li>
                  <li>Revender ou comercializar o produto</li>
                  <li>Modificar ou criar obras derivadas do conteúdo</li>
                  <li>Usar o conteúdo para fins comerciais sem autorização</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-bold text-white mt-8 mb-4">6. Uso Permitido</h2>
                <p>
                  Ao adquirir o produto, você recebe uma licença pessoal e intransferível para:
                </p>
                <ul className="list-disc pl-6 space-y-2 mt-4">
                  <li>Acessar e ler o e-book em seus dispositivos pessoais</li>
                  <li>Imprimir cópias para uso pessoal</li>
                  <li>Usar as técnicas aprendidas em seus estudos</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-bold text-white mt-8 mb-4">7. Limitação de Responsabilidade</h2>
                <p>
                  A SmartCo não garante resultados específicos com o uso do produto. O sucesso 
                  depende da aplicação individual das técnicas ensinadas.
                </p>
                <p className="mt-4">
                  Não nos responsabilizamos por:
                </p>
                <ul className="list-disc pl-6 space-y-2 mt-4">
                  <li>Resultados acadêmicos ou profissionais específicos</li>
                  <li>Problemas técnicos no dispositivo do usuário</li>
                  <li>Uso indevido das informações do produto</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-bold text-white mt-8 mb-4">8. Isenção de Responsabilidade Médica</h2>
                <p>
                  O conteúdo do e-book é puramente educacional e não substitui aconselhamento 
                  médico ou psicológico profissional. Se você tiver problemas de saúde mental, 
                  ansiedade ou dificuldades de aprendizagem, consulte um profissional qualificado.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-white mt-8 mb-4">9. Modificações nos Termos</h2>
                <p>
                  Reservamo-nos o direito de modificar estes termos a qualquer momento. As alterações 
                  entram em vigor imediatamente após a publicação no site. O uso continuado do site 
                  após mudanças constitui aceitação dos novos termos.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-white mt-8 mb-4">10. Lei Aplicável</h2>
                <p>
                  Estes termos são regidos pelas leis da República Federativa do Brasil. Qualquer 
                  disputa será resolvida nos tribunais competentes do Brasil.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-white mt-8 mb-4">11. Contato</h2>
                <p>
                  Para dúvidas sobre estes Termos de Uso, entre em contato:
                </p>
                <p className="mt-4">
                  <strong className="text-white">E-mail:</strong>{' '}
                  <a href="mailto:contato@smart-co.tech" className="text-primary-400 hover:underline">
                    contato@smart-co.tech
                  </a>
                </p>
              </section>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

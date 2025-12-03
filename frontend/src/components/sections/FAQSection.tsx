import { motion } from 'framer-motion'
import { useState } from 'react'
import { ChevronDown, MessageCircle } from 'lucide-react'

const faqs = [
  {
    question: 'Esse método funciona para qualquer pessoa?',
    answer: 'Sim! As técnicas são baseadas em neurociência e funcionam para qualquer pessoa que queira melhorar sua capacidade de aprendizado. Não importa sua idade ou área de estudo.',
  },
  {
    question: 'Em quanto tempo vou ver resultados?',
    answer: 'A maioria dos estudantes nota diferença já na primeira semana aplicando as técnicas. Resultados mais significativos aparecem em 2-4 semanas de prática consistente.',
  },
  {
    question: 'O e-book funciona para concursos e vestibulares?',
    answer: 'Com certeza! As técnicas são especialmente úteis para quem precisa memorizar grande quantidade de conteúdo e manter o foco durante longos períodos de estudo.',
  },
  {
    question: 'Como recebo o e-book?',
    answer: 'Após a confirmação do pagamento, você recebe automaticamente o link de acesso no seu e-mail. O acesso é imediato e vitalício.',
  },
  {
    question: 'E se eu não gostar?',
    answer: 'Você tem 7 dias de garantia incondicional. Se não gostar ou achar que não é para você, basta solicitar o reembolso que devolvemos 100% do valor. Sem perguntas.',
  },
  {
    question: 'Posso acessar pelo celular?',
    answer: 'Sim! O e-book é em formato PDF e pode ser lido em qualquer dispositivo: celular, tablet, computador ou até impresso.',
  },
]

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

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
            Dúvidas Frequentes
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Perguntas <span className="text-gradient">Respondidas</span>
          </h2>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="mb-4"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className={`w-full text-left p-6 rounded-2xl transition-all ${
                  openIndex === index
                    ? 'bg-primary-500/10 border border-primary-500/30'
                    : 'bg-dark-900/50 border border-dark-700 hover:border-gray-600'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="font-semibold text-white pr-4">{faq.question}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-gray-400 transition-transform flex-shrink-0 ${
                      openIndex === index ? 'rotate-180' : ''
                    }`}
                  />
                </div>
                {openIndex === index && (
                  <motion.p
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    className="text-gray-400 mt-4 leading-relaxed"
                  >
                    {faq.answer}
                  </motion.p>
                )}
              </button>
            </motion.div>
          ))}
        </div>

        {/* Contact */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="text-gray-400 flex items-center justify-center gap-2">
            <MessageCircle className="w-5 h-5" />
            Ainda tem dúvidas? Entre em contato: 
            <a href="mailto:contato@jgsp.me" className="text-primary-400 hover:underline">
              contato@jgsp.me
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  )
}

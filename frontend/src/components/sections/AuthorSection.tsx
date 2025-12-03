import { motion } from 'framer-motion'
import { BookOpen, Award, Users, Target, Lightbulb, GraduationCap } from 'lucide-react'

export default function AuthorSection() {
  return (
    <section className="py-20 bg-dark-800 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-accent-500/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="text-primary-400 font-semibold text-sm uppercase tracking-wider mb-4 block">
              Sobre o Criador
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Por que você pode <span className="text-gradient">confiar</span> neste método?
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left side - Story */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center text-4xl">
                  👨‍🎓
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">SmartCo</h3>
                  <p className="text-primary-400">Especialistas em Aprendizado</p>
                </div>
              </div>

              <p className="text-gray-300 leading-relaxed">
                A SmartCo nasceu de uma frustração real: <strong className="text-white">estudar muito e não conseguir resultados</strong>. 
                Depois de anos pesquisando neurociência e técnicas de aprendizado comprovadas, compilamos tudo o que funciona 
                de verdade em um único guia.
              </p>

              <p className="text-gray-300 leading-relaxed">
                Este não é mais um e-book genérico. São <strong className="text-white">técnicas usadas por medalhistas 
                olímpicos de conhecimento, aprovados em medicina e concursos federais</strong>. Nós testamos, aplicamos 
                e simplificamos para qualquer pessoa conseguir usar.
              </p>

              <div className="bg-dark-700/50 rounded-xl p-6 border border-dark-600">
                <p className="text-gray-400 italic mb-4">
                  "Nossa missão é acabar com o estudo ineficiente. Não é sobre estudar mais — é sobre estudar certo."
                </p>
                <p className="text-primary-400 font-semibold text-sm">— Equipe SmartCo</p>
              </div>
            </motion.div>

            {/* Right side - Credentials */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <h4 className="text-lg font-semibold text-white mb-6">O que nos qualifica:</h4>

              <div className="space-y-4">
                {[
                  {
                    icon: BookOpen,
                    title: 'Pesquisa Científica',
                    description: 'Baseado em mais de 100 estudos de neurociência e psicologia cognitiva',
                  },
                  {
                    icon: Users,
                    title: '+10.000 Estudantes',
                    description: 'Método já testado e aprovado por milhares de pessoas reais',
                  },
                  {
                    icon: Award,
                    title: '95% de Satisfação',
                    description: 'Taxa de aprovação baseada em avaliações verificadas',
                  },
                  {
                    icon: Target,
                    title: 'Resultados Comprovados',
                    description: 'Alunos relatam melhora de 40-70% na retenção de conteúdo',
                  },
                  {
                    icon: Lightbulb,
                    title: 'Técnicas Validadas',
                    description: 'Pomodoro, Feynman, Active Recall, Repetição Espaçada e mais',
                  },
                  {
                    icon: GraduationCap,
                    title: 'Para Todos os Níveis',
                    description: 'Do ensino médio a concursos públicos e pós-graduação',
                  },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex gap-4 p-4 rounded-xl bg-dark-700/30 border border-dark-600 hover:border-primary-500/30 transition-colors"
                  >
                    <div className="w-12 h-12 rounded-lg bg-primary-500/10 flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-6 h-6 text-primary-400" />
                    </div>
                    <div>
                      <h5 className="font-semibold text-white mb-1">{item.title}</h5>
                      <p className="text-gray-400 text-sm">{item.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

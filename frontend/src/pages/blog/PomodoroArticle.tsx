import { useEffect } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Clock, ArrowLeft, ArrowRight, CheckCircle, Zap, BookOpen, Share2, Timer } from 'lucide-react'
import { Button } from '../../components/ui'
import { trackClick } from '../../services/api'

const PAYMENT_LINK = 'https://pay.kiwify.com.br/KGCSreQ'

export default function PomodoroArticle() {
  useEffect(() => {
    const script = document.createElement('script')
    script.type = 'application/ld+json'
    script.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": "Técnica Pomodoro: Guia Completo para Estudar com Foco Total",
      "description": "Aprenda como usar a técnica Pomodoro para aumentar sua concentração, eliminar distrações e estudar de forma mais eficiente.",
      "image": "https://smart-co.tech/og-image.png",
      "author": {
        "@type": "Organization",
        "name": "SmartCo",
        "url": "https://smart-co.tech"
      },
      "publisher": {
        "@type": "Organization",
        "name": "SmartCo",
        "logo": {
          "@type": "ImageObject",
          "url": "https://smart-co.tech/favicon.svg"
        }
      },
      "datePublished": "2024-12-01",
      "dateModified": "2024-12-01",
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": "https://smart-co.tech/blog/tecnica-pomodoro"
      }
    })
    document.head.appendChild(script)
    return () => { document.head.removeChild(script) }
  }, [])
  const handleCTAClick = async () => {
    await trackClick('blog_pomodoro_cta')
    window.open(PAYMENT_LINK, '_blank')
  }

  return (
    <div className="min-h-screen bg-dark-900 pt-24 pb-16">
      <article className="container mx-auto px-4 md:px-6">
        {/* Breadcrumb */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="max-w-3xl mx-auto mb-8"
        >
          <Link to="/blog" className="inline-flex items-center text-gray-400 hover:text-primary-400 transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Voltar para o Blog
          </Link>
        </motion.div>

        {/* Header */}
        <motion.header
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-3xl mx-auto text-center mb-12"
        >
          <div className="flex items-center justify-center gap-4 text-sm text-gray-500 mb-6">
            <span className="px-3 py-1 bg-primary-500/10 text-primary-400 rounded-full">
              Produtividade
            </span>
            <span className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              8 min de leitura
            </span>
          </div>
          
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
            Técnica Pomodoro: Guia Completo para Estudar com <span className="text-gradient">Foco Total</span>
          </h1>
          
          <p className="text-xl text-gray-400">
            Aprenda como usar a técnica Pomodoro para aumentar sua concentração, 
            eliminar distrações e estudar de forma mais eficiente.
          </p>
        </motion.header>

        {/* Featured Image */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="max-w-4xl mx-auto mb-12"
        >
          <div className="aspect-video bg-gradient-to-br from-red-500/20 to-orange-500/20 rounded-2xl flex items-center justify-center">
            <Timer className="w-32 h-32 text-red-400" />
          </div>
        </motion.div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="max-w-3xl mx-auto prose prose-invert prose-lg"
        >
          {/* Intro */}
          <div className="text-gray-300 space-y-6">
            <p className="text-xl leading-relaxed">
              Você já passou horas "estudando" e, no final, percebeu que não absorveu quase nada? 
              Você não está sozinho. A <strong className="text-white">Técnica Pomodoro</strong> é 
              a solução usada por estudantes para manter o foco e estudar de verdade.
            </p>

            <p>
              Criada pelo italiano Francesco Cirillo nos anos 80, essa técnica simples mas poderosa 
              já ajudou milhões de pessoas a aumentarem sua produtividade. O nome vem do timer de 
              cozinha em formato de tomate (pomodoro em italiano) que Cirillo usava.
            </p>

            {/* Table of Contents */}
            <div className="p-6 bg-dark-800/50 rounded-xl border border-dark-700 my-8">
              <h2 className="text-white font-bold text-lg mb-4 mt-0">📋 Neste artigo você vai aprender:</h2>
              <ul className="space-y-2 list-none pl-0 mb-0">
                <li className="flex items-center gap-2 text-gray-300">
                  <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                  O que é a Técnica Pomodoro e como funciona
                </li>
                <li className="flex items-center gap-2 text-gray-300">
                  <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                  Passo a passo para aplicar nos seus estudos
                </li>
                <li className="flex items-center gap-2 text-gray-300">
                  <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                  Erros comuns e como evitá-los
                </li>
                <li className="flex items-center gap-2 text-gray-300">
                  <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                  Apps e ferramentas recomendadas
                </li>
                <li className="flex items-center gap-2 text-gray-300">
                  <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                  Como adaptar para concursos e vestibulares
                </li>
              </ul>
            </div>

            <h2 className="text-2xl font-bold text-white mt-12 mb-6">O que é a Técnica Pomodoro?</h2>
            
            <p>
              A Técnica Pomodoro é um método de gerenciamento de tempo que divide seu trabalho em 
              blocos de <strong className="text-primary-400">25 minutos de foco intenso</strong>, 
              chamados de "pomodoros", seguidos por pausas curtas de 5 minutos.
            </p>

            <p>
              A ideia central é simples: nosso cérebro funciona melhor em sprints curtos e focados 
              do que em maratonas de estudo. Ao invés de tentar estudar 4 horas seguidas (e acabar 
              distraído na metade), você divide esse tempo em blocos gerenciáveis.
            </p>

            <h2 className="text-2xl font-bold text-white mt-12 mb-6">Por que a Técnica Pomodoro Funciona?</h2>

            <p>
              A ciência por trás do Pomodoro está relacionada a como nosso cérebro processa informações:
            </p>

            <ul className="space-y-3 my-6">
              <li className="flex items-start gap-3">
                <span className="text-primary-400 font-bold">1.</span>
                <span><strong className="text-white">Combate a procrastinação:</strong> É muito mais fácil 
                se comprometer com "apenas 25 minutos" do que com "vou estudar a tarde toda".</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary-400 font-bold">2.</span>
                <span><strong className="text-white">Mantém o foco:</strong> Saber que há um limite de tempo 
                cria urgência e reduz a tendência de se distrair.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary-400 font-bold">3.</span>
                <span><strong className="text-white">Previne a fadiga mental:</strong> As pausas regulares 
                permitem que seu cérebro descanse e consolide o aprendizado.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary-400 font-bold">4.</span>
                <span><strong className="text-white">Melhora a metacognição:</strong> Você começa a entender 
                quanto tempo leva para estudar cada matéria.</span>
              </li>
            </ul>

            <h2 className="text-2xl font-bold text-white mt-12 mb-6">Como Usar a Técnica Pomodoro: Passo a Passo</h2>

            <div className="space-y-6 my-8">
              <div className="p-6 bg-dark-800/50 rounded-xl border-l-4 border-primary-500">
                <h3 className="text-white font-bold text-lg mb-2">Passo 1: Escolha a tarefa</h3>
                <p className="text-gray-300 mb-0">
                  Defina exatamente o que você vai estudar. Por exemplo: "Resolver 10 questões de 
                  matemática" ou "Ler o capítulo 3 de biologia".
                </p>
              </div>

              <div className="p-6 bg-dark-800/50 rounded-xl border-l-4 border-primary-500">
                <h3 className="text-white font-bold text-lg mb-2">Passo 2: Configure o timer para 25 minutos</h3>
                <p className="text-gray-300 mb-0">
                  Use um timer de celular, app específico ou até um timer de cozinha. O importante 
                  é ter um alarme que avise quando o tempo acabar.
                </p>
              </div>

              <div className="p-6 bg-dark-800/50 rounded-xl border-l-4 border-primary-500">
                <h3 className="text-white font-bold text-lg mb-2">Passo 3: Foque 100% na tarefa</h3>
                <p className="text-gray-300 mb-0">
                  Durante os 25 minutos, NADA de celular, redes sociais ou conversas. Se surgir 
                  uma distração, anote em um papel e volte ao estudo.
                </p>
              </div>

              <div className="p-6 bg-dark-800/50 rounded-xl border-l-4 border-primary-500">
                <h3 className="text-white font-bold text-lg mb-2">Passo 4: Faça uma pausa de 5 minutos</h3>
                <p className="text-gray-300 mb-0">
                  Quando o timer tocar, pare imediatamente. Levante, beba água, alongue-se. 
                  Essa pausa é sagrada e não negociável.
                </p>
              </div>

              <div className="p-6 bg-dark-800/50 rounded-xl border-l-4 border-primary-500">
                <h3 className="text-white font-bold text-lg mb-2">Passo 5: A cada 4 pomodoros, pausa longa</h3>
                <p className="text-gray-300 mb-0">
                  Depois de completar 4 ciclos (cerca de 2 horas), faça uma pausa maior de 15-30 
                  minutos. Seu cérebro precisa desse descanso mais longo.
                </p>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-white mt-12 mb-6">Erros Comuns ao Usar o Pomodoro</h2>

            <div className="space-y-4 my-6">
              <div className="p-4 bg-red-500/10 rounded-xl border border-red-500/20">
                <p className="text-red-400 font-semibold mb-1">❌ Pular as pausas</p>
                <p className="text-gray-400 text-sm mb-0">As pausas são parte essencial do método. Sem elas, você vai cansar mais rápido.</p>
              </div>
              
              <div className="p-4 bg-red-500/10 rounded-xl border border-red-500/20">
                <p className="text-red-400 font-semibold mb-1">❌ Checar o celular "rapidinho"</p>
                <p className="text-gray-400 text-sm mb-0">Uma olhadinha se transforma em 20 minutos de distração. Deixe o celular longe.</p>
              </div>
              
              <div className="p-4 bg-red-500/10 rounded-xl border border-red-500/20">
                <p className="text-red-400 font-semibold mb-1">❌ Não definir a tarefa antes</p>
                <p className="text-gray-400 text-sm mb-0">Começar sem saber o que estudar desperdiça os primeiros minutos do pomodoro.</p>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-white mt-12 mb-6">Apps para Usar a Técnica Pomodoro</h2>

            <p>Existem vários apps gratuitos excelentes para praticar o Pomodoro:</p>

            <ul className="space-y-2 my-6">
              <li><strong className="text-white">Forest:</strong> Planta uma árvore virtual enquanto você foca. Se mexer no celular, a árvore morre.</li>
              <li><strong className="text-white">Pomodoro Timer:</strong> Simples e direto ao ponto. Disponível para Android e iOS.</li>
              <li><strong className="text-white">Focus To-Do:</strong> Combina Pomodoro com lista de tarefas.</li>
              <li><strong className="text-white">Pomofocus.io:</strong> Versão web gratuita, funciona no navegador.</li>
            </ul>

            <h2 className="text-2xl font-bold text-white mt-12 mb-6">Pomodoro para Concursos e Vestibulares</h2>

            <p>
              Para quem está estudando para provas longas, o Pomodoro pode ser adaptado:
            </p>

            <ul className="space-y-3 my-6">
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-1" />
                <span>Use pomodoros de <strong className="text-white">50 minutos</strong> para simular o tempo de prova</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-1" />
                <span>Agrupe matérias por afinidade: Humanas em um bloco, Exatas em outro</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-1" />
                <span>Use as pausas para revisar flashcards do pomodoro anterior</span>
              </li>
            </ul>

            <h2 className="text-2xl font-bold text-white mt-12 mb-6">Conclusão</h2>

            <p>
              A Técnica Pomodoro é uma das formas mais eficazes de combater a procrastinação e 
              aumentar o foco nos estudos. Comece hoje mesmo: configure um timer de 25 minutos 
              e experimente. Você vai se surpreender com quanto consegue produzir.
            </p>

            <p>
              Lembre-se: a técnica funciona melhor quando combinada com outras estratégias de 
              aprendizado, como Active Recall e Repetição Espaçada.
            </p>
          </div>

          {/* CTA Box */}
          <div className="my-12 p-8 bg-gradient-to-r from-primary-500/10 to-accent-500/10 rounded-2xl border border-primary-500/20 text-center">
            <BookOpen className="w-12 h-12 text-primary-400 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-white mb-4">
              Quer dominar TODAS as técnicas de estudo?
            </h3>
            <p className="text-gray-400 mb-6 max-w-lg mx-auto">
              O Pomodoro é apenas uma das 15+ técnicas do nosso e-book. Aprenda também 
              Active Recall, Método Feynman, Palácio da Memória e muito mais.
            </p>
            <Button
              variant="primary"
              size="lg"
              onClick={handleCTAClick}
              className="group animate-pulse-glow"
            >
              <Zap className="w-5 h-5 mr-2" />
              Quero o E-book Completo — R$ 24,70
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <p className="text-gray-500 text-sm mt-4">
              Garantia de 7 dias | Acesso imediato
            </p>
          </div>

          {/* Related Articles */}
          <div className="mt-12 pt-8 border-t border-dark-700">
            <h3 className="text-xl font-bold text-white mb-6">Continue aprendendo:</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <Link to="/blog/metodo-feynman-como-usar" className="p-4 bg-dark-800/50 rounded-xl border border-dark-700 hover:border-primary-500/30 transition-colors group">
                <span className="text-2xl mb-2 block">🧠</span>
                <h4 className="text-white font-semibold group-hover:text-primary-400 transition-colors">
                  Método Feynman: Como Aprender Qualquer Coisa
                </h4>
              </Link>
              <Link to="/blog/active-recall-repeticao-espacada" className="p-4 bg-dark-800/50 rounded-xl border border-dark-700 hover:border-primary-500/30 transition-colors group">
                <span className="text-2xl mb-2 block">🎯</span>
                <h4 className="text-white font-semibold group-hover:text-primary-400 transition-colors">
                  Active Recall e Repetição Espaçada
                </h4>
              </Link>
            </div>
          </div>
        </motion.div>
      </article>
    </div>
  )
}

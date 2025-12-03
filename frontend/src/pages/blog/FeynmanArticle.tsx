import { useEffect } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Clock, ArrowLeft, ArrowRight, CheckCircle, Zap, BookOpen, Brain } from 'lucide-react'
import { Button } from '../../components/ui'
import { trackClick } from '../../services/api'

const PAYMENT_LINK = 'https://pay.kiwify.com.br/KGCSreQ'

export default function FeynmanArticle() {
  useEffect(() => {
    const script = document.createElement('script')
    script.type = 'application/ld+json'
    script.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": "Método Feynman: Como Aprender Qualquer Coisa em 4 Passos",
      "description": "Descubra a técnica do gênio da física Richard Feynman para entender conceitos complexos de forma simples e nunca mais esquecer o que estudou.",
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
        "@id": "https://smart-co.tech/blog/metodo-feynman"
      }
    })
    document.head.appendChild(script)
    return () => { document.head.removeChild(script) }
  }, [])
  const handleCTAClick = async () => {
    await trackClick('blog_feynman_cta')
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
              Memorização
            </span>
            <span className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              10 min de leitura
            </span>
          </div>
          
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
            Método Feynman: Como Aprender <span className="text-gradient">Qualquer Coisa</span> em 4 Passos
          </h1>
          
          <p className="text-xl text-gray-400">
            Descubra a técnica do gênio da física Richard Feynman para entender conceitos complexos 
            de forma simples e nunca mais esquecer o que estudou.
          </p>
        </motion.header>

        {/* Featured Image */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="max-w-4xl mx-auto mb-12"
        >
          <div className="aspect-video bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-2xl flex items-center justify-center">
            <Brain className="w-32 h-32 text-purple-400" />
          </div>
        </motion.div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="max-w-3xl mx-auto prose prose-invert prose-lg"
        >
          <div className="text-gray-300 space-y-6">
            <p className="text-xl leading-relaxed">
              Você já leu um conteúdo inteiro, achou que entendeu tudo, mas na hora de explicar... 
              travou? Isso acontece porque <strong className="text-white">memorizar não é entender</strong>. 
              O Método Feynman resolve exatamente isso.
            </p>

            <p>
              Richard Feynman foi um físico brilhante, ganhador do Prêmio Nobel, e era conhecido por 
              conseguir explicar conceitos complexos de forma incrivelmente simples. Ele desenvolveu 
              uma técnica de aprendizado que qualquer pessoa pode usar para dominar qualquer assunto.
            </p>

            {/* Quote */}
            <blockquote className="border-l-4 border-primary-500 pl-6 my-8 italic text-gray-400">
              "Se você não consegue explicar algo de forma simples, você não entendeu bem o suficiente."
              <footer className="text-primary-400 mt-2 not-italic">— Richard Feynman</footer>
            </blockquote>

            {/* Table of Contents */}
            <div className="p-6 bg-dark-800/50 rounded-xl border border-dark-700 my-8">
              <h2 className="text-white font-bold text-lg mb-4 mt-0">📋 O que você vai aprender:</h2>
              <ul className="space-y-2 list-none pl-0 mb-0">
                <li className="flex items-center gap-2 text-gray-300">
                  <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                  Os 4 passos do Método Feynman
                </li>
                <li className="flex items-center gap-2 text-gray-300">
                  <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                  Por que esse método é tão eficaz
                </li>
                <li className="flex items-center gap-2 text-gray-300">
                  <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                  Como aplicar em qualquer matéria
                </li>
                <li className="flex items-center gap-2 text-gray-300">
                  <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                  Exemplos práticos
                </li>
              </ul>
            </div>

            <h2 className="text-2xl font-bold text-white mt-12 mb-6">O que é o Método Feynman?</h2>
            
            <p>
              O Método Feynman é uma técnica de aprendizado ativo que usa a <strong className="text-primary-400">
              explicação como ferramenta de compreensão</strong>. A ideia é simples: se você consegue 
              explicar um conceito de forma clara para uma criança de 12 anos, você realmente entendeu.
            </p>

            <p>
              Diferente de apenas ler e reler, esse método força seu cérebro a processar a informação 
              de verdade, identificando lacunas no seu conhecimento e consolidando o aprendizado.
            </p>

            <h2 className="text-2xl font-bold text-white mt-12 mb-6">Os 4 Passos do Método Feynman</h2>

            <div className="space-y-6 my-8">
              <div className="p-6 bg-gradient-to-r from-purple-500/10 to-transparent rounded-xl border border-purple-500/20">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-purple-500/20 flex items-center justify-center text-purple-400 font-bold text-xl">
                    1
                  </div>
                  <h3 className="text-white font-bold text-xl m-0">Escolha um conceito</h3>
                </div>
                <p className="text-gray-300 mb-0">
                  Pegue um conceito que você precisa aprender. Pode ser "Lei da Oferta e Demanda", 
                  "Mitose" ou "Segunda Lei de Newton". Escreva o nome no topo de uma folha em branco.
                </p>
              </div>

              <div className="p-6 bg-gradient-to-r from-blue-500/10 to-transparent rounded-xl border border-blue-500/20">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400 font-bold text-xl">
                    2
                  </div>
                  <h3 className="text-white font-bold text-xl m-0">Explique como se fosse para uma criança</h3>
                </div>
                <p className="text-gray-300 mb-0">
                  Na folha, escreva uma explicação do conceito usando linguagem simples. Nada de 
                  jargões ou termos técnicos. Imagine que está explicando para um sobrinho de 12 anos.
                </p>
              </div>

              <div className="p-6 bg-gradient-to-r from-orange-500/10 to-transparent rounded-xl border border-orange-500/20">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-orange-500/20 flex items-center justify-center text-orange-400 font-bold text-xl">
                    3
                  </div>
                  <h3 className="text-white font-bold text-xl m-0">Identifique as lacunas</h3>
                </div>
                <p className="text-gray-300 mb-0">
                  Enquanto escreve, você vai perceber onde travou ou usou termos vagos. Essas são 
                  as partes que você <em>acha</em> que sabe, mas não sabe de verdade. Volte ao material 
                  e estude especificamente esses pontos.
                </p>
              </div>

              <div className="p-6 bg-gradient-to-r from-green-500/10 to-transparent rounded-xl border border-green-500/20">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-green-500/20 flex items-center justify-center text-green-400 font-bold text-xl">
                    4
                  </div>
                  <h3 className="text-white font-bold text-xl m-0">Simplifique e use analogias</h3>
                </div>
                <p className="text-gray-300 mb-0">
                  Reescreva sua explicação de forma ainda mais simples. Crie analogias e exemplos 
                  do dia a dia. Se a explicação ainda parece complicada, você precisa estudar mais.
                </p>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-white mt-12 mb-6">Exemplo Prático: Explicando Fotossíntese</h2>

            <div className="p-6 bg-dark-800/50 rounded-xl border border-dark-700 my-6">
              <h4 className="text-red-400 font-semibold mb-2">❌ Explicação complicada (decoreba):</h4>
              <p className="text-gray-400 text-sm italic mb-0">
                "A fotossíntese é o processo pelo qual organismos autotróficos convertem energia 
                luminosa em energia química através da fixação de CO₂ em carboidratos na presença 
                de clorofila e água."
              </p>
            </div>

            <div className="p-6 bg-dark-800/50 rounded-xl border border-green-500/30 my-6">
              <h4 className="text-green-400 font-semibold mb-2">✅ Explicação Feynman (compreensão):</h4>
              <p className="text-gray-300 text-sm mb-0">
                "As plantas são como cozinheiras que fazem sua própria comida. Elas pegam luz do sol, 
                ar (CO₂) e água, misturam tudo usando uma substância verde chamada clorofila, e 
                transformam isso em açúcar para se alimentar. Como bônus, elas liberam oxigênio, 
                que a gente respira."
              </p>
            </div>

            <p>
              Percebeu a diferença? A segunda explicação mostra que você <em>realmente</em> entendeu 
              o processo, não apenas decorou palavras.
            </p>

            <h2 className="text-2xl font-bold text-white mt-12 mb-6">Por que o Método Feynman Funciona?</h2>

            <p>
              A ciência do aprendizado explica por que esse método é tão eficaz:
            </p>

            <ul className="space-y-3 my-6">
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-1" />
                <span><strong className="text-white">Aprendizado ativo:</strong> Explicar é muito mais 
                eficaz do que apenas ler passivamente.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-1" />
                <span><strong className="text-white">Identificação de lacunas:</strong> Você descobre 
                exatamente o que não sabe, economizando tempo.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-1" />
                <span><strong className="text-white">Conexões profundas:</strong> Criar analogias força 
                seu cérebro a conectar o novo conhecimento com coisas que já sabe.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-1" />
                <span><strong className="text-white">Memória de longo prazo:</strong> Informações 
                processadas ativamente são lembradas por muito mais tempo.</span>
              </li>
            </ul>

            <h2 className="text-2xl font-bold text-white mt-12 mb-6">Como Aplicar em Diferentes Matérias</h2>

            <div className="space-y-4 my-6">
              <div className="p-4 bg-dark-800/50 rounded-xl">
                <p className="text-white font-semibold mb-1">📐 Exatas (Matemática, Física)</p>
                <p className="text-gray-400 text-sm mb-0">
                  Explique o conceito primeiro, depois resolva um problema explicando cada passo 
                  como se estivesse ensinando alguém.
                </p>
              </div>
              
              <div className="p-4 bg-dark-800/50 rounded-xl">
                <p className="text-white font-semibold mb-1">📚 Humanas (História, Geografia)</p>
                <p className="text-gray-400 text-sm mb-0">
                  Conte os eventos como se fosse uma história. Por que aconteceu? O que causou o quê? 
                  Quais foram as consequências?
                </p>
              </div>
              
              <div className="p-4 bg-dark-800/50 rounded-xl">
                <p className="text-white font-semibold mb-1">🧬 Biológicas</p>
                <p className="text-gray-400 text-sm mb-0">
                  Use analogias do corpo humano ou do dia a dia. Compare processos celulares com 
                  coisas familiares (fábrica, cidade, etc).
                </p>
              </div>

              <div className="p-4 bg-dark-800/50 rounded-xl">
                <p className="text-white font-semibold mb-1">⚖️ Direito</p>
                <p className="text-gray-400 text-sm mb-0">
                  Explique o artigo ou lei como se estivesse contando para um amigo qual é a "regra 
                  do jogo" em linguagem simples.
                </p>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-white mt-12 mb-6">Dicas Avançadas</h2>

            <ul className="space-y-3 my-6">
              <li className="flex items-start gap-3">
                <span className="text-primary-400 font-bold">1.</span>
                <span>Grave áudios explicando o conceito. Ouvir depois ajuda a identificar erros.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary-400 font-bold">2.</span>
                <span>Ensine para alguém de verdade. Pode ser um colega, familiar ou até um pet.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary-400 font-bold">3.</span>
                <span>Combine com mapas mentais para visualizar as conexões entre conceitos.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary-400 font-bold">4.</span>
                <span>Use a técnica ao final de cada sessão de estudo para consolidar o aprendizado.</span>
              </li>
            </ul>

            <h2 className="text-2xl font-bold text-white mt-12 mb-6">Conclusão</h2>

            <p>
              O Método Feynman é uma das técnicas mais poderosas para aprender de verdade, não apenas 
              decorar. Ao forçar você a explicar conceitos de forma simples, ele garante que você 
              realmente entendeu o conteúdo e vai lembrar por muito mais tempo.
            </p>

            <p>
              Comece hoje: pegue um conceito que você está estudando e tente explicar para uma pessoa 
              imaginária. Você vai se surpreender com quanto ainda precisa aprender — e isso é ótimo, 
              porque agora você sabe exatamente o que focar.
            </p>
          </div>

          {/* CTA Box */}
          <div className="my-12 p-8 bg-gradient-to-r from-primary-500/10 to-accent-500/10 rounded-2xl border border-primary-500/20 text-center">
            <BookOpen className="w-12 h-12 text-primary-400 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-white mb-4">
              Quer dominar TODAS as técnicas de estudo?
            </h3>
            <p className="text-gray-400 mb-6 max-w-lg mx-auto">
              O Método Feynman é apenas uma das 15+ técnicas do nosso e-book. Aprenda também 
              Pomodoro, Active Recall, Palácio da Memória e muito mais.
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
              <Link to="/blog/tecnica-pomodoro-guia-completo" className="p-4 bg-dark-800/50 rounded-xl border border-dark-700 hover:border-primary-500/30 transition-colors group">
                <span className="text-2xl mb-2 block">🍅</span>
                <h4 className="text-white font-semibold group-hover:text-primary-400 transition-colors">
                  Técnica Pomodoro: Guia Completo
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

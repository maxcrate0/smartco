import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft, Brain, Clock, RefreshCw, Target, BookOpen, Lightbulb, CheckCircle, TrendingUp, Calendar } from 'lucide-react';

export default function CurvaEsquecimentoArticle() {
  useEffect(() => {
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": "O Que é a Curva do Esquecimento e Como Vencer Ela: Guia Completo",
      "description": "Descubra por que você esquece 70% do que estudou em 24 horas e as técnicas cientificamente comprovadas para reter conhecimento por meses ou anos.",
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
        "@id": "https://smart-co.tech/blog/curva-do-esquecimento"
      }
    });
    document.head.appendChild(script);
    return () => { document.head.removeChild(script); };
  }, []);
  const handleBuyClick = () => {
    window.open('https://pay.kiwify.com.br/KGCSreQ', '_blank');
  };

  return (
    <div className="min-h-screen bg-slate-900">
      {/* Header */}
      <header className="border-b border-white/10 bg-slate-900/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-4xl mx-auto px-4 py-4">
          <Link to="/blog" className="inline-flex items-center gap-2 text-sky-400 hover:text-sky-300 transition-colors">
            <ArrowLeft className="w-4 h-4" />
            Voltar para o Blog
          </Link>
        </div>
      </header>

      {/* Article */}
      <article className="max-w-4xl mx-auto px-4 py-12">
        {/* Meta info */}
        <div className="flex items-center gap-4 text-sm text-slate-400 mb-6">
          <span className="bg-sky-500/20 text-sky-400 px-3 py-1 rounded-full">Neurociência</span>
          <span>15 min de leitura</span>
          <span>Atualizado em Dez 2024</span>
        </div>

        {/* Title */}
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight"
        >
          O Que é a Curva do Esquecimento e Como Vencer Ela: Guia Completo com a Ciência da Memória
        </motion.h1>

        {/* Subtitle */}
        <p className="text-xl text-slate-300 mb-8 leading-relaxed">
          Descubra por que você esquece 70% do que estudou em 24 horas — e as técnicas cientificamente comprovadas para reter conhecimento por meses (ou anos).
        </p>

        {/* Featured image placeholder */}
        <div className="bg-gradient-to-br from-sky-500/20 to-violet-500/20 rounded-2xl p-8 mb-12 border border-white/10">
          <div className="flex items-center justify-center gap-4">
            <Brain className="w-16 h-16 text-sky-400" />
            <TrendingUp className="w-12 h-12 text-red-400 rotate-180" />
            <RefreshCw className="w-16 h-16 text-green-400" />
          </div>
          <p className="text-center text-slate-400 mt-4">Curva do Esquecimento de Ebbinghaus vs. Revisão Espaçada</p>
        </div>

        {/* Content */}
        <div className="prose prose-lg prose-invert max-w-none">
          
          {/* Intro */}
          <p className="text-slate-300 text-lg leading-relaxed">
            Você já passou horas estudando um assunto, fez anotações, releu várias vezes... e na hora da prova, simplesmente 
            <strong className="text-white"> deu branco</strong>? Isso não é culpa sua. É biologia.
          </p>

          <p className="text-slate-300 text-lg leading-relaxed">
            Em 1885, o psicólogo alemão <strong className="text-sky-400">Hermann Ebbinghaus</strong> descobriu algo perturbador 
            sobre a memória humana: esquecemos <strong className="text-white">50% do que aprendemos em apenas 1 hora</strong>, 
            e <strong className="text-white">70% em 24 horas</strong>.
          </p>

          <p className="text-slate-300 text-lg leading-relaxed">
            Ele chamou isso de <strong className="text-sky-400">Curva do Esquecimento</strong> — e entender como ela funciona 
            é a diferença entre estudar por horas sem resultado e memorizar para sempre.
          </p>

          {/* Section 1 */}
          <h2 className="text-2xl font-bold text-white mt-12 mb-6 flex items-center gap-3">
            <Brain className="w-6 h-6 text-sky-400" />
            O Que é a Curva do Esquecimento?
          </h2>

          <p className="text-slate-300 leading-relaxed">
            A Curva do Esquecimento é um gráfico que mostra <strong className="text-white">como a memória decai ao longo do tempo</strong> 
            quando não há esforço para reter a informação.
          </p>

          <div className="bg-slate-800/50 border border-white/10 rounded-xl p-6 my-8">
            <h3 className="text-lg font-semibold text-white mb-4">📉 O Declínio da Memória (sem revisão):</h3>
            <ul className="space-y-2 text-slate-300">
              <li className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-red-400" />
                <span><strong>20 minutos depois:</strong> Você já esqueceu 40%</span>
              </li>
              <li className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-red-400" />
                <span><strong>1 hora depois:</strong> Esqueceu 50%</span>
              </li>
              <li className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-red-400" />
                <span><strong>24 horas depois:</strong> Esqueceu 70%</span>
              </li>
              <li className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-red-400" />
                <span><strong>1 semana depois:</strong> Esqueceu 90%</span>
              </li>
              <li className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-red-400" />
                <span><strong>1 mês depois:</strong> Praticamente zerado</span>
              </li>
            </ul>
          </div>

          <p className="text-slate-300 leading-relaxed">
            Isso explica por que você consegue responder perguntas logo depois de estudar, mas na prova (dias depois), 
            parece que nunca viu aquele conteúdo na vida.
          </p>

          {/* Section 2 */}
          <h2 className="text-2xl font-bold text-white mt-12 mb-6 flex items-center gap-3">
            <Lightbulb className="w-6 h-6 text-yellow-400" />
            Por Que Nosso Cérebro Esquece?
          </h2>

          <p className="text-slate-300 leading-relaxed">
            Esquecer não é um defeito — é um <strong className="text-white">recurso de sobrevivência</strong>. 
            Imagine se você lembrasse de tudo: cada placa de rua, cada rosto na multidão, cada informação inútil. 
            Seu cérebro entraria em colapso.
          </p>

          <p className="text-slate-300 leading-relaxed">
            O cérebro funciona assim: <strong className="text-sky-400">"Se eu não uso essa informação, ela não deve ser importante."</strong>
          </p>

          <p className="text-slate-300 leading-relaxed">
            Quando você estuda algo uma única vez e nunca mais revisita, o cérebro interpreta como informação 
            descartável e a "limpa" para liberar espaço.
          </p>

          <div className="bg-violet-500/10 border border-violet-500/30 rounded-xl p-6 my-8">
            <h3 className="text-lg font-semibold text-violet-400 mb-3">🧠 O Segredo:</h3>
            <p className="text-slate-300">
              O truque é <strong className="text-white">enganar o cérebro</strong> fazendo ele acreditar que a informação 
              é importante — e você faz isso <strong className="text-violet-400">usando a informação várias vezes</strong> 
              em intervalos estratégicos.
            </p>
          </div>

          {/* Section 3 */}
          <h2 className="text-2xl font-bold text-white mt-12 mb-6 flex items-center gap-3">
            <RefreshCw className="w-6 h-6 text-green-400" />
            A Solução: Repetição Espaçada
          </h2>

          <p className="text-slate-300 leading-relaxed">
            A <strong className="text-green-400">Repetição Espaçada</strong> (ou Spaced Repetition) é a técnica de 
            revisar informações em intervalos crescentes — exatamente no momento em que você está prestes a esquecer.
          </p>

          <p className="text-slate-300 leading-relaxed">
            Em vez de estudar 5 horas seguidas (e esquecer tudo em uma semana), você estuda 30 minutos e revisa:
          </p>

          <div className="bg-slate-800/50 border border-white/10 rounded-xl p-6 my-8">
            <h3 className="text-lg font-semibold text-white mb-4">📅 Cronograma de Revisão Ideal:</h3>
            <ul className="space-y-3 text-slate-300">
              <li className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                <span><strong className="text-white">1ª revisão:</strong> 24 horas depois</span>
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                <span><strong className="text-white">2ª revisão:</strong> 3 dias depois</span>
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                <span><strong className="text-white">3ª revisão:</strong> 1 semana depois</span>
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                <span><strong className="text-white">4ª revisão:</strong> 2 semanas depois</span>
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                <span><strong className="text-white">5ª revisão:</strong> 1 mês depois</span>
              </li>
            </ul>
          </div>

          <p className="text-slate-300 leading-relaxed">
            Depois de 5-6 revisões espaçadas, a informação passa da <strong className="text-white">memória de curto prazo</strong> para 
            a <strong className="text-green-400">memória de longo prazo</strong> — onde pode ficar por anos.
          </p>

          {/* Section 4 */}
          <h2 className="text-2xl font-bold text-white mt-12 mb-6 flex items-center gap-3">
            <Target className="w-6 h-6 text-sky-400" />
            Como Aplicar na Prática (Passo a Passo)
          </h2>

          <div className="space-y-6">
            <div className="bg-slate-800/50 border border-white/10 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-sky-400 mb-3">Passo 1: Estude Ativamente (não passivamente)</h3>
              <p className="text-slate-300">
                Não apenas leia — <strong className="text-white">teste-se</strong>. Feche o livro e tente explicar o que aprendeu. 
                Use a <Link to="/blog/metodo-feynman-como-usar" className="text-sky-400 underline hover:text-sky-300">Técnica Feynman</Link> para isso.
              </p>
            </div>

            <div className="bg-slate-800/50 border border-white/10 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-sky-400 mb-3">Passo 2: Crie Flashcards</h3>
              <p className="text-slate-300">
                Flashcards são a ferramenta perfeita para repetição espaçada. Coloque a pergunta de um lado e a resposta do outro. 
                Apps como <strong className="text-white">Anki</strong> automatizam os intervalos de revisão.
              </p>
            </div>

            <div className="bg-slate-800/50 border border-white/10 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-sky-400 mb-3">Passo 3: Use o Calendário</h3>
              <p className="text-slate-300">
                Após estudar um tópico, marque as datas de revisão no calendário: amanhã, em 3 dias, em 1 semana, em 2 semanas, em 1 mês.
              </p>
            </div>

            <div className="bg-slate-800/50 border border-white/10 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-sky-400 mb-3">Passo 4: Combine com Pomodoro</h3>
              <p className="text-slate-300">
                Use a <Link to="/blog/tecnica-pomodoro-guia-completo" className="text-sky-400 underline hover:text-sky-300">Técnica Pomodoro</Link> para 
                sessões de estudo focadas e os intervalos para pequenas revisões do que estudou antes.
              </p>
            </div>

            <div className="bg-slate-800/50 border border-white/10 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-sky-400 mb-3">Passo 5: Durma Bem</h3>
              <p className="text-slate-300">
                O sono é quando o cérebro <strong className="text-white">consolida memórias</strong>. 
                Estudar a noite e dormir logo depois é mais eficiente do que estudar de manhã e ficar acordado o dia todo.
              </p>
            </div>
          </div>

          {/* Section 5 */}
          <h2 className="text-2xl font-bold text-white mt-12 mb-6 flex items-center gap-3">
            <Calendar className="w-6 h-6 text-violet-400" />
            Exemplo Prático: Estudando para o ENEM
          </h2>

          <p className="text-slate-300 leading-relaxed">
            Digamos que você precisa estudar <strong className="text-white">Revolução Francesa</strong> para o ENEM. 
            Veja como aplicar a repetição espaçada:
          </p>

          <div className="bg-gradient-to-r from-sky-500/10 to-violet-500/10 border border-white/10 rounded-xl p-6 my-8">
            <ul className="space-y-4 text-slate-300">
              <li className="flex items-start gap-3">
                <span className="bg-sky-500 text-white text-xs font-bold px-2 py-1 rounded mt-0.5">SEG</span>
                <div>
                  <strong className="text-white">Estudo inicial (30 min):</strong> Leia sobre as causas, fases e consequências. 
                  Faça um mapa mental ou resumo.
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="bg-sky-500 text-white text-xs font-bold px-2 py-1 rounded mt-0.5">TER</span>
                <div>
                  <strong className="text-white">1ª revisão (10 min):</strong> Tente lembrar sem olhar as anotações. 
                  Depois confira o que errou.
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="bg-violet-500 text-white text-xs font-bold px-2 py-1 rounded mt-0.5">SEX</span>
                <div>
                  <strong className="text-white">2ª revisão (10 min):</strong> Responda questões de ENEM sobre o tema. 
                  Anote os erros.
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="bg-green-500 text-white text-xs font-bold px-2 py-1 rounded mt-0.5">+7 DIAS</span>
                <div>
                  <strong className="text-white">3ª revisão (5 min):</strong> Explique o tema para alguém (ou para você mesmo).
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="bg-yellow-500 text-white text-xs font-bold px-2 py-1 rounded mt-0.5">+1 MÊS</span>
                <div>
                  <strong className="text-white">4ª revisão (5 min):</strong> Faça mais questões. 
                  Se acertar tudo, o conteúdo está consolidado!
                </div>
              </li>
            </ul>
          </div>

          <p className="text-slate-300 leading-relaxed">
            <strong className="text-white">Tempo total:</strong> ~1 hora distribuída ao longo de um mês. 
            <br />
            <strong className="text-green-400">Resultado:</strong> Memorização de longo prazo, pronta para qualquer prova.
          </p>

          {/* Section 6 */}
          <h2 className="text-2xl font-bold text-white mt-12 mb-6 flex items-center gap-3">
            <BookOpen className="w-6 h-6 text-sky-400" />
            Ferramentas para Automatizar a Revisão
          </h2>

          <div className="grid md:grid-cols-2 gap-4 my-8">
            <div className="bg-slate-800/50 border border-white/10 rounded-xl p-5">
              <h3 className="font-semibold text-white mb-2">Anki</h3>
              <p className="text-slate-400 text-sm">App de flashcards com algoritmo de repetição espaçada integrado. Gratuito e poderoso.</p>
            </div>
            <div className="bg-slate-800/50 border border-white/10 rounded-xl p-5">
              <h3 className="font-semibold text-white mb-2">Quizlet</h3>
              <p className="text-slate-400 text-sm">Flashcards online com modos de estudo gamificados. Ótimo para iniciantes.</p>
            </div>
            <div className="bg-slate-800/50 border border-white/10 rounded-xl p-5">
              <h3 className="font-semibold text-white mb-2">Notion</h3>
              <p className="text-slate-400 text-sm">Para criar um banco de dados de revisões com datas agendadas.</p>
            </div>
            <div className="bg-slate-800/50 border border-white/10 rounded-xl p-5">
              <h3 className="font-semibold text-white mb-2">RemNote</h3>
              <p className="text-slate-400 text-sm">Combina anotações + flashcards + repetição espaçada em uma ferramenta.</p>
            </div>
          </div>

          {/* Comparison */}
          <h2 className="text-2xl font-bold text-white mt-12 mb-6 flex items-center gap-3">
            <TrendingUp className="w-6 h-6 text-green-400" />
            Estudo Tradicional vs. Repetição Espaçada
          </h2>

          <div className="overflow-x-auto my-8">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="py-3 px-4 text-slate-400 font-medium">Aspecto</th>
                  <th className="py-3 px-4 text-red-400 font-medium">Estudo Tradicional</th>
                  <th className="py-3 px-4 text-green-400 font-medium">Repetição Espaçada</th>
                </tr>
              </thead>
              <tbody className="text-slate-300">
                <tr className="border-b border-white/10">
                  <td className="py-3 px-4">Tempo total</td>
                  <td className="py-3 px-4">5h de uma vez</td>
                  <td className="py-3 px-4">1h distribuída</td>
                </tr>
                <tr className="border-b border-white/10">
                  <td className="py-3 px-4">Retenção após 1 semana</td>
                  <td className="py-3 px-4">10-20%</td>
                  <td className="py-3 px-4">70-90%</td>
                </tr>
                <tr className="border-b border-white/10">
                  <td className="py-3 px-4">Retenção após 1 mês</td>
                  <td className="py-3 px-4">~5%</td>
                  <td className="py-3 px-4">60-80%</td>
                </tr>
                <tr className="border-b border-white/10">
                  <td className="py-3 px-4">Nível de estresse</td>
                  <td className="py-3 px-4">Alto (maratonas)</td>
                  <td className="py-3 px-4">Baixo (sessões curtas)</td>
                </tr>
                <tr>
                  <td className="py-3 px-4">Sensação de domínio</td>
                  <td className="py-3 px-4">Falsa confiança</td>
                  <td className="py-3 px-4">Domínio real</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Common mistakes */}
          <h2 className="text-2xl font-bold text-white mt-12 mb-6">
            ❌ Erros Comuns ao Tentar Vencer a Curva do Esquecimento
          </h2>

          <div className="space-y-4 my-8">
            <div className="bg-red-500/10 border border-red-500/30 rounded-xl p-5">
              <h3 className="font-semibold text-red-400 mb-2">1. Apenas reler o conteúdo</h3>
              <p className="text-slate-300 text-sm">Reler é passivo e cria a ilusão de aprendizado. Você precisa se testar ativamente.</p>
            </div>
            <div className="bg-red-500/10 border border-red-500/30 rounded-xl p-5">
              <h3 className="font-semibold text-red-400 mb-2">2. Revisar cedo demais</h3>
              <p className="text-slate-300 text-sm">Se você ainda lembra 100%, a revisão não fortalece a memória. Espere até começar a esquecer.</p>
            </div>
            <div className="bg-red-500/10 border border-red-500/30 rounded-xl p-5">
              <h3 className="font-semibold text-red-400 mb-2">3. Não ter um sistema</h3>
              <p className="text-slate-300 text-sm">Sem agendar as revisões, você vai esquecer de revisar. Use apps ou calendário.</p>
            </div>
          </div>

          {/* Conclusion */}
          <h2 className="text-2xl font-bold text-white mt-12 mb-6">
            Conclusão: Estude Menos, Lembre Mais
          </h2>

          <p className="text-slate-300 leading-relaxed">
            A Curva do Esquecimento não é sua inimiga — ela é um <strong className="text-white">mapa</strong> que mostra 
            exatamente quando você precisa revisar para nunca esquecer.
          </p>

          <p className="text-slate-300 leading-relaxed">
            Com a <strong className="text-green-400">repetição espaçada</strong>, você transforma horas de estudo ineficiente 
            em sessões curtas e poderosas que gravam o conhecimento permanentemente no seu cérebro.
          </p>

          <div className="bg-gradient-to-r from-sky-500/10 to-violet-500/10 border border-white/10 rounded-xl p-6 my-8">
            <p className="text-slate-300 font-medium">
              💡 <strong className="text-white">Regra de ouro:</strong> Estudar por 1 hora distribuída em uma semana 
              é mais eficiente do que estudar 5 horas em um dia.
            </p>
          </div>

        </div>

        {/* CTA Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 bg-gradient-to-r from-sky-500/20 to-violet-500/20 rounded-2xl p-8 border border-white/10"
        >
          <h2 className="text-2xl font-bold text-white mb-4">
            Aprenda Todas as Técnicas de Estudo em um Só Lugar
          </h2>
          <p className="text-slate-300 mb-6">
            A repetição espaçada é apenas uma das técnicas que você precisa dominar. 
            No nosso <strong className="text-white">Guia Completo de Técnicas de Estudo</strong>, você vai aprender 
            como combinar Pomodoro, Feynman, Active Recall, mapas mentais e mais para criar um sistema de estudo imbatível.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button
              onClick={handleBuyClick}
              className="px-6 py-3 bg-gradient-to-r from-sky-500 to-violet-500 text-white font-semibold rounded-lg hover:opacity-90 transition-opacity"
            >
              Quero o Guia Completo por R$ 24,70
            </button>
            <Link
              to="/"
              className="px-6 py-3 bg-white/10 text-white font-semibold rounded-lg hover:bg-white/20 transition-colors text-center"
            >
              Conhecer o E-book
            </Link>
          </div>
        </motion.div>

        {/* Related Articles */}
        <div className="mt-16">
          <h3 className="text-xl font-bold text-white mb-6">Artigos Relacionados</h3>
          <div className="grid md:grid-cols-3 gap-4">
            <Link to="/blog/tecnica-pomodoro-guia-completo" className="bg-slate-800/50 border border-white/10 rounded-xl p-5 hover:border-sky-500/50 transition-colors">
              <h4 className="font-semibold text-white mb-2">Técnica Pomodoro</h4>
              <p className="text-slate-400 text-sm">Aumente seu foco com ciclos de 25 minutos.</p>
            </Link>
            <Link to="/blog/metodo-feynman-como-usar" className="bg-slate-800/50 border border-white/10 rounded-xl p-5 hover:border-sky-500/50 transition-colors">
              <h4 className="font-semibold text-white mb-2">Método Feynman</h4>
              <p className="text-slate-400 text-sm">Aprenda ensinando — a técnica do gênio.</p>
            </Link>
            <Link to="/blog/mapas-mentais-vs-resumos" className="bg-slate-800/50 border border-white/10 rounded-xl p-5 hover:border-sky-500/50 transition-colors">
              <h4 className="font-semibold text-white mb-2">Mapas Mentais vs Resumos</h4>
              <p className="text-slate-400 text-sm">Qual método é melhor para o ENEM?</p>
            </Link>
          </div>
        </div>
      </article>

      {/* Footer */}
      <footer className="border-t border-white/10 py-8 mt-16">
        <div className="max-w-4xl mx-auto px-4 text-center text-slate-400">
          <p>© 2024 SmartCo. Todos os direitos reservados.</p>
          <div className="flex justify-center gap-4 mt-4">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <Link to="/blog" className="hover:text-white transition-colors">Blog</Link>
            <Link to="/privacidade" className="hover:text-white transition-colors">Privacidade</Link>
            <Link to="/termos" className="hover:text-white transition-colors">Termos</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}

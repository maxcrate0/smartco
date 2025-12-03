import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft, Brain, FileText, CheckCircle, XCircle, Target, Lightbulb, Clock, BookOpen, GraduationCap, Palette, List } from 'lucide-react';

export default function MapasMentaisVsResumosArticle() {
  useEffect(() => {
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": "Mapas Mentais vs Resumos: Qual é Melhor para o ENEM? Guia Definitivo",
      "description": "Descubra quando usar cada técnica, como combinar as duas para máxima retenção, e veja exemplos práticos para Humanas, Exatas e Ciências da Natureza.",
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
        "@id": "https://smart-co.tech/blog/mapas-mentais-vs-resumos"
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
          <span className="bg-violet-500/20 text-violet-400 px-3 py-1 rounded-full">Comparativo</span>
          <span>12 min de leitura</span>
          <span>Atualizado em Dez 2024</span>
        </div>

        {/* Title */}
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight"
        >
          Mapas Mentais vs Resumos: Qual é Melhor para o ENEM? Guia Definitivo
        </motion.h1>

        {/* Subtitle */}
        <p className="text-xl text-slate-300 mb-8 leading-relaxed">
          Descubra quando usar cada técnica, como combinar as duas para máxima retenção, e veja exemplos práticos para Humanas, Exatas e Ciências da Natureza.
        </p>

        {/* Featured image placeholder */}
        <div className="bg-gradient-to-br from-violet-500/20 to-sky-500/20 rounded-2xl p-8 mb-12 border border-white/10">
          <div className="flex items-center justify-center gap-8">
            <div className="text-center">
              <Brain className="w-16 h-16 text-violet-400 mx-auto" />
              <p className="text-violet-400 mt-2 font-medium">Mapa Mental</p>
            </div>
            <span className="text-4xl text-slate-500">vs</span>
            <div className="text-center">
              <FileText className="w-16 h-16 text-sky-400 mx-auto" />
              <p className="text-sky-400 mt-2 font-medium">Resumo</p>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="prose prose-lg prose-invert max-w-none">
          
          {/* Intro */}
          <p className="text-slate-300 text-lg leading-relaxed">
            Se você está estudando para o ENEM, vestibular ou concurso, provavelmente já se perguntou: 
            <strong className="text-white"> devo fazer resumos ou mapas mentais?</strong>
          </p>

          <p className="text-slate-300 text-lg leading-relaxed">
            A resposta curta: <strong className="text-sky-400">depende</strong>. Depende da matéria, do seu estilo de aprendizado 
            e de como você pretende revisar. A resposta completa é o que você vai descobrir neste artigo.
          </p>

          <p className="text-slate-300 text-lg leading-relaxed">
            Spoiler: os melhores estudantes <strong className="text-violet-400">usam os dois</strong> — mas em momentos diferentes.
          </p>

          {/* Section 1 */}
          <h2 className="text-2xl font-bold text-white mt-12 mb-6 flex items-center gap-3">
            <FileText className="w-6 h-6 text-sky-400" />
            O Que é um Resumo (e quando usar)
          </h2>

          <p className="text-slate-300 leading-relaxed">
            Um resumo é a <strong className="text-white">condensação linear de um conteúdo</strong>. 
            Você pega um texto de 10 páginas e transforma em 1 página, mantendo as informações essenciais.
          </p>

          <div className="bg-sky-500/10 border border-sky-500/30 rounded-xl p-6 my-8">
            <h3 className="text-lg font-semibold text-sky-400 mb-4">✅ Resumos funcionam melhor para:</h3>
            <ul className="space-y-2 text-slate-300">
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                <span><strong className="text-white">Conteúdos sequenciais:</strong> História (cronologia), Literatura (movimentos literários), processos biológicos</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                <span><strong className="text-white">Textos argumentativos:</strong> Quando você precisa lembrar a estrutura de um argumento</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                <span><strong className="text-white">Conceitos que precisam de explicação:</strong> Definições complexas, teorias</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                <span><strong className="text-white">Revisão rápida antes da prova:</strong> Ler seu próprio resumo é mais rápido que reler o livro</span>
              </li>
            </ul>
          </div>

          <div className="bg-red-500/10 border border-red-500/30 rounded-xl p-6 my-8">
            <h3 className="text-lg font-semibold text-red-400 mb-4">❌ Resumos NÃO funcionam para:</h3>
            <ul className="space-y-2 text-slate-300">
              <li className="flex items-start gap-3">
                <XCircle className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                <span>Conteúdos com muitas ramificações e conexões (ex: ecossistemas, fórmulas de física)</span>
              </li>
              <li className="flex items-start gap-3">
                <XCircle className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                <span>Quando você precisa ver o "quadro geral" de uma vez</span>
              </li>
              <li className="flex items-start gap-3">
                <XCircle className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                <span>Estudantes que são visuais e se perdem em textos longos</span>
              </li>
            </ul>
          </div>

          {/* Section 2 */}
          <h2 className="text-2xl font-bold text-white mt-12 mb-6 flex items-center gap-3">
            <Brain className="w-6 h-6 text-violet-400" />
            O Que é um Mapa Mental (e quando usar)
          </h2>

          <p className="text-slate-300 leading-relaxed">
            Um mapa mental é uma <strong className="text-white">representação visual e não-linear de informações</strong>. 
            Você coloca o tema central no meio e cria ramificações para subtópicos, conceitos relacionados e exemplos.
          </p>

          <div className="bg-violet-500/10 border border-violet-500/30 rounded-xl p-6 my-8">
            <h3 className="text-lg font-semibold text-violet-400 mb-4">✅ Mapas mentais funcionam melhor para:</h3>
            <ul className="space-y-2 text-slate-300">
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                <span><strong className="text-white">Conexões entre conceitos:</strong> Biologia (cadeia alimentar), Geografia (fatores climáticos), Química (grupos funcionais)</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                <span><strong className="text-white">Visão geral de um tema amplo:</strong> Ver tudo de uma vez ajuda a entender a estrutura</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                <span><strong className="text-white">Estudantes visuais:</strong> Quem aprende melhor com cores, formas e diagramas</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                <span><strong className="text-white">Brainstorming:</strong> Organizar ideias antes de escrever uma redação</span>
              </li>
            </ul>
          </div>

          <div className="bg-red-500/10 border border-red-500/30 rounded-xl p-6 my-8">
            <h3 className="text-lg font-semibold text-red-400 mb-4">❌ Mapas mentais NÃO funcionam para:</h3>
            <ul className="space-y-2 text-slate-300">
              <li className="flex items-start gap-3">
                <XCircle className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                <span>Conteúdos que precisam de ordem cronológica estrita</span>
              </li>
              <li className="flex items-start gap-3">
                <XCircle className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                <span>Explicações detalhadas e textos longos</span>
              </li>
              <li className="flex items-start gap-3">
                <XCircle className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                <span>Estudantes que pensam de forma linear e se confundem com ramificações</span>
              </li>
            </ul>
          </div>

          {/* Section 3 - Comparison Table */}
          <h2 className="text-2xl font-bold text-white mt-12 mb-6 flex items-center gap-3">
            <Target className="w-6 h-6 text-sky-400" />
            Comparação Direta: Mapa Mental vs Resumo
          </h2>

          <div className="overflow-x-auto my-8">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="py-3 px-4 text-slate-400 font-medium">Critério</th>
                  <th className="py-3 px-4 text-violet-400 font-medium">Mapa Mental</th>
                  <th className="py-3 px-4 text-sky-400 font-medium">Resumo</th>
                </tr>
              </thead>
              <tbody className="text-slate-300">
                <tr className="border-b border-white/10">
                  <td className="py-3 px-4 font-medium text-white">Estrutura</td>
                  <td className="py-3 px-4">Radial, visual</td>
                  <td className="py-3 px-4">Linear, textual</td>
                </tr>
                <tr className="border-b border-white/10">
                  <td className="py-3 px-4 font-medium text-white">Tempo para fazer</td>
                  <td className="py-3 px-4">Mais rápido</td>
                  <td className="py-3 px-4">Mais demorado</td>
                </tr>
                <tr className="border-b border-white/10">
                  <td className="py-3 px-4 font-medium text-white">Tempo para revisar</td>
                  <td className="py-3 px-4">Segundos (visual)</td>
                  <td className="py-3 px-4">Minutos (leitura)</td>
                </tr>
                <tr className="border-b border-white/10">
                  <td className="py-3 px-4 font-medium text-white">Nível de detalhe</td>
                  <td className="py-3 px-4">Palavras-chave</td>
                  <td className="py-3 px-4">Explicações completas</td>
                </tr>
                <tr className="border-b border-white/10">
                  <td className="py-3 px-4 font-medium text-white">Conexões</td>
                  <td className="py-3 px-4">Excelente</td>
                  <td className="py-3 px-4">Limitado</td>
                </tr>
                <tr className="border-b border-white/10">
                  <td className="py-3 px-4 font-medium text-white">Memorização</td>
                  <td className="py-3 px-4">Visual + espacial</td>
                  <td className="py-3 px-4">Verbal + lógico</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-medium text-white">Ideal para</td>
                  <td className="py-3 px-4">Entender estruturas</td>
                  <td className="py-3 px-4">Entender argumentos</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Section 4 */}
          <h2 className="text-2xl font-bold text-white mt-12 mb-6 flex items-center gap-3">
            <GraduationCap className="w-6 h-6 text-yellow-400" />
            Qual Usar em Cada Matéria do ENEM?
          </h2>

          <div className="space-y-6 my-8">
            {/* Humanas */}
            <div className="bg-slate-800/50 border border-white/10 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-yellow-400 mb-4 flex items-center gap-2">
                <BookOpen className="w-5 h-5" />
                Ciências Humanas
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-violet-400 font-medium mb-2">🧠 Use Mapa Mental:</p>
                  <ul className="text-slate-300 text-sm space-y-1">
                    <li>• Conceitos filosóficos e suas relações</li>
                    <li>• Comparação entre sistemas políticos</li>
                    <li>• Fatores que causaram eventos históricos</li>
                    <li>• Tipos de movimentos sociais</li>
                  </ul>
                </div>
                <div>
                  <p className="text-sm text-sky-400 font-medium mb-2">📝 Use Resumo:</p>
                  <ul className="text-slate-300 text-sm space-y-1">
                    <li>• Cronologia da História do Brasil</li>
                    <li>• Biografia de pensadores</li>
                    <li>• Linha do tempo das guerras</li>
                    <li>• Constituições brasileiras</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Natureza */}
            <div className="bg-slate-800/50 border border-white/10 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-green-400 mb-4 flex items-center gap-2">
                <Lightbulb className="w-5 h-5" />
                Ciências da Natureza
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-violet-400 font-medium mb-2">🧠 Use Mapa Mental:</p>
                  <ul className="text-slate-300 text-sm space-y-1">
                    <li>• Classificação de seres vivos</li>
                    <li>• Ciclos biogeoquímicos</li>
                    <li>• Grupos funcionais em Química</li>
                    <li>• Tipos de energia e conversões</li>
                  </ul>
                </div>
                <div>
                  <p className="text-sm text-sky-400 font-medium mb-2">📝 Use Resumo:</p>
                  <ul className="text-slate-300 text-sm space-y-1">
                    <li>• Etapas da mitose/meiose</li>
                    <li>• Processos metabólicos (passo a passo)</li>
                    <li>• Leis da física com demonstrações</li>
                    <li>• Reações químicas sequenciais</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Matemática */}
            <div className="bg-slate-800/50 border border-white/10 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-sky-400 mb-4 flex items-center gap-2">
                <Target className="w-5 h-5" />
                Matemática
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-violet-400 font-medium mb-2">🧠 Use Mapa Mental:</p>
                  <ul className="text-slate-300 text-sm space-y-1">
                    <li>• Fórmulas relacionadas (todas de geometria)</li>
                    <li>• Quando usar cada tipo de gráfico</li>
                    <li>• Propriedades de figuras geométricas</li>
                    <li>• Tipos de funções e características</li>
                  </ul>
                </div>
                <div>
                  <p className="text-sm text-sky-400 font-medium mb-2">📝 Use Resumo:</p>
                  <ul className="text-slate-300 text-sm space-y-1">
                    <li>• Demonstração de teoremas</li>
                    <li>• Passo a passo de resolução</li>
                    <li>• Regras de sinais e operações</li>
                    <li>• Macetes e atalhos de cálculo</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Linguagens */}
            <div className="bg-slate-800/50 border border-white/10 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-pink-400 mb-4 flex items-center gap-2">
                <Palette className="w-5 h-5" />
                Linguagens
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-violet-400 font-medium mb-2">🧠 Use Mapa Mental:</p>
                  <ul className="text-slate-300 text-sm space-y-1">
                    <li>• Características dos movimentos literários</li>
                    <li>• Estrutura da redação do ENEM</li>
                    <li>• Figuras de linguagem e exemplos</li>
                    <li>• Gêneros textuais e suas funções</li>
                  </ul>
                </div>
                <div>
                  <p className="text-sm text-sky-400 font-medium mb-2">📝 Use Resumo:</p>
                  <ul className="text-slate-300 text-sm space-y-1">
                    <li>• Regras de pontuação</li>
                    <li>• Cronologia da literatura brasileira</li>
                    <li>• Síntese de obras literárias</li>
                    <li>• Regras gramaticais com exemplos</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Section 5 */}
          <h2 className="text-2xl font-bold text-white mt-12 mb-6 flex items-center gap-3">
            <Lightbulb className="w-6 h-6 text-yellow-400" />
            A Estratégia dos Top Performers: Combine os Dois!
          </h2>

          <p className="text-slate-300 leading-relaxed">
            Os estudantes que tiram notas máximas no ENEM não escolhem entre mapa mental OU resumo. 
            Eles usam uma <strong className="text-white">estratégia de 3 etapas</strong>:
          </p>

          <div className="space-y-6 my-8">
            <div className="bg-gradient-to-r from-violet-500/10 to-sky-500/10 border border-white/10 rounded-xl p-6">
              <div className="flex items-start gap-4">
                <span className="bg-violet-500 text-white text-lg font-bold w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0">1</span>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Primeiro Contato: Resumo</h3>
                  <p className="text-slate-300">
                    Quando estuda o tema pela primeira vez, faça um <strong className="text-sky-400">resumo detalhado</strong>. 
                    Isso força você a processar a informação e entender os conceitos com profundidade.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-violet-500/10 to-sky-500/10 border border-white/10 rounded-xl p-6">
              <div className="flex items-start gap-4">
                <span className="bg-sky-500 text-white text-lg font-bold w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0">2</span>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Consolidação: Mapa Mental</h3>
                  <p className="text-slate-300">
                    Depois de dominar o conteúdo, crie um <strong className="text-violet-400">mapa mental</strong> baseado no resumo. 
                    Isso ajuda a ver conexões que você não tinha percebido e fixa o conhecimento de forma visual.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-violet-500/10 to-sky-500/10 border border-white/10 rounded-xl p-6">
              <div className="flex items-start gap-4">
                <span className="bg-green-500 text-white text-lg font-bold w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0">3</span>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Revisão: Mapa Mental</h3>
                  <p className="text-slate-300">
                    Na hora de revisar, use o <strong className="text-violet-400">mapa mental</strong>. 
                    Em segundos você relembra todo o conteúdo. Se precisar de mais detalhes, volte ao resumo.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Section 6 - How to create */}
          <h2 className="text-2xl font-bold text-white mt-12 mb-6 flex items-center gap-3">
            <List className="w-6 h-6 text-sky-400" />
            Como Fazer um Mapa Mental Eficiente
          </h2>

          <div className="bg-slate-800/50 border border-white/10 rounded-xl p-6 my-8">
            <ol className="space-y-4 text-slate-300">
              <li className="flex items-start gap-3">
                <span className="bg-violet-500 text-white text-sm font-bold w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">1</span>
                <span><strong className="text-white">Tema central no meio:</strong> Escreva o assunto principal no centro da folha ou tela.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="bg-violet-500 text-white text-sm font-bold w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">2</span>
                <span><strong className="text-white">Ramificações principais:</strong> Crie 4-6 galhos saindo do centro com os subtópicos mais importantes.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="bg-violet-500 text-white text-sm font-bold w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">3</span>
                <span><strong className="text-white">Sub-ramificações:</strong> Adicione detalhes, exemplos e palavras-chave em galhos menores.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="bg-violet-500 text-white text-sm font-bold w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">4</span>
                <span><strong className="text-white">Use cores diferentes:</strong> Cada ramificação principal deve ter uma cor. Isso ajuda na memorização.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="bg-violet-500 text-white text-sm font-bold w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">5</span>
                <span><strong className="text-white">Adicione ícones e imagens:</strong> Um desenho vale mais que 1000 palavras para a memória visual.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="bg-violet-500 text-white text-sm font-bold w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">6</span>
                <span><strong className="text-white">Mantenha simples:</strong> Use palavras-chave, não frases completas. Menos é mais.</span>
              </li>
            </ol>
          </div>

          <h2 className="text-2xl font-bold text-white mt-12 mb-6 flex items-center gap-3">
            <FileText className="w-6 h-6 text-sky-400" />
            Como Fazer um Resumo Eficiente
          </h2>

          <div className="bg-slate-800/50 border border-white/10 rounded-xl p-6 my-8">
            <ol className="space-y-4 text-slate-300">
              <li className="flex items-start gap-3">
                <span className="bg-sky-500 text-white text-sm font-bold w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">1</span>
                <span><strong className="text-white">Leia o conteúdo completo primeiro:</strong> Não resuma enquanto lê pela primeira vez.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="bg-sky-500 text-white text-sm font-bold w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">2</span>
                <span><strong className="text-white">Identifique as ideias principais:</strong> O que é essencial? O que é exemplo ou detalhe?</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="bg-sky-500 text-white text-sm font-bold w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">3</span>
                <span><strong className="text-white">Escreva com suas palavras:</strong> Copiar do livro não ajuda a memorizar. Reformule!</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="bg-sky-500 text-white text-sm font-bold w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">4</span>
                <span><strong className="text-white">Use estrutura clara:</strong> Títulos, subtítulos, bullets. Facilite a leitura futura.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="bg-sky-500 text-white text-sm font-bold w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">5</span>
                <span><strong className="text-white">Inclua exemplos próprios:</strong> Conecte o conteúdo com algo que você conhece.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="bg-sky-500 text-white text-sm font-bold w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">6</span>
                <span><strong className="text-white">Revise e refine:</strong> Um bom resumo é editado várias vezes até ficar enxuto.</span>
              </li>
            </ol>
          </div>

          {/* Tools */}
          <h2 className="text-2xl font-bold text-white mt-12 mb-6 flex items-center gap-3">
            <Clock className="w-6 h-6 text-violet-400" />
            Ferramentas Gratuitas
          </h2>

          <div className="grid md:grid-cols-2 gap-4 my-8">
            <div className="bg-slate-800/50 border border-white/10 rounded-xl p-5">
              <h3 className="font-semibold text-violet-400 mb-2">Para Mapas Mentais</h3>
              <ul className="text-slate-300 text-sm space-y-2">
                <li>• <strong className="text-white">Canva:</strong> Templates prontos e bonitos</li>
                <li>• <strong className="text-white">Miro:</strong> Colaborativo e intuitivo</li>
                <li>• <strong className="text-white">Coggle:</strong> Simples e direto ao ponto</li>
                <li>• <strong className="text-white">XMind:</strong> Versão gratuita robusta</li>
              </ul>
            </div>
            <div className="bg-slate-800/50 border border-white/10 rounded-xl p-5">
              <h3 className="font-semibold text-sky-400 mb-2">Para Resumos</h3>
              <ul className="text-slate-300 text-sm space-y-2">
                <li>• <strong className="text-white">Notion:</strong> Organização perfeita</li>
                <li>• <strong className="text-white">Google Docs:</strong> Simples e acessível</li>
                <li>• <strong className="text-white">Obsidian:</strong> Conecta notas entre si</li>
                <li>• <strong className="text-white">Papel e caneta:</strong> Ainda funciona!</li>
              </ul>
            </div>
          </div>

          {/* Conclusion */}
          <h2 className="text-2xl font-bold text-white mt-12 mb-6">
            Conclusão: Não Existe "Melhor" — Existe o Certo para Cada Situação
          </h2>

          <p className="text-slate-300 leading-relaxed">
            Mapas mentais e resumos não são concorrentes — são <strong className="text-white">ferramentas complementares</strong>. 
            O segredo está em saber quando usar cada uma:
          </p>

          <div className="bg-gradient-to-r from-violet-500/10 to-sky-500/10 border border-white/10 rounded-xl p-6 my-8">
            <ul className="space-y-3 text-slate-300">
              <li className="flex items-center gap-3">
                <Brain className="w-5 h-5 text-violet-400" />
                <span><strong className="text-white">Mapa Mental:</strong> Para ver conexões, revisar rápido e memorizar visualmente.</span>
              </li>
              <li className="flex items-center gap-3">
                <FileText className="w-5 h-5 text-sky-400" />
                <span><strong className="text-white">Resumo:</strong> Para entender profundamente, seguir sequências e ter referência detalhada.</span>
              </li>
            </ul>
          </div>

          <p className="text-slate-300 leading-relaxed">
            Experimente os dois métodos e descubra qual funciona melhor para você em cada matéria. 
            Com o tempo, você vai criar sua própria estratégia de estudos imbatível.
          </p>

        </div>

        {/* CTA Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 bg-gradient-to-r from-violet-500/20 to-sky-500/20 rounded-2xl p-8 border border-white/10"
        >
          <h2 className="text-2xl font-bold text-white mb-4">
            Domine Todas as Técnicas de Estudo
          </h2>
          <p className="text-slate-300 mb-6">
            Mapas mentais e resumos são apenas o começo. No nosso <strong className="text-white">Guia Completo de Técnicas de Estudo</strong>, 
            você vai aprender como combinar Pomodoro, Feynman, Active Recall, Repetição Espaçada e muito mais para 
            criar um sistema de estudos que realmente funciona para o ENEM.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button
              onClick={handleBuyClick}
              className="px-6 py-3 bg-gradient-to-r from-violet-500 to-sky-500 text-white font-semibold rounded-lg hover:opacity-90 transition-opacity"
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
            <Link to="/blog/tecnica-pomodoro-guia-completo" className="bg-slate-800/50 border border-white/10 rounded-xl p-5 hover:border-violet-500/50 transition-colors">
              <h4 className="font-semibold text-white mb-2">Técnica Pomodoro</h4>
              <p className="text-slate-400 text-sm">Aumente seu foco com ciclos de 25 minutos.</p>
            </Link>
            <Link to="/blog/curva-do-esquecimento" className="bg-slate-800/50 border border-white/10 rounded-xl p-5 hover:border-violet-500/50 transition-colors">
              <h4 className="font-semibold text-white mb-2">Curva do Esquecimento</h4>
              <p className="text-slate-400 text-sm">Por que você esquece e como reter para sempre.</p>
            </Link>
            <Link to="/blog/metodo-feynman-como-usar" className="bg-slate-800/50 border border-white/10 rounded-xl p-5 hover:border-violet-500/50 transition-colors">
              <h4 className="font-semibold text-white mb-2">Método Feynman</h4>
              <p className="text-slate-400 text-sm">Aprenda ensinando — a técnica do gênio.</p>
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

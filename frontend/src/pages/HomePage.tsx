import NewHeroSection from '../components/sections/NewHeroSection'
import PainSection from '../components/sections/PainSection'
import MethodExplainedSection from '../components/sections/MethodExplainedSection'
import WhatYouLearnSection from '../components/sections/WhatYouLearnSection'
import ProductSection from '../components/sections/ProductSection'
import AuthorSection from '../components/sections/AuthorSection'
import SocialProofSection from '../components/sections/SocialProofSection'
import HowToBuySection from '../components/sections/HowToBuySection'
import FAQSection from '../components/sections/FAQSection'
import FinalCTASection from '../components/sections/FinalCTASection'

export default function HomePage() {
  return (
    <>
      {/* 1. Hero com impacto */}
      <NewHeroSection />
      
      {/* 2. Seção de Dor - Identificação */}
      <PainSection />
      
      {/* 3. Por que 3x mais rápido - Contexto da promessa */}
      <MethodExplainedSection />
      
      {/* 4. O que você vai aprender */}
      <WhatYouLearnSection />
      
      {/* 5. Produto tangível */}
      <ProductSection />
      
      {/* 6. Quem criou - Autoridade */}
      <AuthorSection />
      
      {/* 7. Prova Social - Depoimentos melhorados */}
      <SocialProofSection />
      
      {/* 8. Como funciona a compra */}
      <HowToBuySection />
      
      {/* 9. FAQ */}
      <FAQSection />
      
      {/* 10. CTA Final com urgência */}
      <FinalCTASection />
    </>
  )
}


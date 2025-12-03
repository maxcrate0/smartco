import NewHeroSection from '../components/sections/NewHeroSection'
import PainSection from '../components/sections/PainSection'
import WhatYouLearnSection from '../components/sections/WhatYouLearnSection'
import ProductSection from '../components/sections/ProductSection'
import SocialProofSection from '../components/sections/SocialProofSection'
import FAQSection from '../components/sections/FAQSection'
import FinalCTASection from '../components/sections/FinalCTASection'

export default function HomePage() {
  return (
    <>
      {/* 1. Hero com impacto */}
      <NewHeroSection />
      
      {/* 2. Seção de Dor - Identificação */}
      <PainSection />
      
      {/* 3. Produto tangível */}
      <ProductSection />
      
      {/* 4. O que você vai aprender */}
      <WhatYouLearnSection />
      
      {/* 5. Prova Social */}
      <SocialProofSection />
      
      {/* 6. FAQ */}
      <FAQSection />
      
      {/* 7. CTA Final com urgência */}
      <FinalCTASection />
    </>
  )
}


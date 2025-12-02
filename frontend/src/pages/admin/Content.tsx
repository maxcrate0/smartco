import { useState } from 'react'
import { motion } from 'framer-motion'
import { Save, RefreshCw, Check } from 'lucide-react'
import { Button, Input, Textarea, Card } from '../../components/ui'
import { useContentStore } from '../../stores/contentStore'
import { updateContent } from '../../services/api'

export default function AdminContent() {
  const { content, setContent } = useContentStore()
  const [isSaving, setIsSaving] = useState(false)
  const [saved, setSaved] = useState(false)

  const handleSave = async () => {
    setIsSaving(true)
    try {
      await updateContent(content)
      setSaved(true)
      setTimeout(() => setSaved(false), 2000)
    } catch (error) {
      console.error('Error saving content:', error)
    } finally {
      setIsSaving(false)
    }
  }

  const updateHero = (field: string, value: string) => {
    setContent({ hero: { ...content.hero, [field]: value } })
  }

  const updateAbout = (field: string, value: string) => {
    setContent({ about: { ...content.about, [field]: value } })
  }

  const updateCta = (field: string, value: string) => {
    setContent({ cta: { ...content.cta, [field]: value } })
  }

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-white">Editar Conteúdo</h1>
          <p className="text-gray-400 mt-2">Atualize o conteúdo do seu site de forma fácil</p>
        </div>
        <Button
          variant="primary"
          onClick={handleSave}
          disabled={isSaving}
        >
          {isSaving ? (
            <>
              <RefreshCw className="w-5 h-5 mr-2 animate-spin" />
              Salvando...
            </>
          ) : saved ? (
            <>
              <Check className="w-5 h-5 mr-2" />
              Salvo!
            </>
          ) : (
            <>
              <Save className="w-5 h-5 mr-2" />
              Salvar Alterações
            </>
          )}
        </Button>
      </div>

      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <Card>
          <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
            🚀 Seção Hero (Topo)
          </h2>
          <div className="grid gap-6">
            <Input
              label="Título Principal"
              value={content.hero.title}
              onChange={(e) => updateHero('title', e.target.value)}
              placeholder="Ex: Domine a Arte de Estudar"
            />
            <Textarea
              label="Subtítulo"
              value={content.hero.subtitle}
              onChange={(e) => updateHero('subtitle', e.target.value)}
              placeholder="Descrição curta do produto..."
              rows={3}
            />
            <div className="grid md:grid-cols-2 gap-4">
              <Input
                label="Texto do Botão"
                value={content.hero.ctaText}
                onChange={(e) => updateHero('ctaText', e.target.value)}
                placeholder="Ex: Quero Começar Agora"
              />
              <Input
                label="Link do Botão (Checkout)"
                value={content.hero.ctaLink}
                onChange={(e) => updateHero('ctaLink', e.target.value)}
                placeholder="https://pay.hotmart.com/..."
              />
            </div>
          </div>
        </Card>
      </motion.div>

      {/* About Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
      >
        <Card>
          <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
            📖 Seção Sobre
          </h2>
          <div className="grid gap-6">
            <Input
              label="Título"
              value={content.about.title}
              onChange={(e) => updateAbout('title', e.target.value)}
              placeholder="Ex: Transforme sua forma de aprender"
            />
            <Textarea
              label="Descrição"
              value={content.about.description}
              onChange={(e) => updateAbout('description', e.target.value)}
              placeholder="Descreva seu produto em detalhes..."
              rows={5}
            />
          </div>
        </Card>
      </motion.div>

      {/* CTA Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        <Card>
          <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
            💰 Seção de Compra (CTA Final)
          </h2>
          <div className="grid gap-6">
            <Input
              label="Título"
              value={content.cta.title}
              onChange={(e) => updateCta('title', e.target.value)}
              placeholder="Ex: Comece Sua Transformação Hoje"
            />
            <Textarea
              label="Descrição"
              value={content.cta.description}
              onChange={(e) => updateCta('description', e.target.value)}
              placeholder="Convide o usuário a comprar..."
              rows={3}
            />
            <div className="grid md:grid-cols-2 gap-4">
              <Input
                label="Preço Original (riscado)"
                value={content.cta.originalPrice}
                onChange={(e) => updateCta('originalPrice', e.target.value)}
                placeholder="Ex: 97"
              />
              <Input
                label="Preço Atual"
                value={content.cta.price}
                onChange={(e) => updateCta('price', e.target.value)}
                placeholder="Ex: 47"
              />
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              <Input
                label="Texto do Botão de Compra"
                value={content.cta.ctaText}
                onChange={(e) => updateCta('ctaText', e.target.value)}
                placeholder="Ex: Garantir Meu Acesso"
              />
              <Input
                label="Link de Checkout"
                value={content.cta.ctaLink}
                onChange={(e) => updateCta('ctaLink', e.target.value)}
                placeholder="https://pay.hotmart.com/..."
              />
            </div>
          </div>
        </Card>
      </motion.div>

      {/* Tips */}
      <Card className="bg-primary-500/10 border-primary-500/30">
        <h3 className="text-lg font-semibold text-primary-400 mb-4">💡 Dicas</h3>
        <ul className="space-y-2 text-gray-300 text-sm">
          <li>• Use títulos curtos e impactantes para chamar atenção</li>
          <li>• O link de checkout deve apontar para sua página de pagamento (Hotmart, Eduzz, etc.)</li>
          <li>• Preços sem "R$" - o sistema adiciona automaticamente</li>
          <li>• As alterações são salvas localmente e sincronizadas com o backend</li>
        </ul>
      </Card>
    </div>
  )
}

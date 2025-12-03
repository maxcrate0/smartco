import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Star, Send, CheckCircle, User, MessageSquare } from 'lucide-react'
import { Button } from '../ui'
import { getReviews, getAggregateRating, submitReview, type Review, type AggregateRating } from '../../services/reviews'

export default function ReviewsSection() {
  const [reviews, setReviews] = useState<Review[]>([])
  const [aggregate, setAggregate] = useState<AggregateRating>({ ratingValue: 0, reviewCount: 0 })
  const [isLoading, setIsLoading] = useState(true)
  const [showForm, setShowForm] = useState(false)
  const [formData, setFormData] = useState({ name: '', rating: 5, comment: '' })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)
  const [error, setError] = useState('')

  useEffect(() => {
    loadReviews()
  }, [])

  // Inject Schema.org dynamically
  useEffect(() => {
    if (aggregate.reviewCount > 0) {
      const existingScript = document.getElementById('reviews-schema')
      if (existingScript) existingScript.remove()

      const script = document.createElement('script')
      script.id = 'reviews-schema'
      script.type = 'application/ld+json'
      script.text = JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Product",
        "name": "Guia de Técnicas de Estudo",
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": aggregate.ratingValue.toString(),
          "reviewCount": aggregate.reviewCount.toString(),
          "bestRating": "5",
          "worstRating": "1"
        },
        "review": reviews.slice(0, 5).map(review => ({
          "@type": "Review",
          "author": {
            "@type": "Person",
            "name": review.name
          },
          "datePublished": review.createdAt.split('T')[0],
          "reviewRating": {
            "@type": "Rating",
            "ratingValue": review.rating.toString(),
            "bestRating": "5",
            "worstRating": "1"
          },
          "reviewBody": review.comment || undefined
        }))
      })
      document.head.appendChild(script)
    }

    return () => {
      const script = document.getElementById('reviews-schema')
      if (script) script.remove()
    }
  }, [aggregate, reviews])

  async function loadReviews() {
    setIsLoading(true)
    const [reviewsData, aggregateData] = await Promise.all([
      getReviews(),
      getAggregateRating()
    ])
    setReviews(reviewsData)
    setAggregate(aggregateData)
    setIsLoading(false)
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setError('')
    setIsSubmitting(true)

    try {
      await submitReview(formData)
      setSubmitSuccess(true)
      setFormData({ name: '', rating: 5, comment: '' })
      await loadReviews()
      
      setTimeout(() => {
        setSubmitSuccess(false)
        setShowForm(false)
      }, 3000)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Erro ao enviar avaliação')
    } finally {
      setIsSubmitting(false)
    }
  }

  function StarRating({ rating, interactive = false, onChange }: { 
    rating: number; 
    interactive?: boolean; 
    onChange?: (rating: number) => void 
  }) {
    return (
      <div className="flex gap-1">
        {[1, 2, 3, 4, 5].map((star) => (
          <button
            key={star}
            type="button"
            disabled={!interactive}
            onClick={() => onChange?.(star)}
            className={`${interactive ? 'cursor-pointer hover:scale-110 transition-transform' : 'cursor-default'}`}
          >
            <Star
              className={`w-5 h-5 ${star <= rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-600'}`}
            />
          </button>
        ))}
      </div>
    )
  }

  function formatDate(dateString: string) {
    return new Date(dateString).toLocaleDateString('pt-BR', {
      day: '2-digit',
      month: 'short',
      year: 'numeric'
    })
  }

  return (
    <section className="py-20 bg-dark-900 relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="text-yellow-400 font-semibold text-sm uppercase tracking-wider mb-4 block">
              Avaliações
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              O que nossos <span className="text-gradient">leitores</span> dizem
            </h2>
            
            {/* Aggregate Rating */}
            {aggregate.reviewCount > 0 && (
              <div className="flex items-center justify-center gap-4 mt-6">
                <div className="flex items-center gap-2">
                  <span className="text-4xl font-bold text-white">{aggregate.ratingValue}</span>
                  <StarRating rating={Math.round(aggregate.ratingValue)} />
                </div>
                <span className="text-gray-400">
                  ({aggregate.reviewCount} {aggregate.reviewCount === 1 ? 'avaliação' : 'avaliações'})
                </span>
              </div>
            )}
          </motion.div>

          {/* Loading State */}
          {isLoading && (
            <div className="text-center py-12">
              <div className="w-8 h-8 border-2 border-primary-500 border-t-transparent rounded-full animate-spin mx-auto" />
              <p className="text-gray-400 mt-4">Carregando avaliações...</p>
            </div>
          )}

          {/* Reviews List */}
          {!isLoading && reviews.length > 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="space-y-4 mb-8"
            >
              {reviews.map((review, index) => (
                <motion.div
                  key={review.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-dark-800/50 border border-dark-700 rounded-xl p-6"
                >
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-primary-500/20 flex items-center justify-center">
                        <User className="w-5 h-5 text-primary-400" />
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="font-semibold text-white">{review.name}</span>
                          {review.verified && (
                            <span className="flex items-center gap-1 text-xs text-green-400 bg-green-400/10 px-2 py-0.5 rounded-full">
                              <CheckCircle className="w-3 h-3" />
                              Verificado
                            </span>
                          )}
                        </div>
                        <span className="text-sm text-gray-500">{formatDate(review.createdAt)}</span>
                      </div>
                    </div>
                    <StarRating rating={review.rating} />
                  </div>
                  {review.comment && (
                    <p className="text-gray-300 leading-relaxed">{review.comment}</p>
                  )}
                </motion.div>
              ))}
            </motion.div>
          )}

          {/* No Reviews Yet */}
          {!isLoading && reviews.length === 0 && (
            <div className="text-center py-12 bg-dark-800/30 rounded-xl border border-dark-700 mb-8">
              <MessageSquare className="w-12 h-12 text-gray-600 mx-auto mb-4" />
              <p className="text-gray-400">Nenhuma avaliação ainda. Seja o primeiro a avaliar!</p>
            </div>
          )}

          {/* Add Review Button */}
          {!showForm && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center"
            >
              <Button
                variant="outline"
                onClick={() => setShowForm(true)}
                className="group"
              >
                <Star className="w-5 h-5 mr-2" />
                Deixar uma avaliação
              </Button>
            </motion.div>
          )}

          {/* Review Form */}
          <AnimatePresence>
            {showForm && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="overflow-hidden"
              >
                <form
                  onSubmit={handleSubmit}
                  className="bg-dark-800/50 border border-dark-700 rounded-xl p-6 mt-8"
                >
                  <h3 className="text-xl font-semibold text-white mb-6">Deixe sua avaliação</h3>
                  
                  {submitSuccess ? (
                    <div className="text-center py-8">
                      <CheckCircle className="w-16 h-16 text-green-400 mx-auto mb-4" />
                      <p className="text-white text-lg font-semibold">Obrigado pela sua avaliação!</p>
                      <p className="text-gray-400">Sua opinião é muito importante para nós.</p>
                    </div>
                  ) : (
                    <>
                      {error && (
                        <div className="bg-red-500/10 border border-red-500/30 text-red-400 px-4 py-3 rounded-lg mb-4">
                          {error}
                        </div>
                      )}
                      
                      <div className="space-y-4">
                        {/* Name */}
                        <div>
                          <label className="block text-sm font-medium text-gray-300 mb-2">
                            Seu nome
                          </label>
                          <input
                            type="text"
                            required
                            minLength={2}
                            maxLength={50}
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            className="w-full px-4 py-3 bg-dark-700 border border-dark-600 rounded-lg text-white placeholder-gray-500 focus:border-primary-500 focus:ring-1 focus:ring-primary-500 transition-colors"
                            placeholder="Como você quer ser chamado?"
                          />
                        </div>

                        {/* Rating */}
                        <div>
                          <label className="block text-sm font-medium text-gray-300 mb-2">
                            Sua nota
                          </label>
                          <StarRating
                            rating={formData.rating}
                            interactive
                            onChange={(rating) => setFormData({ ...formData, rating })}
                          />
                        </div>

                        {/* Comment */}
                        <div>
                          <label className="block text-sm font-medium text-gray-300 mb-2">
                            Comentário (opcional)
                          </label>
                          <textarea
                            rows={3}
                            maxLength={500}
                            value={formData.comment}
                            onChange={(e) => setFormData({ ...formData, comment: e.target.value })}
                            className="w-full px-4 py-3 bg-dark-700 border border-dark-600 rounded-lg text-white placeholder-gray-500 focus:border-primary-500 focus:ring-1 focus:ring-primary-500 transition-colors resize-none"
                            placeholder="Conte sua experiência com o e-book..."
                          />
                          <p className="text-sm text-gray-500 mt-1">
                            {formData.comment.length}/500 caracteres
                          </p>
                        </div>

                        {/* Buttons */}
                        <div className="flex gap-4 pt-4">
                          <Button
                            type="submit"
                            variant="primary"
                            disabled={isSubmitting}
                            className="flex-1"
                          >
                            {isSubmitting ? (
                              <>
                                <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                                Enviando...
                              </>
                            ) : (
                              <>
                                <Send className="w-4 h-4 mr-2" />
                                Enviar avaliação
                              </>
                            )}
                          </Button>
                          <Button
                            type="button"
                            variant="ghost"
                            onClick={() => setShowForm(false)}
                          >
                            Cancelar
                          </Button>
                        </div>
                      </div>
                    </>
                  )}
                </form>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}

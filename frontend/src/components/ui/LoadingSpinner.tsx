export default function LoadingSpinner() {
  return (
    <div className="min-h-screen bg-dark-900 flex items-center justify-center">
      <div className="relative">
        <div className="w-16 h-16 border-4 border-primary-500/30 rounded-full animate-spin border-t-primary-500"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-8 h-8 bg-primary-500 rounded-full animate-pulse"></div>
        </div>
      </div>
    </div>
  )
}

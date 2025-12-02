import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { MousePointerClick, TrendingUp, Users, Eye, ArrowUp, ArrowDown } from 'lucide-react'
import { Card } from '../../components/ui'
import { getClickStats, getAnalytics } from '../../services/api'
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'

interface ClickStats {
  total: number
  today: number
  week: number
  month: number
  byButton: Record<string, number>
}

export default function AdminDashboard() {
  const [stats, setStats] = useState<ClickStats | null>(null)
  const [chartData, setChartData] = useState<Array<{ date: string; clicks: number }>>([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [clickStats, analytics] = await Promise.all([
          getClickStats(),
          getAnalytics(),
        ])
        setStats(clickStats)
        setChartData(analytics.dailyClicks || [])
      } catch (error) {
        console.error('Error fetching stats:', error)
        // Use mock data for demo
        setStats({
          total: 1234,
          today: 45,
          week: 312,
          month: 1234,
          byButton: {
            hero_cta: 456,
            cta_buy: 378,
            header_cta: 200,
            other: 200,
          },
        })
        setChartData([
          { date: '25/11', clicks: 45 },
          { date: '26/11', clicks: 52 },
          { date: '27/11', clicks: 38 },
          { date: '28/11', clicks: 65 },
          { date: '29/11', clicks: 48 },
          { date: '30/11', clicks: 72 },
          { date: '01/12', clicks: 45 },
        ])
      } finally {
        setIsLoading(false)
      }
    }
    fetchData()
  }, [])

  const statCards = [
    {
      title: 'Cliques Totais',
      value: stats?.total || 0,
      change: '+12%',
      isPositive: true,
      icon: MousePointerClick,
      color: 'from-blue-500 to-cyan-500',
    },
    {
      title: 'Cliques Hoje',
      value: stats?.today || 0,
      change: '+8%',
      isPositive: true,
      icon: TrendingUp,
      color: 'from-green-500 to-emerald-500',
    },
    {
      title: 'Cliques na Semana',
      value: stats?.week || 0,
      change: '-3%',
      isPositive: false,
      icon: Users,
      color: 'from-purple-500 to-pink-500',
    },
    {
      title: 'Cliques no Mês',
      value: stats?.month || 0,
      change: '+25%',
      isPositive: true,
      icon: Eye,
      color: 'from-orange-500 to-amber-500',
    },
  ]

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="w-8 h-8 border-4 border-primary-500/30 rounded-full animate-spin border-t-primary-500"></div>
      </div>
    )
  }

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-white">Dashboard</h1>
        <p className="text-gray-400 mt-2">Visão geral do desempenho do seu site</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {statCards.map((stat, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <Card className="relative overflow-hidden">
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-gray-400 text-sm">{stat.title}</p>
                  <h3 className="text-3xl font-bold text-white mt-1">
                    {stat.value.toLocaleString()}
                  </h3>
                  <div className={`flex items-center gap-1 mt-2 text-sm ${stat.isPositive ? 'text-green-400' : 'text-red-400'}`}>
                    {stat.isPositive ? <ArrowUp className="w-4 h-4" /> : <ArrowDown className="w-4 h-4" />}
                    {stat.change} vs. período anterior
                  </div>
                </div>
                <div className={`w-12 h-12 bg-gradient-to-br ${stat.color} rounded-xl flex items-center justify-center`}>
                  <stat.icon className="w-6 h-6 text-white" />
                </div>
              </div>
              <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${stat.color}`} />
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Charts */}
      <div className="grid lg:grid-cols-2 gap-6">
        {/* Line Chart */}
        <Card>
          <h3 className="text-lg font-semibold text-white mb-6">Cliques nos Últimos 7 Dias</h3>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={chartData}>
                <defs>
                  <linearGradient id="colorClicks" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#0ea5e9" stopOpacity={0.3} />
                    <stop offset="95%" stopColor="#0ea5e9" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
                <XAxis dataKey="date" stroke="#94a3b8" />
                <YAxis stroke="#94a3b8" />
                <Tooltip
                  contentStyle={{
                    backgroundColor: '#1e293b',
                    border: '1px solid rgba(255,255,255,0.1)',
                    borderRadius: '12px',
                  }}
                />
                <Area
                  type="monotone"
                  dataKey="clicks"
                  stroke="#0ea5e9"
                  fillOpacity={1}
                  fill="url(#colorClicks)"
                  strokeWidth={2}
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </Card>

        {/* Button Stats */}
        <Card>
          <h3 className="text-lg font-semibold text-white mb-6">Cliques por Botão</h3>
          <div className="space-y-4">
            {stats?.byButton && Object.entries(stats.byButton).map(([button, count], index) => {
              const total = Object.values(stats.byButton).reduce((a, b) => a + b, 0)
              const percentage = Math.round((count / total) * 100)
              const buttonNames: Record<string, string> = {
                hero_cta: 'Botão Hero (Topo)',
                cta_buy: 'Botão Comprar (Final)',
                header_cta: 'Botão Header',
                other: 'Outros',
              }
              return (
                <div key={button}>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-gray-400">{buttonNames[button] || button}</span>
                    <span className="text-white font-medium">{count.toLocaleString()} ({percentage}%)</span>
                  </div>
                  <div className="h-2 bg-dark-700 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${percentage}%` }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="h-full bg-gradient-to-r from-primary-500 to-accent-500 rounded-full"
                    />
                  </div>
                </div>
              )
            })}
          </div>
        </Card>
      </div>

      {/* Quick Actions */}
      <Card>
        <h3 className="text-lg font-semibold text-white mb-4">Ações Rápidas</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <a
            href="/admin/content"
            className="p-4 bg-dark-700/50 rounded-xl border border-white/5 hover:border-primary-500/30 transition-colors group"
          >
            <h4 className="text-white font-medium group-hover:text-primary-400 transition-colors">
              Editar Conteúdo
            </h4>
            <p className="text-gray-400 text-sm mt-1">
              Atualize textos e informações do site
            </p>
          </a>
          <a
            href="/admin/analytics"
            className="p-4 bg-dark-700/50 rounded-xl border border-white/5 hover:border-primary-500/30 transition-colors group"
          >
            <h4 className="text-white font-medium group-hover:text-primary-400 transition-colors">
              Ver Analytics
            </h4>
            <p className="text-gray-400 text-sm mt-1">
              Análise detalhada de cliques
            </p>
          </a>
          <a
            href="/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 bg-dark-700/50 rounded-xl border border-white/5 hover:border-primary-500/30 transition-colors group"
          >
            <h4 className="text-white font-medium group-hover:text-primary-400 transition-colors">
              Visualizar Site
            </h4>
            <p className="text-gray-400 text-sm mt-1">
              Veja como está o site ao vivo
            </p>
          </a>
        </div>
      </Card>
    </div>
  )
}

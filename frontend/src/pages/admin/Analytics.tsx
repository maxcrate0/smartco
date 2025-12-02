import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Calendar, Download, Filter } from 'lucide-react'
import { Button, Card } from '../../components/ui'
import { getAnalytics } from '../../services/api'
import {
  AreaChart,
  Area,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from 'recharts'

interface AnalyticsData {
  dailyClicks: Array<{ date: string; clicks: number }>
  hourlyClicks: Array<{ hour: string; clicks: number }>
  buttonStats: Array<{ name: string; value: number }>
  totalClicks: number
  conversionRate: number
}

const COLORS = ['#0ea5e9', '#8b5cf6', '#10b981', '#f59e0b', '#ef4444']

export default function AdminAnalytics() {
  const [data, setData] = useState<AnalyticsData | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [dateRange, setDateRange] = useState('7d')

  useEffect(() => {
    const fetchData = async () => {
      try {
        const analytics = await getAnalytics()
        setData(analytics)
      } catch (error) {
        console.error('Error fetching analytics:', error)
        // Mock data for demo
        setData({
          dailyClicks: [
            { date: '25/11', clicks: 45 },
            { date: '26/11', clicks: 52 },
            { date: '27/11', clicks: 38 },
            { date: '28/11', clicks: 65 },
            { date: '29/11', clicks: 48 },
            { date: '30/11', clicks: 72 },
            { date: '01/12', clicks: 56 },
          ],
          hourlyClicks: [
            { hour: '00h', clicks: 5 },
            { hour: '06h', clicks: 12 },
            { hour: '09h', clicks: 45 },
            { hour: '12h', clicks: 38 },
            { hour: '15h', clicks: 52 },
            { hour: '18h', clicks: 65 },
            { hour: '21h', clicks: 32 },
          ],
          buttonStats: [
            { name: 'Hero CTA', value: 456 },
            { name: 'Comprar', value: 378 },
            { name: 'Header', value: 200 },
            { name: 'Outros', value: 150 },
          ],
          totalClicks: 1184,
          conversionRate: 3.2,
        })
      } finally {
        setIsLoading(false)
      }
    }
    fetchData()
  }, [dateRange])

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
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-white">Analytics</h1>
          <p className="text-gray-400 mt-2">Análise detalhada de cliques e conversões</p>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2 bg-dark-800 rounded-xl p-1">
            {['7d', '30d', '90d'].map((range) => (
              <button
                key={range}
                onClick={() => setDateRange(range)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  dateRange === range
                    ? 'bg-primary-500 text-white'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                {range === '7d' ? '7 dias' : range === '30d' ? '30 dias' : '90 dias'}
              </button>
            ))}
          </div>
          <Button variant="outline" size="sm">
            <Download className="w-4 h-4 mr-2" />
            Exportar
          </Button>
        </div>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <Card className="bg-gradient-to-br from-primary-500/20 to-primary-500/5 border-primary-500/30">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-400 text-sm">Total de Cliques</p>
                <h3 className="text-4xl font-bold text-white mt-1">
                  {data?.totalClicks.toLocaleString()}
                </h3>
              </div>
              <div className="w-16 h-16 bg-primary-500/20 rounded-2xl flex items-center justify-center">
                <Calendar className="w-8 h-8 text-primary-400" />
              </div>
            </div>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          <Card className="bg-gradient-to-br from-green-500/20 to-green-500/5 border-green-500/30">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-400 text-sm">Taxa de Conversão</p>
                <h3 className="text-4xl font-bold text-white mt-1">
                  {data?.conversionRate}%
                </h3>
              </div>
              <div className="w-16 h-16 bg-green-500/20 rounded-2xl flex items-center justify-center">
                <Filter className="w-8 h-8 text-green-400" />
              </div>
            </div>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <Card className="bg-gradient-to-br from-accent-500/20 to-accent-500/5 border-accent-500/30">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-400 text-sm">Média Diária</p>
                <h3 className="text-4xl font-bold text-white mt-1">
                  {data ? Math.round(data.totalClicks / 7) : 0}
                </h3>
              </div>
              <div className="w-16 h-16 bg-accent-500/20 rounded-2xl flex items-center justify-center">
                <span className="text-3xl">📊</span>
              </div>
            </div>
          </Card>
        </motion.div>
      </div>

      {/* Charts */}
      <div className="grid lg:grid-cols-2 gap-6">
        {/* Daily Clicks */}
        <Card>
          <h3 className="text-lg font-semibold text-white mb-6">Cliques por Dia</h3>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={data?.dailyClicks}>
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

        {/* Hourly Distribution */}
        <Card>
          <h3 className="text-lg font-semibold text-white mb-6">Distribuição por Horário</h3>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={data?.hourlyClicks}>
                <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
                <XAxis dataKey="hour" stroke="#94a3b8" />
                <YAxis stroke="#94a3b8" />
                <Tooltip
                  contentStyle={{
                    backgroundColor: '#1e293b',
                    border: '1px solid rgba(255,255,255,0.1)',
                    borderRadius: '12px',
                  }}
                />
                <Bar
                  dataKey="clicks"
                  fill="#8b5cf6"
                  radius={[4, 4, 0, 0]}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </Card>
      </div>

      {/* Button Distribution */}
      <Card>
        <h3 className="text-lg font-semibold text-white mb-6">Cliques por Botão</h3>
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={data?.buttonStats}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={100}
                  paddingAngle={5}
                  dataKey="value"
                >
                  {data?.buttonStats.map((_, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip
                  contentStyle={{
                    backgroundColor: '#1e293b',
                    border: '1px solid rgba(255,255,255,0.1)',
                    borderRadius: '12px',
                  }}
                />
              </PieChart>
            </ResponsiveContainer>
          </div>
          <div className="space-y-4">
            {data?.buttonStats.map((stat, index) => (
              <div key={stat.name} className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div
                    className="w-4 h-4 rounded-full"
                    style={{ backgroundColor: COLORS[index % COLORS.length] }}
                  />
                  <span className="text-gray-300">{stat.name}</span>
                </div>
                <div className="text-right">
                  <span className="text-white font-semibold">{stat.value}</span>
                  <span className="text-gray-400 text-sm ml-2">
                    ({Math.round((stat.value / (data?.totalClicks || 1)) * 100)}%)
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Card>
    </div>
  )
}

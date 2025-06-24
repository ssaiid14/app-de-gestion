import DashboardHome from '../components/dashboard/DashboardHome'
import StatsCard from '../components/dashboard/StatsCard'
import Charts from '../components/dashboard/Charts'
import RecentActivity from '../components/dashboard/RecentActivity'
import AIInsights from '../components/dashboard/AIInsights'
import { Users, Package, TrendingUp, DollarSign } from 'lucide-react'

const Dashboard = () => {
  const stats = [
    {
      title: 'Total Usuarios',
      value: '2,543',
      change: '+12%',
      changeType: 'positive',
      icon: Users,
      color: 'blue'
    },
    {
      title: 'Productos Activos',
      value: '1,234',
      change: '+8%',
      changeType: 'positive',
      icon: Package,
      color: 'green'
    },
    {
      title: 'Ventas del Mes',
      value: '$45,231',
      change: '+23%',
      changeType: 'positive',
      icon: DollarSign,
      color: 'yellow'
    },
    {
      title: 'Crecimiento',
      value: '18.2%',
      change: '+2.1%',
      changeType: 'positive',
      icon: TrendingUp,
      color: 'purple'
    }
  ]

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
          <p className="text-gray-600">Resumen general de tu negocio</p>
        </div>
        <div className="flex items-center space-x-3">
          <button className="bg-primary-600 text-white px-4 py-2 rounded-lg hover:bg-primary-700 transition-colors">
            Generar Reporte
          </button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <StatsCard key={index} {...stat} />
        ))}
      </div>

      {/* Charts and Activity */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <Charts />
        </div>
        <div>
          <RecentActivity />
        </div>
      </div>

      {/* AI Insights */}
      <AIInsights />
    </div>
  )
}

export default Dashboard
import { User, Package, FileText, TrendingUp } from 'lucide-react'

const RecentActivity = () => {
  const activities = [
    {
      id: 1,
      type: 'user',
      icon: User,
      title: 'Nuevo usuario registrado',
      description: 'Juan Pérez se registró en la plataforma',
      time: 'Hace 5 minutos',
      color: 'blue'
    },
    {
      id: 2,
      type: 'product',
      icon: Package,
      title: 'Producto agregado',
      description: 'Laptop Dell XPS 13 añadida al inventario',
      time: 'Hace 15 minutos',
      color: 'green'
    },
    {
      id: 3,
      type: 'report',
      icon: FileText,
      title: 'Reporte generado',
      description: 'Reporte mensual de ventas completado',
      time: 'Hace 1 hora',
      color: 'purple'
    },
    {
      id: 4,
      type: 'analytics',
      icon: TrendingUp,
      title: 'Análisis IA completado',
      description: 'Predicción de ventas actualizada',
      time: 'Hace 2 horas',
      color: 'yellow'
    }
  ]

  const colorClasses = {
    blue: 'bg-blue-100 text-blue-600',
    green: 'bg-green-100 text-green-600',
    purple: 'bg-purple-100 text-purple-600',
    yellow: 'bg-yellow-100 text-yellow-600'
  }

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-lg font-semibold text-gray-900">Actividad Reciente</h3>
        <button className="text-sm text-primary-600 hover:text-primary-700">
          Ver todo
        </button>
      </div>

      <div className="space-y-4">
        {activities.map((activity) => (
          <div key={activity.id} className="flex items-start space-x-3">
            <div className={`p-2 rounded-lg ${colorClasses[activity.color]}`}>
              <activity.icon className="h-4 w-4" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-gray-900">
                {activity.title}
              </p>
              <p className="text-sm text-gray-500 truncate">
                {activity.description}
              </p>
              <p className="text-xs text-gray-400 mt-1">
                {activity.time}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default RecentActivity
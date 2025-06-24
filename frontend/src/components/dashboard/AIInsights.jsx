import { Brain, TrendingUp, AlertTriangle, Target, Lightbulb } from 'lucide-react'

const AIInsights = () => {
  const insights = [
    {
      id: 1,
      type: 'prediction',
      icon: TrendingUp,
      title: 'Predicción de Ventas',
      description: 'Se espera un aumento del 15% en ventas para el próximo mes basado en tendencias actuales.',
      confidence: 87,
      color: 'green'
    },
    {
      id: 2,
      type: 'anomaly',
      icon: AlertTriangle,
      title: 'Anomalía Detectada',
      description: 'Detectada una disminución inusual en la actividad de usuarios los fines de semana.',
      confidence: 92,
      color: 'yellow'
    },
    {
      id: 3,
      type: 'opportunity',
      icon: Target,
      title: 'Oportunidad de Negocio',
      description: 'Los productos de la categoría "Electrónicos" muestran alta demanda. Considera expandir inventario.',
      confidence: 78,
      color: 'blue'
    },
    {
      id: 4,
      type: 'recommendation',
      icon: Lightbulb,
      title: 'Recomendación',
      description: 'Implementar campañas de marketing dirigidas a usuarios inactivos podría aumentar retención en 23%.',
      confidence: 85,
      color: 'purple'
    }
  ]

  const colorClasses = {
    green: 'bg-green-50 border-green-200 text-green-800',
    yellow: 'bg-yellow-50 border-yellow-200 text-yellow-800',
    blue: 'bg-blue-50 border-blue-200 text-blue-800',
    purple: 'bg-purple-50 border-purple-200 text-purple-800'
  }

  const iconColorClasses = {
    green: 'text-green-600',
    yellow: 'text-yellow-600',
    blue: 'text-blue-600',
    purple: 'text-purple-600'
  }

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-2">
          <Brain className="h-6 w-6 text-primary-600" />
          <h3 className="text-lg font-semibold text-gray-900">Insights de IA</h3>
        </div>
        <button className="text-sm text-primary-600 hover:text-primary-700">
          Ver análisis completo
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {insights.map((insight) => (
          <div key={insight.id} className={`p-4 rounded-lg border ${colorClasses[insight.color]}`}>
            <div className="flex items-start space-x-3">
              <insight.icon className={`h-5 w-5 mt-1 ${iconColorClasses[insight.color]}`} />
              <div className="flex-1">
                <h4 className="font-medium text-sm mb-1">{insight.title}</h4>
                <p className="text-sm opacity-90 mb-3">{insight.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-xs font-medium">
                    Confianza: {insight.confidence}%
                  </span>
                  <div className="w-16 bg-white bg-opacity-50 rounded-full h-1.5">
                    <div 
                      className="h-1.5 rounded-full bg-current opacity-70"
                      style={{ width: `${insight.confidence}%` }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default AIInsights
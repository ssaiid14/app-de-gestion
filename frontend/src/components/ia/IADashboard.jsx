import { Brain, Activity, Clock, CheckCircle, AlertTriangle } from 'lucide-react'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar } from 'recharts'

const IADashboard = () => {
  const modelos = [
    {
      id: 1,
      nombre: 'Predicción de Ventas',
      tipo: 'Regresión',
      precision: '94.2%',
      estado: 'Activo',
      ultimoEntrenamiento: '2024-01-20',
      descripcion: 'Predice ventas futuras basado en datos históricos'
    },
    {
      id: 2,
      nombre: 'Detección de Anomalías',
      tipo: 'Clasificación',
      precision: '87.8%',
      estado: 'Activo',
      ultimoEntrenamiento: '2024-01-18',
      descripcion: 'Identifica patrones anómalos en transacciones'
    },
    {
      id: 3,
      nombre: 'Segmentación de Clientes',
      tipo: 'Clustering',
      precision: '91.5%',
      estado: 'Entrenando',
      ultimoEntrenamiento: '2024-01-19',
      descripcion: 'Agrupa clientes por comportamiento de compra'
    },
    {
      id: 4,
      nombre: 'Optimización de Inventario',
      tipo: 'Optimización',
      precision: '89.3%',
      estado: 'Activo',
      ultimoEntrenamiento: '2024-01-17',
      descripcion: 'Optimiza niveles de stock por producto'
    }
  ]

  const performanceData = [
    { name: 'Ene', precision: 88, predicciones: 124 },
    { name: 'Feb', precision: 91, predicciones: 156 },
    { name: 'Mar', precision: 89, predicciones: 143 },
    { name: 'Abr', precision: 94, predicciones: 189 },
    { name: 'May', precision: 92, predicciones: 167 },
    { name: 'Jun', precision: 95, predicciones: 198 }
  ]

  const alertas = [
    {
      id: 1,
      tipo: 'warning',
      titulo: 'Modelo necesita reentrenamiento',
      descripcion: 'El modelo de predicción de ventas ha bajado en precisión',
      tiempo: 'Hace 2 horas'
    },
    {
      id: 2,
      tipo: 'info',
      titulo: 'Análisis completado',
      descripcion: 'Segmentación de clientes procesada exitosamente',
      tiempo: 'Hace 4 horas'
    },
    {
      id: 3,
      tipo: 'error',
      titulo: 'Error en procesamiento',
      descripcion: 'Fallo en la carga de datos para análisis de anomalías',
      tiempo: 'Hace 6 horas'
    }
  ]

  const getEstadoBadge = (estado) => {
    const variants = {
      'Activo': 'bg-green-100 text-green-800',
      'Entrenando': 'bg-yellow-100 text-yellow-800',
      'Inactivo': 'bg-gray-100 text-gray-800',
      'Error': 'bg-red-100 text-red-800'
    }
    return variants[estado] || 'bg-gray-100 text-gray-800'
  }

  const getAlertIcon = (tipo) => {
    switch (tipo) {
      case 'warning':
        return <AlertTriangle className="h-5 w-5 text-yellow-500" />
      case 'error':
        return <AlertTriangle className="h-5 w-5 text-red-500" />
      case 'info':
        return <CheckCircle className="h-5 w-5 text-blue-500" />
      default:
        return <Activity className="h-5 w-5 text-gray-500" />
    }
  }

  return (
    <div className="space-y-6">
      {/* Modelos de IA */}
      <div>
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Modelos de IA Activos</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {modelos.map((modelo) => (
            <div key={modelo.id} className="border border-gray-200 rounded-lg p-6">
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-primary-100 rounded-lg">
                    <Brain className="h-5 w-5 text-primary-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">{modelo.nombre}</h4>
                    <p className="text-sm text-gray-500">{modelo.tipo}</p>
                  </div>
                </div>
                <span className={`px-2 py-1 rounded-full text-xs font-medium ${getEstadoBadge(modelo.estado)}`}>
                  {modelo.estado}
                </span>
              </div>
              
              <p className="text-sm text-gray-600 mb-4">{modelo.descripcion}</p>
              
              <div className="flex justify-between items-center text-sm">
                <div>
                  <span className="text-gray-500">Precisión: </span>
                  <span className="font-medium text-gray-900">{modelo.precision}</span>
                </div>
                <div>
                  <span className="text-gray-500">Actualizado: </span>
                  <span className="font-medium text-gray-900">{modelo.ultimoEntrenamiento}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Performance Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="border border-gray-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Precisión de Modelos</h3>
          <div style={{ width: '100%', height: 250 }}>
            <ResponsiveContainer>
              <LineChart data={performanceData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="precision" stroke="#3B82F6" strokeWidth={2} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="border border-gray-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Predicciones Generadas</h3>
          <div style={{ width: '100%', height: 250 }}>
            <ResponsiveContainer>
              <BarChart data={performanceData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="predicciones" fill="#10B981" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* Alertas y Notificaciones */}
      <div>
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Alertas Recientes</h3>
        <div className="space-y-3">
          {alertas.map((alerta) => (
            <div key={alerta.id} className="flex items-start space-x-3 p-4 border border-gray-200 rounded-lg">
              {getAlertIcon(alerta.tipo)}
              <div className="flex-1">
                <h4 className="font-medium text-gray-900">{alerta.titulo}</h4>
                <p className="text-sm text-gray-600">{alerta.descripcion}</p>
                <p className="text-xs text-gray-400 mt-1">{alerta.tiempo}</p>
              </div>
              <button className="text-gray-400 hover:text-gray-600">
                <Clock className="h-4 w-4" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default IADashboard
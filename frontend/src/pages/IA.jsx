import IADashboard from '../components/ia/IADashboard'

const IA = () => {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Inteligencia Artificial</h1>
          <p className="text-gray-600">Panel de control de modelos y análisis con IA</p>
        </div>
        <div className="flex items-center space-x-3">
          <button className="bg-primary-600 text-white px-4 py-2 rounded-lg hover:bg-primary-700 transition-colors">
            Entrenar Modelo
          </button>
        </div>
      </div>

      {/* IA Dashboard */}
      <IADashboard />
    </div>
  )
}

export default IA
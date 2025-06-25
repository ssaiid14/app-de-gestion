import Card from '../common/Card'

const ReporteCharts = ({ data }) => {
  const chartData = data || [
    { mes: 'Enero', completados: 4, pendientes: 2 },
    { mes: 'Febrero', completados: 6, pendientes: 1 },
    { mes: 'Marzo', completados: 8, pendientes: 3 },
    { mes: 'Abril', completados: 5, pendientes: 2 },
    { mes: 'Mayo', completados: 9, pendientes: 1 },
    { mes: 'Junio', completados: 7, pendientes: 2 },
  ]

  const maxValue = Math.max(
    ...chartData.flatMap(d => [d.completados, d.pendientes])
  )

  return (
    <Card>
      <div className="p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-6">Estadísticas de Reportes</h3>
        
        <div className="space-y-4">
          {chartData.map((item, index) => (
            <div key={index} className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="font-medium">{item.mes}</span>
                <span className="text-gray-500">
                  {item.completados + item.pendientes} total
                </span>
              </div>
              <div className="flex gap-2">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    <span className="text-xs text-gray-600">Completados</span>
                  </div>
                  <div className="h-6 bg-gray-200 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-green-500 transition-all duration-500"
                      style={{ width: `${(item.completados / maxValue) * 100}%` }}
                    ></div>
                  </div>
                  <span className="text-xs text-gray-500 mt-1">{item.completados}</span>
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <span className="text-xs text-gray-600">Pendientes</span>
                  </div>
                  <div className="h-6 bg-gray-200 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-yellow-500 transition-all duration-500"
                      style={{ width: `${(item.pendientes / maxValue) * 100}%` }}
                    ></div>
                  </div>
                  <span className="text-xs text-gray-500 mt-1">{item.pendientes}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6 pt-4 border-t">
          <div className="grid grid-cols-3 gap-4 text-center">
            <div>
              <p className="text-2xl font-bold text-green-600">
                {chartData.reduce((sum, item) => sum + item.completados, 0)}
              </p>
              <p className="text-sm text-gray-500">Completados</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-yellow-600">
                {chartData.reduce((sum, item) => sum + item.pendientes, 0)}
              </p>
              <p className="text-sm text-gray-500">Pendientes</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-blue-600">
                {chartData.reduce((sum, item) => sum + item.completados + item.pendientes, 0)}
              </p>
              <p className="text-sm text-gray-500">Total</p>
            </div>
          </div>
        </div>
      </div>
    </Card>
  )
}

export default ReporteCharts
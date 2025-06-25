import { useState, useEffect } from 'react'
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  Cell
} from 'recharts'

const salesData = [
  { month: 'Ene', ventas: 12000, clientes: 30 },
  { month: 'Feb', ventas: 15000, clientes: 40 },
  { month: 'Mar', ventas: 18000, clientes: 45 },
  { month: 'Abr', ventas: 20000, clientes: 50 },
  { month: 'May', ventas: 22000, clientes: 55 },
  { month: 'Jun', ventas: 25000, clientes: 60 },
  { month: 'Jul', ventas: 27000, clientes: 65 },
  { month: 'Ago', ventas: 30000, clientes: 70 },
  { month: 'Sep', ventas: 32000, clientes: 75 },
  { month: 'Oct', ventas: 35000, clientes: 80 },
  { month: 'Nov', ventas: 37000, clientes: 85 },
  { month: 'Dic', ventas: 40000, clientes: 90 },
]

const topProducts = [
  { name: 'Producto A', ventas: 1200, porcentaje: 20 },
  { name: 'Producto B', ventas: 950, porcentaje: 16 },
  { name: 'Producto C', ventas: 800, porcentaje: 13 },
  { name: 'Producto D', ventas: 700, porcentaje: 11 },
  { name: 'Producto E', ventas: 600, porcentaje: 10 },
  { name: 'Producto F', ventas: 500, porcentaje: 8 },
  { name: 'Producto G', ventas: 400, porcentaje: 7 },
  { name: 'Producto H', ventas: 350, porcentaje: 6 },
  { name: 'Producto I', ventas: 300, porcentaje: 5 },
  { name: 'Producto J', ventas: 250, porcentaje: 4 },
]

const COLORS = [
  '#3b82f6', '#10b981', '#f59e42', '#ef4444', '#a78bfa',
  '#fbbf24', '#6366f1', '#14b8a6', '#f472b6', '#f87171'
]

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white p-2 rounded shadow text-xs border border-gray-200">
        <div className="font-semibold mb-1">{label}</div>
        {payload.map((entry, idx) => (
          <div key={idx} style={{ color: entry.color }}>
            {entry.name}: {entry.dataKey === 'ventas' ? `$${entry.value.toLocaleString()}` : entry.value}
          </div>
        ))}
      </div>
    )
  }
  return null
}

const ProductTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    const entry = payload[0]
    return (
      <div className="bg-white p-2 rounded shadow text-xs border border-gray-200">
        <div className="font-semibold mb-1">{label}</div>
        {entry.dataKey === 'ventas'
          ? <div>Unidades vendidas: {entry.value}</div>
          : <div>Participación: {entry.value}%</div>}
      </div>
    )
  }
  return null
}

const SalesDashboard = () => {
  const [isMobile, setIsMobile] = useState(false)
  const [activeTab, setActiveTab] = useState('ventas')
  const [mainTab, setMainTab] = useState('evolucion')

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768)
    }
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const handleProductClick = (data) => {
    console.log('Producto seleccionado:', data)
  }

  return (
    <div className="space-y-6">
      {/* Tabs principales */}
      <div className="flex border-b border-gray-200 mb-4">
        <button
          className={`px-4 py-2 text-sm font-medium ${mainTab === 'evolucion' ? 'border-b-2 border-blue-500 text-blue-600' : 'text-gray-600'}`}
          onClick={() => setMainTab('evolucion')}
        >
          Evolución de Ventas
        </button>
        <button
          className={`px-4 py-2 text-sm font-medium ${mainTab === 'productos' ? 'border-b-2 border-blue-500 text-blue-600' : 'text-gray-600'}`}
          onClick={() => setMainTab('productos')}
        >
          Productos Más Vendidos
        </button>
      </div>

      {/* Tab: Evolución de ventas */}
      {mainTab === 'evolucion' && (
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
          <div className="p-4 md:p-5">
            <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-2">
              Evolución Mensual de Ventas
            </h3>
            <p className="text-sm text-gray-500 mb-4">Datos anuales en dólares</p>
            <div className="w-full" style={{ height: isMobile ? '300px' : '400px' }}>
              <ResponsiveContainer width="100%" height="100%">
                <LineChart
                  data={salesData}
                  margin={{
                    top: 5,
                    right: isMobile ? 10 : 30,
                    left: isMobile ? 0 : 20,
                    bottom: 5
                  }}
                >
                  <CartesianGrid strokeDasharray="3 3" stroke="#f3f4f6" />
                  <XAxis dataKey="month" tick={{ fontSize: isMobile ? 10 : 12, fill: '#6b7280' }} tickLine={false} />
                  <YAxis
                    yAxisId="left"
                    tick={{ fontSize: isMobile ? 10 : 12, fill: '#6b7280' }}
                    tickLine={false}
                    tickFormatter={(value) => `$${(value / 1000)}k`}
                  />
                  <YAxis
                    yAxisId="right"
                    orientation="right"
                    tick={{ fontSize: isMobile ? 10 : 12, fill: '#6b7280' }}
                    tickLine={false}
                  />
                  <Tooltip content={<CustomTooltip />} />
                  <Legend wrapperStyle={{ paddingTop: 10 }} iconType="circle" iconSize={10} />
                  <Line yAxisId="left" type="monotone" dataKey="ventas" stroke="#3b82f6" strokeWidth={2} dot={{ r: 3 }} name="Ventas ($)" />
                  <Line yAxisId="right" type="monotone" dataKey="clientes" stroke="#10b981" strokeWidth={2} dot={{ r: 3 }} name="Clientes" />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      )}

      {/* Tab: Productos más vendidos */}
      {mainTab === 'productos' && (
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
          <div className="p-4 md:p-5">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg md:text-xl font-semibold text-gray-900">
                Productos Más Vendidos
              </h3>
              <div className="inline-flex border border-gray-200 rounded-lg overflow-hidden">
                <button
                  className={`px-3 py-1 text-sm ${activeTab === 'ventas' ? 'bg-blue-500 text-white' : 'bg-white text-gray-700'}`}
                  onClick={() => setActiveTab('ventas')}
                >
                  Ventas
                </button>
                <button
                  className={`px-3 py-1 text-sm ${activeTab === 'porcentaje' ? 'bg-blue-500 text-white' : 'bg-white text-gray-700'}`}
                  onClick={() => setActiveTab('porcentaje')}
                >
                  Participación
                </button>
              </div>
            </div>

            <p className="text-sm text-gray-500 mb-4">Total anual de unidades vendidas</p>

            <div className="w-full" style={{ height: isMobile ? '350px' : '450px' }}>
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={topProducts}
                  layout="vertical"
                  margin={{
                    top: 5,
                    right: isMobile ? 10 : 30,
                    left: isMobile ? 80 : 120,
                    bottom: 5
                  }}
                >
                  <CartesianGrid strokeDasharray="3 3" stroke="#f3f4f6" horizontal vertical={false} />
                  <XAxis
                    type="number"
                    tick={{ fontSize: isMobile ? 10 : 12, fill: '#6b7280' }}
                    tickLine={false}
                    tickFormatter={(v) => activeTab === 'porcentaje' ? `${v}%` : v.toLocaleString()}
                    domain={activeTab === 'porcentaje' ? [0, 25] : undefined}
                  />
                  <YAxis
                    dataKey="name"
                    type="category"
                    width={isMobile ? 70 : 100}
                    tick={{ fontSize: isMobile ? 10 : 12, fill: '#6b7280' }}
                    tickLine={false}
                  />
                  <Tooltip content={<ProductTooltip />} />
                  <Bar
                    dataKey={activeTab}
                    name={activeTab === 'ventas' ? 'Unidades vendidas' : 'Participación (%)'}
                    onClick={handleProductClick}
                  >
                    {topProducts.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>

            {isMobile && (
              <div className="mt-4 grid grid-cols-2 gap-2">
                {topProducts.slice(0, 4).map((product, index) => (
                  <div key={`legend-${index}`} className="flex items-center">
                    <span className="inline-block w-3 h-3 rounded-full mr-2" style={{ backgroundColor: COLORS[index] }} />
                    <span className="text-xs text-gray-600 truncate">{product.name}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  )
}

export default SalesDashboard

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, BarChart, Bar, ResponsiveContainer } from 'recharts'
import { useState } from 'react'

const Charts = () => {
  const [activeChart, setActiveChart] = useState('ventas')

  const ventasData = [
    { name: 'Ene', ventas: 4000, usuarios: 2400 },
    { name: 'Feb', ventas: 3000, usuarios: 1398 },
    { name: 'Mar', ventas: 2000, usuarios: 9800 },
    { name: 'Abr', ventas: 2780, usuarios: 3908 },
    { name: 'May', ventas: 1890, usuarios: 4800 },
    { name: 'Jun', ventas: 2390, usuarios: 3800 },
    { name: 'Jul', ventas: 3490, usuarios: 4300 }
  ]

  const productosData = [
    { name: 'Producto A', cantidad: 400 },
    { name: 'Producto B', cantidad: 300 },
    { name: 'Producto C', cantidad: 300 },
    { name: 'Producto D', cantidad: 200 },
    { name: 'Producto E', cantidad: 150 }
  ]

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-lg font-semibold text-gray-900">Análisis de Datos</h3>
        <div className="flex space-x-2">
          <button
            onClick={() => setActiveChart('ventas')}
            className={`px-3 py-1 rounded-md text-sm font-medium transition-colors ${
              activeChart === 'ventas' 
                ? 'bg-primary-100 text-primary-700' 
                : 'text-gray-500 hover:text-gray-700'
            }`}
          >
            Ventas
          </button>
          <button
            onClick={() => setActiveChart('productos')}
            className={`px-3 py-1 rounded-md text-sm font-medium transition-colors ${
              activeChart === 'productos' 
                ? 'bg-primary-100 text-primary-700' 
                : 'text-gray-500 hover:text-gray-700'
            }`}
          >
            Productos
          </button>
        </div>
      </div>

      <div style={{ width: '100%', height: 300 }}>
        {activeChart === 'ventas' ? (
          <ResponsiveContainer>
            <LineChart data={ventasData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="ventas" stroke="#3B82F6" strokeWidth={2} />
              <Line type="monotone" dataKey="usuarios" stroke="#10B981" strokeWidth={2} />
            </LineChart>
          </ResponsiveContainer>
        ) : (
          <ResponsiveContainer>
            <BarChart data={productosData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="cantidad" fill="#3B82F6" />
            </BarChart>
          </ResponsiveContainer>
        )}
      </div>
    </div>
  )
}

export default Charts
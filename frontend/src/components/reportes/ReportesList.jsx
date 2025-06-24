import { useState } from 'react'
import { Download, Eye, Calendar, Filter, Search } from 'lucide-react'
import Badge from '../common/Badge'

const ReportesList = ({ onViewReport }) => {
  const [searchTerm, setSearchTerm] = useState('')
  const [filterStatus, setFilterStatus] = useState('all')

  const reportes = [
    {
      id: 1,
      nombre: 'Reporte de Ventas Mensual',
      tipo: 'Ventas',
      fechaCreacion: '2024-01-20',
      fechaGeneracion: '2024-01-20 14:30',
      estado: 'Completado',
      tamaño: '2.4 MB',
      formato: 'PDF',
      descripcion: 'Análisis completo de ventas del mes de enero'
    },
    {
      id: 2,
      nombre: 'Análisis de Usuarios Q1',
      tipo: 'Usuarios',
      fechaCreacion: '2024-01-18',
      fechaGeneracion: '2024-01-18 09:15',
      estado: 'Completado',
      tamaño: '1.8 MB',
      formato: 'Excel',
      descripcion: 'Comportamiento y métricas de usuarios primer trimestre'
    },
    {
      id: 3,
      nombre: 'Inventario por Categorías',
      tipo: 'Productos',
      fechaCreacion: '2024-01-17',
      fechaGeneracion: '2024-01-17 16:45',
      estado: 'Completado',
      tamaño: '956 KB',
      formato: 'PDF',
      descripcion: 'Estado actual del inventario segmentado por categorías'
    },
    {
      id: 4,
      nombre: 'Predicciones IA - Febrero',
      tipo: 'IA',
      fechaCreacion: '2024-01-16',
      fechaGeneracion: 'Programado para 2024-02-01',
      estado: 'Programado',
      tamaño: '-',
      formato: 'PDF',
      descripcion: 'Predicciones y análisis automatizado con IA'
    },
    {
      id: 5,
      nombre: 'ROI Campañas Marketing',
      tipo: 'Marketing',
      fechaCreacion: '2024-01-15',
      fechaGeneracion: '2024-01-15 11:20',
      estado: 'Completado',
      tamaño: '3.2 MB',
      formato: 'Excel',
      descripcion: 'Retorno de inversión de campañas publicitarias'
    }
  ]

  const filteredReportes = reportes.filter(reporte => {
    const matchesSearch = reporte.nombre.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         reporte.tipo.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesStatus = filterStatus === 'all' || reporte.estado.toLowerCase() === filterStatus
    return matchesSearch && matchesStatus
  })

  const getStatusBadge = (estado) => {
    const variants = {
      'Completado': 'success',
      'Programado': 'info',
      'Procesando': 'warning',
      'Error': 'danger'
    }
    return <Badge variant={variants[estado]} text={estado} />
  }

  const getTipoBadge = (tipo) => {
    return <Badge variant="secondary" text={tipo} />
  }

  return (
    <div className="space-y-6">
      {/* Filters */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-4 md:space-y-0">
        <div className="flex-1 max-w-md">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            <input
              type="text"
              placeholder="Buscar reportes..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 pr-4 py-2 w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
            />
          </div>
        </div>
        
        <div className="flex items-center space-x-3">
          <select
            value={filterStatus}
            onChange={(e) => setFilterStatus(e.target.value)}
            className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
          >
            <option value="all">Todos los estados</option>
            <option value="completado">Completado</option>
            <option value="programado">Programado</option>
            <option value="procesando">Procesando</option>
          </select>
          
          <button className="flex items-center space-x-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
            <Filter className="h-4 w-4" />
            <span>Filtros</span>
          </button>
        </div>
      </div>

      {/* Reports List */}
      <div className="space-y-4">
        {filteredReportes.map((reporte) => (
          <div key={reporte.id} className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <div className="flex items-center space-x-3 mb-2">
                  <h3 className="text-lg font-semibold text-gray-900">
                    {reporte.nombre}
                  </h3>
                  {getTipoBadge(reporte.tipo)}
                  {getStatusBadge(reporte.estado)}
                </div>
                
                <p className="text-gray-600 mb-3">
                  {reporte.descripcion}
                </p>
                
                <div className="flex items-center space-x-6 text-sm text-gray-500">
                  <div className="flex items-center space-x-1">
                    <Calendar className="h-4 w-4" />
                    <span>Creado: {reporte.fechaCreacion}</span>
                  </div>
                  <div>
                    <span>Generado: {reporte.fechaGeneracion}</span>
                  </div>
                  <div>
                    <span>Formato: {reporte.formato}</span>
                  </div>
                  {reporte.tamaño !== '-' && (
                    <div>
                      <span>Tamaño: {reporte.tamaño}</span>
                    </div>
                  )}
                </div>
              </div>
              
              <div className="flex items-center space-x-2 ml-4">
                {reporte.estado === 'Completado' && (
                  <>
                    <button
                      onClick={() => onViewReport(reporte)}
                      className="p-2 text-gray-600 hover:text-primary-600 hover:bg-primary-50 rounded-lg transition-colors"
                      title="Ver reporte"
                    >
                      <Eye className="h-5 w-5" />
                    </button>
                    <button
                      className="p-2 text-gray-600 hover:text-green-600 hover:bg-green-50 rounded-lg transition-colors"
                      title="Descargar"
                    >
                      <Download className="h-5 w-5" />
                    </button>
                  </>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {filteredReportes.length === 0 && (
        <div className="text-center py-12">
          <div className="text-gray-400 mb-4">
            <FileText className="h-12 w-12 mx-auto" />
          </div>
          <h3 className="text-lg font-medium text-gray-900 mb-2">
            No se encontraron reportes
          </h3>
          <p className="text-gray-500">
            Intenta ajustar los filtros de búsqueda
          </p>
        </div>
      )}
    </div>
  )
}

export default ReportesList
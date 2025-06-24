import { useState } from 'react'
import { Calendar, FileText, Download, Settings } from 'lucide-react'
import Button from '../common/Button'
import Input from '../common/Input'

const ReporteGenerator = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    tipo: 'ventas',
    formato: 'pdf',
    fechaInicio: '',
    fechaFin: '',
    incluirGraficos: true,
    incluirTablas: true,
    incluirAnalisisIA: false,
    programar: false,
    frecuencia: 'mensual'
  })
  
  const [loading, setLoading] = useState(false)

  const tiposReporte = [
    { value: 'ventas', label: 'Reporte de Ventas' },
    { value: 'usuarios', label: 'Análisis de Usuarios' },
    { value: 'productos', label: 'Reporte de Productos' },
    { value: 'financiero', label: 'Reporte Financiero' },
    { value: 'marketing', label: 'Análisis de Marketing' },
    { value: 'ia', label: 'Predicciones IA' }
  ]

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }))
  }

  const handleGenerate = async (e) => {
    e.preventDefault()
    setLoading(true)

    try {
      // Simular generación de reporte
      await new Promise(resolve => setTimeout(resolve, 3000))
      
      console.log('Generando reporte:', formData)
      alert('¡Reporte generado exitosamente!')
    } catch (error) {
      console.error('Error al generar reporte:', error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="space-y-6">
      {/* Quick Actions */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <button className="p-6 border-2 border-dashed border-gray-300 rounded-lg hover:border-primary-500 hover:bg-primary-50 transition-colors text-center">
          <FileText className="h-8 w-8 text-gray-400 mx-auto mb-2" />
          <h3 className="font-medium text-gray-900">Reporte Rápido</h3>
          <p className="text-sm text-gray-500">Generar reporte básico</p>
        </button>
        
        <button className="p-6 border-2 border-dashed border-gray-300 rounded-lg hover:border-primary-500 hover:bg-primary-50 transition-colors text-center">
          <Calendar className="h-8 w-8 text-gray-400 mx-auto mb-2" />
          <h3 className="font-medium text-gray-900">Reporte Mensual</h3>
          <p className="text-sm text-gray-500">Template predefinido</p>
        </button>
        
        <button className="p-6 border-2 border-dashed border-gray-300 rounded-lg hover:border-primary-500 hover:bg-primary-50 transition-colors text-center">
          <Settings className="h-8 w-8 text-gray-400 mx-auto mb-2" />
          <h3 className="font-medium text-gray-900">Personalizado</h3>
          <p className="text-sm text-gray-500">Configuración avanzada</p>
        </button>
      </div>

      {/* Form */}
      <form onSubmit={handleGenerate} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Input
            label="Nombre del Reporte"
            name="nombre"
            value={formData.nombre}
            onChange={handleChange}
            required
            placeholder="Ej: Reporte de Ventas Enero 2024"
          />

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Tipo de Reporte
            </label>
            <select
              name="tipo"
              value={formData.tipo}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
            >
              {tiposReporte.map(tipo => (
                <option key={tipo.value} value={tipo.value}>
                  {tipo.label}
                </option>
              ))}
            </select>
          </div>

          <Input
            label="Fecha de Inicio"
            name="fechaInicio"
            type="date"
            value={formData.fechaInicio}
            onChange={handleChange}
            required
          />

          <Input
            label="Fecha de Fin"
            name="fechaFin"
            type="date"
            value={formData.fechaFin}
            onChange={handleChange}
            required
          />

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Formato de Salida
            </label>
            <select
              name="formato"
              value={formData.formato}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
            >
              <option value="pdf">PDF</option>
              <option value="excel">Excel</option>
              <option value="csv">CSV</option>
              <option value="word">Word</option>
            </select>
          </div>
        </div>

        {/* Options */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-gray-900">Opciones del Reporte</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <label className="flex items-center space-x-3">
              <input
                type="checkbox"
                name="incluirGraficos"
                checked={formData.incluirGraficos}
                onChange={handleChange}
                className="rounded border-gray-300 text-primary-600 focus:ring-primary-500"
              />
              <span className="text-sm text-gray-700">Incluir gráficos y visualizaciones</span>
            </label>

            <label className="flex items-center space-x-3">
              <input
                type="checkbox"
                name="incluirTablas"
                checked={formData.incluirTablas}
                onChange={handleChange}
                className="rounded border-gray-300 text-primary-600 focus:ring-primary-500"
              />
              <span className="text-sm text-gray-700">Incluir tablas de datos</span>
            </label>

            <label className="flex items-center space-x-3">
              <input
                type="checkbox"
                name="incluirAnalisisIA"
                checked={formData.incluirAnalisisIA}
                onChange={handleChange}
                className="rounded border-gray-300 text-primary-600 focus:ring-primary-500"
              />
              <span className="text-sm text-gray-700">Incluir análisis con IA</span>
            </label>

            <label className="flex items-center space-x-3">
              <input
                type="checkbox"
                name="programar"
                checked={formData.programar}
                onChange={handleChange}
                className="rounded border-gray-300 text-primary-600 focus:ring-primary-500"
              />
              <span className="text-sm text-gray-700">Programar generación automática</span>
            </label>
          </div>

          {formData.programar && (
            <div className="mt-4">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Frecuencia de Generación
              </label>
              <select
                name="frecuencia"
                value={formData.frecuencia}
                onChange={handleChange}
                className="w-full md:w-48 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
              >
                <option value="diaria">Diaria</option>
                <option value="semanal">Semanal</option>
                <option value="mensual">Mensual</option>
                <option value="trimestral">Trimestral</option>
              </select>
            </div>
          )}
        </div>

        {/* Actions */}
        <div className="flex justify-end space-x-3 pt-6 border-t border-gray-200">
          <Button
            type="button"
            variant="secondary"
          >
            Guardar como Template
          </Button>
          <Button
            type="submit"
            variant="primary"
            loading={loading}
          >
            <Download className="h-4 w-4 mr-2" />
            {loading ? 'Generando...' : 'Generar Reporte'}
          </Button>
        </div>
      </form>
    </div>
  )
}

export default ReporteGenerator
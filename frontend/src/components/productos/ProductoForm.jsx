import { useState, useEffect } from 'react'
import { Upload, X } from 'lucide-react'
import Button from '../common/Button'
import Input from '../common/Input'

const ProductoForm = ({ product, onClose }) => {
  const [formData, setFormData] = useState({
    nombre: '',
    descripcion: '',
    categoria: 'electronica',
    precio: '',
    stock: '',
    estado: 'Activo',
    imagen: null
  })

  const [loading, setLoading] = useState(false)
  const [imagePreview, setImagePreview] = useState(null)

  const categories = [
    { value: 'electronica', label: 'Electrónica' },
    { value: 'ropa', label: 'Ropa' },
    { value: 'hogar', label: 'Hogar' },
    { value: 'deportes', label: 'Deportes' }
  ]

  useEffect(() => {
    if (product) {
      setFormData({
        nombre: product.nombre || '',
        descripcion: product.descripcion || '',
        categoria: product.categoria || 'electronica',
        precio: product.precio?.toString() || '',
        stock: product.stock?.toString() || '',
        estado: product.estado || 'Activo',
        imagen: null
      })
      if (product.imagen) {
        setImagePreview(product.imagen)
      }
    }
  }, [product])

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleImageChange = (e) => {
    const file = e.target.files[0]
    if (file) {
      setFormData(prev => ({
        ...prev,
        imagen: file
      }))
      
      const reader = new FileReader()
      reader.onloadend = () => {
        setImagePreview(reader.result)
      }
      reader.readAsDataURL(file)
    }
  }

  const removeImage = () => {
    setFormData(prev => ({
      ...prev,
      imagen: null
    }))
    setImagePreview(null)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)

    try {
      // Simular API call
      await new Promise(resolve => setTimeout(resolve, 1500))
      
      console.log('Datos del producto:', formData)
      onClose()
    } catch (error) {
      console.error('Error al guardar producto:', error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Imagen */}
        <div className="md:col-span-2">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Imagen del Producto
          </label>
          
          {imagePreview ? (
            <div className="relative inline-block">
              <img
                src={imagePreview}
                alt="Preview"
                className="w-32 h-32 object-cover rounded-lg border border-gray-300"
              />
              <button
                type="button"
                onClick={removeImage}
                className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full p-1 hover:bg-red-600"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
          ) : (
            <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
              <Upload className="h-8 w-8 text-gray-400 mx-auto mb-2" />
              <p className="text-sm text-gray-500 mb-2">
                Haz clic para subir una imagen o arrastra y suelta
              </p>
              <input
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                className="hidden"
                id="image-upload"
              />
              <label
                htmlFor="image-upload"
                className="cursor-pointer bg-primary-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-primary-700"
              >
                Seleccionar Imagen
              </label>
            </div>
          )}
        </div>

        <Input
          label="Stock"
          name="stock"
          type="number"
          value={formData.stock}
          onChange={handleChange}
          required
          placeholder="0"
        />

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Estado
          </label>
          <select
            name="estado"
            value={formData.estado}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
          >
            <option value="Activo">Activo</option>
            <option value="Inactivo">Inactivo</option>
            <option value="Agotado">Agotado</option>
          </select>
        </div>

        <div className="md:col-span-2">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Descripción
          </label>
          <textarea
            name="descripcion"
            value={formData.descripcion}
            onChange={handleChange}
            rows={4}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
            placeholder="Descripción detallada del producto..."
          />
        </div>
      </div>

      <div className="flex justify-end space-x-3 pt-6 border-t border-gray-200">
        <Button
          type="button"
          variant="secondary"
          onClick={onClose}
        >
          Cancelar
        </Button>
        <Button
          type="submit"
          variant="primary"
          loading={loading}
        >
          {product ? 'Actualizar' : 'Crear'} Producto
        </Button>
      </div>
    </form>
  )
}

export default ProductoForm
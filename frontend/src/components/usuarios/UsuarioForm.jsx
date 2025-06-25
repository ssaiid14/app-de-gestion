import { useState, useEffect } from 'react'
import Button from '../common/Button'
import Input from '../common/Input'

const roles = [
  { value: 'Usuario', label: 'Usuario' },
  { value: 'Editor', label: 'Editor' },
  { value: 'Administrador', label: 'Administrador' }
]

const estados = [
  { value: 'Activo', label: 'Activo' },
  { value: 'Inactivo', label: 'Inactivo' },
  { value: 'Pendiente', label: 'Pendiente' }
]

const UsuarioForm = ({ user, onClose }) => {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    telefono: '',
    rol: 'Usuario',
    estado: 'Activo'
  })

  const [loading, setLoading] = useState(false)

  useEffect(() => {
    if (user) {
      setFormData({
        nombre: user.nombre || '',
        email: user.email || '',
        telefono: user.telefono || '',
        rol: user.rol || 'Usuario',
        estado: user.estado || 'Activo'
      })
    }
  }, [user])

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)

    try {
      await new Promise(resolve => setTimeout(resolve, 1000))
      console.log('Datos del usuario:', formData)
      onClose()
    } catch (error) {
      console.error('Error al guardar usuario:', error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
    >
      <div className="flex items-center justify-between mb-2">
      </div>
      <div className="grid grid-cols-1 gap-4">
        <Input
          label="Nombre"
          name="nombre"
          value={formData.nombre}
          onChange={handleChange}
          required
          placeholder="Nombre completo"
          className="bg-gray-50"
        />

        <Input
          label="Email"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          required
          placeholder="correo@ejemplo.com"
          className="bg-gray-50"
        />

        <Input
          label="Teléfono"
          name="telefono"
          value={formData.telefono}
          onChange={handleChange}
          placeholder="+34 666 123 456"
          className="bg-gray-50"
        />

        <div>
          <label className="block text-xs font-medium text-gray-500 mb-1">
            Rol
          </label>
          <select
            name="rol"
            value={formData.rol}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-1 focus:ring-primary-400 bg-gray-50 text-gray-700"
          >
            {roles.map(r => (
              <option key={r.value} value={r.value}>{r.label}</option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-xs font-medium text-gray-500 mb-1">
            Estado
          </label>
          <select
            name="estado"
            value={formData.estado}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-1 focus:ring-primary-400 bg-gray-50 text-gray-700"
          >
            {estados.map(e => (
              <option key={e.value} value={e.value}>{e.label}</option>
            ))}
          </select>
        </div>
      </div>

      <div className="flex justify-end space-x-2 pt-4">
        <Button
          type="button"
          variant="secondary"
          onClick={onClose}
          className="min-w-[90px]"
        >
          Cancelar
        </Button>
        <Button
          type="submit"
          variant="primary"
          loading={loading}
          className="min-w-[110px]"
        >
          {user ? 'Actualizar' : 'Crear'}
        </Button>
      </div>
    </form>
  )
}

export default UsuarioForm
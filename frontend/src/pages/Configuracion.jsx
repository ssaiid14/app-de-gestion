import { useState } from 'react'
import { Settings, User, Bell, Shield, Database, Palette } from 'lucide-react'
import Button from '../components/common/Button'
import Input from '../components/common/Input'

const Configuracion = () => {
  const [activeTab, setActiveTab] = useState('perfil')
  const [formData, setFormData] = useState({
    nombre: 'Admin User',
    email: 'admin@example.com',
    telefono: '+34 666 123 456',
    empresa: 'Mi Empresa',
    notificaciones: true,
    temaOscuro: false
  })

  const tabs = [
    { id: 'perfil', name: 'Perfil', icon: User },
    { id: 'notificaciones', name: 'Notificaciones', icon: Bell },
    { id: 'seguridad', name: 'Seguridad', icon: Shield },
    { id: 'sistema', name: 'Sistema', icon: Database },
    { id: 'apariencia', name: 'Apariencia', icon: Palette }
  ]

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Configuración guardada:', formData)
    alert('Configuración guardada exitosamente')
  }

  return (
    <div className="space-y-8 max-w-5xl mx-auto py-8">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Configuración</h1>
          <p className="text-gray-500 mt-1">Personaliza tu experiencia en la plataforma</p>
        </div>
      </div>

      <div className="bg-white rounded-2xl shadow-lg border border-gray-100 flex overflow-hidden">
        {/* Sidebar */}
        <aside className="w-64 bg-gradient-to-b from-primary-50 to-white border-r border-gray-100 p-6">
          <nav className="space-y-2">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`w-full flex items-center gap-3 px-4 py-2.5 text-left rounded-xl font-medium transition-all duration-150 ${
                  activeTab === tab.id
                    ? 'bg-primary-100 text-primary-700 shadow'
                    : 'text-gray-600 hover:bg-primary-50 hover:text-primary-700'
                }`}
              >
                <tab.icon className={`h-5 w-5 ${activeTab === tab.id ? 'text-primary-600' : 'text-gray-400'}`} />
                <span>{tab.name}</span>
              </button>
            ))}
          </nav>
        </aside>

        {/* Content */}
        <main className="flex-1 p-8 bg-gray-50 min-h-[500px]">
          {activeTab === 'perfil' && (
            <form onSubmit={handleSubmit} className="space-y-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Información Personal</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <Input
                  label="Nombre Completo"
                  name="nombre"
                  value={formData.nombre}
                  onChange={handleChange}
                />
                <Input
                  label="Email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                />
                <Input
                  label="Teléfono"
                  name="telefono"
                  value={formData.telefono}
                  onChange={handleChange}
                />
                <Input
                  label="Empresa"
                  name="empresa"
                  value={formData.empresa}
                  onChange={handleChange}
                />
              </div>
              <div className="flex justify-end">
                <Button type="submit" variant="primary" className="px-8 py-2 rounded-lg text-base">
                  Guardar Cambios
                </Button>
              </div>
            </form>
          )}

          {activeTab === 'notificaciones' && (
            <div className="space-y-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Preferencias de Notificaciones</h3>
              <div className="space-y-5">
                <label className="flex items-center gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    name="notificaciones"
                    checked={formData.notificaciones}
                    onChange={handleChange}
                    className="accent-primary-600 h-5 w-5"
                  />
                  <span className="text-gray-700">Recibir notificaciones por email</span>
                </label>
                <label className="flex items-center gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    className="accent-primary-600 h-5 w-5"
                  />
                  <span className="text-gray-700">Notificaciones de nuevos reportes</span>
                </label>
                <label className="flex items-center gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    className="accent-primary-600 h-5 w-5"
                  />
                  <span className="text-gray-700">Alertas de sistema</span>
                </label>
              </div>
            </div>
          )}

          {activeTab === 'seguridad' && (
            <div className="space-y-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Seguridad</h3>
              <div className="flex flex-col md:flex-row gap-4">
                <Button variant="primary" className="flex-1 py-3 rounded-lg">
                  Cambiar Contraseña
                </Button>
                <Button variant="secondary" className="flex-1 py-3 rounded-lg">
                  Configurar 2FA
                </Button>
                <Button variant="danger" className="flex-1 py-3 rounded-lg">
                  Cerrar Todas las Sesiones
                </Button>
              </div>
            </div>
          )}

          {activeTab === 'sistema' && (
            <div className="space-y-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Configuración del Sistema</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="p-6 border border-gray-200 rounded-2xl bg-white shadow-sm">
                  <h4 className="font-medium text-gray-900">Base de Datos</h4>
                  <p className="text-sm text-gray-500 mt-1">Estado: <span className="text-green-600 font-semibold">Conectado</span></p>
                  <Button variant="secondary" className="mt-4 w-full">
                    Respaldar Datos
                  </Button>
                </div>
                <div className="p-6 border border-gray-200 rounded-2xl bg-white shadow-sm">
                  <h4 className="font-medium text-gray-900">API</h4>
                  <p className="text-sm text-gray-500 mt-1">Estado: <span className="text-green-600 font-semibold">Activo</span></p>
                  <Button variant="secondary" className="mt-4 w-full">
                    Ver Logs
                  </Button>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'apariencia' && (
            <div className="space-y-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Apariencia</h3>
              <div className="space-y-5">
                <label className="flex items-center gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    name="temaOscuro"
                    checked={formData.temaOscuro}
                    onChange={handleChange}
                    className="accent-primary-600 h-5 w-5"
                  />
                  <span className="text-gray-700">Tema oscuro</span>
                </label>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Idioma
                  </label>
                  <select className="w-48 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 bg-white shadow-sm">
                    <option>Español</option>
                    <option>English</option>
                    <option>Français</option>
                  </select>
                </div>
              </div>
            </div>
          )}
        </main>
      </div>
    </div>
  )
}

export default Configuracion

import { useState, useMemo } from 'react'
import { Plus, Search, Filter, Download, X } from 'lucide-react'
import UsuariosList from '../components/usuarios/UsuariosList'
import UsuarioForm from '../components/usuarios/UsuarioForm'
import Modal from '../components/common/Modal'

// Simulación de usuarios
const usuariosMock = [
  { id: 1, nombre: 'Juan', email: 'juan@mail.com', rol: 'admin' },
  { id: 2, nombre: 'Ana', email: 'ana@mail.com', rol: 'user' },
  { id: 3, nombre: 'Luis', email: 'luis@mail.com', rol: 'user' },
  { id: 4, nombre: 'Marta', email: 'marta@mail.com', rol: 'admin' },
]

const roles = ['admin', 'user']

const Usuarios = () => {
  const [usuarios, setUsuarios] = useState(usuariosMock)
  const [showForm, setShowForm] = useState(false)
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedUser, setSelectedUser] = useState(null)
  const [showFilters, setShowFilters] = useState(false)
  const [filterRol, setFilterRol] = useState('')

  // Filtrado de usuarios
  const filteredUsuarios = useMemo(() => {
    return usuarios.filter(u =>
      (!filterRol || u.rol === filterRol) &&
      (u.nombre.toLowerCase().includes(searchTerm.toLowerCase()) ||
        u.email.toLowerCase().includes(searchTerm.toLowerCase()))
    )
  }, [usuarios, searchTerm, filterRol])

  const handleEditUser = (user) => {
    setSelectedUser(user)
    setShowForm(true)
  }

  const handleCloseForm = () => {
    setShowForm(false)
    setSelectedUser(null)
  }

  // Exportar a CSV
  const handleExport = () => {
    const csvRows = [
      ['ID', 'Nombre', 'Email', 'Rol'],
      ...filteredUsuarios.map(u => [u.id, u.nombre, u.email, u.rol])
    ]
    const csvContent = csvRows.map(e => e.join(',')).join('\n')
    const blob = new Blob([csvContent], { type: 'text/csv' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = 'usuarios.csv'
    a.click()
    URL.revokeObjectURL(url)
  }

  // Filtro reactivo y minimalista
  const handleFilterRolChange = (e) => {
    setFilterRol(e.target.value)
    // El filtro se aplica automáticamente, no se cierra el modal
  }

  const handleClearFilters = () => {
    setFilterRol('')
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Gestión de Usuarios</h1>
          <p className="text-gray-600">Administra los usuarios de tu plataforma</p>
        </div>
        <button
          onClick={() => setShowForm(true)}
          className="flex items-center space-x-2 bg-primary-600 text-white px-4 py-2 rounded-lg hover:bg-primary-700 transition-colors"
        >
          <Plus className="h-4 w-4" />
          <span>Nuevo Usuario</span>
        </button>
      </div>

      {/* Filters and Search */}
      <div className="bg-white rounded-xl shadow-md border border-gray-200 p-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-4 md:space-y-0">
          <div className="flex-1 max-w-md">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <input
                type="text"
                placeholder="Buscar usuarios..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 pr-4 py-2 w-full border-none rounded-lg bg-gray-100 focus:bg-white focus:ring-2 focus:ring-primary-500 transition-all"
                style={{ boxShadow: '0 2px 16px 0 rgba(0,0,0,0.04)' }}
              />
            </div>
          </div>
          <div className="flex items-center space-x-3">
            <button
              className="flex items-center space-x-2 px-4 py-2 border-none rounded-lg bg-gradient-to-r from-primary-500 to-primary-700 text-white shadow-md hover:from-primary-600 hover:to-primary-800 transition-all"
              onClick={() => setShowFilters(true)}
            >
              <Filter className="h-4 w-4" />
              <span>Filtros</span>
              {(filterRol) && (
                <span className="ml-2 px-2 py-0.5 rounded-full bg-white/20 text-xs">{filterRol}</span>
              )}
            </button>
            <button
              className="flex items-center space-x-2 px-4 py-2 border-none rounded-lg bg-gray-900 text-white shadow-md hover:bg-gray-700 transition-all"
              onClick={handleExport}
            >
              <Download className="h-4 w-4" />
              <span>Exportar</span>
            </button>
          </div>
        </div>
      </div>

      {/* Users List */}
      <UsuariosList 
        usuarios={filteredUsuarios}
        searchTerm={searchTerm}
        onEditUser={handleEditUser}
      />

      {/* User Form Modal */}
      <Modal
        isOpen={showForm}
        onClose={handleCloseForm}
        title={selectedUser ? 'Editar Usuario' : 'Nuevo Usuario'}
      >
        <UsuarioForm
          user={selectedUser}
          onClose={handleCloseForm}
          setUsuarios={setUsuarios}
          usuarios={usuarios}
        />
      </Modal>

      {/* Filtros Modal Futurista y Minimal */}
      <Modal
        isOpen={showFilters}
        onClose={() => setShowFilters(false)}
        title={
          <div className="flex items-center justify-between w-full">
            <span>Filtrar Usuarios</span>
            <button
              className="ml-2 p-1 rounded-full hover:bg-gray-100 transition"
              onClick={() => setShowFilters(false)}
              aria-label="Cerrar"
              type="button"
            >
              <X className="h-5 w-5 text-gray-400" />
            </button>
          </div>
        }
      >
        <div className="space-y-6 py-2">
          <div>
            <label className="block text-sm font-medium text-gray-500 mb-2">Rol</label>
            <div className="relative">
              <select
                className="appearance-none w-full px-4 py-2 rounded-xl bg-gray-100 border-none focus:ring-2 focus:ring-primary-500 text-gray-900 transition-all"
                value={filterRol}
                onChange={handleFilterRolChange}
              >
                <option value="">Todos</option>
                {roles.map(r => (
                  <option key={r} value={r}>{r}</option>
                ))}
              </select>
              <span className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400">
                ▼
              </span>
            </div>
          </div>
          <div className="flex justify-between items-center">
            <button
              className="px-4 py-2 rounded-lg bg-gray-200 text-gray-700 hover:bg-gray-300 transition"
              onClick={handleClearFilters}
              type="button"
              disabled={!filterRol}
            >
              Limpiar Filtros
            </button>
            <button
              className="px-4 py-2 rounded-lg bg-primary-600 text-white hover:bg-primary-700 transition"
              onClick={() => setShowFilters(false)}
              type="button"
            >
              Cerrar
            </button>
          </div>
        </div>
      </Modal>
    </div>
  )
}

export default Usuarios
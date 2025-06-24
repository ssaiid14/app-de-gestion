import { useState, useMemo } from 'react'
import { Edit, Trash2, Mail, Phone, MoreVertical } from 'lucide-react'
import Badge from '../common/Badge'

const UsuariosList = ({ searchTerm, onEditUser }) => {
  const [usuarios, setUsuarios] = useState([
    {
      id: 1,
      nombre: 'Ana García',
      email: 'ana.garcia@email.com',
      telefono: '+34 666 123 456',
      rol: 'Administrador',
      estado: 'Activo',
      fechaRegistro: '2024-01-15',
      ultimoAcceso: '2024-01-20'
    },
    {
      id: 2,
      nombre: 'Carlos Martínez',
      email: 'carlos.martinez@email.com',
      telefono: '+34 677 234 567',
      rol: 'Usuario',
      estado: 'Activo',
      fechaRegistro: '2024-01-10',
      ultimoAcceso: '2024-01-19'
    },
    {
      id: 3,
      nombre: 'María López',
      email: 'maria.lopez@email.com',
      telefono: '+34 688 345 678',
      rol: 'Editor',
      estado: 'Inactivo',
      fechaRegistro: '2024-01-05',
      ultimoAcceso: '2024-01-15'
    },
    {
      id: 4,
      nombre: 'David Rodríguez',
      email: 'david.rodriguez@email.com',
      telefono: '+34 699 456 789',
      rol: 'Usuario',
      estado: 'Activo',
      fechaRegistro: '2024-01-08',
      ultimoAcceso: '2024-01-18'
    }
  ])

  const filteredUsuarios = useMemo(() => {
    return usuarios.filter(usuario =>
      usuario.nombre.toLowerCase().includes(searchTerm.toLowerCase()) ||
      usuario.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      usuario.rol.toLowerCase().includes(searchTerm.toLowerCase())
    )
  }, [usuarios, searchTerm])

  const handleDeleteUser = (userId) => {
    if (window.confirm('¿Estás seguro de que quieres eliminar este usuario?')) {
      setUsuarios(usuarios.filter(user => user.id !== userId))
    }
  }

  const getStatusBadge = (estado) => {
    const variants = {
      'Activo': 'success',
      'Inactivo': 'danger',
      'Pendiente': 'warning'
    }
    return <Badge variant={variants[estado]} text={estado} />
  }

  const getRoleBadge = (rol) => {
    const variants = {
      'Administrador': 'primary',
      'Editor': 'info',
      'Usuario': 'secondary'
    }
    return <Badge variant={variants[rol]} text={rol} />
  }

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200">
      <div className="px-6 py-4 border-b border-gray-200">
        <h3 className="text-lg font-semibold text-gray-900">
          Lista de Usuarios ({filteredUsuarios.length})
        </h3>
      </div>
      
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Usuario
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Contacto
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Rol
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Estado
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Último Acceso
              </th>
              <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                Acciones
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {filteredUsuarios.map((usuario) => (
              <tr key={usuario.id} className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <div className="h-10 w-10 bg-primary-500 rounded-full flex items-center justify-center">
                      <span className="text-white font-medium text-sm">
                        {usuario.nombre.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                    <div className="ml-4">
                      <div className="text-sm font-medium text-gray-900">
                        {usuario.nombre}
                      </div>
                      <div className="text-sm text-gray-500">
                        ID: {usuario.id}
                      </div>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900 flex items-center">
                    <Mail className="h-4 w-4 mr-1 text-gray-400" />
                    {usuario.email}
                  </div>
                  <div className="text-sm text-gray-500 flex items-center mt-1">
                    <Phone className="h-4 w-4 mr-1 text-gray-400" />
                    {usuario.telefono}
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {getRoleBadge(usuario.rol)}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {getStatusBadge(usuario.estado)}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {usuario.ultimoAcceso}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                  <div className="flex items-center justify-end space-x-2">
                    <button
                      onClick={() => onEditUser(usuario)}
                      className="text-primary-600 hover:text-primary-900 p-1 rounded"
                    >
                      <Edit className="h-4 w-4" />
                    </button>
                    <button
                      onClick={() => handleDeleteUser(usuario.id)}
                      className="text-red-600 hover:text-red-900 p-1 rounded"
                    >
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default UsuariosList
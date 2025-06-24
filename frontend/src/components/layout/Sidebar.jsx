import { 
  LayoutDashboard, 
  Users, 
  Package, 
  FileText, 
  Brain, 
  Settings, 
  X 
} from 'lucide-react'
import { NavLink } from 'react-router-dom'

const Sidebar = ({ isOpen, onClose }) => {
  const menuItems = [
    {
      name: 'Dashboard',
      icon: LayoutDashboard,
      path: '/dashboard'
    },
    {
      name: 'Usuarios',
      icon: Users,
      path: '/usuarios'
    },
    {
      name: 'Productos',
      icon: Package,
      path: '/productos'
    },
    {
      name: 'Reportes',
      icon: FileText,
      path: '/reportes'
    },
    {
      name: 'Inteligencia Artificial',
      icon: Brain,
      path: '/ia'
    },
    {
      name: 'Configuración',
      icon: Settings,
      path: '/configuracion'
    }
  ]

  return (
    <>
      {/* Sidebar */}
      <div className={`
        fixed lg:static inset-y-0 left-0 z-50 w-64 bg-white border-r border-gray-200 
        transform transition-transform duration-300 ease-in-out
        ${isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
      `}>
        {/* Logo */}
        <div className="flex items-center justify-between h-16 px-6 border-b border-gray-200">
          <div className="flex items-center space-x-2">
            <div className="h-8 w-8 bg-primary-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">DM</span>
            </div>
            <span className="text-xl font-bold text-gray-900">Dashboard</span>
          </div>
          
          <button
            onClick={onClose}
            className="lg:hidden p-1 rounded-md hover:bg-gray-100"
          >
            <X className="h-5 w-5 text-gray-600" />
          </button>
        </div>

        {/* Navigation */}
        <nav className="mt-6 px-3">
          <div className="space-y-1">
            {menuItems.map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                className={({ isActive }) =>
                  `flex items-center px-3 py-2 text-sm font-medium rounded-lg transition-colors duration-200 ${
                    isActive
                      ? 'bg-primary-50 text-primary-700 border-r-2 border-primary-700'
                      : 'text-gray-700 hover:bg-gray-100'
                  }`
                }
              >
                <item.icon className="mr-3 h-5 w-5" />
                {item.name}
              </NavLink>
            ))}
          </div>
        </nav>

        {/* Bottom section */}
        <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-gray-200">
          <div className="bg-primary-50 rounded-lg p-4">
            <div className="flex items-center">
              <Brain className="h-8 w-8 text-primary-500" />
              <div className="ml-3">
                <p className="text-sm font-medium text-primary-900">IA Activa</p>
                <p className="text-xs text-primary-600">Análisis en tiempo real</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Sidebar
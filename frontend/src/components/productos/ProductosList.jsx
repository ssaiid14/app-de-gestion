import { useState, useMemo } from 'react'
import { Edit, Trash2, Eye, Package, Star } from 'lucide-react'
import Badge from '../common/Badge'

const ProductosList = ({ searchTerm, filterCategory, viewMode, onEditProduct }) => {
  const [productos, setProductos] = useState([
    {
      id: 1,
      nombre: 'iPhone 15 Pro',
      descripcion: 'Smartphone Apple con chip A17 Pro',
      categoria: 'electronica',
      precio: 1199.99,
      stock: 25,
      estado: 'Activo',
      fechaCreacion: '2024-01-15',
      imagen: '/api/placeholder/200/200',
      rating: 4.8,
      ventas: 156
    },
    {
      id: 2,
      nombre: 'Camiseta Nike Air',
      descripcion: 'Camiseta deportiva de algodón',
      categoria: 'ropa',
      precio: 29.99,
      stock: 100,
      estado: 'Activo',
      fechaCreacion: '2024-01-10',
      imagen: '/api/placeholder/200/200',
      rating: 4.5,
      ventas: 89
    },
    {
      id: 3,
      nombre: 'Sofá Moderno',
      descripcion: 'Sofá de 3 plazas color gris',
      categoria: 'hogar',
      precio: 599.99,
      stock: 5,
      estado: 'Agotado',
      fechaCreacion: '2024-01-08',
      imagen: '/api/placeholder/200/200',
      rating: 4.3,
      ventas: 23
    },
    {
      id: 4,
      nombre: 'Zapatillas Running',
      descripcion: 'Zapatillas para correr profesionales',
      categoria: 'deportes',
      precio: 129.99,
      stock: 45,
      estado: 'Activo',
      fechaCreacion: '2024-01-05',
      imagen: '/api/placeholder/200/200',
      rating: 4.7,
      ventas: 67
    }
  ])

  const filteredProductos = useMemo(() => {
    return productos.filter(producto => {
      const matchesSearch = producto.nombre.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           producto.descripcion.toLowerCase().includes(searchTerm.toLowerCase())
      const matchesCategory = filterCategory === 'all' || producto.categoria === filterCategory
      return matchesSearch && matchesCategory
    })
  }, [productos, searchTerm, filterCategory])

  const handleDeleteProduct = (productId) => {
    if (window.confirm('¿Estás seguro de que quieres eliminar este producto?')) {
      setProductos(productos.filter(product => product.id !== productId))
    }
  }

  const getStatusBadge = (estado) => {
    const variants = {
      'Activo': 'success',
      'Agotado': 'danger',
      'Inactivo': 'warning'
    }
    return <Badge variant={variants[estado]} text={estado} />
  }

  const getCategoryBadge = (categoria) => {
    const categoryNames = {
      'electronica': 'Electrónica',
      'ropa': 'Ropa',
      'hogar': 'Hogar',
      'deportes': 'Deportes'
    }
    return <Badge variant="info" text={categoryNames[categoria]} />
  }

  if (viewMode === 'grid') {
    return (
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        <div className="mb-4">
          <h3 className="text-lg font-semibold text-gray-900">
            Productos ({filteredProductos.length})
          </h3>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProductos.map((producto) => (
            <div key={producto.id} className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition-shadow">
              <div className="aspect-w-1 aspect-h-1 bg-gray-200">
                <img
                  src={`https://via.placeholder.com/200x200?text=${producto.nombre}`}
                  alt={producto.nombre}
                  className="w-full h-48 object-cover"
                />
              </div>
              
              <div className="p-4">
                <div className="flex justify-between items-start mb-2">
                  <h4 className="font-semibold text-gray-900 truncate flex-1">
                    {producto.nombre}
                  </h4>
                  <div className="flex items-center ml-2">
                    <Star className="h-4 w-4 text-yellow-400 fill-current" />
                    <span className="text-sm text-gray-600 ml-1">{producto.rating}</span>
                  </div>
                </div>
                
                <p className="text-sm text-gray-600 mb-3 line-clamp-2">
                  {producto.descripcion}
                </p>
                
                <div className="flex justify-between items-center mb-3">
                  {getCategoryBadge(producto.categoria)}
                  {getStatusBadge(producto.estado)}
                </div>
                
                <div className="flex justify-between items-center mb-4">
                  <div>
                    <p className="text-lg font-bold text-gray-900">
                      €{producto.precio}
                    </p>
                    <p className="text-sm text-gray-500">
                      Stock: {producto.stock}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-gray-500">Ventas</p>
                    <p className="font-semibold text-gray-900">{producto.ventas}</p>
                  </div>
                </div>
                
                <div className="flex space-x-2">
                  <button
                    onClick={() => onEditProduct(producto)}
                    className="flex-1 bg-primary-600 text-white px-3 py-2 rounded-md text-sm hover:bg-primary-700 transition-colors"
                  >
                    <Edit className="h-4 w-4 mx-auto" />
                  </button>
                  <button className="flex-1 bg-gray-100 text-gray-600 px-3 py-2 rounded-md text-sm hover:bg-gray-200 transition-colors">
                    <Eye className="h-4 w-4 mx-auto" />
                  </button>
                  <button
                    onClick={() => handleDeleteProduct(producto.id)}
                    className="flex-1 bg-red-100 text-red-600 px-3 py-2 rounded-md text-sm hover:bg-red-200 transition-colors"
                  >
                    <Trash2 className="h-4 w-4 mx-auto" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    )
  }

  // List view
  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200">
      <div className="px-6 py-4 border-b border-gray-200">
        <h3 className="text-lg font-semibold text-gray-900">
          Lista de Productos ({filteredProductos.length})
        </h3>
      </div>
      
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Producto
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Categoría
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Precio
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Stock
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Estado
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Ventas
              </th>
              <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                Acciones
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {filteredProductos.map((producto) => (
              <tr key={producto.id} className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <div className="h-12 w-12 flex-shrink-0">
                      <img
                        className="h-12 w-12 rounded-lg object-cover"
                        src={`https://via.placeholder.com/48x48?text=${producto.nombre.charAt(0)}`}
                        alt={producto.nombre}
                      />
                    </div>
                    <div className="ml-4">
                      <div className="text-sm font-medium text-gray-900">
                        {producto.nombre}
                      </div>
                      <div className="text-sm text-gray-500 truncate max-w-xs">
                        {producto.descripcion}
                      </div>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {getCategoryBadge(producto.categoria)}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  €{producto.precio}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {producto.stock}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {getStatusBadge(producto.estado)}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {producto.ventas}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                  <div className="flex items-center justify-end space-x-2">
                    <button className="text-gray-600 hover:text-gray-900 p-1 rounded">
                      <Eye className="h-4 w-4" />
                    </button>
                    <button
                      onClick={() => onEditProduct(producto)}
                      className="text-primary-600 hover:text-primary-900 p-1 rounded"
                    >
                      <Edit className="h-4 w-4" />
                    </button>
                    <button
                      onClick={() => handleDeleteProduct(producto.id)}
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

export default ProductosList
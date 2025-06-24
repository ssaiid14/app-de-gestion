// Mock data para el dashboard

export const mockUsers = [
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
  // Más usuarios...
]

export const mockProducts = [
  {
    id: 1,
    nombre: 'iPhone 15 Pro',
    descripcion: 'Smartphone Apple con chip A17 Pro',
    categoria: 'electronica',
    precio: 1199.99,
    stock: 25,
    estado: 'Activo',
    fechaCreacion: '2024-01-15',
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
    rating: 4.5,
    ventas: 89
  },
  // Más productos...
]

export const mockReports = [
  {
    id: 1,
    nombre: 'Reporte de Ventas Mensual',
    tipo: 'Ventas',
    fechaCreacion: '2024-01-20',
    fechaGeneracion: '2024-01-20 14:30',
    estado: 'Completado',
    tamaño: '2.4 MB',
    formato: 'PDF'
  },
  // Más reportes...
]

export const mockChartData = {
  ventasData: [
    { name: 'Ene', ventas: 4000, usuarios: 2400 },
    { name: 'Feb', ventas: 3000, usuarios: 1398 },
    { name: 'Mar', ventas: 2000, usuarios: 9800 },
    { name: 'Abr', ventas: 2780, usuarios: 3908 },
    { name: 'May', ventas: 1890, usuarios: 4800 },
    { name: 'Jun', ventas: 2390, usuarios: 3800 },
    { name: 'Jul', ventas: 3490, usuarios: 4300 }
  ],
  productosData: [
    { name: 'Producto A', cantidad: 400 },
    { name: 'Producto B', cantidad: 300 },
    { name: 'Producto C', cantidad: 300 },
    { name: 'Producto D', cantidad: 200 },
    { name: 'Producto E', cantidad: 150 }
  ]
}

export const mockAIInsights = [
  {
    id: 1,
    type: 'prediction',
    title: 'Predicción de Ventas',
    description: 'Se espera un aumento del 15% en ventas para el próximo mes basado en tendencias actuales.',
    confidence: 87,
    color: 'green'
  },
  {
    id: 2,
    type: 'anomaly',
    title: 'Anomalía Detectada',
    description: 'Detectada una disminución inusual en la actividad de usuarios los fines de semana.',
    confidence: 92,
    color: 'yellow'
  },
  // Más insights...
]
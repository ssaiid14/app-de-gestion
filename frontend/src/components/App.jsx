import { Routes, Route, Navigate } from 'react-router-dom'
import Layout from './layout/Layout'
import Dashboard from '../pages/Dashboard'
import Usuarios from '../pages/Usuarios'
import Productos from '../pages/Productos'
import Reportes from '../pages/Reportes'
import IA from '../pages/IA'
import Configuracion from '../pages/Configuracion'
import Login from '../pages/Login'
import { useAuth } from '../hooks/useAuth'
import ChatBot from './common/ChatBot'

function App() {
  const { isAuthenticated } = useAuth()

  if (!isAuthenticated) {
    return <Login />
  }

  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Navigate to="/dashboard" replace />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/usuarios" element={<Usuarios />} />
        <Route path="/productos" element={<Productos />} />
        <Route path="/reportes" element={<Reportes />} />
        <Route path="/ia" element={<IA />} />
        <Route path="/configuracion" element={<Configuracion />} />
      </Routes>
      <ChatBot />
    </Layout>
  )
}

export default App
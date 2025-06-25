import { Routes, Route, Navigate } from 'react-router-dom'
import Layout from './components/layout/Layout.jsx'
import Dashboard from './pages/Dashboard.jsx'
import Usuarios from './pages/Usuarios.jsx'
import Productos from './pages/Productos.jsx'
import Reportes from './pages/Reportes.jsx'
import IA from './pages/IA.jsx'
import Configuracion from './pages/Configuracion.jsx'
import Login from './pages/Login.jsx'
import { useAuth } from './hooks/useAuth.jsx'
import ChatBot from './components/common/ChatBot.jsx'

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
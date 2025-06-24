import { createContext, useContext, useState, useEffect } from 'react'

const AuthContext = createContext()

export const useAuthContext = () => {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error('useAuthContext must be used within an AuthProvider')
  }
  return context
}

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Simular verificación de token al cargar la app
    const token = localStorage.getItem('token')
    if (token) {
      // Aquí harías la verificación real del token
      setUser({ id: 1, name: 'Admin User', email: 'admin@example.com' })
      setIsAuthenticated(true)
    }
    setLoading(false)
  }, [])

  const login = async (email, password) => {
    try {
      // Simular login
      if (email === 'admin@example.com' && password === 'admin123') {
        const userData = { id: 1, name: 'Admin User', email }
        setUser(userData)
        setIsAuthenticated(true)
        localStorage.setItem('token', 'fake-jwt-token')
        return { success: true }
      } else {
        return { success: false, error: 'Credenciales inválidas' }
      }
    } catch (error) {
      return { success: false, error: error.message }
    }
  }

  const logout = () => {
    setUser(null)
    setIsAuthenticated(false)
    localStorage.removeItem('token')
  }

  const value = {
    user,
    isAuthenticated,
    loading,
    login,
    logout
  }

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  )
}
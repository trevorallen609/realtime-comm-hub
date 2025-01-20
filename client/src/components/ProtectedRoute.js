import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'

const ProtectedRoute = ({ redirectPath = '/login', children }) => {
  const navigate = useNavigate()

  useEffect(() => {
    if (!localStorage.getItem('jwt')) {
      return navigate(redirectPath)
    }
  }, [redirectPath, navigate, children])

  if (localStorage.getItem('jwt')) return children
}

export default ProtectedRoute

<!-- Updated: 2024-07-16T11:55:00.312077 -->

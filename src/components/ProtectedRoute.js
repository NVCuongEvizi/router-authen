import { Navigate, Outlet } from "react-router-dom"
import { fetchJwt } from "../api/fetchJwt"

const ProtectedRoute = ({ allowedRole }) => {
  const jwt = fetchJwt()
  return (
    jwt ? (jwt.value === '123' ?
      (allowedRole.includes(jwt.role) ? <Outlet />
        : <Navigate to='/dashboard/inpections' replace />)
      : <Navigate to='/login' replace />
    ) : <Navigate to='/login' replace />
  )
}

export default ProtectedRoute
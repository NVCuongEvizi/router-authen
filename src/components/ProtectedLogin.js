import { Navigate, Outlet } from "react-router-dom"
import { fetchJwt } from "../api/fetchJwt"

const ProtectedLogin = ({ allowedRole }) => {
  const jwt = fetchJwt()

  return (
    jwt ? (jwt.value === '123' ? <Outlet /> : <Navigate to='/login' replace />)
      : <Navigate to='/login' replace />
  )
}

export default ProtectedLogin
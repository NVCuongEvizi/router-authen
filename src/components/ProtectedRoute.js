import { Navigate, Outlet } from "react-router-dom"
import { fetchJwt } from "../api/fetchJwt"

const ProtectedRoute = ({ allowedRole }) => {
  const { role } = fetchJwt()
  console.log(allowedRole, role, allowedRole.includes(role))
  return (
    allowedRole.includes(role) ? <Outlet />
      : <Navigate to='/dashboard/inpections' />

  )
}

export default ProtectedRoute
import { Navigate, Route, Routes } from 'react-router-dom'
import Companies from './Companies'
import Inpections from './Inpections'
import Locations from './Locations'
import ProtectedRoute from './ProtectedRoute'
import Regions from './Regions'

const Dashboard = () => {

  return (
    <>
      <h1>Dashboard</h1>
      <Routes>
        <Route path='dashboard/inpections' element={<Inpections />} />

        <Route element={<ProtectedRoute allowedRole={['super_admin']} />}>
          <Route path='dashboard/companies' element={<Companies />} />
        </Route>

        <Route element={<ProtectedRoute allowedRole={['super_admin', 'region_manager']} />}>
          <Route path='dashboard/regions' element={<Regions />} />
        </Route>

        <Route element={<ProtectedRoute allowedRole={['super_admin', 'manager']} />}>
          <Route path='dashboard/locations' element={<Locations />} />
        </Route>

        <Route path='*' element={<Navigate to="/dashboard/inpections" replace />} />
      </Routes>
    </>
  )
}

export default Dashboard
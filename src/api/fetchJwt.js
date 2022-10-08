export const fetchJwt = () => {
  let jwt = {}
  jwt = localStorage.getItem('jwt_super_admin') // all menu, all URL
  // jwt = localStorage.getItem('jwt_region_manager') // Không access được /dashboard/companies
  // jwt = localStorage.getItem('jwt_manager') // Không access được /dashboard/companies & /dashboard/regions
  // jwt = localStorage.getItem('jwt_user') // Không access được /dashboard/companies & /dashboard/regions & /dashboard/locations

  if (jwt) {
    jwt = JSON.parse(jwt)
  }

  return jwt
}
export const fetchJwt = () => {
  let jwt = {}
  jwt = localStorage.getItem('jwt_super_admin')
  // value: {"role":"super_admin","value":"404"}

  // jwt = localStorage.getItem('jwt_region_manager')
  // value: {"role":"region_manager","value":"123"}

  if (jwt) {
    jwt = JSON.parse(jwt)
  }

  return jwt
}
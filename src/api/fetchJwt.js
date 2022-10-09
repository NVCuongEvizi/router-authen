export const fetchJwt = () => {
  let jwt = {}
  jwt = localStorage.getItem('jwt')
  // value: {"role":"super_admin","value":"404"}

  // value: {"role":"region_manager","value":"123"}

  if (jwt) {
    jwt = JSON.parse(jwt)
  }

  return jwt
}
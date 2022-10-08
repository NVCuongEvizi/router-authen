/*
  Paths
  /login
  /dashboard => auto redirect to /dashboard/inspections
  /dashboard/companies
  /dashboard/regions
  /dashboard/locations


  Chưa login: localStorage.jwt !== 123 (tức là localStorage ko có key jwt, 
  hoặc có key jwt nhưng giá trị khác 123 (giả lập tình trạng token bị expired))
  Check user role localStorage.role là 1 trong [super_admin, super_observer, region_manager, manager, user]

  Permission
  [super_admin, super_observer]: all menu, all URL
  [region_manager]; Không access được /dashboard/companies
  [manager]: Không access được /dashboard/companies & /dashboard/regions
  [user]: Không access được /dashboard/companies & /dashboard/regions & /dashboard/locations


  localStorage.setItem('jwt_super_admin', JSON.stringify({ role: 'super_admin', value: '123' }))
  localStorage.setItem('jwt_region_manager', JSON.stringify({ role: 'region_manager', value: '123' }))
  localStorage.setItem('jwt_manager', JSON.stringify({ role: 'manager', value: '123' }))
  localStorage.setItem('jwt_user', JSON.stringify({ role: 'user', value: '123' }))
*/
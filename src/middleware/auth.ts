export function authMiddleware(to: any, _from: any, next: any) {
  const token = localStorage.getItem('token')
  console.log(token);
  
  if (to.meta.requiresAuth && !token) {
    // Chưa login → chuyển về trang auth
    return next('/auth')
  }

  if (to.path.startsWith('/auth') && token) {
    // Đã login mà vẫn vào /auth → chuyển về home
    return next('/')
  }

  // Cho qua
  return next()
}

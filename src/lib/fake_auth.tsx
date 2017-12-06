const fakeAuth = {
  isAuthenticated: false,
  authenticate(cb: () => void) {
    this.isAuthenticated = true;
    localStorage.setItem('auth', '1')
    setTimeout(cb, 100) // fake async
  },
  signout(cb: () => void) {
    this.isAuthenticated = false
    setTimeout(cb, 100)
  }
}

export default fakeAuth;

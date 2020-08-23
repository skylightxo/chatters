const LS_NAME_KEY = "name";

class AuthService {
  isAuthorized() {
    return !!localStorage.getItem(LS_NAME_KEY);
  }

  authorize(name) {
    localStorage.setItem(LS_NAME_KEY, name);
  }

  logout() {
    localStorage.clear();
  }
}

export const authService = new AuthService();

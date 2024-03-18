class Authentication {
  constructor(authenticationPersistence, userRepository) {
    this.authenticationPersistence = authenticationPersistence;
    this.userRepository = userRepository;
    this.authToken = null;
  }

  getAuthenticationToken() {
    try {
      if ('jwt-token' in sessionStorage) {
        this.authToken = Object.fromEntries(
          this.authenticationPersistence.loadTokenFromSessionStorage()
        );
      }

      return this.authToken;
    } catch (error) {
      console.error('Error retrieving authentication token:', error);
      return false;
    }
  }

  isAuthenticated(user) {
    try {
      return (
        this.userRepository.findByUsername(user.username) === this.getAuthenticationToken().username
      );
    } catch (error) {
      console.error('Error checking authentication:', error);
      return false;
    }
  }

  isCredentialsCorrect(emailAddress, password) {
    try {
      const user = this.userRepository.findUserByEmail(emailAddress);
      if (!user) return false;

      return user.password === password;
    } catch (error) {
      console.error('Error checking credentials:', error);
      return false;
    }
  }

  authenticateUser(emailAddress, password) {
    try {
      if (this.isCredentialsCorrect(emailAddress, password)) {
        this.authenticationPersistence.saveTokenToSessionStorage(
          this.userRepository.findUserByEmail(emailAddress)
        );
        this.authToken = this.getAuthenticationToken();
      }
      return this.authToken;
    } catch (error) {
      console.error('Error authenticating user:', error);
      return false;
    }
  }

  logout() {
    try {
      if (this.getAuthenticationToken()) {
        this.authenticationPersistence.clearTokenFromSessionStorage();
        return true; // Indicates successful logout
      }
      return false; // Indicates failed logout
    } catch (error) {
      console.error('Error during logout:', error);
      return false; // Indicates failed logout (error occurred)
    }
  }
}

export { Authentication };

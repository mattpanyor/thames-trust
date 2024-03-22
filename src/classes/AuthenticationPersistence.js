/*
 * This class introduces methods to work with sessionStorage.
 * It expects a persistence token key upon instantiation.
 * */
class AuthenticationPersistence {
  constructor(persistenceTokenKey) {
    this.persistenceTokenKey = persistenceTokenKey;
  }

  /*
   * This methods save the authenticated user to session storage.
   * */
  saveTokenToSessionStorage(user) {
    try {
      const userSession = new Map();

      userSession.set('name', `${user.firstName} ${user.lastName}`);
      userSession.set('username', user.username);
      userSession.set('timestamp', Date.now());

      sessionStorage.setItem(this.persistenceTokenKey, JSON.stringify([...userSession]));
    } catch (error) {
      console.error('Error saving authentication token:', error);
      return false;
    }
  }

  loadTokenFromSessionStorage() {
    const storedData = JSON.parse(sessionStorage.getItem(this.persistenceTokenKey));

    if (!storedData) {
      return new Map();
    }

    return new Map(storedData);
  }

  clearTokenFromSessionStorage() {
    sessionStorage.removeItem(this.persistenceTokenKey);
  }
}

export { AuthenticationPersistence };

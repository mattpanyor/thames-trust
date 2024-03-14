import EntityPersistence from 'src/classes/EntityPersistence.js';

class UserRepository extends EntityPersistence {
  constructor(storageKey) {
    super(storageKey);
  }

  findByUsername(username) {
    try {
      const allUsers = super.findAll();

      return allUsers.find((user) => user.username === username);
    } catch (error) {
      console.error('Error retrieving user from localStorage:', error);
      return false;
    }
  }
}

export default UserRepository;

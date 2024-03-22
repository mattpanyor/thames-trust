import { EntityPersistence } from 'src/classes';

/*
 * Data access object that extends EntityPersistence. It adds more methods to work with User entity.
 * */
class UserRepository extends EntityPersistence {
  constructor(storageKey) {
    super(storageKey);
  }

  findUserByUsername(username) {
    try {
      const allUsers = super.findAll();

      return allUsers.find((user) => user.username === username);
    } catch (error) {
      console.error('Error retrieving user from localStorage:', error);
      return false;
    }
  }

  findUserByEmail(emailAddress) {
    try {
      const allUsers = super.findAll();

      return allUsers.find((user) => user.emailAddress === emailAddress);
    } catch (error) {
      console.error('Error retrieving user from localStorage:', error);
      return false;
    }
  }
}

export default UserRepository;

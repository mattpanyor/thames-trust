import { EntityPersistence } from 'src/classes';

class AccountRepository extends EntityPersistence {
  constructor(storageKey) {
    super(storageKey);
  }

  findAllAccountsByUser(userId) {
    try {
      const allAccounts = super.findAll();

      return allAccounts.filter((account) => account.userId === userId);
    } catch (error) {
      console.error('Error retrieving accounts from localStorage:', error);
      return false;
    }
  }
}

export default AccountRepository;

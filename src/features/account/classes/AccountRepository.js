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

  updateBalance(id, amount) {
    try {
      const account = super.findById(id);
      super.update({ ...account, balance: amount });
    } catch (error) {
      console.error('Error updating balance:', error);
      return false;
    }
  }
}

export default AccountRepository;

import { EntityPersistence } from 'src/classes';

class TransactionRepository extends EntityPersistence {
  constructor(storageKey) {
    super(storageKey);
  }

  findAllTransactionsByUser(userId) {
    try {
      const allTransactions = super.findAll();

      return allTransactions.filter((transaction) => transaction.userId === userId);
    } catch (error) {
      console.error('Error retrieving transactions from localStorage:', error);
      return false;
    }
  }
}

export default TransactionRepository;

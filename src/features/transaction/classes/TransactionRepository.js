import { EntityPersistence } from 'src/classes';
/*
 * Data access object that extends EntityPersistence. It adds more methods to work with Transaction entity.
 * */
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

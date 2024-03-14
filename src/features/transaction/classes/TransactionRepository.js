import EntityPersistence from 'src/classes/EntityPersistence.js';

class TransactionRepository extends EntityPersistence {
  constructor(storageKey) {
    super(storageKey);
  }
}

export default TransactionRepository;

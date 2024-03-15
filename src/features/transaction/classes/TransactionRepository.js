import { EntityPersistence } from 'src/classes';

class TransactionRepository extends EntityPersistence {
  constructor(storageKey) {
    super(storageKey);
  }
}

export default TransactionRepository;

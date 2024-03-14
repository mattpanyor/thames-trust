import EntityPersistence from 'src/classes/EntityPersistence.js';

class AccountRepository extends EntityPersistence {
  constructor(storageKey) {
    super(storageKey);
  }
}

export default AccountRepository;

import { EntityPersistence } from 'src/classes';

class AccountRepository extends EntityPersistence {
  constructor(storageKey) {
    super(storageKey);
  }
}

export default AccountRepository;

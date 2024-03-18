import { accountNumberGenerator } from 'src/utils/accountNumberGenerator.js';

class Account {
  constructor(userId, type) {
    this.id = null;
    this.accountNumber = accountNumberGenerator().accountNumber;
    this.sortCode = accountNumberGenerator().sortCode;
    this.balance = 0;
    this.userId = userId;
    this.type = type;
  }
}

export default Account;

/*
 * Data transfer object for holding Transaction data.
 * */
class TransactionFormDTO {
  constructor(senderId = '', receiverId = '', amount = '', reference = '') {
    this.senderId = senderId;
    this.receiverId = receiverId;
    this.amount = amount;
    this.reference = reference;
  }
}

export default TransactionFormDTO;

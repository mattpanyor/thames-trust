class Transaction {
  constructor(transactionId, senderId, receiverId, reference, amount) {
    this.transactionId = transactionId;
    this.senderId = senderId;
    this.receiverId = receiverId;
    this.reference = reference;
    this.amount = amount;
    this.transactionDate = Date.now();
  }
}

export default Transaction;

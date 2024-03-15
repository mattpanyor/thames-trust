class Transaction {
  constructor(transactionId, senderId, receiverId, reference, amount, transactionDate) {
    this.transactionId = transactionId;
    this.senderId = senderId;
    this.receiverId = receiverId;
    this.reference = reference;
    this.amount = amount;
    this.transactionDate = transactionDate;
  }
}

export default Transaction;

class Transaction {
    constructor(transaction_id, sender_id, reciever_id, reference, amount, transaction_date) {
        this.transaction_id = transaction_id;
        this.sender_id = sender_id;
        this.reciever_id = reciever_id;
        this.reference = reference;
        this.amount = amount;
        this.transaction_date = transaction_date;
    }
}

export default Transaction;
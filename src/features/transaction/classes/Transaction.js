class Transaction {
    constructor(tarsaction_id, sender_id, reciever_id, reference, amount, transaction_date) {
        this.tarsaction_id = tarsaction_id;
        this.sender_id = sender_id;
        this.reciever_id = reciever_id;
        this.reference = reference;
        this.amount = amount;
        this.transaction_date = transaction_date;
    }
}

export default Transaction;
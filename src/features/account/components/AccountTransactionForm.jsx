import { useEffect, useState } from 'react';
import { Button } from 'src/components/elements';
import TransactionFormDTO from 'src/features/account/classes/TransactionFormDTO.js';
import Transaction from 'src/features/transaction/classes/Transaction.js';
import {
  useAccountContext,
  useAuthentication,
  useLocalStorage,
  useTransactionContext
} from 'src/hooks';
import { sleep, stringIdGenerator } from 'src/utils';

export function AccountTransactionForm({
  toggleModalVisibility,
  initialSendingAccount,
  transactionType
}) {
  const { accounts, setAccounts } = useAccountContext();
  const { accountRepository, transactionRepository } = useLocalStorage();
  const { setTransactions } = useTransactionContext();
  const { authentication } = useAuthentication();

  const authenticatedUserId = authentication.getAuthenticatedUserId();
  const [isDisabled, setDisabled] = useState(false);
  const [isPending, setIsPending] = useState(false);
  const [isTransactionValid, setIsTransactionValid] = useState('');

  /*
   * Initialise transactionFormData with an instance of TransactionFormDTO object.
   * */
  const [transactionFormData, setTransactionFormData] = useState({
    ...new TransactionFormDTO(),
    senderId: initialSendingAccount
  });

  /*
   * Creates arrays to hold account information based on selected transaction type.
   * */
  let authenticatedUserAccounts = [];
  let otherUserAccounts = [];

  /*
   * Filters accounts so that 'payment' is only possible between current accounts
   * while transfer is only possible between accounts of the authenticated users.
   * Payment from saver accounts to other users' accounts are not possible.
   * */
  if (transactionType === 'pay') {
    authenticatedUserAccounts = accounts.filter(
      (account) => account.type === 'Current' && account.userId === authenticatedUserId
    );
    otherUserAccounts = accounts.filter(
      (account) => account.type === 'Current' && account.userId !== authenticatedUserId
    );
  } else if (transactionType === 'transfer') {
    authenticatedUserAccounts = accounts.filter(
      (account) => account.userId === authenticatedUserId
    );
  }

  const handleOnChange = (e) => {
    setIsTransactionValid('');
    let { name, value } = e.target;
    /* Prevents setting 'amount' input '0' or a negative value. */
    if (name === 'amount' && value <= 0) {
      value = '';
    }
    setTransactionFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value
    }));
  };

  /*
   * Disables submit button until all fields are populated.
   * */
  useEffect(() => {
    setDisabled(Object.values(transactionFormData).some((val) => val === ''));
  }, [transactionFormData]);

  /*
   * Creates a new transaction object.
   * */
  async function createNewTransaction() {
    await transactionRepository.create(
      new Transaction(
        stringIdGenerator(15).toUpperCase(),
        transactionFormData.senderId,
        transactionFormData.receiverId,
        transactionFormData.reference,
        parseFloat(transactionFormData.amount)
      )
    );
  }

  const handleFormSubmit = async () => {
    setIsPending(true);
    try {
      await sleep(1000);

      /*
       * Finds sender and receiving account.
       * */
      const senderAccount = accountRepository.findById(transactionFormData.senderId);
      const receivingAccount = accountRepository.findById(transactionFormData.receiverId);

      /*
       * Sets new balances for retrieved accounts.
       * */
      const newSenderBalance = senderAccount.balance - parseFloat(transactionFormData.amount);
      const newReceivingBalance = receivingAccount.balance + parseFloat(transactionFormData.amount);

      /*
       * Checks if sending account has enough balance for the transaction.
       * */
      if (newSenderBalance < 0) {
        throw new Error('Insufficient balance');
      }

      /*
       * Updates both balances.
       * */
      await Promise.all([
        accountRepository.updateBalance(senderAccount.id, newSenderBalance),
        accountRepository.updateBalance(receivingAccount.id, newReceivingBalance)
      ]);

      /* Sets accounts */
      setAccounts(accountRepository.findAll());
      /* Creates new transaction */
      await createNewTransaction();
      /* Sets transactions */
      setTransactions(transactionRepository.findAll());
      /* Closes modal */
      toggleModalVisibility();
    } catch (error) {
      /* Resets states on insufficient fund or any other errors. */
      console.error('Error making transaction:', error);
      setIsPending(false);
      setDisabled(true);
      setIsTransactionValid('error');
    }
  };

  return (
    <>
      <div className="w-full max-w-2xl space-y-4 p-4 dark:bg-gray-800 sm:p-4 2xl:col-span-2">
        <form onSubmit={(e) => e.preventDefault()}>
          <div className="space-y-4">
            <div>
              <label
                htmlFor="senderId"
                className="mb-2 block text-sm font-medium text-gray-900 dark:text-white">
                Payment From
              </label>
              <select
                name="senderId"
                value={initialSendingAccount}
                onChange={handleOnChange}
                id="senderId"
                className="focus:ring-primary-500 focus:border-primary-500 dark:focus:ring-primary-500 dark:focus:border-primary-500 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400">
                <option value="">Select Payment From</option>
                {authenticatedUserAccounts.map((account) => (
                  <option key={account.id} value={account.id}>
                    {`${account.id} - ${account.type} ${account.accountNumber} ${account.sortCode}`}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label
                htmlFor="receiverId"
                className="mb-2 block text-sm font-medium text-gray-900 dark:text-white">
                Payment To
              </label>
              <select
                name="receiverId"
                onChange={handleOnChange}
                id="receiverId"
                className="focus:ring-primary-500 focus:border-primary-500 dark:focus:ring-primary-500 dark:focus:border-primary-500 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400">
                <option value="">Select Payment To</option>
                {transactionType === 'pay' && otherUserAccounts.length > 0 ? (
                  otherUserAccounts.map((account) => (
                    <option key={account.id} value={account.id}>
                      {`${account.id} - ${account.type} ${account.accountNumber} ${account.sortCode}`}
                    </option>
                  ))
                ) : transactionType === 'transfer' && authenticatedUserAccounts.length > 0 ? (
                  authenticatedUserAccounts.map((account) => (
                    <option key={account.id} value={account.id}>
                      {`${account.id} - ${account.type} ${account.accountNumber} ${account.sortCode}`}
                    </option>
                  ))
                ) : (
                  <option value="">No accounts available</option>
                )}
              </select>
            </div>
            <div>
              <label
                htmlFor="amount"
                className="mb-2 block text-sm font-medium text-gray-900 dark:text-white">
                Amount
              </label>
              <input
                onChange={handleOnChange}
                type="number"
                name="amount"
                id="amount"
                value={transactionFormData.amount}
                className="focus:ring-primary-600 focus:border-primary-600 dark:focus:ring-primary-500 dark:focus:border-primary-500 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400"
                placeholder="£0.00"
                required
              />
            </div>
            <div>
              <label
                htmlFor="reference"
                className="mb-2 block text-sm font-medium text-gray-900 dark:text-white">
                Reference
              </label>
              <input
                onChange={handleOnChange}
                name="reference"
                type="text"
                id="reference"
                className="focus:ring-primary-500 focus:border-primary-500 dark:focus:ring-primary-500 dark:focus:border-primary-500 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400"></input>
            </div>
            <p
              id="invalid-feedback"
              className={`${isTransactionValid !== 'error' && `hidden`} mt-2 text-sm text-red-600 dark:text-red-500`}>
              Insufficient balance
            </p>
          </div>
        </form>
      </div>
      <div className="bottom-0 left-0 mt-4 flex w-full justify-center space-x-4 pb-4 sm:absolute sm:mt-0 sm:px-4">
        <Button
          onClick={handleFormSubmit}
          isPending={isPending}
          isDisabled={isDisabled}
          btnTxt={isPending ? 'Sending...' : 'Send'}
          className={'justify-center sm:w-full'}
        />
        <Button
          onClick={toggleModalVisibility}
          btnTxt={'Cancel'}
          className={
            'border border-red-600 bg-transparent text-red-600 hover:bg-red-600 hover:text-white focus:outline-none focus:ring-4 focus:ring-red-300 dark:border-red-500 dark:bg-transparent dark:text-red-500 dark:hover:bg-red-600 dark:hover:text-white dark:focus:ring-red-900 sm:w-full'
          }
        />
      </div>
    </>
  );
}

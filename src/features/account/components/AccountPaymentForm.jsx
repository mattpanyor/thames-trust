import { useState } from 'react';
import { Button } from 'src/components/elements';
import PaymentFormDTO from 'src/features/account/classes/PaymentFormDTO.js';
import Transaction from 'src/features/transaction/classes/Transaction.js';
import {
  useAccountContext,
  useAuthentication,
  useLocalStorage,
  useTransactionContext
} from 'src/hooks';
import { sleep, stringIdGenerator } from 'src/utils';

export function AccountPaymentForm({ onShow }) {
  const { accounts, setAccounts } = useAccountContext();
  const { setTransactions } = useTransactionContext();
  const { authentication } = useAuthentication();
  const { accountRepository, transactionRepository } = useLocalStorage();

  const [isDisabled, setDisabled] = useState(false);
  const [isPending, setIsPending] = useState(false);

  const [paymentFormData, setPaymentFormData] = useState(new PaymentFormDTO());

  const authenticatedUserId = authentication.getAuthenticatedUserId();

  let authenticatedUserAccounts = [];
  let otherUserAccounts = [];

  accounts.filter((account) => {
    if (account.type === 'Current' && account.userId === authentication.getAuthenticatedUserId()) {
      authenticatedUserAccounts.push(account);
    } else if (account.type === 'Current') {
      otherUserAccounts.push(account);
    }
  });

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setPaymentFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value
    }));
  };

  const handleFormSubmit = async () => {
    setIsPending(true);
    const resetForm = () => {
      setIsPending(false);
      setDisabled(true);
      setPaymentFormData(new PaymentFormDTO());
    };

    try {
      await sleep(1000);
      const senderAccount = accountRepository.findById(parseInt(paymentFormData.senderId));
      const receivingAccount = accountRepository.findById(parseInt(paymentFormData.receiverId));

      const newSenderBalance = senderAccount.balance - parseFloat(paymentFormData.amount);
      const newReceivingBalance = receivingAccount.balance + parseFloat(paymentFormData.amount);

      await Promise.all([
        accountRepository.update({
          ...senderAccount,
          balance: newSenderBalance
        }),
        accountRepository.update({
          ...receivingAccount,
          balance: newReceivingBalance
        })
      ]);

      setAccounts(accountRepository.findAll());
      await transactionRepository.create(
        new Transaction(
          stringIdGenerator(15).toUpperCase(),
          paymentFormData.senderId,
          paymentFormData.receiverId,
          paymentFormData.reference,
          authenticatedUserId === paymentFormData.senderId
            ? paymentFormData.amount
            : -Math.abs(parseFloat(paymentFormData.amount))
        )
      );
      setTransactions(transactionRepository.findAll());
      onShow();
    } catch (error) {
      console.error('Error making payment:', error);
    } finally {
      resetForm();
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
                onChange={handleOnChange}
                id="senderId"
                className="focus:ring-primary-500 focus:border-primary-500 dark:focus:ring-primary-500 dark:focus:border-primary-500 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400">
                <option>Select Payment From</option>
                {authenticatedUserAccounts.map((account) => (
                  <option
                    key={account.id}
                    value={
                      account.id
                    }>{`${account.type} ${account.accountNumber} ${account.sortCode}`}</option>
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
                <option>Select Payment To</option>
                {otherUserAccounts.map((account) => (
                  <option
                    key={account.id}
                    value={
                      account.id
                    }>{`${account.type} ${account.accountNumber} ${account.sortCode}`}</option>
                ))}
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
          onClick={onShow}
          btnTxt={'Cancel'}
          className={
            'border border-red-600 bg-transparent text-red-600 hover:bg-red-600 hover:text-white focus:outline-none focus:ring-4 focus:ring-red-300 dark:border-red-500 dark:bg-transparent dark:text-red-500 dark:hover:bg-red-600 dark:hover:text-white dark:focus:ring-red-900 sm:w-full'
          }
        />
      </div>
    </>
  );
}

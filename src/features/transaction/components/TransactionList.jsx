import { useEffect, useMemo, useState } from 'react';
import {
  TransactionFilter,
  TransactionListItem,
  TransactionViewFooter
} from 'src/features/transaction/components';
import { useAuthentication, useLocalStorage, useTransactionContext } from 'src/hooks';

/*
 * Filters transactions based on the authenticated user.
 * */
const filterTransactions = (transactions, userRepository, accountRepository, authentication) => {
  return transactions.filter((transaction) => {
    const senderUserId = accountRepository.findById(parseInt(transaction.senderId)).userId;
    const receiverUserId = accountRepository.findById(parseInt(transaction.receiverId)).userId;
    const authenticatedUserId = authentication.getAuthenticatedUserId();
    return (
      userRepository.findById(senderUserId).id === authenticatedUserId ||
      userRepository.findById(receiverUserId).id === authenticatedUserId
    );
  });
};

export function TransactionList() {
  const { authentication } = useAuthentication();
  const { userRepository, accountRepository } = useLocalStorage();

  const transactionPerPage = 6; // Transactions per page.

  const [currentPage, setCurrentPage] = useState(0);
  const [transactionView, setTransactionView] = useState([]);

  const { transactions } = useTransactionContext();

  /*
   * Caches the filtered transactions for better performance.
   * */
  const filteredTransactions = useMemo(() => {
    return filterTransactions(transactions, userRepository, accountRepository, authentication);
  }, [transactions, userRepository, accountRepository, authentication]);

  /*
   * Sets the logic for pagination in transaction list.
   * */
  useEffect(() => {
    const startIndex = currentPage * transactionPerPage;
    const endIndex = startIndex + transactionPerPage;

    const slicedTransactions = filteredTransactions.slice(startIndex, endIndex);

    setTransactionView(slicedTransactions);
  }, [currentPage, filteredTransactions, transactionPerPage]);

  /*
   * Sets page number in pagination.
   * */
  const changePage = (pageNumber) => {
    if (pageNumber >= 0 && pageNumber < Math.ceil(transactions.length / transactionPerPage)) {
      setCurrentPage(pageNumber);
    }
  };

  return (
    <>
      <div className="bg-white p-4 shadow-sm dark:bg-gray-800 sm:p-6">
        <div className="w-full">
          {/* Card header */}
          <TransactionFilter />
          {/* Table */}
          <div className="mt-6 flex flex-col">
            <div className="overflow-x-auto rounded-lg">
              <div className="inline-block min-w-full align-middle">
                <div className="overflow-hidden shadow sm:rounded-lg">
                  <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-600">
                    <thead className="bg-gray-50 dark:bg-gray-700">
                      <tr>
                        <th
                          scope="col"
                          className="p-4 text-left text-xs font-medium uppercase tracking-wider text-gray-500 dark:text-white">
                          Transaction
                        </th>
                        <th
                          scope="col"
                          className="p-4 text-left text-xs font-medium uppercase tracking-wider text-gray-500 dark:text-white">
                          Amount
                        </th>
                        <th
                          scope="col"
                          className="p-4 text-left text-xs font-medium uppercase tracking-wider text-gray-500 dark:text-white">
                          Reference
                        </th>
                        <th
                          scope="col"
                          className="p-4 text-left text-xs font-medium uppercase tracking-wider text-gray-500 dark:text-white">
                          Date &amp; Time
                        </th>
                        <th
                          scope="col"
                          className="p-4 text-left text-xs font-medium uppercase tracking-wider text-gray-500 dark:text-white">
                          Transaction ID
                        </th>
                        <th
                          scope="col"
                          className="p-4 text-left text-xs font-medium uppercase tracking-wider text-gray-500 dark:text-white">
                          Type
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white dark:bg-gray-800">
                      {transactionView.map((transaction) => (
                        <TransactionListItem
                          key={transaction.transactionId}
                          transaction={transaction}
                        />
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
          {/* Card Footer */}
          <TransactionViewFooter
            pageChange={changePage}
            currentPage={currentPage}
            transactionPerPage={transactionPerPage}
            totalTransactions={filteredTransactions.length}
          />
        </div>
      </div>
    </>
  );
}

import { useState } from 'react';
import TransactionFilter from 'src/features/transaction/components/TransactionFilter.jsx';
import TransactionViewFooter from 'src/features/transaction/components/TransactionViewFooter.jsx';

import TransactionListLine from './TransactionListLine';

import TransactionData from '/src/data/transaction.json';

function TransactionList() {
  const sampleTransactionData = TransactionData;

  const chopData = (limit, data) => {
    let result = [];

    for (let i = 0; i < data.length; i += limit) {
      result.push(data.slice(i, i + limit));
    }
    return result;
  };

  const [currentPage, setCurrentPage] = useState(0);
  const [transactionList, setTransactionList] = useState(chopData(6, sampleTransactionData));
  const [transactionView, setTransactionView] = useState(transactionList[0]);

  const changePage = (pageNumber) => {
    if (pageNumber >= 0 && pageNumber <= transactionList.length - 1) {
      setTransactionView(transactionList[pageNumber]);
      setCurrentPage(pageNumber);
    }
  };

  return (
    <>
      <div className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-800 sm:p-6">
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
                          Transaction ID
                        </th>
                        <th
                          scope="col"
                          className="p-4 text-left text-xs font-medium uppercase tracking-wider text-gray-500 dark:text-white">
                          Transaction
                        </th>
                        <th
                          scope="col"
                          className="p-4 text-left text-xs font-medium uppercase tracking-wider text-gray-500 dark:text-white">
                          Date &amp; Time
                        </th>
                        <th
                          scope="col"
                          className="p-4 text-left text-xs font-medium uppercase tracking-wider text-gray-500 dark:text-white">
                          Reference
                        </th>
                        <th
                          scope="col"
                          className="p-4 text-left text-xs font-medium uppercase tracking-wider text-gray-500 dark:text-white">
                          Amount
                        </th>
                        <th
                          scope="col"
                          className="p-4 text-left text-xs font-medium uppercase tracking-wider text-gray-500 dark:text-white">
                          Type
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white dark:bg-gray-800">
                      {transactionView.map((tr) => (
                        <TransactionListLine key={tr.transactionId} tr={tr} />
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
            maxLength={transactionList.length}
          />
        </div>
      </div>
    </>
  );
}

export default TransactionList;

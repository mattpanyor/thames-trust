import { TransactionListControls } from 'src/features/transaction/components';

export function TransactionViewFooter({
  pageChange,
  currentPage,
  transactionPerPage,
  totalTransactions
}) {
  return (
    <>
      <div className="flex items-center justify-between pt-3 sm:pt-6">
        <div className="mb-4 flex items-center sm:mb-0">
          <span className="text-sm font-normal text-gray-500 dark:text-gray-400">
            Showing{' '}
            <span className="font-semibold text-gray-900 dark:text-white">
              {currentPage + 1}-{Math.ceil(totalTransactions / transactionPerPage)} of{' '}
              {totalTransactions}
            </span>
          </span>
        </div>
        <div className="flex-shrink-0">
          <TransactionListControls
            pageChange={pageChange}
            currentPage={currentPage}
            totalTransactions={totalTransactions / transactionPerPage}
          />
        </div>
      </div>
    </>
  );
}

import { useEffect, useState } from 'react';

export function TransactionListControls({ pageChange, currentPage, totalTransactions }) {
  const [btnNext, setBtnNext] = useState(false);
  const [btnPrev, setBtnPrev] = useState(false);

  useEffect(() => {
    setBtnPrev(currentPage > 0);
    setBtnNext(currentPage < totalTransactions - 1);
  }, [currentPage, totalTransactions]);

  return (
    <div className="flex items-center space-x-3">
      {btnPrev && (
        <button
          onClick={() => pageChange(currentPage - 1)}
          className="inline-flex cursor-pointer justify-center rounded p-1 text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:hover:bg-gray-700 dark:hover:text-white">
          <svg
            className="h-7 w-7"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg">
            <path
              fillRule="evenodd"
              d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
              clipRule="evenodd"></path>
          </svg>
        </button>
      )}
      {btnNext && (
        <button
          onClick={() => pageChange(currentPage + 1)}
          className="mr-2 inline-flex cursor-pointer justify-center rounded p-1 text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:hover:bg-gray-700 dark:hover:text-white">
          <svg
            className="h-7 w-7"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg">
            <path
              fillRule="evenodd"
              d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
              clipRule="evenodd"></path>
          </svg>
        </button>
      )}
    </div>
  );
}

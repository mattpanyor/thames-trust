import { useEffect, useState } from 'react';

export function TransactionListControls({ pageChange, currentPage, maxLength }) {
  const [btnNext, setBtnNext] = useState(true);
  const [btnPrev, setBtnPrev] = useState(false);

  useEffect(() => {
    setBtnPrev(currentPage > 0);
    setBtnNext(currentPage < maxLength - 1);
  }, [currentPage, maxLength]);

  return (
    <div className="flex items-center space-x-3">
      {btnPrev && (
        <button
          onClick={() => pageChange(currentPage - 1)}
          className="dark:focus:ring-blue-800, inline-flex flex-1 items-center justify-center rounded-lg bg-blue-700 px-3 py-2 text-center text-sm font-medium text-white hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700">
          Prev
        </button>
      )}

      {btnNext && (
        <button
          onClick={() => pageChange(currentPage + 1)}
          className="dark:focus:ring-blue-800, inline-flex flex-1 items-center justify-center rounded-lg bg-blue-700 px-3 py-2 text-center text-sm font-medium text-white hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700">
          Next
        </button>
      )}
    </div>
  );
}

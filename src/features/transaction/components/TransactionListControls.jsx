import { useEffect, useState } from 'react';
import cn from 'src/utils/twMerge.js';

export default function TransactionListControls({ pageChange, currentPage, maxLength }) {
  const [btn_next, setBtn_next] = useState(true);
  const [btn_prev, setBtn_prev] = useState(false);

  useEffect(() => {
    if (currentPage <= 0) {
      setBtn_prev(false);
    } else {
      setBtn_prev(true);
    }
    if (currentPage >= maxLength - 1) {
      setBtn_next(false);
    } else {
      setBtn_next(true);
    }
  }, [currentPage, maxLength]);

  return (
    <div className="flex items-center space-x-3">
      <button
        onClick={() => pageChange(currentPage - 1)}
        disabled={!btn_prev}
        className={cn(
          `dark:focus:ring-blue-800, inline-flex flex-1 items-center justify-center rounded-lg bg-blue-700 px-3 py-2 text-center text-sm font-medium text-white hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 ${!btn_prev && `cursor-not-allowed bg-blue-400 text-white dark:bg-blue-500`} `
        )}>
        Prev
      </button>
      <button
        onClick={() => pageChange(currentPage + 1)}
        disabled={!btn_next}
        className={cn(
          `dark:focus:ring-blue-800, inline-flex flex-1 items-center justify-center rounded-lg bg-blue-700 px-3 py-2 text-center text-sm font-medium text-white hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 ${!btn_next && `cursor-not-allowed bg-blue-400 text-white dark:bg-blue-500`} `
        )}>
        Next
      </button>
    </div>
  );
}

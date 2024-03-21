import { useRef, useState } from 'react';
import { DropdownChevronIcon } from 'src/components/SVGs';
import { useClickOutside } from 'src/hooks';
import { cn } from 'src/utils';

export function TransactionFilter() {
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const dropdownRef = useRef();

  useClickOutside(dropdownRef, setIsFilterOpen);

  return (
    <>
      <div className="items-center justify-between lg:flex">
        <div className="mb-4 lg:mb-0">
          <h3 className="mb-2 text-xl font-bold text-gray-900 dark:text-white">Transactions</h3>
          <span className="text-base font-normal text-gray-500 dark:text-gray-400">
            This is a list of latest transactions
          </span>
        </div>

        <div className="items-center sm:flex">
          <div ref={dropdownRef} className="relative flex items-center">
            <button
              onClick={() => setIsFilterOpen(!isFilterOpen)}
              id="transaction-filter"
              className="mb-4 mr-4 inline-flex items-center rounded-lg border border-gray-300 bg-white px-4 py-2.5 text-sm font-medium text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:border-gray-600 dark:bg-gray-800 dark:text-white dark:hover:border-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-700 sm:mb-0"
              type="button">
              Filter by type
              <DropdownChevronIcon className={cn(`ml-2 h-4 w-4`, { 'rotate-180': isFilterOpen })} />
            </button>
            {/* Dropdown menu */}
            <div
              id="dropdown"
              className={`${!isFilterOpen && `hidden`} absolute right-0 top-12 z-10 m-0 w-40 rounded-lg bg-white p-3 shadow dark:bg-gray-700`}>
              <h6 className="mb-3 text-sm font-medium text-gray-900 dark:text-white">
                Transaction Type
              </h6>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center">
                  <input
                    id="outgoing"
                    type="checkbox"
                    className="h-4 w-4 rounded border-gray-300 bg-gray-100 text-blue-600 focus:ring-2 focus:ring-blue-500 dark:border-gray-500 dark:bg-gray-600 dark:ring-offset-gray-700 dark:focus:ring-blue-600"
                  />
                  <label
                    htmlFor="outgoing"
                    className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-100">
                    Outgoing (17)
                  </label>
                </li>
                <li className="flex items-center">
                  <input
                    id="incoming"
                    type="checkbox"
                    className="h-4 w-4 rounded border-gray-300 bg-gray-100 text-blue-600 focus:ring-2 focus:ring-blue-500 dark:border-gray-500 dark:bg-gray-600 dark:ring-offset-gray-700 dark:focus:ring-blue-600"
                  />
                  <label
                    htmlFor="incoming"
                    className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-100">
                    Incoming (56)
                  </label>
                </li>
              </ul>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <div className="relative">
              <input
                name="startDate"
                type="date"
                className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
              />
            </div>
            <div className="relative">
              <input
                name="end"
                type="date"
                className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

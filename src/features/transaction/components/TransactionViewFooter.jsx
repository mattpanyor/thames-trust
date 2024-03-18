import { TransactionListControls } from 'src/features/transaction/components';

export function TransactionViewFooter(props) {
  return (
    <div className="flex items-center justify-between pt-3 sm:pt-6">
      <div>
        <button
          className="inline-flex items-center rounded-lg p-2 text-center text-sm font-medium text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
          type="button">
          Last 7 days{' '}
          <svg
            className="ml-2 h-4 w-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>
        {/* Dropdown menu */}
        <div
          className="z-50 my-4 hidden list-none divide-y divide-gray-100 rounded bg-white text-base shadow dark:divide-gray-600 dark:bg-gray-700"
          id="transactions-dropdown"
          style={{
            position: 'absolute',
            inset: 'auto auto 0px 0px',
            margin: 0,
            transform: 'translate3d(354.8px, 3604.8px, 0px)'
          }}>
          <div className="px-4 py-3" role="none">
            <p className="truncate text-sm font-medium text-gray-900 dark:text-white" role="none">
              Sep 16, 2021 - Sep 22, 2021
            </p>
          </div>
          <ul className="py-1" role="none">
            <li>
              <a
                href="#"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"
                role="menuitem">
                Yesterday
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"
                role="menuitem">
                Today
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"
                role="menuitem">
                Last 7 days
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"
                role="menuitem">
                Last 30 days
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"
                role="menuitem">
                Last 90 days
              </a>
            </li>
          </ul>
          <div className="py-1" role="none">
            <a
              href="#"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"
              role="menuitem">
              Custom...
            </a>
          </div>
        </div>
      </div>
      <div className="flex-shrink-0">
        <TransactionListControls
          pageChange={props.pageChange}
          currentPage={props.currentPage}
          maxLength={props.maxLength}
        />
      </div>
    </div>
  );
}

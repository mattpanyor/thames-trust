import React from 'react'

function TransactionViewFooter() {
    return (
        <div>
            <button
                className="inline-flex items-center p-2 text-sm font-medium text-center text-gray-500 rounded-lg hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                type="button"
                data-dropdown-toggle="transactions-dropdown"
            >
                Last 7 days{" "}
                <svg
                    className="w-4 h-4 ml-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                    />
                </svg>
            </button>
            {/* Dropdown menu */}
            <div
                className="z-50 hidden my-4 text-base list-none bg-white divide-y divide-gray-100 rounded shadow dark:bg-gray-700 dark:divide-gray-600"
                id="transactions-dropdown"
                style={{
                    position: "absolute",
                    inset: "auto auto 0px 0px",
                    margin: 0,
                    transform: "translate3d(355px, 5794px, 0px)"
                }}
                data-popper-placement="top"
                data-popper-reference-hidden=""
                data-popper-escaped=""
            >
                <div className="px-4 py-3" role="none">
                    <p
                        className="text-sm font-medium text-gray-900 truncate dark:text-white"
                        role="none"
                    >
                        Sep 16, 2021 - Sep 22, 2021
                    </p>
                </div>
                <ul className="py-1" role="none">
                    <li>
                        <a
                            href="#"
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"
                            role="menuitem"
                        >
                            Yesterday
                        </a>
                    </li>
                    <li>
                        <a
                            href="#"
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"
                            role="menuitem"
                        >
                            Today
                        </a>
                    </li>
                    <li>
                        <a
                            href="#"
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"
                            role="menuitem"
                        >
                            Last 7 days
                        </a>
                    </li>
                    <li>
                        <a
                            href="#"
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"
                            role="menuitem"
                        >
                            Last 30 days
                        </a>
                    </li>
                    <li>
                        <a
                            href="#"
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"
                            role="menuitem"
                        >
                            Last 90 days
                        </a>
                    </li>
                </ul>
                <div className="py-1" role="none">
                    <a
                        href="#"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"
                        role="menuitem"
                    >
                        Custom...
                    </a>
                </div>
            </div>
        </div>
    )
}

export default TransactionViewFooter
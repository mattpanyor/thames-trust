import { useEffect, useState } from 'react';
import Transaction from '../classes/Transaction';
import randomStringBySize from 'src/utils/randomString'

function TransactionList() {

    const dummy_data = [
        new Transaction(randomStringBySize(15), "Matt", "Becky", "bonus", -2125, "09-05-2024"),
        new Transaction(randomStringBySize(15), "Becky", "Matt", "loan", 2937, "12-06-2024"),
        new Transaction(randomStringBySize(15), "Matt", "XYZ Corp", "expense", -1503, "03-04-2024"),
        new Transaction(randomStringBySize(15), "ABC Corp", "Matt", "reimbursement", 1924, "18-08-2024"),
        new Transaction(randomStringBySize(15), "Matt", "Jane", "salary", -3109, "25-07-2024"),
        new Transaction(randomStringBySize(15), "Jake", "Matt", "donation", 2856, "21-09-2024"),
        new Transaction(randomStringBySize(15), "Matt", "John", "bonus", -2487, "16-11-2024"),
        new Transaction(randomStringBySize(15), "Kate", "Matt", "payment", 1821, "07-10-2024"),
        new Transaction(randomStringBySize(15), "Matt", "Lily", "refund", -3240, "30-12-2024"),
        new Transaction(randomStringBySize(15), "Mark", "Matt", "sponsorship", 1765, "02-02-2024"),
        new Transaction(randomStringBySize(15), "Matt", "Noah", "incentive", -2127, "14-03-2024"),
        new Transaction(randomStringBySize(15), "Olivia", "Matt", "commission", 2999, "05-01-2024"),
        new Transaction(randomStringBySize(15), "Matt", "Peter", "allowance", -2356, "23-06-2024"),
        new Transaction(randomStringBySize(15), "Rachel", "Matt", "dividend", 1985, "08-09-2024"),
        new Transaction(randomStringBySize(15), "Matt", "Sam", "grant", -3067, "19-05-2024")
    ]

    const isTransactionOutgoing = (amount) => {
        return (amount < 0) ? true : false;
    }

    const renderTransactionType = (amount) => {
        if (isTransactionOutgoing(amount)) {
            return (
                <span className="bg-red-100 text-red-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded-md dark:bg-gray-700 dark:text-red-400 border border-red-100 dark:border-red-500">
                    Outgoing
                </span>
            )
        } else {
            return (
                <span className="bg-green-100 text-green-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded-md dark:bg-gray-700 dark:text-green-400 border border-green-100 dark:border-green-500">
                    Incoming
                </span>
            )
        }
    }

    const [pageLimit, setPageLimit] = useState(5);
    const [transactions, setTransactions] = useState(dummy_data.slice(0, 5));
    const [currentPage, setCurrentPage] = useState(1);



    return (
        <>
            {/* Card header */}
            <div className="items-center justify-center lg:flex w-full">
                <div className="mb-4 lg:mb-0">
                    <span className="text-base font-normal text-gray-500 dark:text-gray-400">
                        This is a list of latest transactions
                    </span>
                </div>
                <div className="items-center sm:flex">
                    <div className="flex items-center">
                        <button
                            id="dropdownDefault"
                            data-dropdown-toggle="dropdown"
                            className="mb-4 sm:mb-0 mr-4 inline-flex items-center text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-4 py-2.5 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
                            type="button"
                        >
                            Filter by status
                            <svg
                                className="w-4 h-4 ml-2"
                                aria-hidden="true"
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
                            id="dropdown"
                            className="z-10 hidden w-56 p-3 bg-white rounded-lg shadow dark:bg-gray-700"
                            style={{
                                position: "absolute",
                                inset: "0px auto auto 0px",
                                margin: 0,
                                transform: "translate3d(577px, 5880px, 0px)"
                            }}
                            data-popper-placement="bottom"
                        >
                            <h6 className="mb-3 text-sm font-medium text-gray-900 dark:text-white">
                                Category
                            </h6>
                            <ul className="space-y-2 text-sm" aria-labelledby="dropdownDefault">
                                <li className="flex items-center">
                                    <input
                                        id="apple"
                                        type="checkbox"
                                        defaultValue=""
                                        className="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                                    />
                                    <label
                                        htmlFor="apple"
                                        className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-100"
                                    >
                                        Completed (56)
                                    </label>
                                </li>
                                <li className="flex items-center">
                                    <input
                                        id="fitbit"
                                        type="checkbox"
                                        defaultValue=""
                                        defaultChecked=""
                                        className="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                                    />
                                    <label
                                        htmlFor="fitbit"
                                        className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-100"
                                    >
                                        Cancelled (56)
                                    </label>
                                </li>
                                <li className="flex items-center">
                                    <input
                                        id="dell"
                                        type="checkbox"
                                        defaultValue=""
                                        className="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                                    />
                                    <label
                                        htmlFor="dell"
                                        className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-100"
                                    >
                                        In progress (56)
                                    </label>
                                </li>
                                <li className="flex items-center">
                                    <input
                                        id="asus"
                                        type="checkbox"
                                        defaultValue=""
                                        defaultChecked=""
                                        className="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                                    />
                                    <label
                                        htmlFor="asus"
                                        className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-100"
                                    >
                                        In review (97)
                                    </label>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div date-rangepicker="" className="flex items-center space-x-4">
                        <div className="relative">
                            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                <svg
                                    className="w-5 h-5 text-gray-500 dark:text-gray-400"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg"
                                    aria-hidden="true"
                                >
                                    <path d="M5.25 12a.75.75 0 01.75-.75h.01a.75.75 0 01.75.75v.01a.75.75 0 01-.75.75H6a.75.75 0 01-.75-.75V12zM6 13.25a.75.75 0 00-.75.75v.01c0 .414.336.75.75.75h.01a.75.75 0 00.75-.75V14a.75.75 0 00-.75-.75H6zM7.25 12a.75.75 0 01.75-.75h.01a.75.75 0 01.75.75v.01a.75.75 0 01-.75.75H8a.75.75 0 01-.75-.75V12zM8 13.25a.75.75 0 00-.75.75v.01c0 .414.336.75.75.75h.01a.75.75 0 00.75-.75V14a.75.75 0 00-.75-.75H8zM9.25 10a.75.75 0 01.75-.75h.01a.75.75 0 01.75.75v.01a.75.75 0 01-.75.75H10a.75.75 0 01-.75-.75V10zM10 11.25a.75.75 0 00-.75.75v.01c0 .414.336.75.75.75h.01a.75.75 0 00.75-.75V12a.75.75 0 00-.75-.75H10zM9.25 14a.75.75 0 01.75-.75h.01a.75.75 0 01.75.75v.01a.75.75 0 01-.75.75H10a.75.75 0 01-.75-.75V14zM12 9.25a.75.75 0 00-.75.75v.01c0 .414.336.75.75.75h.01a.75.75 0 00.75-.75V10a.75.75 0 00-.75-.75H12zM11.25 12a.75.75 0 01.75-.75h.01a.75.75 0 01.75.75v.01a.75.75 0 01-.75.75H12a.75.75 0 01-.75-.75V12zM12 13.25a.75.75 0 00-.75.75v.01c0 .414.336.75.75.75h.01a.75.75 0 00.75-.75V14a.75.75 0 00-.75-.75H12zM13.25 10a.75.75 0 01.75-.75h.01a.75.75 0 01.75.75v.01a.75.75 0 01-.75.75H14a.75.75 0 01-.75-.75V10zM14 11.25a.75.75 0 00-.75.75v.01c0 .414.336.75.75.75h.01a.75.75 0 00.75-.75V12a.75.75 0 00-.75-.75H14z" />
                                    <path
                                        clipRule="evenodd"
                                        fillRule="evenodd"
                                        d="M5.75 2a.75.75 0 01.75.75V4h7V2.75a.75.75 0 011.5 0V4h.25A2.75 2.75 0 0118 6.75v8.5A2.75 2.75 0 0115.25 18H4.75A2.75 2.75 0 012 15.25v-8.5A2.75 2.75 0 014.75 4H5V2.75A.75.75 0 015.75 2zm-1 5.5c-.69 0-1.25.56-1.25 1.25v6.5c0 .69.56 1.25 1.25 1.25h10.5c.69 0 1.25-.56 1.25-1.25v-6.5c0-.69-.56-1.25-1.25-1.25H4.75z"
                                    />
                                </svg>
                            </div>
                            <input
                                name="start"
                                type="text"
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full pl-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 datepicker-input"
                                placeholder="From"
                                data-np-intersection-state="visible"
                            />
                        </div>
                        <div className="relative">
                            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                <svg
                                    className="w-5 h-5 text-gray-500 dark:text-gray-400"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg"
                                    aria-hidden="true"
                                >
                                    <path d="M5.25 12a.75.75 0 01.75-.75h.01a.75.75 0 01.75.75v.01a.75.75 0 01-.75.75H6a.75.75 0 01-.75-.75V12zM6 13.25a.75.75 0 00-.75.75v.01c0 .414.336.75.75.75h.01a.75.75 0 00.75-.75V14a.75.75 0 00-.75-.75H6zM7.25 12a.75.75 0 01.75-.75h.01a.75.75 0 01.75.75v.01a.75.75 0 01-.75.75H8a.75.75 0 01-.75-.75V12zM8 13.25a.75.75 0 00-.75.75v.01c0 .414.336.75.75.75h.01a.75.75 0 00.75-.75V14a.75.75 0 00-.75-.75H8zM9.25 10a.75.75 0 01.75-.75h.01a.75.75 0 01.75.75v.01a.75.75 0 01-.75.75H10a.75.75 0 01-.75-.75V10zM10 11.25a.75.75 0 00-.75.75v.01c0 .414.336.75.75.75h.01a.75.75 0 00.75-.75V12a.75.75 0 00-.75-.75H10zM9.25 14a.75.75 0 01.75-.75h.01a.75.75 0 01.75.75v.01a.75.75 0 01-.75.75H10a.75.75 0 01-.75-.75V14zM12 9.25a.75.75 0 00-.75.75v.01c0 .414.336.75.75.75h.01a.75.75 0 00.75-.75V10a.75.75 0 00-.75-.75H12zM11.25 12a.75.75 0 01.75-.75h.01a.75.75 0 01.75.75v.01a.75.75 0 01-.75.75H12a.75.75 0 01-.75-.75V12zM12 13.25a.75.75 0 00-.75.75v.01c0 .414.336.75.75.75h.01a.75.75 0 00.75-.75V14a.75.75 0 00-.75-.75H12zM13.25 10a.75.75 0 01.75-.75h.01a.75.75 0 01.75.75v.01a.75.75 0 01-.75.75H14a.75.75 0 01-.75-.75V10zM14 11.25a.75.75 0 00-.75.75v.01c0 .414.336.75.75.75h.01a.75.75 0 00.75-.75V12a.75.75 0 00-.75-.75H14z" />
                                    <path
                                        clipRule="evenodd"
                                        fillRule="evenodd"
                                        d="M5.75 2a.75.75 0 01.75.75V4h7V2.75a.75.75 0 011.5 0V4h.25A2.75 2.75 0 0118 6.75v8.5A2.75 2.75 0 0115.25 18H4.75A2.75 2.75 0 012 15.25v-8.5A2.75 2.75 0 014.75 4H5V2.75A.75.75 0 015.75 2zm-1 5.5c-.69 0-1.25.56-1.25 1.25v6.5c0 .69.56 1.25 1.25 1.25h10.5c.69 0 1.25-.56 1.25-1.25v-6.5c0-.69-.56-1.25-1.25-1.25H4.75z"
                                    />
                                </svg>
                            </div>
                            <input
                                name="end"
                                type="text"
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full pl-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 datepicker-input"
                                placeholder="To"
                                data-np-intersection-state="visible"
                            />
                        </div>
                    </div>
                </div>
            </div>
            {/* Table */}
            <div className="flex flex-col mt-6 w-full">
                <div className="overflow-x-auto rounded-lg">
                    <div className="inline-block min-w-full align-middle">
                        <div className="overflow-hidden shadow sm:rounded-lg">
                            <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-600">
                                <thead className="bg-gray-50 dark:bg-gray-700">
                                    <tr>
                                        <th
                                            scope="col"
                                            className="p-4 text-xs font-medium tracking-wider text-left text-gray-500 uppercase dark:text-white"
                                        >
                                            Transaction ID
                                        </th>
                                        <th
                                            scope="col"
                                            className="p-4 text-xs font-medium tracking-wider text-left text-gray-500 uppercase dark:text-white"
                                        >
                                            Transaction
                                        </th>
                                        <th
                                            scope="col"
                                            className="p-4 text-xs font-medium tracking-wider text-left text-gray-500 uppercase dark:text-white"
                                        >
                                            Date &amp; Time
                                        </th>
                                        <th
                                            scope="col"
                                            className="p-4 text-xs font-medium tracking-wider text-left text-gray-500 uppercase dark:text-white"
                                        >
                                            Reference
                                        </th>
                                        <th
                                            scope="col"
                                            className="p-4 text-xs font-medium tracking-wider text-left text-gray-500 uppercase dark:text-white"
                                        >
                                            Amount
                                        </th>
                                        <th
                                            scope="col"
                                            className="p-4 text-xs font-medium tracking-wider text-left text-gray-500 uppercase dark:text-white"
                                        >
                                            Type
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className="bg-white dark:bg-gray-800">
                                    {transactions.map((tr) => (
                                        <tr className="bg-gray-50 dark:bg-gray-700">
                                            <td className="p-4 text-sm font-normal text-gray-900 whitespace-nowrap dark:text-white">
                                                {tr.transaction_id}
                                            </td>
                                            <td className="p-4 text-sm font-normal text-gray-900 whitespace-nowrap dark:text-white">
                                                {(isTransactionOutgoing(tr.amount)) ? "Payment to " : "Payment from "}
                                                <span className="font-semibold">{(isTransactionOutgoing(tr.amount)) ? tr.reciever_id : tr.sender_id}</span>
                                            </td>
                                            <td className="p-4 text-sm font-normal text-gray-500 whitespace-nowrap dark:text-gray-400">
                                                {tr.transaction_date}
                                            </td>
                                            <td className="p-4 text-sm font-normal text-gray-500 whitespace-nowrap dark:text-gray-400">
                                                {tr.reference}
                                            </td>
                                            <td className="p-4 text-sm font-semibold text-gray-900 whitespace-nowrap dark:text-white">
                                                {isTransactionOutgoing(tr.amount) ? tr.amount * -1 : tr.amount} GBP
                                            </td>
                                            <td className="p-4 whitespace-nowrap">
                                                {renderTransactionType(tr.amount)}
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
            {/* Card Footer */}
            <div className="flex items-center justify-between pt-3 sm:pt-6">
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
            </div>
        </>
    )

}

export default TransactionList;
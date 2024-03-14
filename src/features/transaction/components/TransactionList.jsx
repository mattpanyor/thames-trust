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

    const chopData = (limit, data) => {
        let result = {
            transactions: [],
            page: 1
        }
        for (let i = 0; i < data.length; i += limit) {
            result.transactions.push(data.slice(i, i + limit))
        }
        //console.log(result);
        return result;
    }

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
    const [transactionList, setTransactionList] = useState(chopData(5, dummy_data));
    const [transactionView, setTransactionView] = useState(transactionList.transactions[0])

    const changePage = (pageNumber) => {
        if (pageNumber >= 1 && pageNumber <= transactionList.transactions.length) {
            setTransactionView(transactionList.transactions[pageNumber])
            setTransactionList({ ...transactionList, page: pageNumber })
        }
    }

    return (
        <>
            {/* Card header */}

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
                                    {transactionView.map((tr) => (
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
                <button
                    onClick={() => changePage(transactionList.page - 1)}
                //disabled={(transactionList.page <= 1) ? true : false}
                >
                    Prev
                </button>
                <button
                    onClick={() => changePage(transactionList.page + 1)}
                //disabled={(transactionList.transactions.length >= transactionList.page) ? true : false}
                >
                    Next
                </button>
            </div>
        </>
    )

}

export default TransactionList;
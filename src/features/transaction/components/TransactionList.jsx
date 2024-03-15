import { useState } from 'react';
import Transaction from '../classes/Transaction';
import randomStringBySize from 'src/utils/randomString'
import TransactionListLine from './TransactionListLine';
import TransactionListControls from './TransactionListControls';

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
        let result = []

        for (let i = 0; i < data.length; i += limit) {
            result.push(data.slice(i, i + limit))
        }
        return result;
    }

    const [currentPage, setCurrentPage] = useState(0)
    const [transactionList, setTransactionList] = useState(chopData(6, dummy_data));
    const [transactionView, setTransactionView] = useState(transactionList[0])


    const changePage = (pageNumber) => {
        if (pageNumber >= 0 && pageNumber <= transactionList.length - 1) {
            setTransactionView(transactionList[pageNumber])
            setCurrentPage(pageNumber)
        }
    }

    return (
        <div className='w-full'>
            {/* Card header */}

            {/* Table */}
            <div className="flex flex-col mt-6">
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
                                        <TransactionListLine tr={tr} />
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
            {/* Card Footer */}
            <TransactionListControls pageChange={changePage} currentPage={currentPage} max_length={transactionList.length} />
        </div>
    )

}

export default TransactionList;
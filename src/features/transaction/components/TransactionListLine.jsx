import React from 'react'

function TransactionListLine({ tr }) {
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

    return (
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
    )
}

export default TransactionListLine
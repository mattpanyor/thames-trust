function TransactionListLine({ tr }) {
  const isTransactionOutgoing = (amount) => {
    return amount < 0;
  };

  const renderTransactionType = (amount) => {
    if (isTransactionOutgoing(amount)) {
      return (
        <span className="mr-2 rounded-md border border-red-100 bg-red-100 px-2.5 py-0.5 text-xs font-medium text-red-800 dark:border-red-500 dark:bg-gray-700 dark:text-red-400">
          Outgoing
        </span>
      );
    } else {
      return (
        <span className="mr-2 rounded-md border border-green-100 bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-800 dark:border-green-500 dark:bg-gray-700 dark:text-green-400">
          Incoming
        </span>
      );
    }
  };

  return (
    <tr className="border-b odd:bg-white even:bg-gray-50 dark:border-gray-700 odd:dark:bg-gray-900 even:dark:bg-gray-800">
      <td className="whitespace-nowrap p-4 text-sm font-normal text-gray-900 dark:text-white">
        {tr.transactionId}
      </td>
      <td className="whitespace-nowrap p-4 text-sm font-normal text-gray-900 dark:text-white">
        {isTransactionOutgoing(tr.amount) ? 'Payment to ' : 'Payment from '}
        <span className="font-semibold">
          {isTransactionOutgoing(tr.amount) ? tr.receiverId : tr.senderId}
        </span>
      </td>
      <td className="whitespace-nowrap p-4 text-sm font-normal text-gray-500 dark:text-gray-400">
        {tr.transactionDate}
      </td>
      <td className="whitespace-nowrap p-4 text-sm font-normal text-gray-500 dark:text-gray-400">
        {tr.reference}
      </td>
      <td className="whitespace-nowrap p-4 text-sm font-semibold text-gray-900 dark:text-white">
        {isTransactionOutgoing(tr.amount) ? tr.amount * -1 : tr.amount} GBP
      </td>
      <td className="whitespace-nowrap p-4">{renderTransactionType(tr.amount)}</td>
    </tr>
  );
}

export default TransactionListLine;

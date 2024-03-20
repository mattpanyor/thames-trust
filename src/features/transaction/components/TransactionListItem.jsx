import { useLocalStorage } from 'src/hooks';
import { cn } from 'src/utils';

export function TransactionListItem({ transaction }) {
  const { userRepository, accountRepository } = useLocalStorage();

  const sender = userRepository.findById(
    accountRepository.findById(parseInt(transaction.senderId)).userId
  );

  const receiver = userRepository.findById(
    accountRepository.findById(parseInt(transaction.receiverId)).userId
  );

  const isTransactionOutgoing = (amount) => {
    return amount < 0;
  };

  return (
    <tr className="border-b odd:bg-white even:bg-gray-50 dark:border-gray-700 odd:dark:bg-gray-900 even:dark:bg-gray-800">
      <td className="whitespace-nowrap p-4 text-sm font-normal text-gray-900 dark:text-white">
        {isTransactionOutgoing(transaction.amount) ? 'Payment to ' : 'Payment from '}
        <span className="font-semibold">
          {isTransactionOutgoing(transaction.amount)
            ? `${receiver.firstName} ${receiver.lastName}`
            : `${sender.firstName} ${sender.lastName}`}
        </span>
      </td>
      <td className={`whitespace-nowrap p-4 text-sm font-semibold text-gray-900 dark:text-white`}>
        {isTransactionOutgoing(transaction.amount) ? (
          <span className="text-red-800 dark:text-red-400">
            -£{(transaction.amount * -1).toFixed(2)}
          </span>
        ) : (
          <span className="text-green-800 dark:border-green-500 dark:text-green-400">
            +£{transaction.amount.toFixed(2)}
          </span>
        )}
      </td>
      <td className="whitespace-nowrap p-4 text-sm font-normal text-gray-500 dark:text-gray-400">
        {transaction.reference}
      </td>
      <td className="whitespace-nowrap p-4 text-sm font-normal text-gray-500 dark:text-gray-400">
        {new Date(transaction.transactionDate).toLocaleString()}
      </td>
      <td className="whitespace-nowrap p-4 text-sm font-normal text-gray-900 dark:text-white">
        {transaction.transactionId}
      </td>
      <td className="whitespace-nowrap p-4">
        <span
          className={cn(
            `mr-2 rounded-md border border-red-100 bg-red-100 px-2.5 py-0.5 text-xs font-medium`,
            {
              'border-red-100 bg-red-100 text-red-800 dark:border-red-500 dark:bg-gray-700 dark:text-red-400':
                isTransactionOutgoing(transaction.amount),
              'border-green-100 bg-green-100 text-green-800 dark:border-green-500 dark:bg-gray-700 dark:text-green-400':
                !isTransactionOutgoing(transaction.amount)
            }
          )}>
          {isTransactionOutgoing(transaction.amount) ? 'Outgoing' : 'Incoming'}
        </span>
      </td>
    </tr>
  );
}

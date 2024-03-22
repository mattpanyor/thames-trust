import { useAuthentication, useLocalStorage } from 'src/hooks';
import { cn } from 'src/utils';

export function TransactionListItem({ transaction }) {
  const { authentication } = useAuthentication();
  const { userRepository, accountRepository } = useLocalStorage();

  /*
   * Retrieves userID for the sender in transaction.
   * */
  const sender = userRepository.findById(
    accountRepository.findById(parseInt(transaction.senderId)).userId
  );

  /*
   * Retrieves userID for the receiver in transaction.
   * */
  const receiver = userRepository.findById(
    accountRepository.findById(parseInt(transaction.receiverId)).userId
  );

  /*
   * Determines if transaction is outgoing.
   * @TODO This should be checked against the sending/receiving account. Transaction is a contextual object.
   *   Its type can be 'outgoing' for the sending account, but 'incoming' for the receiving account.
   * */
  const isTransactionOutgoing = () => {
    return authentication.getAuthenticatedUserId() !== receiver.id;
  };

  return (
    <tr className="border-b odd:bg-white even:bg-gray-50 hover:bg-gray-100 dark:border-gray-700 odd:dark:bg-gray-900 even:dark:bg-gray-800 dark:hover:bg-gray-700">
      <td className="whitespace-nowrap p-4 text-sm font-normal text-gray-900 dark:text-white">
        {isTransactionOutgoing(transaction.amount) ? 'Payment to ' : 'Payment from '}
        <span className="font-semibold">
          {isTransactionOutgoing()
            ? `${receiver.firstName} ${receiver.lastName}`
            : `${sender.firstName} ${sender.lastName}`}
        </span>
      </td>
      <td className={`whitespace-nowrap p-4 text-sm font-semibold text-gray-900 dark:text-white`}>
        {isTransactionOutgoing() ? (
          <span className="text-red-800 dark:text-red-400">-£{transaction.amount.toFixed(2)}</span>
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
                isTransactionOutgoing(),
              'border-green-100 bg-green-100 text-green-800 dark:border-green-500 dark:bg-gray-700 dark:text-green-400':
                !isTransactionOutgoing()
            }
          )}>
          {isTransactionOutgoing() ? 'Outgoing' : 'Incoming'}
        </span>
      </td>
    </tr>
  );
}

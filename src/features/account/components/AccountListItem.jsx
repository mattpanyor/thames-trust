import { Button } from 'src/components/elements';

export function AccountListItem({ account, onClick, setInitialSendingAccount }) {
  const handleButtonClick = () => {
    onClick();
    setInitialSendingAccount(account.id);
  };

  return (
    <>
      <div id={account.id} key={account.id} className="col-span-full xl:col-auto">
        <div className="mb-4 rounded-lg border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-800 sm:p-6 2xl:col-span-2">
          <div className="items-center sm:flex sm:space-x-4 xl:block xl:space-x-0 2xl:flex 2xl:space-x-4">
            <div>
              <h3 className="mb-1 text-xl font-bold text-gray-900 dark:text-white">
                {account.type}
              </h3>
              <div className="flex w-full">
                <h6 className="mb-3 text-sm text-gray-900 dark:text-white">
                  Account No: {account.accountNumber}
                </h6>
                <h6 className="mx-2 mb-3 text-sm text-gray-900 dark:text-white">
                  Sort Code: {account.sortCode}
                </h6>
              </div>
              <h5 className="mb-1 text-sm text-gray-900 dark:text-white">
                Account Balance: £{account.balance.toFixed(2)}
              </h5>
              <div className="mb-4 text-sm text-gray-500 dark:text-gray-400"></div>
              <div className="flex items-center space-x-4">
                <Button
                  onClick={handleButtonClick}
                  btnTxt={'Pay & Transfer'}
                  className={'px-3 py-2'}
                />
                <Button
                  btnTxt={'Direct Debits'}
                  className={
                    'dark:focus: rounded-lg border border-gray-200 bg-white px-3 py-2 text-gray-900 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white'
                  }
                />
                <Button
                  btnTxt={'Cashback Offers'}
                  className={
                    'dark:focus: rounded-lg border border-gray-200 bg-white px-3 py-2 text-gray-900 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white'
                  }
                />
                <Button
                  btnTxt={'More'}
                  className={
                    'dark:focus: rounded-lg border border-gray-200 bg-white px-3 py-2 text-gray-900 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white'
                  }
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

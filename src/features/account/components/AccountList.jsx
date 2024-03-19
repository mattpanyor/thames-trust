import { useState } from 'react';
import { Button } from 'src/components/elements';
import {
  AccountCreateForm,
  AccountListItem,
  AccountPaymentForm,
  ModalDrawer
} from 'src/features/account/components';
import { useAccountContext, useAuthentication, useModalDrawerContext } from 'src/hooks';

export function AccountList() {
  const { accounts, setAccounts } = useAccountContext();
  const { authentication } = useAuthentication();
  const authenticatedUserId = authentication.getAuthenticatedUserId();

  const [isDrawerModalOpen, setIsDrawerModalOpen] = useModalDrawerContext();
  const [modalType, setModalType] = useState(null);
  const [initialSendingAccount, setInitialSendingAccount] = useState(null);

  const handleModalOpenClick = (type) => {
    setIsDrawerModalOpen(!isDrawerModalOpen);
    setModalType(type);
  };

  const modalComponents = {
    createAccount: <AccountCreateForm toggleModalVisibility={handleModalOpenClick} />,
    paymentForm: (
      <AccountPaymentForm
        initialSendingAccount={initialSendingAccount}
        toggleModalVisibility={handleModalOpenClick}
      />
    )
  };

  return (
    <>
      <ModalDrawer
        setIsDrawerModalOpen={setIsDrawerModalOpen}
        isDrawerModalOpen={isDrawerModalOpen}
        content={modalComponents[modalType]}
      />

      <div className="mb-4 block items-center justify-between dark:divide-gray-700 sm:flex md:divide-x md:divide-gray-100">
        <div className="mb-4 flex items-center sm:mb-0">
          <form className="sm:pr-3" onClick={(e) => e.preventDefault()}>
            <label htmlFor="accounts-search" className="sr-only">
              Search
            </label>
            <div className="relative mt-1 w-48 sm:w-64 xl:w-96">
              <input
                type="text"
                name="email"
                id="accounts-search"
                className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500 sm:text-sm"
                placeholder="Search for accounts"
              />
            </div>
          </form>
        </div>
        <Button
          onClick={() => handleModalOpenClick('createAccount')}
          btnTxt={'Create Account'}
          className={
            'rounded-lg bg-blue-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
          }
        />
      </div>
      {accounts
        .filter((account) => account.userId === authenticatedUserId)
        .map((account) => (
          <AccountListItem
            key={account.id}
            onClick={() => handleModalOpenClick('paymentForm')}
            account={account}
            setInitialSendingAccount={setInitialSendingAccount}
          />
        ))}
    </>
  );
}

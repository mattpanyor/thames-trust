import { useEffect, useState } from 'react';
import { Button } from 'src/components/elements';
import Account from 'src/features/account/classes/Account.js';
import { useAccountContext, useAuthentication, useLocalStorage } from 'src/hooks';
import sleep from 'src/utils/sleep.js';

export function AccountCreateForm({ onShow }) {
  const { accounts, setAccounts } = useAccountContext();
  const [account, setAccount] = useState(new Account());

  const { authentication } = useAuthentication();
  const { userRepository } = useLocalStorage();

  const { accountRepository } = useLocalStorage();
  const [isDisabled, setDisabled] = useState(true);
  const [isPending, setIsPending] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const [selectedAccountType, setSelectedAccountType] = useState(null);

  useEffect(() => {
    setDisabled(!selectedAccountType);
  }, [selectedAccountType]);

  const handleCheckboxChange = () => {
    setIsChecked((prev) => !prev);
  };

  const handleAccountTypeChange = (event) => {
    setSelectedAccountType(event.target.value);
  };

  const handleFormSubmit = async () => {
    setIsPending(true);
    await sleep(1000);

    const resetForm = () => {
      setIsPending(false);
      setDisabled(true);
      handleCheckboxChange();
      setSelectedAccountType(false);
    };

    try {
      await accountRepository.create({
        ...account,
        type: selectedAccountType,
        userId: userRepository.findUserByUsername(authentication.getAuthenticationToken().username)
          .id
      });
      setAccounts(accountRepository.findAll());
      onShow();
    } catch (error) {
      console.error('Error creating account:', error);
    } finally {
      resetForm();
    }
  };

  return (
    <>
      <div className="w-full max-w-2xl space-y-4 p-4 dark:bg-gray-800 sm:p-4 2xl:col-span-2">
        <form className="mt-8 space-y-6" onSubmit={(e) => e.preventDefault()}>
          <div className="grid gap-6 md:grid-rows-2">
            <div className="flex items-center rounded border border-gray-200 ps-4 dark:border-gray-700">
              <input
                value="Current"
                checked={selectedAccountType === 'Current'}
                onChange={handleAccountTypeChange}
                id="bordered-radio-1"
                type="radio"
                name="bordered-radio"
                className="h-4 w-4 border-gray-300 bg-gray-100 text-blue-600 focus:right-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-blue-600"
              />
              <label
                htmlFor="bordered-radio-1"
                className="ms-2 w-full py-4 text-sm font-medium text-gray-900 dark:text-gray-300">
                Current Account
              </label>
            </div>
            <div className="flex items-center rounded border border-gray-200 ps-4 dark:border-gray-700">
              <input
                checked={selectedAccountType === 'Thames Saver'}
                onChange={handleAccountTypeChange}
                id="bordered-radio-2"
                type="radio"
                value="Thames Saver"
                name="bordered-radio"
                className="h-4 w-4 border-gray-300 bg-gray-100 text-blue-600 focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-blue-600"
              />
              <label
                htmlFor="bordered-radio-2"
                className="ms-2 w-full py-4 text-sm font-medium text-gray-900 dark:text-gray-300">
                Thames Saver Account
              </label>
            </div>
          </div>
          <fieldset>
            <legend className="sr-only">Terms and Condition</legend>

            <div className="mb-4 flex items-center">
              <input
                checked={isChecked}
                onChange={handleCheckboxChange}
                id="terms-and-conditions"
                type="checkbox"
                required
                className="h-4 w-4 rounded border-gray-300 bg-gray-100 text-blue-600 focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-blue-600 dark:focus:ring-offset-gray-800"
              />
              <label
                htmlFor="terms-and-conditions"
                className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                I agree to the
                <button className="ms-1 text-blue-600 hover:underline dark:text-blue-500">
                  terms and conditions
                </button>
                .
              </label>
            </div>
          </fieldset>
        </form>
      </div>
      <div className="bottom-0 left-0 mt-4 flex w-full justify-center space-x-4 pb-4 sm:absolute sm:mt-0 sm:px-4">
        <Button
          onClick={handleFormSubmit}
          isPending={isPending}
          isDisabled={isDisabled}
          btnTxt={isPending ? 'Creating...' : 'Create'}
          className={'justify-center sm:w-full'}
        />
        <Button
          onClick={onShow}
          btnTxt={'Cancel'}
          className={
            'border border-red-600 bg-transparent text-red-600 hover:bg-red-600 hover:text-white focus:outline-none focus:ring-4 focus:ring-red-300 dark:border-red-500 dark:bg-transparent dark:text-red-500 dark:hover:bg-red-600 dark:hover:text-white dark:focus:ring-red-900 sm:w-full'
          }
        />
      </div>
    </>
  );
}

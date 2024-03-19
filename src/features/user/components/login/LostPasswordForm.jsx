import { useLocalStorage } from 'src/hooks';
import { Button } from 'src/components/elements';
import { useState } from 'react';

export function LostPasswordForm() {
  const { userRepository } = useLocalStorage();
  const [passwordResetFormData, setPasswordResetFormData] = useState({ email: '', password: '' });

  const [isChecked, setIsChecked] = useState(false);

  const handleCheckbox = (e) => {
    setIsChecked(e.target.checked);
  };

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setPasswordResetFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const handlePasswordReset = (e) => {
    setPasswordResetFormData({
      ...passwordResetFormData,
      password: userRepository.findUserByEmail(passwordResetFormData.email).password
    });
  };
  return (
    <>
      <p className="text-base font-normal text-gray-500 dark:text-gray-400">
        {passwordResetFormData.password
          ? `Your password is ${passwordResetFormData.password}`
          : `Please enter your email and we will send you a link to reset your password`}
      </p>
      <form className="mt-8 space-y-6">
        <div>
          <label
            htmlFor="email"
            className="mb-2 block text-sm font-medium text-gray-900 dark:text-white">
            Your email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500 sm:text-sm"
            placeholder="name@company.com"
            required
            onChange={handleOnChange}
          />
        </div>
        <div className="flex items-start">
          <div className="flex h-5 items-center">
            <input
              id="terms-and-conditions"
              name="terms-and-conditions"
              type="checkbox"
              className="focus:ring-3 h-4 w-4 rounded border-gray-300 bg-gray-50 focus:ring-blue-300 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-blue-600"
              required
              onChange={handleCheckbox}
              checked={isChecked}
            />
          </div>
          <div className="ml-3 text-sm">
            <label
              htmlFor="terms-and-conditions"
              className="font-medium text-gray-900 dark:text-white">
              I accept the
              <button className="ml-1 text-blue-700 hover:underline dark:text-blue-500">
                terms and conditions
              </button>
            </label>
          </div>
        </div>
        <Button
          btnType="button"
          btnTxt="Reset Password"
          isDisabled={!isChecked}
          onClick={handlePasswordReset}
        />
      </form>
    </>
  );
}

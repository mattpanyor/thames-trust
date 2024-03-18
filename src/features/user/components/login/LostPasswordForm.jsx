import { Button } from 'src/components/elements';

export function LostPasswordForm() {
  return (
    <div className="w-full rounded-lg bg-white shadow dark:bg-gray-800 sm:max-w-md md:mt-0 xl:p-0">
      <div className="w-full p-6 sm:p-8">
        {/* <h2 className="mb-3 text-2xl font-bold text-gray-900 dark:text-white">
          Forgot your password?
        </h2> */}
        <p className="text-base font-normal text-gray-500 dark:text-gray-400">
          Please enter your email and we will send you a link to reset your password
        </p>
        <form className="mt-8 space-y-6" action="#">
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
              className="focus:ring-primary-500 focus:border-primary-500 dark:focus:ring-primary-500 dark:focus:border-primary-500 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-gray-900 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 sm:text-sm"
              placeholder="name@company.com"
              required=""
            />
          </div>
          <div className="flex items-start">
            <div className="flex h-5 items-center">
              <input
                id="remember"
                aria-describedby="remember"
                name="remember"
                type="checkbox"
                className="focus:ring-3 focus:ring-primary-300 dark:focus:ring-primary-600 h-4 w-4 rounded border-gray-300 bg-gray-50 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800"
                required=""
              />
            </div>
            <div className="ml-3 text-sm">
              <label htmlFor="remember" className="font-medium text-gray-900 dark:text-white">
                I accept the{' '}
                <a href="#" className="text-primary-700 dark:text-primary-500 hover:underline">
                  Terms and Conditions
                </a>
              </label>
            </div>
          </div>
          <button
            type="submit"
            className="bg-primary-700 hover:bg-primary-800 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 w-full rounded-lg px-5 py-3 text-center text-base font-medium text-white focus:ring-4 sm:w-auto">
            Reset password
          </button>
        </form>
      </div>
    </div>
  );
}

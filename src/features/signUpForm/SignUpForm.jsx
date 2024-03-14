export function SignUpForm() {
  return (
    <div className="w-full max-w-xl space-y-8 rounded-lg sm:p-8">
      <form action="#">
        <div className="grid grid-cols-6 gap-6">
          <div className="col-span-6 sm:col-span-3">
            <label
              htmlFor="first-name"
              className="mb-2 block text-sm font-medium text-gray-900 dark:text-white">
              First Name
            </label>
            <input
              type="text"
              name="first-name"
              id="first-name"
              className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-gray-900 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500 sm:text-sm"
              placeholder="Bonnie"
              required=""
            />
          </div>
          <div className="col-span-6 sm:col-span-3">
            <label
              htmlFor="last-name"
              className="mb-2 block text-sm font-medium text-gray-900 dark:text-white">
              Last Name
            </label>
            <input
              type="text"
              name="last-name"
              id="last-name"
              className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-gray-900 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500 sm:text-sm"
              placeholder="Green"
              required=""
            />
          </div>
          <div className="col-span-6 sm:col-span-3">
            <label
              htmlFor="address"
              className="mb-2 block text-sm font-medium text-gray-900 dark:text-white">
              Address
            </label>
            <input
              type="text"
              name="address"
              id="address"
              className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-gray-900 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500 sm:text-sm"
              placeholder="e.g. California"
              required=""
            />
          </div>
          <div className="col-span-6 sm:col-span-3">
            <label
              htmlFor="email"
              className="mb-2 block text-sm font-medium text-gray-900 dark:text-white">
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-gray-900 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500 sm:text-sm"
              placeholder="example@company.com"
              required=""
            />
          </div>
          <div className="col-span-6 sm:col-span-3">
            <label
              htmlFor="DOB"
              className="mb-2 block text-sm font-medium text-gray-900 dark:text-white">
              Date of Birth
            </label>
            <input
              type="number"
              name="DOB"
              id="DOB"
              className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-gray-900 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500 sm:text-sm"
              placeholder="15/08/1990"
              required=""
            />
          </div>
          <div className="col-span-6 sm:col-span-3">
            <label
              htmlFor="postcode"
              className="mb-2 block text-sm font-medium text-gray-900 dark:text-white">
              Post code
            </label>
            <input
              type="number"
              name="postcode"
              id="postcode"
              className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-gray-900 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500 sm:text-sm"
              placeholder="XX11 2XX"
              required=""
            />
          </div>
        </div>
        <div className="col-span-6 sm:col-span-3">
          <label
            htmlFor="password"
            className="mb-2 block text-sm font-medium text-gray-900 dark:text-white">
            Your password
          </label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="••••••••"
            className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500 sm:text-sm"
            required=""
          />
        </div>
        <div className="col-span-6 sm:col-span-3">
          <label
            htmlFor="confirm-password"
            className="mb-2 block text-sm font-medium text-gray-900 dark:text-white">
            Confirm password
          </label>
          <input
            type="password"
            name="confirm-password"
            id="confirm-password"
            placeholder="••••••••"
            className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500 sm:text-sm"
            required=""
          />
        </div>
        <div className="auto-rows-auto">
          <div className="mx-auto flex">
            <div className="col-span-12 flex h-5 items-center">
              <input
                id="remember"
                aria-describedby="remember"
                name="remember"
                type="checkbox"
                className="focus:ring-3 h-4 w-4 rounded border-gray-300 bg-gray-50 focus:ring-blue-300 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-blue-600"
                required=""
              />
            </div>
            <div className="col-span-12 ml-3 text-sm sm:col-span-3">
              <label htmlFor="remember" className="font-medium text-gray-900 dark:text-white">
                I accept the{' '}
                <a href="#" className="text-primary-700 hover:underline dark:text-blue-500">
                  Terms and Conditions
                </a>
              </label>
            </div>
            <div className="text-sm font-medium text-gray-500 dark:text-gray-400">
              Already have an account?{' '}
              <a href="#" className="text-blue-700 hover:underline dark:text-blue-500">
                Login here
              </a>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default SignUpForm;

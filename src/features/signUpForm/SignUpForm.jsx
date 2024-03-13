
export function SignUpForm(){
  return (
<div className="w-full max-w-xl space-y-8 rounded-lg bg-white p-6 shadow dark:bg-gray-800 sm:p-8">
  <h3 className="mb-4 text-xl font-semibold dark:text-white">General information</h3>
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
          className="focus:ring-primary-500 focus:border-primary-500 dark:focus:ring-primary-500 dark:focus:border-primary-500 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-gray-900 shadow-sm dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 sm:text-sm"
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
          className="focus:ring-primary-500 focus:border-primary-500 dark:focus:ring-primary-500 dark:focus:border-primary-500 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-gray-900 shadow-sm dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 sm:text-sm"
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
          className="focus:ring-primary-500 focus:border-primary-500 dark:focus:ring-primary-500 dark:focus:border-primary-500 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-gray-900 shadow-sm dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 sm:text-sm"
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
          className="focus:ring-primary-500 focus:border-primary-500 dark:focus:ring-primary-500 dark:focus:border-primary-500 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-gray-900 shadow-sm dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 sm:text-sm"
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
          className="focus:ring-primary-500 focus:border-primary-500 dark:focus:ring-primary-500 dark:focus:border-primary-500 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-gray-900 shadow-sm dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 sm:text-sm"
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
          className="focus:ring-primary-500 focus:border-primary-500 dark:focus:ring-primary-500 dark:focus:border-primary-500 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-gray-900 shadow-sm dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 sm:text-sm"
          placeholder={XX222XX}
          required=""
        />
      </div>
      <>
        <div>
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
            className="focus:ring-primary-500 focus:border-primary-500 dark:focus:ring-primary-500 dark:focus:border-primary-500 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-gray-900 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 sm:text-sm"
            required=""
          />
        </div>
        <div>
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
            className="focus:ring-primary-500 focus:border-primary-500 dark:focus:ring-primary-500 dark:focus:border-primary-500 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-gray-900 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 sm:text-sm"
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
          Create account
        </button>
        <div className="text-sm font-medium text-gray-500 dark:text-gray-400">
          Already have an account?{' '}
          <a href="#" className="text-primary-700 dark:text-primary-500 hover:underline">
            Login here
          </a>
        </div>
      </>
    </div>
  </form>
</div>
)};

export default SignUpForm

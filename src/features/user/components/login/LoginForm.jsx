import { Button } from 'src/components/button/Button';

export function LoginForm() {
  return (
    <>
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
            className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500 sm:text-sm"
            placeholder="name@company.com"
            required=""
          />
        </div>
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
            className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500 sm:text-sm"
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
              className="focus:ring-3 h-4 w-4 rounded border-gray-300 bg-gray-50 focus:ring-blue-300 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-blue-600"
              required=""
            />
          </div>
          <div className="ml-3 text-sm">
            <label htmlFor="remember" className="font-medium text-gray-900 dark:text-white">
              Remember me
            </label>
          </div>
          <a href="#" className="ml-auto text-sm text-blue-700 hover:underline dark:text-blue-500">
            Lost Password?
          </a>
        </div>
        <Button />
        <div className="text-sm font-medium text-gray-500 dark:text-gray-400">
          Not registered?{' '}
          <a className="text-blue-700 hover:underline dark:text-blue-500">Create account</a>
        </div>
      </form>
    </>
  );
}

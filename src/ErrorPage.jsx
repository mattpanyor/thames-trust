import { Link, useRouteError } from 'react-router-dom';
import { Error404Background } from 'src/components/SVGs/Error404Background.jsx';
import { DropdownChevronIcon } from 'src/components/SVGs/index.js';
import { FullWidthLayout } from 'src/layouts';

export default function ErrorPage() {
  const error = useRouteError();
  return (
    <>
      <FullWidthLayout>
        <div className="block md:max-w-lg">
          <Error404Background />
        </div>
        <div className="text-center xl:max-w-4xl">
          <h1 className="mb-3 text-2xl font-bold leading-tight text-gray-900 dark:text-white sm:text-4xl lg:text-5xl">
            An error occurred
          </h1>
          <p className="mb-5 text-base font-normal text-gray-500 dark:text-gray-400 md:text-lg">
            {error.statusText || error.message}
          </p>
          <Link
            to="/"
            className="mr-3 inline-flex items-center rounded-lg bg-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            <DropdownChevronIcon className={`rotate-90`} />
            Go back home
          </Link>
        </div>
      </FullWidthLayout>
    </>
  );
}

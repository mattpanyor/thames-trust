import { SearchIcon } from 'src/components/SVGs';

export function SearchForm() {
  return (
    <>
      <form className="hidden lg:block lg:pl-3.5">
        <label htmlFor="topbar-search" className="sr-only text-gray-500 dark:text-white">
          Search
        </label>
        <div className="relative mt-1 lg:w-96">
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
            <SearchIcon />
          </div>
          <input
            type="text"
            name="email"
            id="topbar-search"
            className="focus:ring-primary-500 focus:border-primary-500 dark:focus:ring-primary-500 dark:focus:border-primary-500 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 pl-10 text-gray-900 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 sm:text-sm"
            placeholder="Search"
          />
        </div>
      </form>
    </>
  );
}

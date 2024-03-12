import { SearchIcon } from 'src/components/SVGs';

export function MobileSearchForm() {
  return (
    <>
      <form className="lg:hidden">
        <label htmlFor="mobile-search" className="sr-only">
          Search
        </label>
        <div className="relative">
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
            <SearchIcon />
          </div>
          <input
            type="text"
            name="email"
            id="mobile-search"
            className="focus:ring-primary-500 focus:border-primary-500 dark:focus:ring-primary-500 dark:focus:border-primary-500 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 pl-10 text-sm text-gray-900 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-200 dark:placeholder-gray-400"
            placeholder="Search"
          />
        </div>
      </form>
    </>
  );
}

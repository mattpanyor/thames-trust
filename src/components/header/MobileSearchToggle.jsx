import { SearchIcon } from 'src/components/SVGs';

export function MobileSearchToggle() {
  return (
    <>
      <button
        id="toggleSidebarMobileSearch"
        type="button"
        className="rounded-lg p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white lg:hidden">
        <span className="sr-only">Search</span>
        <SearchIcon />
      </button>
    </>
  );
}

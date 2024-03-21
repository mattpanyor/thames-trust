import { useAuthentication } from 'src/hooks';

export function UserMenuToggle({ dropdownRef, isUserMenuOpen, handleUserMenuClick }) {
  const { authentication } = useAuthentication();
  const authenticatedUser = authentication.getAuthenticatedUser();

  const handleLogOut = () => {
    authentication.logout();
    window.location.href = '/';
  };
  return (
    <>
      <div onClick={(e) => handleUserMenuClick(e)} ref={dropdownRef}>
        <button
          type="button"
          className="flex rounded-full bg-gray-800 text-sm focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
          id="user-menu-button">
          <span className="sr-only text-gray-200 dark:text-white">Open user menu</span>
          <img
            className="h-8 w-8 rounded-full"
            src="https://i.pravatar.cc/300?u=a042581f4e29026704d"
            alt="user photo"
          />
        </button>
      </div>
      <div
        className={`z-50 my-4 ${!isUserMenuOpen ? `hidden` : `absolute right-0 top-6 m-0 block`} list-none divide-y divide-gray-100 rounded bg-white text-base shadow dark:divide-gray-600 dark:bg-gray-700`}>
        <div className="px-4 py-3" role="none">
          <p className="text-sm text-gray-900 dark:text-white" role="none">
            {authenticatedUser
              ? `${authenticatedUser.firstName} ${authenticatedUser.lastName}`
              : `Neil Sims`}
          </p>
          <p className="truncate text-sm font-medium text-gray-900 dark:text-gray-300" role="none">
            {authenticatedUser ? authenticatedUser.emailAddress : `neil.sims@example.com`}
          </p>
        </div>
        <ul className="py-1" role="none">
          <li>
            <button
              className="block w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white"
              role="menuitem">
              Dashboard
            </button>
          </li>
          <li>
            <button
              className="block w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white"
              role="menuitem">
              Settings
            </button>
          </li>
          <li>
            <button
              className="block w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white"
              role="menuitem">
              Transactions
            </button>
          </li>
          <li>
            <button
              onClick={handleLogOut}
              className="block w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white"
              role="menuitem">
              Sign out
            </button>
          </li>
        </ul>
      </div>
    </>
  );
}

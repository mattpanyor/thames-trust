export function UserMenuToggle({ dropdownRef, isUserMenuOpen, handleUserMenuClick }) {
  const { authentication } = useAuthentication();
  const navigate : NavigateFunction = useNavigate();

    const handleLogout = () : void => {
        authentication.logout();
        navigate('/login')
    }
    return (
    <>
      <div onClick={(e) => handleUserMenuClick(e)} ref={dropdownRef}>
        <button
          type="button"
          className="flex rounded-full bg-gray-800 text-sm focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
          id="user-menu-button"
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
            Neil Sims
          </p>
          <p className="truncate text-sm font-medium text-gray-900 dark:text-gray-300" role="none">
            neil.sims@example.com
          </p>
        </div>
        <ul className="py-1" role="none">
          <li>
            <button
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white"
              role="menuitem">
              Dashboard
            </button>
          </li>
          <li>
            <button
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white"
              role="menuitem">
              Settings
            </a>
          </li>
          <li>
            <button
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white"
              role="menuitem">
              Transactions
            </a>
          </li>
          <li>
            <button
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white"
              role="menuitem">
              Sign out 
              onClick= {handleLogOut}
            </a>
          </li>
        </ul>
      </div>
    </>
  );
}

import { NavLink } from 'react-router-dom';
import { MobileSearchForm } from 'src/components/aside';
import {
  AccountIcon,
  DashboardIcon,
  DropdownChevronIcon,
  GitHubIcon,
  SettingsIcon,
  UserIcon
} from 'src/components/SVGs';
import cn from 'src/utils/twMerge.js';

export function NavigationMenu({ handleTodoDropdownClick, openDropdownId }) {
  return (
    <>
      <div className="flex flex-1 flex-col overflow-y-auto pb-4 pt-5">
        <div className="flex-1 space-y-1 divide-y divide-gray-200 bg-white px-3 dark:divide-gray-700 dark:bg-gray-800">
          <ul className="space-y-2 pb-2">
            <li>
              <MobileSearchForm />
            </li>
            <li>
              <NavLink
                to="/"
                className={cn(
                  `group flex items-center rounded-lg p-2 text-base text-gray-900 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-700`,
                  ({ isActive, isPending }) => (isPending ? 'pending' : isActive ? 'active' : '')
                )}>
                <DashboardIcon />
                <span className="ml-3">Dashboard</span>
              </NavLink>
            </li>
            <li onClick={(e) => handleTodoDropdownClick(e)} id="dropdown-users">
              <NavLink
                to="/users"
                className={cn(
                  `group flex w-full items-center rounded-lg p-2 text-base text-gray-900 transition duration-75 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-700`,
                  ({ isActive, isPending }) => (isPending ? 'pending' : isActive ? 'active' : '')
                )}>
                <UserIcon />
                <span className="ml-3 flex-1 whitespace-nowrap text-left">Users</span>
                <DropdownChevronIcon />
              </NavLink>
              <ul
                className={`${openDropdownId !== 'dropdown-users' ? 'hidden' : 'block'} space-y-2 py-2`}>
                <li>
                  <a
                    href="#"
                    className="group flex items-center rounded-lg p-2 pl-11 text-base text-gray-900 transition duration-75 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-700">
                    Add User
                  </a>
                </li>
              </ul>
            </li>
            <li onClick={(e) => handleTodoDropdownClick(e)} id="dropdown-accounts">
              <NavLink
                to="/accounts"
                className={cn(
                  `group flex w-full items-center rounded-lg p-2 text-base text-gray-900 transition duration-75 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-700`,
                  ({ isActive, isPending }) => (isPending ? 'pending' : isActive ? 'active' : '')
                )}>
                <AccountIcon />
                <span className="ml-3 flex-1 whitespace-nowrap text-left">Accounts</span>
                <DropdownChevronIcon />
              </NavLink>
              <ul
                className={`${openDropdownId !== 'dropdown-accounts' ? 'hidden' : 'block'} space-y-2 py-2`}>
                <li>
                  <a
                    href="#"
                    className="group flex items-center rounded-lg p-2 pl-11 text-base text-gray-900 transition duration-75 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-700 ">
                    Open Account
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <NavLink
                to="/transactions"
                className={cn(
                  `group flex items-center rounded-lg p-2 text-base text-gray-900 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-700`,
                  ({ isActive, isPending }) => (isPending ? 'pending' : isActive ? 'active' : '')
                )}>
                <DashboardIcon />
                <span className="ml-3">Transactions</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/statements"
                className={cn(
                  `group flex items-center rounded-lg p-2 text-base text-gray-900 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-700`,
                  ({ isActive, isPending }) => (isPending ? 'pending' : isActive ? 'active' : '')
                )}>
                <DashboardIcon />
                <span className="ml-3">Statements</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/settings"
                className={cn(
                  `group flex items-center rounded-lg p-2 text-base text-gray-900 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-700`,
                  ({ isActive, isPending }) => (isPending ? 'pending' : isActive ? 'active' : '')
                )}>
                <SettingsIcon
                  className={`h-6 w-6 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white`}
                />
                <span className="ml-3">Settings</span>
              </NavLink>
            </li>
          </ul>
          <div className="space-y-2 pt-2">
            <a
              href="https://github.com/mattpanyor/thames-trust"
              target="_blank"
              className="group flex items-center rounded-lg p-2 text-base text-gray-900 transition duration-75 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-700">
              <GitHubIcon
                className={` flex-shrink-0 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white`}
              />
              <span className="ml-3">GitHub Repository</span>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

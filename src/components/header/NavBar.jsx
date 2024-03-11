import { useRef, useState } from 'react';
import {
  AppLogo,
  MobileSearchToggle,
  NotificationToggle,
  SearchForm,
  SidebarToggle,
  UserMenuToggle
} from 'src/components/header';
import { ThemeSwitcher } from 'src/components/utils';
import { useClickOutside } from 'src/hooks';

export function NavBar({ toggleSidebarMobile, setToggleSidebarMobile }) {
  const dropdownRef = useRef(null);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const [isNotificationsOpen, setIsNotificationsOpen] = useState(false);

  useClickOutside(dropdownRef, setIsUserMenuOpen, setIsNotificationsOpen);

  const handleUserMenuClick = (e) => {
    e.stopPropagation();
    setIsUserMenuOpen(!isUserMenuOpen);
    setIsNotificationsOpen(false);
  };

  const handleNotificationPanelClick = (e) => {
    e.stopPropagation();
    setIsNotificationsOpen(!isNotificationsOpen);
    setIsUserMenuOpen(false);
  };

  return (
    <>
      <nav className="fixed z-30 w-full border-b border-gray-200 bg-white dark:border-gray-700 dark:bg-gray-800">
        <div className="px-3 py-3 lg:px-5 lg:pl-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center justify-start">
              <SidebarToggle
                toggleSidebarMobile={toggleSidebarMobile}
                setToggleSidebarMobile={setToggleSidebarMobile}
              />
              <AppLogo />
              <SearchForm />
            </div>
            <div className="flex items-center">
              <MobileSearchToggle />
              <NotificationToggle
                dropdownRef={dropdownRef}
                isNotificationsOpen={isNotificationsOpen}
                handleNotificationPanelClick={handleNotificationPanelClick}
              />
              <ThemeSwitcher />
              <div className="relative ml-3 flex items-center">
                <UserMenuToggle
                  dropdownRef={dropdownRef}
                  isUserMenuOpen={isUserMenuOpen}
                  handleUserMenuClick={handleUserMenuClick}
                />
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

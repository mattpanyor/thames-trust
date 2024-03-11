import { useState } from 'react';
import { NavigationMenu, SidebarBottomMenu } from 'src/components/aside';
export function Sidebar({ toggleSidebarMobile }) {
  const [openDropdownId, setOpenDropdownId] = useState(null);

  const handleTodoDropdownClick = (e) => {
    const closestListItem = e.target.closest('li');
    if (closestListItem) {
      const dropdownId = closestListItem.getAttribute('id');
      setOpenDropdownId((prevId) => (prevId === dropdownId ? null : dropdownId));
    }
  };

  return (
    <>
      <aside
        id="sidebar"
        className={`fixed left-0 top-0 z-20 flex lg:translate-x-0 ${toggleSidebarMobile ? 'translate-x-0' : '-translate-x-full'} h-full w-64 flex-shrink-0 flex-col pt-16 font-normal duration-500 lg:flex`}
        aria-label="Sidebar">
        <div className="relative flex min-h-0 flex-1 flex-col border-r border-gray-200 bg-white pt-0 dark:border-gray-700 dark:bg-gray-800">
          <NavigationMenu
            handleTodoDropdownClick={handleTodoDropdownClick}
            openDropdownId={openDropdownId}
          />
          <SidebarBottomMenu />
        </div>
      </aside>
      <div
        className={`fixed inset-0 z-10 ${!toggleSidebarMobile && `hidden`} bg-gray-900/50 dark:bg-gray-900/90`}
        id="sidebarBackdrop"></div>
    </>
  );
}

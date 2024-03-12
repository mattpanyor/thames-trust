import { InfoIcon, SettingsIcon } from 'src/components/SVGs';

export function SidebarBottomMenu() {
  return (
    <>
      <div className="absolute bottom-0 left-0 hidden w-full justify-center space-x-4 bg-white p-4 dark:bg-gray-800 lg:flex">
        <a
          href="#"
          className="inline-flex cursor-pointer justify-center rounded p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:hover:bg-gray-700 dark:hover:text-white">
          <InfoIcon />
        </a>
        <a
          href="#"
          className="inline-flex cursor-pointer justify-center rounded p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:hover:bg-gray-700 dark:hover:text-white">
          <SettingsIcon />
        </a>
      </div>
    </>
  );
}

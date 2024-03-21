import { useRedirectIfNotAuthenticated } from 'src/hooks/index.js';
import { NavbarSidebarLayout } from 'src/layouts';

export function Settings() {
  useRedirectIfNotAuthenticated();
  return (
    <>
      <NavbarSidebarLayout>
        <div className="mb-6 flex flex-wrap items-center justify-between">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white sm:text-2xl">
            Settings
          </h2>
        </div>
      </NavbarSidebarLayout>
    </>
  );
}

import { AccountList } from 'src/features/account/components';
import { NavbarSidebarLayout } from 'src/layouts';

export function Accounts() {
  return (
    <>
      <NavbarSidebarLayout>
        <div className="mb-6 flex flex-wrap items-center justify-between">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white sm:text-2xl">
            Accounts
          </h2>
        </div>
        <AccountList />
      </NavbarSidebarLayout>
    </>
  );
}

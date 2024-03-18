import { NavbarSidebarLayout } from 'src/layouts';

export function Dashboard() {
  return (
    <>
      <NavbarSidebarLayout>
        <div className="mb-6 flex flex-wrap items-center justify-between">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white sm:text-2xl">
            Dashboard
          </h2>
        </div>
      </NavbarSidebarLayout>
    </>
  );
}

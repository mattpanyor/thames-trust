import { useLocalStorage, useUserContext } from 'src/hooks';
import { NavbarSidebarLayout } from 'src/layouts';

export function Users() {
  const { userRepository } = useLocalStorage();
  const { users, setUsers } = useUserContext();

  return (
    <>
      <NavbarSidebarLayout>
        <div className="mb-6 flex flex-wrap items-center justify-between">
          <h2 className="ml-3 text-lg font-semibold dark:text-gray-400">Users</h2>
        </div>
      </NavbarSidebarLayout>
    </>
  );
}

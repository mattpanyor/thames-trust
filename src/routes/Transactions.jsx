import { NavbarSidebarLayout } from 'src/layouts';
import TransactionList from '../features/transaction/components/TransactionList';

export function Transactions() {
  return (
    <>
      <NavbarSidebarLayout>
        <div className="mb-6 flex flex-col flex-wrap items-center justify-between">
          <h2 className="ml-3 text-lg font-semibold dark:text-gray-400">Transactions</h2>
          <TransactionList />
        </div>
      </NavbarSidebarLayout>
    </>
  );
}

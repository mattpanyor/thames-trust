import TransactionList from 'src/features/transaction/components/TransactionList';
import { NavbarSidebarLayout } from 'src/layouts';

export function Transactions() {
  return (
    <>
      <NavbarSidebarLayout>
        <TransactionList />
      </NavbarSidebarLayout>
    </>
  );
}

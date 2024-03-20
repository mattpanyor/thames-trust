import { TransactionList } from 'src/features/transaction/components';
import { useRedirectIfNotAuthenticated } from 'src/hooks';
import { NavbarSidebarLayout } from 'src/layouts';

export function Transactions() {
  useRedirectIfNotAuthenticated();
  return (
    <>
      <NavbarSidebarLayout>
        <TransactionList />
      </NavbarSidebarLayout>
    </>
  );
}

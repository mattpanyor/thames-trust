import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import {
  AccountContextProvider,
  AuthenticationPersistenceContextProvider,
  EntityPersistenceContextProvider,
  ModalDrawerContextProvider,
  TransactionContextProvider,
  UserContextProvider
} from 'src/context';
import ErrorPage from 'src/ErrorPage.jsx';
import {
  Accounts,
  Dashboard,
  Homepage,
  Login,
  ResetPassword,
  Settings,
  SignUp,
  Statements,
  Transactions,
  Users
} from 'src/routes';

/* Sets app routes */
const router = createBrowserRouter([
  {
    path: '/',
    element: <Homepage />,
    errorElement: <ErrorPage />
  },
  {
    path: '/sign-up',
    element: <SignUp />
  },
  {
    path: '/login',
    element: <Login />
  },
  {
    path: '/login/reset-password',
    element: <ResetPassword />
  },
  {
    path: '/users',
    element: <Users />
  },
  {
    path: '/accounts',
    element: <Accounts />
  },
  {
    path: '/transactions',
    element: <Transactions />
  },
  {
    path: '/statements',
    element: <Statements />
  },
  {
    path: '/settings',
    element: <Settings />
  },
  {
    path: '/dashboard',
    element: <Dashboard />
  }
]);

function App() {
  return (
    <>
      <EntityPersistenceContextProvider>
        <AuthenticationPersistenceContextProvider>
          <UserContextProvider>
            <AccountContextProvider>
              <TransactionContextProvider>
                <ModalDrawerContextProvider>
                  <RouterProvider router={router} />
                </ModalDrawerContextProvider>
              </TransactionContextProvider>
            </AccountContextProvider>
          </UserContextProvider>
        </AuthenticationPersistenceContextProvider>
      </EntityPersistenceContextProvider>
    </>
  );
}

export default App;

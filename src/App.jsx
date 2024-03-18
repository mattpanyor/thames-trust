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
  Login,
  LostPassword,
  Settings,
  SignUp,
  Statements,
  Transactions,
  Users
} from 'src/routes';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Dashboard />,
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
    path: '/lostPassword',
    element: <LostPassword />
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

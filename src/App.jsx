import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { EntityPersistenceContextProvider } from 'src/context';
import ErrorPage from 'src/ErrorPage.jsx';
import {
  Accounts,
  Dashboard,
  Login,
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
        <RouterProvider router={router} />
      </EntityPersistenceContextProvider>
    </>
  );
}

export default App;

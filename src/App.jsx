import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ErrorPage from 'src/ErrorPage.jsx';
import { Accounts, Dashboard, Settings, Statements, Transactions, Users } from 'src/routes';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Dashboard />,
    errorElement: <ErrorPage />
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
      <RouterProvider router={router} />
    </>
  );
}

export default App;

import { Outlet } from 'react-router';
import { LoginForm } from 'src/features/user/components/login/LoginForm';
import { useRedirectIfNotAuthenticated } from 'src/hooks';
import { NavbarFullWidthLayout } from 'src/layouts';

export function Login() {
  useRedirectIfNotAuthenticated();

  return (
    <>
      <NavbarFullWidthLayout>
        <div className="pt:mt-0 mx-auto flex flex-col items-center justify-center px-6 pt-8 dark:bg-gray-900 md:h-screen">
          <div className="w-full max-w-96 space-y-8 rounded-lg bg-white p-6 shadow dark:bg-gray-800 sm:p-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
              Log in to Online Banking
            </h2>
            <LoginForm />
          </div>
        </div>
      </NavbarFullWidthLayout>
    </>
  );
}

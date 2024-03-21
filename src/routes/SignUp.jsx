import SignUpForm from 'src/features/user/components/signUp/SignUpForm';
import { NavbarFullWidthLayout } from 'src/layouts';

export function SignUp() {
  return (
    <>
      <NavbarFullWidthLayout>
        <div className="pt:mt-0 mx-auto flex flex-col items-center px-6 pt-8 dark:bg-gray-900">
          <div className="w-full max-w-xl space-y-8 rounded-lg bg-white p-6 shadow dark:bg-gray-800 sm:p-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
              Register for Online Banking
            </h2>
            <SignUpForm />
          </div>
        </div>
      </NavbarFullWidthLayout>
    </>
  );
}

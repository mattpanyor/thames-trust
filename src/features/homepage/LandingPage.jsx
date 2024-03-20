import { AppLogo } from 'src/components/header/AppLogo';
import './../../index.css';
import { useNavigate } from 'react-router-dom';

export function LandingPage() {
  const navigate = useNavigate();
  return (
    <>
      <section className="bg-white dark:bg-gray-900">
        <div className="mx-auto max-w-screen-xl px-4 py-8 text-center lg:px-12 lg:py-16">
          {AppLogo()}
          <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 dark:text-white md:text-5xl lg:text-6xl">
            Welcome to Thames Trust
          </h1>
          <p className="mb-8 text-lg font-normal text-gray-500 dark:text-gray-400 sm:px-16 lg:text-xl xl:px-48">
            Your ultimate banking app for easy financial management. Check balances, transfer funds,
            and pay bills with ease, anytime, anywhere.
          </p>
          <div className="mb-8 flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-x-4 sm:space-y-0 lg:mb-16">
            <button
              href="#"
              className="inline-flex items-center justify-center rounded-lg bg-blue-700 px-5 py-3 text-center text-base font-medium text-white hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900"
              onClick={() => {
                navigate('/Login');
              }}>
              Log In
            </button>
            <button
              className="inline-flex items-center justify-center rounded-lg border border-gray-300 px-5 py-3 text-center text-base font-medium text-gray-900 hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-800"
              onClick={() => {
                navigate('/sign-up');
              }}>
              Register
            </button>
          </div>
          <div className="mx-auto px-4 text-center md:max-w-screen-md lg:max-w-screen-lg lg:px-36">
            <span className="font-semibold uppercase text-gray-400">FEATURING</span>
            <div className="mt-8 flex flex-wrap items-center justify-center text-gray-500 sm:justify-between"></div>
          </div>
        </div>
      </section>
      ;
    </>
  );
}

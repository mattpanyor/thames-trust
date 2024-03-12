import { GitHubIcon, LinkedinIcon } from 'src/components/SVGs';

export function Footer() {
  return (
    <>
      <footer className="mx-4 my-6 rounded-lg bg-white p-4 shadow dark:bg-gray-800 md:flex md:items-center md:justify-between md:p-6 xl:p-8">
        <ul className="mb-6 flex flex-wrap items-center space-y-1 md:mb-0">
          <li>
            <a
              href="#"
              className="mr-4 text-sm font-normal text-gray-500 hover:underline dark:text-gray-400 md:mr-6">
              Terms and conditions
            </a>
          </li>
          <li>
            <a
              href="#"
              className="mr-4 text-sm font-normal text-gray-500 hover:underline dark:text-gray-400 md:mr-6">
              Privacy Policy
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-sm font-normal text-gray-500 hover:underline dark:text-gray-400">
              Contact
            </a>
          </li>
        </ul>
        <div className="flex space-x-3 sm:justify-center">
          <a
            href="#"
            className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">
            <LinkedinIcon />
          </a>
          <a
            href="#"
            className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">
            <GitHubIcon className={`h-5 w-5`} />
          </a>
        </div>
      </footer>
      <p className="my-10 text-center text-sm text-gray-500 dark:text-gray-400">
        © 2024 Made with React.
      </p>
    </>
  );
}

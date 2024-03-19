import { useEffect } from 'react';
import { CloseIcon } from 'src/components/SVGs';

export default function ModalDrawer({ isDrawerOpen, setIsDrawerOpen, content }) {
  const handleModelDrawerDismiss = () => {
    setIsDrawerOpen(false);
  };

  useEffect(() => {
    const handleBodyOverflow = () => {
      document.body.classList.toggle('overflow-hidden', isDrawerOpen);
    };

    document.body.addEventListener('click', handleBodyOverflow);

    return () => {
      document.body.removeEventListener('click', handleBodyOverflow);
      document.body.classList.remove('overflow-hidden');
    };
  }, [isDrawerOpen]);

  return (
    <>
      <div
        className={`fixed right-0 top-0 z-40 ${isDrawerOpen ? 'right-0' : 'translate-x-full'}  h-screen w-full max-w-xs overflow-y-auto bg-white p-4 transition-transform duration-500 dark:bg-gray-800`}>
        <h5
          id="drawer-label"
          className="mb-6 inline-flex items-center text-sm font-semibold uppercase text-gray-500 dark:text-gray-400">
          Create Account
        </h5>
        <button
          onClick={handleModelDrawerDismiss}
          type="button"
          className="absolute right-2.5 top-2.5 inline-flex items-center rounded-lg bg-transparent p-1.5 text-sm text-gray-400 hover:bg-gray-200 hover:text-gray-900 dark:hover:bg-gray-600 dark:hover:text-white">
          <CloseIcon />
          <span className="sr-only">Close menu</span>
        </button>
        {content}
      </div>
      <div
        className={`${!isDrawerOpen && `hidden`} fixed inset-0 z-30 bg-gray-900 bg-opacity-50 dark:bg-opacity-80`}></div>
    </>
  );
}

import cn from 'src/utils/twMerge.js';

export function Button({ btnType, btnText, className, onClick }) {
  return (
    <>
      <button
        onClick={onClick}
        type={btnType}
        className={cn(
          `w-full rounded-lg bg-blue-700 px-5 py-3 text-center text-base font-medium text-white hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 sm:w-auto`,
          className
        )}>
        {btnText}
      </button>
    </>
  );
}

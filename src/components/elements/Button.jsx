import { AnimatedSpinnerIcon } from 'src/components/SVGs';
import { cn } from 'src/utils';

export function Button({ btnType, btnTxt, value, className, onClick, isPending, isDisabled }) {
  return (
    <>
      <button
        value={value}
        disabled={isDisabled}
        onClick={onClick}
        type={btnType}
        className={cn(
          `w-full rounded-lg bg-blue-700 px-5 py-3 text-center text-sm font-medium text-white hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 sm:w-auto`,
          className,
          {
            'me-2 inline-flex items-center': isPending
          },
          {
            'cursor-not-allowed bg-gray-400 dark:bg-gray-500': isDisabled
          }
        )}>
        {isPending && <AnimatedSpinnerIcon />}
        {btnTxt}
      </button>
    </>
  );
}

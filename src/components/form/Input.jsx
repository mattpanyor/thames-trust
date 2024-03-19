import { cn } from 'src/utils';

export function Input({ onChange, type, name, id, value, placeholder, className, validation }) {
  const baseClassNames =
    'block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500 sm:text-sm';
  const successClassNames =
    'bg-green-50 border-green-500 text-green-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 focus:ring-green-500 focus:border-green-500 dark:bg-gray-700 dark:border-green-500';
  const errorClassNames =
    'bg-red-50 border-red-500 text-red-900 placeholder-red-700 focus:ring-red-500 dark:bg-gray-700 focus:border-red-500 dark:text-red-500 dark:placeholder-red-500 dark:border-red-500';

  return (
    <>
      <input
        value={value}
        onChange={onChange}
        type={type}
        name={name}
        id={id}
        className={cn(
          baseClassNames,
          {
            [successClassNames]: validation === 'success',
            [errorClassNames]: validation === 'error'
          },
          className
        )}
        placeholder={placeholder}
      />
    </>
  );
}

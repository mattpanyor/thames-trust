export function Label({ htmlFor, labelTxt }) {
  return (
    <>
      <label
        htmlFor={htmlFor}
        className="mb-2 block text-sm font-medium text-gray-900 dark:text-white">
        {labelTxt}
      </label>
    </>
  );
}

import { expandN } from 'regex-to-strings';

/*
 * Generates account number and sort code based on regex pattern.
 * */
export const accountNumberGenerator = () => {
  const sortCodePattern = /\d\d-\d\d-0\d/;
  const accountNumberPattern = /\d{8}/;

  return {
    sortCode: expandN(sortCodePattern, 1),
    accountNumber: expandN(accountNumberPattern, 1)
  };
};

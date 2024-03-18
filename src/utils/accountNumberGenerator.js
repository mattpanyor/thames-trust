import { expandN } from 'regex-to-strings';

export const accountNumberGenerator = () => {
  const sortCodePattern = /\d\d-\d\d-0\d/;
  const accountNumberPattern = /\d{8}/;

  return {
    sortCode: expandN(sortCodePattern, 1),
    accountNumber: expandN(accountNumberPattern, 1)
  };
};

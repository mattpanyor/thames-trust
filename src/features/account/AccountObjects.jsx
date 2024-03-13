//creating accounts objects 
import React from "react";

//This is defining an object account with several properties.
const Accounts = () => {
  const account = {
    accountId: 12345,
    balance: 1000,
    userId: 'user123',
    accountNumber: 'ABCD1234'
  };


return (
  <div>
    <h2> Account Details</h2>
    <p>Account ID: {account.accountId}</p>
    <p>Account Balance: {account.balance}</p>
    <p>User ID: {account.userID}</p>
    <p>Account Number: {account.accountNumber}</p>
  </div>
)
};

export default Accounts;
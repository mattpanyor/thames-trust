//creating accounts objects 
import React from "react"
import AccountList from "./AccountList";
import AccountRepository from "./classes/AccountRepository";

//This is defining an object account with several properties.
const Accounts = () => {
  //below real query
  //const accountList = new AccountRepository(?????).findAllAccountsByUser(?????)
  const dummy_accounts = [
    {
      accountId: 1234567,
      sortCode: '22-33-04',
      balance: 1000, //use state  initial value set
      userId: 'user123',
      type: 'Current'
    },
    {
      accountId: 1237777,
      sortCode: '22-33-44',
      balance: 6788, //use state  initial value set
      userId: 'user123',
      type: 'Saving'
    }
  ]

  return (
    <div>
      <AccountList accountList={dummy_accounts} />
    </div>
  )
};

export default Accounts;
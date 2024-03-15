//creating accounts objects 
import React, { useState } from "react"

//This is defining an object account with several properties.
const Accounts = () => {
  //use state to simulate a transaction and update the balance when the transaction carried out 
  const [balance, setBalance] = useState(1000)
  const account = {
    accountId: 1234567,
    sortCode: '22-33-44',
    balance: 1000, //use state  initial value set
    userId: 'user123',
  };


  const handleChange = () => {
    setBalance = 2000

  }

  return (
    // <div>
    //   <p>Account Balance: {account.balance}</p>
    //   <p>User ID: {account.userID}</p>
    //   <p>Account Number: {account.accountNumber}</p>
    // </div>
    // account 1 
    <div>
      {/* account 1  */}
      <div className="col-span-full xl:col-auto">
        <div className="p-4 mb-4 bg-white border border-gray-200 rounded-lg shadow-sm 2xl:col-span-2 dark:border-gray-700 sm:p-6 dark:bg-gray-800">
          <div className="items-center sm:flex xl:block 2xl:flex sm:space-x-4 xl:space-x-0 2xl:space-x-4">
            <div>
             
              <h3 className="mb-1 text-xl font-bold text-gray-900 dark:text-white">
                Account Name
              </h3>
              <div class="flex w-full">
              <h6 className="mb-3 text-xs text-gray-900 dark:text-white"> 
              Account ID: {account.accountId} 
              </h6>
<h6 className="mb-3 mx-2 text-xs text-gray-900 dark:text-white">  SortCode: {account.sortCode} </h6>
</div>
<h5 className="mb-1 text-md  text-gray-900 dark:text-white">
Account Balance: {account.balance}              </h5>
              <div className="mb-4 text-sm text-gray-500 dark:text-gray-400">

              </div>
              <div className="flex items-center space-x-4">
                {/* pay now  */}
                <button
                  type="button"
                  className="py-2 px-3 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                >
                  Pay & Transferer
                </button>
                {/* regular payments  */}
                <button
                  type="button"
                  className="py-2 px-3 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                >
                  Direct Debits
                </button>

                {/* Everyday Offers */}
                <button
                  type="button"
                  className="py-2 px-3 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                >
                  Cashback Offers
                </button>

                {/* more options */}
                <button
                  type="button"
                  className="py-2 px-3 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                >
                  More           </button>


              </div>
            </div>
          </div>
        </div>
      </div>

      {/* account 2 */}
      <div className="col-span-full xl:col-auto">
        <div className="p-4 mb-4 bg-white border border-gray-200 rounded-lg shadow-sm 2xl:col-span-2 dark:border-gray-700 sm:p-6 dark:bg-gray-800">
          <div className="items-center sm:flex xl:block 2xl:flex sm:space-x-4 xl:space-x-0 2xl:space-x-4">
            <div>
             
              <h3 className="mb-1 text-xl font-bold text-gray-900 dark:text-white">
                Thames Saver
              </h3>
              <div class="flex w-full">
              <h6 className="mb-3 text-xs text-gray-900 dark:text-white"> 
              Account ID: {account.accountId} 
              </h6>
<h6 className="mb-3 mx-2 text-xs text-gray-900 dark:text-white">  SortCode: {account.sortCode} </h6>
</div>
<h5 className="mb-1 text-md  text-gray-900 dark:text-white">
Account Balance: {account.balance}              </h5>
              <div className="mb-4 text-sm text-gray-500 dark:text-gray-400">

              </div>
              <div className="flex items-center space-x-4">
                {/* pay now  */}
                <button
                  type="button"
                  className="py-2 px-3 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                >
                  Pay & Transferer
                </button>
                {/* regular payments  */}
                <button
                  type="button"
                  className="py-2 px-3 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                >
                  Direct Debits
                </button>

                {/* Everyday Offers */}
                <button
                  type="button"
                  className="py-2 px-3 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                >
                  Cashback Offers
                </button>

                {/* more options */}
                <button
                  type="button"
                  className="py-2 px-3 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                >
                  More           </button>


              </div>
            </div>
          </div>
        </div>
      </div>

{/* account 3  */}

<div className="col-span-full xl:col-auto">
        <div className="p-4 mb-4 bg-white border border-gray-200 rounded-lg shadow-sm 2xl:col-span-2 dark:border-gray-700 sm:p-6 dark:bg-gray-800">
          <div className="items-center sm:flex xl:block 2xl:flex sm:space-x-4 xl:space-x-0 2xl:space-x-4">
            <div>
             
              <h3 className="mb-1 text-xl font-bold text-gray-900 dark:text-white">
                CASH ISA 
              </h3>
              <div class="flex w-full">
              <h6 className="mb-3 text-xs text-gray-900 dark:text-white"> 
              Account ID: {account.accountId} 
              </h6>
<h6 className="mb-3 mx-2 text-xs text-gray-900 dark:text-white">  SortCode: {account.sortCode} </h6>
</div>
<h5 className="mb-1 text-md  text-gray-900 dark:text-white">
Account Balance: {account.balance}              </h5>
              <div className="mb-4 text-sm text-gray-500 dark:text-gray-400">

              </div>
              <div className="flex items-center space-x-4">
                {/* pay now  */}
                <button
                  type="button"
                  className="py-2 px-3 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                >
                  Pay & Transferer
                </button>
                {/* regular payments  */}
                <button
                  type="button"
                  className="py-2 px-3 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                >
                  Direct Debits
                </button>

                {/* Everyday Offers */}
                <button
                  type="button"
                  className="py-2 px-3 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                >
                  Cashback Offers
                </button>

                {/* more options */}
                <button
                  type="button"
                  className="py-2 px-3 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                >
                  More           </button>


              </div>
            </div>
          </div>
        </div>
      </div>
    </div>






  )
};

export default Accounts;
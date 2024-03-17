import React from 'react'

function AccountList({ accountList }) {
    return (
        accountList.map((account) => (
            <div className="col-span-full xl:col-auto">
                <div className="p-4 mb-4 bg-white border border-gray-200 rounded-lg shadow-sm 2xl:col-span-2 dark:border-gray-700 sm:p-6 dark:bg-gray-800">
                    <div className="items-center sm:flex xl:block 2xl:flex sm:space-x-4 xl:space-x-0 2xl:space-x-4">
                        <div>

                            <h3 className="mb-1 text-xl font-bold text-gray-900 dark:text-white">
                                {account.type}
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
                                    More
                                </button>


                            </div>
                        </div>
                    </div>
                </div>
            </div>
        ))
    )
}

export default AccountList
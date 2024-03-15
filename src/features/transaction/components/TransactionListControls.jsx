import React from 'react'
import { useState, useEffect } from 'react'

function TransactionListControls({ pageChange, currentPage, max_length }) {
    const [btn_next, setBtn_next] = useState(true)
    const [btn_prev, setBtn_prev] = useState(false)

    useEffect(() => {
        if (currentPage <= 0) {
            setBtn_prev(false)
        } else {
            setBtn_prev(true)
        }
        if (currentPage >= max_length - 1) {
            setBtn_next(false)
        } else {
            setBtn_next(true)
        }
    }, [currentPage])

    return (
        <div className="flex items-center justify-around pt-3 sm:pt-6">
            <button
                onClick={() => pageChange(currentPage - 1)}
                disabled={!btn_prev}
                className='bg-blue-500 text-[1rem] text-white font-bold py-1 px-3 rounded disabled:bg-slate-500'
            >
                Prev
            </button>
            <button
                onClick={() => pageChange(currentPage + 1)}
                disabled={!btn_next}
                className='bg-blue-500 text-[1rem] text-white font-bold py-1 px-3 rounded disabled:bg-slate-500'
            >
                Next
            </button>
        </div>
    )
}

export default TransactionListControls
import React from 'react'

const SolvedProblems = () => {
    return (
        <>
            <div className='bg-[#282828] rounded-lg text-slate-300 p-3 min-h-[150px]'>
                <h6>Solved Problems</h6>
                <div className='w-[100%] flex '>
                    <div className='w-[30%] flex items-center justify-center'>
                        <div className='text-center w-[100px] h-[100px] flex items-center justify-center rounded-circle border border-slate-400'>
                            Solved
                        </div>
                    </div>
                    <div className='w-[70%] flex flex-col gap-2'>
                        <div className='w-full leading-3'>
                            <p>Easy <span><b className='text-white'>0</b>/748</span></p>
                            <p className='w-full h-[8px] bg-green-900/50 rounded-md'></p>
                        </div>
                        <div className='w-full leading-3'>
                            <p>Medium <span><b className='text-white'>0</b>/748</span></p>
                            <p className='w-full h-[8px] bg-yellow-900/50 rounded-md'></p>
                        </div>
                        <div className='w-full leading-3'>
                            <p>Hard <span><b className='text-white'>0</b>/748</span></p>
                            <p className='w-full h-[8px] bg-red-900/50 rounded-md'></p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SolvedProblems
import React from 'react'

const Badges = () => {
    return (
        <div className='bg-[#282828] rounded-lg text-slate-300 p-3 min-h-[200px] flex flex-col justify-between'>
            <div>
                <h6>Badges</h6>
                <h5 className='text-white'>0</h5>
            </div>

            <div>
                <h6>Locked Badge</h6>
                <h5 className='text-white'>Nov Boooky Challenge</h5>
            </div>
        </div>
    )
}

export default Badges
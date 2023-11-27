import { AccessibilityRounded, Agriculture, AirplayOutlined, ArrowCircleRightSharp } from '@mui/icons-material';
const Aside = () => {
    return (
        <>
            <div className='border-b-[1px] pb-3'>
                <div className='flex gap-4 h-[100px]'>
                    <div >
                        <img src="https://assets.leetcode.com/users/avatars/avatar_1701102105.png" alt="avatar" className='rounded-md' />
                    </div>
                    <div className='text-white font-[500] flex flex-col justify-between h-[100%]'>
                        <p>ziyovuddinweb</p>
                        <p className='whitespace-nowrap'><span>Rank</span> ~5,000,000</p>
                    </div>
                </div>
                <button className='bg-green-300 w-100 rounded-md text-green-600 p-1 my-2'>Edit Profile</button>
            </div>
            <div className='mt-3 border-b-[1px]'>
                <h5 className='text-white'>Community Stats</h5>
                <div className='w-[100%] flex flex-col gap-2'>
                    <div className='flex gap-2 w-full items-start justify-start'>
                        <AccessibilityRounded size={30} className='text-blue-500' />
                        <div className='text-slate-300 leading-3'>
                            <p>Views <span className='text-slate-100'>0</span></p>
                            <p>Last week <span className='text-slate-100'>0</span></p>
                        </div>
                    </div>

                    <div className='flex gap-2 w-full items-start justify-start'>
                        <Agriculture size={30} className='text-blue-300' />
                        <div className='text-slate-300 leading-3'>
                            <p>Solution <span className='text-slate-100'>0</span></p>
                            <p>Last week <span className='text-slate-100'>0</span></p>
                        </div>
                    </div>

                    <div className='flex gap-2 w-full items-start justify-start'>
                        <AirplayOutlined size={30} className='text-green-400' />
                        <div className='text-slate-300 leading-3'>
                            <p>Discuss <span className='text-slate-100'>0</span></p>
                            <p>Last week <span className='text-slate-100'>0</span></p>
                        </div>
                    </div>

                    <div className='flex gap-2 w-full items-start justify-start'>
                        <ArrowCircleRightSharp size={30} className='text-yellow-400' />
                        <div className='text-slate-300 leading-3'>
                            <p>Discuss <span className='text-slate-100'>0</span></p>
                            <p>Last week <span className='text-slate-100'>0</span></p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='mt-3 border-b-[1px]'>
                <h5 className='text-white'>Languages</h5>
                <p className='text-center text-sm'>Not Enough data</p>
            </div>
            <div className='mt-3'>
                <h5 className='text-white'>Skills</h5>
                <div>
                    <h6 className='text-white'>Advanced</h6>
                    <p className='text-center text-sm'>Not Enough data</p>
                </div>
                <div>
                    <h6 className='text-white'>Intermediate</h6>
                    <p className='text-center text-sm'>Not Enough data</p>
                </div>
                <div>
                    <h6 className='text-white'>Fundamental</h6>
                    <p className='text-center text-sm'>Not Enough data</p>
                </div>
            </div>
        </>
    )
}

export default Aside
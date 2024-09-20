import React from 'react';

const TopBanner= () => {
    return (
        <div>
            {/*Top Background svg */}
            <svg className=''   viewBox="0 0 1440 260" fill="none"    xmlns="http://www.w3.org/2000/svg">
                <path d="M-1 147.299V1H1440V147.299C786.74 349.6 207.142 231.591 -1 147.299Z"  fill="#363636" stroke="#191A23"/>
            </svg>

            {/* Top banner box tesponsive and hover effect */}
            <div className='flex justify-center items-center'>
                <div className='inline-flex items-center gap-10 justify-center hover:'>
                                {
                                    items.map(item=>(
                                        <div  key={item.color} className={ `${item.width} ${item.height}  ${item.color} ${item.position}  transition-all duration-300 ease-in-out cursor-pointer `} >
                                        </div>
                                    ))
                                }
                    </div>  
            </div>
        </div>
    );
};

export default TopBanner;

// Items Style data
const items=[
    {
        width:"w-[60px] hover:w-[70px]  xl:w-[300px] xl:hover:w-[400px] lg:w-[200px] lg:hover:w-[300px]  md:w-[100px] md:hover:w-[150px] ",
        height:"h-[60px] hover:h-[70px]  xl:h-[300px] xl:hover:h-[400px]  lg:h-[200px] lg:hover:h-[300px]  md:h-[100px] md:hover:h-[150px]  ",
        color:"bg-[#C02424] ",
        position:"xl:-mt-28  lg:-mt-20 md:-mt-10  -mt-5"
    },
    {
        width:"w-[46px] hover:w-[56px]  xl:w-[260px] xl:hover:w-[360px] lg:w-[160px] lg:hover:w-[260px]  md:w-[80px] md:hover:w-[100px] ",
        height:"h-[46px] hover:h-[56px]  xl:h-[260px] xl:hover:h-[360px] lg:h-[160px] lg:hover:h-[260px]  md:h-[80px] md:hover:h-[100px]  ",
        color:"bg-[#146FE8]",
        position:"xl:-mt-28  lg:-mt-20 md:-mt-10  -mt-5"
        
    },
    {
        width:"w-[60px] hover:w-[70px]  xl:w-[300px] xl:hover:w-[400px] lg:w-[200px] lg:hover:w-[300px]  md:w-[100px] md:hover:w-[150px] ",
        height:"h-[60px] hover:h-[70px]  xl:h-[300px] xl:hover:h-[400px]  lg:h-[200px] lg:hover:h-[300px]  md:h-[100px] md:hover:h-[150px]  ",
        color:"bg-[#E76666]",
        position:"xl:-mt-28  lg:-mt-20 md:-mt-10  -mt-5"
    },
    {
        width:"w-[46px] hover:w-[56px]  xl:w-[260px] xl:hover:w-[360px] lg:w-[160px] lg:hover:w-[260px]  md:w-[80px] md:hover:w-[100px] ",
        height:"h-[46px] hover:h-[56px]  xl:h-[260px] xl:hover:h-[360px] lg:h-[160px] lg:hover:h-[260px]  md:h-[80px] md:hover:h-[100px]  ",
        color:"bg-[#A0FCD9]",
        position:"xl:-mt-28  lg:-mt-20 md:-mt-10  -mt-5"
    },
]
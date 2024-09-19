import React from 'react';

const TopBanner= () => {
    return (
        <div>
            <svg className=''  height="" viewBox="0 0 1440 260" fill="none"    xmlns="http://www.w3.org/2000/svg">
                <path d="M-1 147.299V1H1440V147.299C786.74 349.6 207.142 231.591 -1 147.299Z"  fill="#363636" stroke="#191A23"/>
            </svg>

    
            <div className='flex justify-center items-center'>
                <div className='inline-flex items-center gap-10 -mt-28 justify-center hover:'>

                                {
                                    items.map(item=>(
                                        <div 
                                        key={item.color}
                                        className={`${item.width} ${item.height} ${item.color} mx-auto items-center justify-center hover:scale-125 hover:duration-500 `}
                                        >
                                        </div>
                                    ))
                                }

                    </div>  
            </div>
           
        </div>
    );
};

export default TopBanner;

const items=[
    {
        width:"w-[300px]",
        height:"h-[300px]",
        color:"bg-[#C02424]"
    },
    {
        width:"w-[260px]",
        height:"h-[260px]",
        color:"bg-[#146FE8]"
    },
    {
        width:"w-[300px]",
        height:"h-[300px]",
        color:"bg-[#E76666]"
    },
    {
        width:"w-[260px]",
        height:"h-[260px]",
        color:"bg-[#A0FCD9]"
    },
]
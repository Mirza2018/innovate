'use client'
import Image from 'next/image';
import React, { useState } from 'react';
import { IoIosArrowDropleftCircle } from "react-icons/io";
import { IoIosArrowDroprightCircle } from "react-icons/io";





const OverView = () => {

    const [showItems, setShowItems] = useState(3);
    const [color,setColor]=useState('bg-[#0FA958]')

   

 


    return (
<div className='md:relative overflow-x-hidden place-items-center '>
  <div className='md:relative '>
                    {/* Top section */}
        <div className='md:grid md:gap-8 md:mt-14 container md:grid-cols-2 flex flex-col mb-20  md:mb-0 '>
                {/* <!-- Left Side Text  --> */}


            <div className="flex  my-auto justify-center ms-20 flex-col z-20  mb-12 md:-mb-44">
                        <div className='h-72'></div>
                <h1 className="font-bold text-4xl mb-10 ">Overveiw</h1>
                <p className=" text-justify text-2xl font-semibold mx-auto me-6">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
            </div>

                {/* <!-- Right Side Slider --> */}

            <div className="flex justify-center items-center  top-0 right-4 md:absolute flex-col h-full z-10 ">
                <div className='flex gap-12 h-[300px] md:h-full'>
                {items.slice(0,showItems).map((item) => (
                        <div
                            key={item.id}
                            className={` ${showItems-2==item.id ? "scale-125 duration-500 " :""}   ${item.color} mx-auto items-center justify-center xl:w-[234px] xl:h-[304px] lg:w-[180px] lg:h-[200px] md:w-[150px] md:h-[170px] w-[100px] h-[120px] cursor-pointer `}
                            onClick={()=>setShowItems(item.id+2)}
                    
                        ></div>
                        ))}
                        
                </div>

                <div className='right-0 md:absolute md:-bottom-16 md:-my-0 -my-20 grid grid-cols-2  space-x-4 mb-1'>
                {
                    showItems>=4 ?    <IoIosArrowDropleftCircle className='text-6xl cursor-pointer' onClick={()=>setShowItems(showItems-1)} /> : <div className=''> </div>
                    
                }
                {
                    showItems<=7 ?   <IoIosArrowDroprightCircle  className='text-6xl cursor-pointer' onClick={()=>setShowItems(showItems+1)}   /> : <div className=''></div>
                    
                }

                </div>

            </div>

        </div>


    </div>

        {/* svg  background*/}
        <div className='md:-mt-0 -mt-40'>
        <svg className="md:absolute top-0 min-h-max" xmlns="http://www.w3.org/2000/svg" width="" height="" viewBox="0 0 1440 258" fill="none">
        <path className='overflow-hidden'  d="M-1 146.299V0H1440V146.299C786.74 348.6 207.142 230.591 -1 146.299Z" fill="#6BE6A8"/>
        </svg>
        
</div>

            {/* Last  part  */}

       <div className='grid md:grid-cols-2 gap-8  mx-auto container grid-cols-1 mt-10 md:mt-40 '>

            {/* Box slider  */}
            <div className="flex gap-7 py-5 z-10 ms-10">

            <div>
            <div className={`md:w-[408px] md:h-[408px] w-[225px] h-[225px]  rounded-3xl ${color} `}></div>


            <div className="flex justify-between mt-7">
                {
                    boxes.slice(4,7).map(box=>(
                        <div onClick={()=>setColor(box.color)} key={box.id} className={` ${box.color==color ? "border-8 border-black " :""}  ${box.color} md:w-[120px] md:h-[120px]  w-[60px] h-[60px] rounded-3xl cursor-pointer hover:border-8 hover:border-black `}></div>
                    ))
                }
            
            </div>

            </div>
            <div className="flex flex-col gap-6">
            {
                    boxes.slice(0,4).map(box=>(
                        <div  onClick={()=>setColor(box.color)} key={box.id} className={` ${box.color==color ? "border-8 border-black " :""}   ${box.color} md:w-[120px] md:h-[120px]  w-[60px] h-[60px] rounded-3xl cursor-pointer hover:border-8 hover:border-black`}></div>
                    ))
                }

            </div>



            </div>

            {/* <!-- Right Side Text  --> */}
            <div className="flex  my-auto justify-center ms-20 flex-col z-20">
                <div className='h-72'></div>
                <h1 className="font-bold text-4xl mb-10">Overveiw</h1>
                <p className=" text-justify text-2xl font-semibold me-6">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
            </div>
        </div>


</div>
    

    );
};

export default OverView;

// Items background color data

const items=[
    {
        id:1,
        color:'bg-[#FF9A9A]'
    },
    {  id:2,
        color:'bg-[#CFAAFF]',
    },
    {
        id:3,
        color:'bg-[#A0FCD9]',
    },
    {
        id:4,
        color:'bg-fuchsia-600', 
    },
    {
        id:5,
        color:'bg-blue-900', 
    },
    {
        id:6,
        color:'bg-yellow-600', 
    },
]
const boxes=[
    {
        id:1,
        color:'bg-[#0FA958]'
    },
    {  id:2,
        color:'bg-[#BE92FB]',
    },
    {
        id:3,
        color:'bg-[#FFACAC]',
    },
    {
        id:4,
        color:'bg-[#DB4126]', 
    },
    {
        id:5,
        
        color:'bg-[#2E4E3E]', 
    },
    {
        id:6,
        color:'bg-[#26DBDB]', 
    },
    {
        id:7,
        color:'bg-[#B126DB]', 
        
    },
]

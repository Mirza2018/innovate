'use client'
import Image from 'next/image';
import React, { useState } from 'react';
import { IoIosArrowDropleftCircle } from "react-icons/io";
import { IoIosArrowDroprightCircle } from "react-icons/io";


import arrowRight from "../../assets/arrow right.svg"
import img2 from "../../assets/p1.png"
import img3 from "../../assets/p1.png"
import img4 from "../../assets/p1.png"
import img5 from "../../assets/p1.png"
import img6 from "../../assets/p1.png"
import img7 from "../../assets/p1.png"
import img8 from "../../assets/p1.png"
import img9 from "../../assets/p1.png"


const OverView = () => {

    const [showItems, setShowItems] = useState(3);
   
console.log(showItems);

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



    return (
        <div className='relative '>
     
     <div className='grid grid-cols-2 gap-8 mt-14 container'>

{/* <!-- Left Side Text and Button --> */}


<div className="flex  my-auto justify-center ms-20 flex-col z-10">
        <div className='h-44'></div>
<h1 className="font-bold text-4xl mb-10">Overveiw</h1>
<p className=" text-justify text-2xl font-semibold">
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
</p>
</div>


<div className="flex justify-center items-center  top-0 right-4 absolute flex-col h-full">
<div className='flex gap-12'>
{items.slice(0,showItems).map((item) => (
          <div
            key={item.id}
            className={` ${showItems-2==item.id ? "scale-125 duration-500 " :""}   ${item.color} mx-auto items-center justify-center w-[234px] h-[304px] cursor-pointer `}
            onClick={()=>setShowItems(item.id+2)}
       
          ></div>
        ))}
</div>

<div className='right-0 absolute -bottom-16 grid grid-cols-2  space-x-4'>
{
    showItems>=4 ?    <IoIosArrowDropleftCircle className='text-6xl ' onClick={()=>setShowItems(showItems-1)} /> : <div className=''> </div>
      
}



{
     showItems<=7 ?   <IoIosArrowDroprightCircle  className='text-6xl' onClick={()=>setShowItems(showItems+1)}   /> : <div className=''></div>
     
}








</div>




</div>





</div>







        </div>









 





    );
};

export default OverView;
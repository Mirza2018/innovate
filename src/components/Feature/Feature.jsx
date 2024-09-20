"use client"
import Image from 'next/image';
import React, { useState } from 'react';
import pic1 from '../../assets/p1.png'
import pic2 from '../../assets/p2.png'
import pic3 from '../../assets/p3.png'
import bg from '../../assets/bg1.jpg'

const Feature = () => {
  const [indexTop,setIndexTop]=useState({
    top:"z-20",
    bottom:"z-10 left-5",
    last:"left-10"
  })

    return (
        <div>
            
  <div className="container mx-auto py-16 mt-32 overflow-x-hidden">
    {/* First part */}
    <div className="grid md:grid-cols-2 grid-cols-1 ">
      {/*Left side Photo section */}
      <div className='me-2'>
        <div className="space-x-4 grid grid-cols-2  gap-3" >
        {
            boxs.map(box=>(
              <div className={`${box?.style1}`} key={box?.text}>
            <div className={`${box?.style2}`}>
                        <span className={`${box?.textStyle} font-medium text-3xl`} >{box?.text}</span>
                        <Image
                        width={box?.width}
                        height={box?.height}
                        className={box?.imgStyle}
                        src={box?.src}
                        alt="Profile pic"
                        />
                </div>
            
              </div>
            ))
        }
      </div>
      </div>
      
              {/* Right Side Text and Button */}
        <div className="flex  my-auto mx-20 flex-col md:mt-0 mt-6">
                <p className=" text-justify text-xl font-normal semibold">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore e.
                </p>
                <div className='mx-auto mt-10 '>
                  <button className='border-2 px-4 py-2 rounded-2xl border-indigo-600 text-indigo-600 hover:bg-indigo-600 hover:text-white font-semibold'>Sign Up</button>
                </div>
            </div>
         </div>

         {/* Second part */}

   <div className='grid grid-cols-1 md:grid-cols-2 gap-8 mt-14'>

       {/* Left Side Text and Button */}
         <div className="flex  my-auto mx-20 flex-col">

            <p className=" text-justify text-xl font-semibold">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in  qui officia deserunt mollit anim id est laborum.
            </p>
            <div className='mx-auto mt-10'>
              <button className='border-2 px-4 py-2 rounded-2xl border-indigo-600 text-indigo-600 hover:bg-indigo-600 hover:text-white font-semibold'>Explore Now</button>
            </div>


        </div>

      <div className="flex justify-center items-center ">

      <div className="relative w-80 h-96 flex justify-center items-center cursor-pointer">
        {/*  Box  Indexing to top*/}
          

        

          {/* Top box */}
          <div onClick={()=>setIndexTop({top:"left-10 ",
                                    bottom:"z-20",
                                    last:"z-10 left-5"})} 
                className={`relative  w-full h-full bg-[#1F3B68] rounded-3xl text-white p-6  shadow-2xl ${indexTop.top}`}>
                <h1 className="text-3xl font-bold italic">Lorem ipsum</h1>
                <div className="flex items-center mt-4">
                <Image
                  width={30}
                  height={30}
                  src={pic2}
                  className='rounded-full'
                  alt=''

                  />
                      <p className="ml-2">Wade Warren</p>
                </div>
                <div className="bottom-3 absolute border-2 border-gray-700 bg-opacity-60 bg-slate-400 rounded-2xl ps-3 py-2 pe-24 ms-5 mb-2" >
                      <p className="text-lg font-semibold">Lawrance Stroll</p>
                      <p className="text-sm mt-1">Hegifueshho dhfsui </p>
                </div>
           </div>

            {/* Middle box */}
            <div onClick={()=>setIndexTop({top:"z-10 left-5",
                                    bottom:"left-10",
                                    last:"z-20"})}  className={`absolute  w-full h-full shadow-2xl bg-purple-700 rounded-3xl   text-white p-6   ${indexTop.bottom}`} >
                <h1 className="text-3xl font-bold italic">Lorem ipsum</h1>
                <div className="flex items-center mt-4">
                  <Image
                  width={30}
                  height={30}
                  src={pic1}
                  className='rounded-full'
                  alt=''
                  />
                    <p className="ml-2">Maria jonson</p>
                </div>
                <div className="bottom-3 absolute border-2 border-gray-700 bg-opacity-60 bg-slate-400 rounded-2xl ps-3 py-2 pe-24 ms-5 mb-2" >
                    <p className="text-lg font-semibold">Lawrance Stroll</p>
                    <p className="text-sm mt-1">Hegifueshho dhfsui </p>
                </div>
                                    </div>
               {/* Last Box */}
             <div onClick={()=>setIndexTop({top:"z-20",
                                    bottom:"z-10 left-5",
                                    last:"left-10 "})}  className={`absolute  w-full h-full shadow-2xl   bg-purple-900 rounded-3xl  text-white p-6   ${indexTop.last}`}>

                <h1 className="text-3xl font-bold italic">Lorem ipsum</h1>
                <div className="flex items-center mt-4">
                <Image
                  width={30}
                  height={30}
                  src={pic3}
                  className='rounded-full'
                  alt=''

                  />
                      <p className="ml-2">Simla bafet</p>
                </div>
                <div className="bottom-3 absolute border-2 border-gray-700 bg-opacity-60 bg-slate-400 rounded-2xl ps-3 py-2 pe-24 ms-4 mb-2 " >
                      <p className="text-lg font-semibold">Lawrance Stroll</p>
                      <p className="text-sm mt-1">Hegifueshho dhfsui </p>
                </div>
             </div>

      </div>

   </div>





</div>



    
  </div>
        </div>
    );
};

export default Feature;

// Box Style data
const boxs=[
  {
    style1:"",
    style2:"relative md:max-w-[274px] md:h-[285px]  max-w-[127px] h-[185px]   bg-gradient-to-r from-[#1A0EA47D] to-[#1300EED4] rounded-xl text-white flex items-center justify-center  md:ms-0 xl:ms-24 ms-20 ",
    imgStyle:"absolute -bottom-4 -right-4 w-12 h-12 rounded-full border-4 border-white",
    text:"Photo 1",
    width:"18",
    height:"18",
    src:pic1
  },
  {
    style1:"my-auto row-span-2",
    style2:"relative   md:max-w-[274px] md:h-[238px]   max-w-[174px] h-[138px] bg-gradient-to-r from-[#1A0EA47D] to-[#1300EED4]  rounded-xl text-white flex items-center justify-center",
    imgStyle:"absolute -bottom-4 -right-4 w-12 h-12 rounded-full border-4 border-white ",
    text:"Photo 2",
    textStyle:"text-black",
    width:"18",
    height:"18",
    src:pic2,
    bg:"use"
  },
  {
    style1:"justify-end flex mt-16",
    style2:"relative w-full  md:max-w-[208px] md:h-[208px] max-w-[108px] h-[108px]  bg-gradient-to-r from-[#FA6F6F] to-[#A51D1D] rounded-xl text-white flex items-center justify-center -mt-12 ",
    imgStyle:"absolute -bottom-4 -right-4 w-12 h-12 rounded-full border-4 border-white ",
    text:"Photo 3",
    width:"18",
    height:"18",
    src:pic3
  }

]



























 

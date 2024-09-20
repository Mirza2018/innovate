import React from 'react';
import { IoFilterOutline } from "react-icons/io5";
import img1 from "../../assets/p4.png"
import img2 from "../../assets/p5.png"
import img3 from "../../assets/p6.png"
import img4 from "../../assets/p7.png"
import Image from 'next/image';

const Card = () => {
    return (
        <div className='container mx-auto mt-32 mb-4'>
            {/* Title */}
              <h1 className='font-black text-3xl ms-6' >DISCOVER MORE</h1>
              {/* Categories Section */}
              <div className='text-xs font-medium flex flex-row justify-between items-center text-center mx-5 mt-16'>
                  <div className='flex gap-3 cursor-pointer'>
                      <p className=' px-2 py-2 bg-violet-800 text-white rounded-full outline-none'>All Categories</p>
                      <p className=' px-2 py-2 bg-slate-100 rounded-full outline-none hover:bg-violet-500 hover:text-white'>Art</p>
                      <p className=' px-2 py-2 bg-slate-100 rounded-full outline-none  hover:bg-violet-500 hover:text-white'>Celebrities</p>
                      <p className=' px-2 py-2 bg-slate-100 rounded-full outline-none  hover:bg-violet-500 hover:text-white'>Gaming</p>
                      <p className=' px-2 py-2 bg-slate-100 rounded-full outline-none  hover:bg-violet-500 hover:text-white '>Sport</p>
                      <p className=' px-2 py-2 bg-slate-100 rounded-full outline-none  hover:bg-violet-500 hover:text-white'>Music</p>
                  </div>
                  <div className='cursor-pointer'>
                      <p className=' px-2 py-2 bg-slate-100 rounded-full outline-none flex justify-center items-center gap-1 text-purple-600 ms-2  hover:bg-violet-500 hover:text-white'><IoFilterOutline /> All Filters</p>
                  </div>
            </div>


        {/* card section */}

             <div className='grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 place-items-center mt-16'>
                      {
                        cards.map((card,index)=>(
                          <div key={index} className="w-[291px]  border boder-2 rounded-2xl p-4 cursor-pointer shadow-xl mb-5">
                        <div className={`${card.bg}  w-[260px] h-[212px] rounded-2xl`}></div>
                        <div className=" relative -mt-2 ">
                          <div className="w-7 h-7   absolute top-0 left-3 z-[4]">
                  
                          <Image
                          src={img1}
                          width='30'
                          height='30'
                          className='rounded-2xl ring-2 ring-white'
                          alt='Profile Image'
                          placeholder='blur'
                          />
                          </div>

                          <div className="w-7 h-7  absolute top-0  left-8 z-[3]">
                          <Image
                          src={img2}
                          width='30'
                          height='30'
                          className='rounded-2xl ring-2 ring-white'
                          alt='Profile Image'
                          placeholder='blur'
                          />
                          </div>
                          <div className="w-7 h-7 absolute top-0 left-14 z-[2]">
                          <Image
                          src={img3}
                          width='30'
                          height='30'
                          className='rounded-2xl ring-2 ring-white'
                            alt='Profile Image'
                            placeholder='blur'
                          />
                          </div>
                          <div className="w-7 h-7 absolute top-0  left-20 z-[1]">
                          <Image
                          src={img4}
                          width='30'
                          height='30'
                          className='rounded-2xl ring-2 ring-white'
                            alt='Profile Image'
                            placeholder='blur'
                          />
                          </div>
                        </div>
                        <div className="py-7">
                          <h5 className={`${card.titleStyle} text-xl font-bold`}>{card.title}</h5>
                          <div className="flex justify-between py-6">
                            <span className={`${card.titleStyle}`} >{card.text1}</span>
                            <span className={`${card.titleStyle}`} >{card.text2}</span>
                          </div>
                          <div className="flex justify-between ">
                            <button className={`${card.btn1} py-3 px-4  rounded-full text-white  hover:from-purple-500 hover:to-blue-500 text-xs`} >DSVBD</button>
                            <button className={`${card.btn2}  py-2 px-4   rounded-full text-white  hover:from-purple-500 hover:to-blue-500  text-xs`} >DSVBD</button>
                          </div>
                        </div>
                      </div>
                        ))
                      }
              </div>
        </div>
    );
};

export default Card;



const cards=[

  {
    bg:"bg-gradient-to-r from-[#DED4F8] to-[#BE92FB] ",
    title:"Art stuff",
    titleStyle:"text-purple-500",
    text1:"598 TK",
    text2:"1 of 09",
    btn1:"bg-gradient-to-r from-[#9747FF] to-[#651BC6] ",
    btn2:"bg-gradient-to-r from-[#26DBDB] to-[#A0FCD9] "

  },
  {
    bg:"bg-gradient-to-r from-[#0FA958] to-[#94FFE6] ",
    title:"ABCD",
    titleStyle:"text-green-500",
    text1:"777 TK",
    text2:"1 of 19",
    btn1:"bg-gradient-to-r from-[#9747FF] to-[#651BC6] ",
    btn2:"bg-gradient-to-r from-[#6D8BB4] to-[#016EFF] "

  },
  {
    bg:"bg-gradient-to-r from-[#2768BF] to-[#E6E6E6] ",
    title:"EFGH",
    titleStyle:"text-blue-500",
    text1:"58 TK",
    text2:"1 of 64",
    btn1:"bg-gradient-to-r from-[#26DBDB] to-[#A0FCD9] ",
    btn2:"bg-gradient-to-r from-[#9747FF] to-[#E76666] "

  },
  {
    bg:"bg-gradient-to-r from-[#4C2F72] to-[#BE92FB] ",
    title:"XYZ",
    titleStyle:"text-purple-500",
    text1:"0",
    text2:"1 of 06",
    btn1:"bg-gradient-to-r from-[#26DBDB] to-[#A0FCD9] ",
    btn2:"bg-gradient-to-r from-[#9747FF] to-[#E76666] "

  },
  {
    bg:"bg-gradient-to-r from-[#DED4F8] to-[#BE92FB] ",
    title:"Art stuff",
    titleStyle:"text-purple-500",
    text1:"598 TK",
    text2:"1 of 09",
    btn1:"bg-gradient-to-r from-[#26DBDB] to-[#A0FCD9] ",
    btn2:"bg-gradient-to-r from-[#FEFDFF] to-[#E76666] "

  },
  {
    bg:"bg-gradient-to-r from-[#0FA958] to-[#94FFE6] ",
    title:"ABCD",
    titleStyle:"text-green-500",
    text1:"777 TK",
    text2:"1 of 19",
    btn1:"bg-gradient-to-r from-[#9747FF] to-[#651BC6] ",
    btn2:"bg-gradient-to-r from-[#6D8BB4] to-[#016EFF] "

  },
  {
    bg:"bg-gradient-to-r from-[#2768BF] to-[#E6E6E6] ",
    title:"EFGH",
    titleStyle:"text-blue-500",
    text1:"58 TK",
    text2:"1 of 64",
    btn1:"bg-gradient-to-r from-[#26DBDB] to-[#A0FCD9] ",
    btn2:"bg-gradient-to-r from-[#9747FF] to-[#E76666] "

  },
  {
    bg:"bg-gradient-to-r from-[#4C2F72] to-[#BE92FB] ",
    title:"XYZ",
    titleStyle:"text-purple-500",
    text1:"0",
    text2:"1 of 06",
    btn1:"bg-gradient-to-r from-[#26DBDB] to-[#A0FCD9] ",
    btn2:"bg-gradient-to-r from-[#9747FF] to-[#E76666] "

  },
]
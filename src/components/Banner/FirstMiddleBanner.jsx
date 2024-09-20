import Image from 'next/image';
import React from 'react';
import pic1 from '../../assets/p1.png'
import pic2 from '../../assets/p2.png'
import pic3 from '../../assets/p3.png'
import bg from '../../assets/bg1.jpg'

const FirstMiddleBanner = () => {

    return (
        <div>
            
  <div className="container mx-auto py-16">



    <div className="grid grid-cols-2 gap-8">



      <div className="space-x-4 grid grid-cols-2 gap-3" >

        {

            boxs.map(box=>(
              <div className={`${box?.style1}`} key={box?.text}>

              {box?.bg ? 

                          <div className={`${box?.style2}`}>
                          <span className={`${box?.textStyle} font-medium text-3xl`} >{box?.text}</span>
                          <Image
                          width={box?.width}
                          height={box?.height}
                          className={box?.imgStyle}
                          src={box?.src}
                          alt="f"


                          />
                          </div>
            :
            <div className={`${box?.style2}`}>
                        <span className={`${box?.textStyle} font-medium text-3xl`} >{box?.text}</span>
                        <Image
                        width={box?.width}
                        height={box?.height}
                        className={box?.imgStyle}
                        src={box?.src}
                        alt="f"
                   
                        
                        />
                </div>
            
            }

               



              </div>
            ))

        }

      </div>

         {/* <!-- Right Side Text and Button --> */}
    <div className="flex  my-auto mx-20 flex-col">

    <p className=" text-justify text-xl font-normal semibold">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore e.
    </p>
    <div className='mx-auto mt-10 '>
      <button className='border-2 px-4 py-2 rounded-2xl border-indigo-600 text-indigo-600 hover:bg-indigo-600 hover:text-white font-semibold'>Sign Up</button>
    </div>
    
    
  </div>
    </div>



<div className='grid grid-cols-2 gap-8 mt-14'>

       {/* <!-- Left Side Text and Button --> */}
       <div className="flex  my-auto mx-20 flex-col">

<p className=" text-justify text-xl font-semibold">
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in  qui officia deserunt mollit anim id est laborum.
</p>
<div className='mx-auto mt-10'>
  <button className='border-2 px-4 py-2 rounded-2xl border-indigo-600 text-indigo-600 hover:bg-indigo-600 hover:text-white font-semibold'>Explore Now</button>
</div>


</div>

<div className="flex justify-center items-center h-screen ">

    {/* <!-- Box Container --> */}
    <div className="relative w-96 h-96 flex justify-center items-center">

        {/* <!-- Bottom Box --> */}
        <div className="absolute left-8 w-full h-64 bg-purple-900 rounded-lg"></div>

        {/* <!-- Middle Box --> */}
        <div className="absolute  left-4 w-full h-80 bg-purple-700 rounded-lg"></div>

        {/* <!-- Top Box --> */}
        <div className="relative  w-full h-full bg-[#1F3B68] rounded-lg text-white p-6">
            <h1 className="text-3xl font-bold italic">Lorem ipsum</h1>
            <div className="flex items-center mt-4">
                <img src="https://randomuser.me/api/portraits/men/1.jpg" alt="Profile" className="w-8 h-8 rounded-full"/>
                <p className="ml-2">Wade Warren</p>
            </div>
            <div className="bottom-3 absolute border-2 border-gray-700 bg-opacity-60 bg-slate-400 rounded-md ps-3 py-2 pe-24 ms-4 mb-2" >
                <p className="text-lg font-semibold">Lawrance Stroll</p>
                <p className="text-sm mt-2">Hegifueshho dhfsui foiehhsio</p>
            </div>
        </div>

    </div>

</div>





</div>



    
  </div>
        </div>
    );
};

export default FirstMiddleBanner;


const boxs=[
  {
    style1:"",
    style2:"relative max-w-[274px] h-[285px] bg-gradient-to-r from-[#1A0EA47D] to-[#1300EED4] rounded-xl text-white flex items-center justify-center",
    imgStyle:"absolute -bottom-4 -right-4 w-12 h-12 rounded-full border-4 border-white",
    text:"Photo 1",
    width:"18",
    height:"18",
    src:pic1
  },
  {
    style1:"my-auto row-span-2",
    style2:"relative   max-w-[274px] h-[238px]  bg-gradient-to-r from-[#1A0EA47D] to-[#1300EED4]  rounded-xl text-white flex items-center justify-center",
    imgStyle:"absolute -bottom-4 -right-4 w-12 h-12 rounded-full border-4 border-white",
    text:"Photo 2",
    textStyle:"text-black",
    width:"18",
    height:"18",
    src:pic2,
    bg:"use"
  },
  {
    style1:"justify-end flex mt-16",
    style2:"relative w-full  max-w-[208px] h-[208px] bg-gradient-to-r from-[#FA6F6F] to-[#A51D1D] rounded-xl text-white flex items-center justify-center",
    imgStyle:"absolute -bottom-4 -right-4 w-12 h-12 rounded-full border-4 border-white",
    text:"Photo 3",
    width:"18",
    height:"18",
    src:pic3
  }

]



























 

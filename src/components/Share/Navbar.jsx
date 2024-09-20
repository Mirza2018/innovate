"use client"
import Link from "next/link";
import { FiSearch } from "react-icons/fi";
import { FaBars, FaTimes } from 'react-icons/fa';
import { useState } from "react";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };


  const menuItems = [
    { name: 'Home' },
    { name: 'About'},
    { name: 'Blog' },
    { name: 'Contact Us'}
  ];



  return (
        // Navbar items Section
  <nav className="bg-[#363636] p-4 pb-3">
    <div className="container mx-auto flex justify-between ">
              <div className="hidden md:block">
              <ul className="flex space-x-6 text-white text-base font-normal  ">
                    {
                        menuItems.map(item=>(
                            <Link href='/' key={item.name} className="">
                              <li className="flex">{item.name} <select className="bg-[#363636]"></select>
                              </li>
                            </Link>
                        ))
                    }
                </ul>

              </div>
              <div className="md:hidden">
              <button
                      onClick={toggleMenu}
                      className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:bg-gray-700 focus:text-white transition duration-150 ease-in-out"
                      aria-label="Toggle menu"
                    >
                      {isOpen ? <FaTimes /> : <FaBars />}
                    </button>
                      {
                        isOpen && <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                                    {menuItems.map((item) => (
                                      <a
                                        key={item.name}
                                        href={`${item.name}`}
                                        className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-gray-700 focus:outline-none focus:bg-gray-700 transition duration-150 ease-in-out"
                                        aria-label={item.name}
                                      >
                                        <span className="flex items-center">
                                          {item.icon}
                                          <span className="">{item.name}</span>
                                        </span>
                                      </a>
                                    ))}
                                  </div>
                      }
                    
              </div>



        {/* <ul className="flex md:space-x-6 text-white md:text-base font-normal text-xs">
            {
                menuItems.map(item=>(
                    <Link href='/' key={item.name} className="">
                      <li className="flex">{item.name} <select className="bg-[#363636]"></select>
                      </li>
                    </Link>
                ))
            }
        </ul> */}

         {/* <!-- Search bar --> */}
       <div className="relative ">
            <input type="text" className="px-4 py-2 rounded-full bg-white" placeholder="Search" />
            <button className="absolute right-2 top-2 text-gray-500">
            <FiSearch className="text-2xl text-black me-2 font-medium" />
            </button>
       </div>

    </div>
  </nav>

  );
};

export default Navbar;



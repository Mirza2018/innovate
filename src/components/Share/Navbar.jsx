import Link from "next/link";
import { FiSearch } from "react-icons/fi";
const Navbar = () => {
  

  const menuItems = [
    { name: 'Home' },
    { name: 'About'},
    { name: 'Blog' },
    { name: 'Contact Us'}
  ];



  return (
        // Navbar items Section
  <nav className="bg-[#363636] p-4 pb-3">
    <div className="container mx-auto flex justify-between items-center">
        <ul className="flex md:space-x-6 text-white md:text-base font-normal text-xs">
            {
                menuItems.map(item=>(
                    <Link href='/' key={item.name} className="">
                      <li className="flex">{item.name} <select className="bg-[#363636]"></select>
                      </li>
                    </Link>
                ))
            }
        </ul>

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



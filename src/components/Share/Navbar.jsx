import Link from "next/link";

const Navbar = () => {
  

  const menuItems = [
    { name: 'Home' },
    { name: 'About'},
    { name: 'Blog' },
    { name: 'Contact Us'}
  ];



  return (
        // Navbar items Section
  <nav className="bg-[#363636] p-4">
    <div className="container mx-auto flex justify-between items-center">
        <ul className="flex space-x-6 text-white text-base font-normal">
            {
                menuItems.map(item=>(
                    <Link href='/' key={item.name}><li>
                        {item.name} <select className="bg-[#363636]"></select>
                        </li></Link>
                ))
            }

        </ul>

         {/* <!-- Search bar --> */}
       <div class="relative">
            <input type="text" class="px-4 py-2 rounded-full bg-white" placeholder="Search" />
            <button class="absolute right-2 top-2 text-gray-500">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M12.9 14.32a8 8 0 111.414-1.414l4.385 4.384a1 1 0 11-1.414 1.414l-4.385-4.384zM14 8a6 6 0 11-12 0 6 6 0 0112 0z" clip-rule="evenodd" />
                </svg>
            </button>
       </div>

    </div>
  </nav>

  );
};

export default Navbar;



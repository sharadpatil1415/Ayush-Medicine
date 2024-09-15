import { useState } from "react";
import { RiMenuFill } from "react-icons/ri";

const Header = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const handleClick = () => {
    setOpenMenu(!openMenu);
  };
  return (
    <header className="w-full h-16 md:h-20 text-white absolute md:flex md:justify-between md:items-center top-0 z-20">
      <div className="ml-6 mt-4 md:mt-0 cursor-pointer font-bold text-lg">
        <h2>Ayush Herbal Plants</h2>
      </div>
      <div className="md:flex-row md:justify-between md:items-center md:gap-8 mr-6 hidden md:flex">
        <div className="flex gap-4 cursor-pointer flex-col md:flex-row">
          <a className="hover:border-b-[1px] border-white transition-all duration-200">
            Home
          </a>
          <a className="hover:border-b-[1px] border-white transition-all duration-200">
            About
          </a>
          <a className="hover:border-b-[1px] border-white transition-all duration-200">
            Blog
          </a>
          <a className="hover:border-b-[1px] border-white transition-all duration-200">
            Contact Us
          </a>
        </div>
        <div>
          <button className=" bg-white text-black px-4 py-2 rounded-md hover:bg-transparent hover:text-white hover:border-[1px] hover:border-white transition-all duration-300">
            Get Started
          </button>
        </div>
      </div>

      {/* Mobile Menu */}

      <div className="md:hidden">
        <RiMenuFill
          className="absolute top-0 right-0 my-5 mx-6 text-2xl cursor-pointer hover:text-gray-400 z-20"
          onClick={handleClick}
        />
      </div>

      <div className="md:hidden">
        {openMenu && (
          <div
            className={`${
              openMenu ? "flex" : "hidden"
            } flex-col justify-center items-center gap-6 bg-black md:hidden w-full h-screen absolute top-0 left-0 z-10 `}
          >
            <div className="flex gap-4 cursor-pointer flex-col items-center">
              <a className="hover:border-b-[1px] border-white transition-all duration-200">
                Home
              </a>
              <a className="hover:border-b-[1px] border-white transition-all duration-200">
                About
              </a>
              <a className="hover:border-b-[1px] border-white transition-all duration-200">
                Blog
              </a>
              <a className="hover:border-b-[1px] border-white transition-all duration-200">
                Contact Us
              </a>
            </div>
            <div>
              <button className=" bg-white text-black px-4 py-2 rounded-md hover:bg-transparent hover:text-white hover:border-[1px] hover:border-white transition-all duration-300">
                Get Started
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;

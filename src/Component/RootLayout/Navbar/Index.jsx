import React from "react";
import { NavLink } from "react-router-dom";
import { FiSearch } from "react-icons/fi";

const Navbar = () => {
  const navItem = [
    {
      id: 1,
      item: "Home",
    },
    {
      id: 2,
      item: "Contact",
    },
    {
      id: 3,
      item: "About",
    },
    {
      id: 4,
      item: "Sign Up",
    },
  ];
  return (
    <div className="pt-10 pb-4 border-b-[1.5px] border-b-text_black7D8184">
      <div className="container">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-text_black000000 font-inter font-bold text-[24px] cursor-pointer transition-all duration-[500ms] hover:text-red-400">
              Exclusive
            </h1>
          </div>
          <div>
            <ul className="flex items-center gap-x-[48px]">
              {navItem?.map((nav) => (
                <li key={nav.id} className="menuUnderLine">
                  <NavLink
                    to={`/${nav.item}`}
                    className={({ isActive, isPending }) =>
                      isPending
                        ? "text-black text-[17px] font-normal font-poppins"
                        : isActive
                        ? "text-red-500 text-[17px] font-normal font-poppins"
                        : "text-black text-[17px] font-normal font-poppins"
                    }
                  >
                    {nav.item}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
          <div className="basis-1/3  relative">
            <input
              type="text"
              className="py-2 bg-white_F5F5F5 rounded-[10px]  px-[70px] "
              placeholder="What are you looking for?"
            />
            <span className="absolute top-1/2 -translate-y-1/2 text-xl right-[40%]">
              <FiSearch />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

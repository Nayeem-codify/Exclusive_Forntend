import React from "react";
import { NavLink } from "react-router-dom";
import { FiSearch } from "react-icons/fi";
import { IoMdHeartEmpty } from "react-icons/io";
import { FaCartArrowDown, FaUser } from "react-icons/fa";
import { CiLogout, CiStar, CiUser, CiWallet } from "react-icons/ci";
import { MdOutlineCollections } from "react-icons/md";

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
                        ? "text-red-500 text-[17px] font-normal font-poppins "
                        : "text-black text-[17px] font-normal font-poppins hover:text-[#db4444] transition-all duration-150"
                    }
                  >
                    {nav.item}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
          <div className="basis-1/3  relative  flex items-center">
            <div>
              <input
                type="text"
                className="py-2 bg-white_F5F5F5 rounded-[10px]  px-[60px] "
                placeholder="What are you looking for?"
              />
              <span className="absolute top-1/2 -translate-y-1/2 text-xl right-[35%]">
                <FiSearch />
              </span>
            </div>
            <div className="flex items-center gap-x-[20px] ">
              <span className="bg-text-text_black000000 text-2xl cursor-pointer">
                <IoMdHeartEmpty />
              </span>
              <span className="bg-text-text_black000000 text-2xl amount cursor-pointer">
                <FaCartArrowDown />
              </span>
              <span className="text-text_whiteFAFAFA text-xl rounded-full bg-red-600 p-2 cursor-pointer relative">
                <FaUser />
              </span>
              <div className="absolute top-0 left-0 bg-gray-200 px-10 flex flex-col gap-y-3 py-5">
                <div className="flex items-center gap-x-2 ">
                  <span className="text-text_whiteFAFAFA text-2xl">
                    <CiUser />
                  </span>
                  <h3 className="text-text_whiteFAFAFA font-poppins font-normal text-xl">Manage My Account</h3>
                </div>
                <div className="flex items-center gap-x-2">
                  <span className="text-text_whiteFAFAFA text-2xl">
                    <CiWallet />
                  </span>
                  <h3 className="text-text_whiteFAFAFA font-poppins font-normal text-xl">My Order</h3>
                </div>
                <div className="flex items-center gap-x-2">
                  <span className="text-text_whiteFAFAFA text-2xl">
                    <MdOutlineCollections />
                  </span>
                  <h3 className="text-text_whiteFAFAFA font-poppins font-normal text-xl">My Cancellations</h3>
                </div>
                <div className="flex items-center gap-x-2">
                  <span className="text-text_whiteFAFAFA text-2xl">
                    <CiStar />
                  </span>
                  <h3 className="text-text_whiteFAFAFA font-poppins font-normal text-xl">My Reviews</h3>
                </div>
                <div className="flex items-center gap-x-2">
                  <span className="text-text_whiteFAFAFA text-2xl">
                    <CiLogout />
                  </span>
                  <h3 className="text-text_whiteFAFAFA font-poppins font-normal text-xl">Logout</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

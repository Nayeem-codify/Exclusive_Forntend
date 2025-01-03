import React from "react";

const Header = () => {
  return (
    <div className="bg-text_black000000 py-3 ">
      <div className="container">
        <div className="flex  justify-between items-center ">
          <div></div>
          <div>
            <h2 className="text-white_FFFFFF font-poppins  text-[18px] font-normal">
              Summer Sale For All Swim Suits And Free Express Delivery - OFF
              50%! <u>ShopNow</u>
            </h2>
          </div>
          <div>
            <select
              className="bg-black text-white_FFFFFF font-poppins  text-[18px] font-normal "
              name=""
              id=""
            >
              <option value="#">English</option>
              <option value="#">Bangla</option>
              <option value="#">Spanish</option>
              <option value="#">Chiness</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;

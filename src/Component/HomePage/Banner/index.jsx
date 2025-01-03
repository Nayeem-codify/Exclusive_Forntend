import React from "react";
import { category } from "../../../../Data/Data";
import { LiaAngleRightSolid } from "react-icons/lia";

const Banner = () => {
  return (
    <div>
      <div className="container">
        <div className="flex items-center justify-between">
          <div className="w-[23%] border-r-[1.5px] border-r-text_black7D8184">
            <ul className="pt-10">
              {category?.map((item) => (
                <div className="flex items-center justify-between">
                  <li className=" font-poppins hover:px-5 font-normal text-lg text-text_black000000 py-4 cursor-pointer duration-300">
                    {item.category}
                  </li>
                  {item.subCategory && (
                    <span className="pr-28 text-xl text-text_black000000  ">
                      <LiaAngleRightSolid />
                    </span>
                  )}
                </div>
              ))}
            </ul>
          </div>
          <div className="w-[77%] bg-green-500">b</div>
        </div>
      </div>
    </div>
  );
};

export default Banner;

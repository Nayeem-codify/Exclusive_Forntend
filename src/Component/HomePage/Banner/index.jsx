import React from "react";
import { category } from "../../../../Data/data.js";
import "slick-carousel/slick/slick.css";
import Slider from "react-slick";
import bannerimg from "../../../assets/banner/banner.jpg"
import bannerimg1 from "../../../assets/banner/banner1.jpg"
import bannerimg2 from "../../../assets/banner/banner2.jpg"
import bannerimg3 from "../../../assets/banner/banner3.jpg" 
import bannerimg4 from "../../../assets/banner/banner4.jpg"
import bannerimg5 from "../../../assets/banner/banner5.jpg"
import { LiaAngleRightSolid } from "react-icons/lia";

const Banner = () => {
  const settings = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
  };
  return (
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
        <div className="w-[77%]">
          <Slider {...settings}>
            <div>
              <img src={bannerimg} alt={bannerimg} />
            </div>
            <div>
              <img src={bannerimg1} alt={bannerimg} />
            </div>
            <div>
              <img src={bannerimg2} alt={bannerimg} />
            </div>
            <div>
              <img src={bannerimg3} alt={bannerimg} />
            </div>
            <div>
              <img src={bannerimg4} alt={bannerimg} />
            </div>
            <div>
              <img src={bannerimg5} alt={bannerimg} />
            </div>
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Banner;

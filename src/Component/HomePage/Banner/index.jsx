import React, { useState } from "react";
import { category } from "../../../../Data/data.js";
import "slick-carousel/slick/slick.css";
import Slider from "react-slick";
import bannerimg1 from "../../../assets/banner/banner1.jpg";
import { LiaAngleRightSolid } from "react-icons/lia";

const Banner = () => {
  const [currentSlide, setcurrentSlide] = useState(0);
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    arrows: false,
    appendDots: (dots) => (
      <div
        style={{
          position: "absolute",
          bottom: "5%",
          left: "50%",
          transform: "translateX(-50%)",
          zIndex: "1000",
        }}
      >
        <ul style={{ margin: "0px", display: "flex" }}> {dots} </ul>
      </div>
    ),
    customPaging: (i) =>
      i == currentSlide ? (
        <div
          style={{
            width: "20px",
            height: "20px",
            borderRadius: "50%",
            background: "#DB4444",
            border: "3px solid #ffff",
            marginRight: "12px",
          }}
        ></div>
      ) : (
        <div
          style={{
            width: "20px",
            height: "20px",
            borderRadius: "50%",
            background: "#fff",
            opacity: "0.5",
            marginRight: "12px",
          }}
        ></div>
      ),
    afterChange: function (currentSlide) {
      setcurrentSlide(currentSlide);
    },
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
        <div className="w-[77%] pl-10 px-[40px]">
          <Slider {...settings}>
            {[...new Array(6)].map((_, index) => (
              <div key={index}>
                <img
                  src={bannerimg1}
                  alt={bannerimg1}
                  className="h-full w-full object-cover"
                />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Banner;

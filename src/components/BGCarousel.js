import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ReactFlagsSelect from "react-flags-select";

export default function BGCarousel() {
  const [selected, setSelected] = useState("TR");

  const ulkeKod = {
    TR: "+90",
    GB: "+44",
    US: "+1",
    NL: "+31",
    DE: "+49",
    FR: "+33",
    ES: "+34",
    IT: "+39",
  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    draggable: false,
    swipe: false,
  };

  const slidesData = [
    {
      id: 1,
      image:
        "url('https://cdn.getir.com/getirweb-images/common/hero-posters/getir-mainpage-1.jpg')",
    },
    {
      id: 2,
      image:
        "url('https://cdn.getir.com/getirweb-images/common/hero-posters/getir-mainpage-2.jpg')",
    },
    {
      id: 3,
      image:
        "url('https://cdn.getir.com/getirweb-images/common/hero-posters/getir-mainpage-3.jpg')",
    },
    {
      id: 4,
      image:
        "url('https://cdn.getir.com/getirweb-images/common/hero-posters/getir-mainpage-4.jpg')",
    },
  ];

  return (
    <div className="bgcarousel overflow-hidden h-40 md:h-[500px] relative">
      <div className="w-full block">
        <Slider {...settings}>
          {slidesData.map((slide) => (
            <div key={slide.id}>
              <div
                className="h-0 md:h-[500px] bg-cover  "
                style={{ backgroundImage: slide.image }}
              ></div>
            </div>
          ))}
        </Slider>
        <div className="container flex md:justify-between md:items-center absolute top-0 left-1/2 -translate-x-1/2 h-full z-20">
          <div className="hidden md:block pl-4">
            <img
              className="h-[180px] w-[180px]"
              alt=""
              src="https://getir.com/_next/static/images/bimutluluk-b3a7fcb14fc9a9c09b60d7dc9b1b8fd6.svg"
            />
            <h1 className="mt-9  text-white text-4xl font-semibold ">
              Dakikalar içinde kapında
            </h1>
          </div>
          <div className=" w-full md:w-[400px]  rounded-lg bg-gray-50  md:p-5">
            <h1
              className="text-center font-semibold pt-6 md:pt-0 pb-3"
              style={{ color: "rgb(76, 51, 152)" }}
            >
              Giriş yap veya kayıt ol
            </h1>
            <div className="flex px-3 md:px-0">
              <ReactFlagsSelect
                className="select-flag"
                countries={["TR", "US", "GB", "FR", "DE", "IT", "NL", "ES"]}
                customLabels={ulkeKod}
                selected={selected}
                onSelect={(code) => setSelected(code)}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

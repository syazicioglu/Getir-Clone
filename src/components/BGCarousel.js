import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ReactFlagsSelect from "react-flags-select";
import { useNavigate } from "react-router-dom";
import userData from "../json/profiles.json";

export default function BGCarousel({ user, setUser }) {
  const navigate = useNavigate();

  const [selected, setSelected] = useState("TR");

  const [phone, setPhone] = useState("");

  function handleLoginButton() {
    const findedProfile = userData.profiles.find(
      (profil) => profil.phone === phone
    );

    findedProfile ? setUser(`${findedProfile.phone}`) : setUser("5555555555");

    navigate("/kategori");
  }

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
    <>
      <div className="bgcarousel md:overflow-hidden h-auto md:h-[500px] md:relative">
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
          <div className="container flex md:justify-between md:items-center md:absolute md:top-0 md:left-1/2 md:-translate-x-1/2 md:h-full z-20">
            <div className="hidden md:block md:pl-4 ">
              <img
                className="h-[180px] w-[180px]"
                alt=""
                src="https://getir.com/_next/static/images/bimutluluk-b3a7fcb14fc9a9c09b60d7dc9b1b8fd6.svg"
              />
              <h1 className="mt-9  text-white text-4xl font-semibold ">
                Dakikalar içinde kapında
              </h1>
            </div>
            <div className=" w-full md:w-[400px]  md:rounded-lg bg-[#f5f5f5] md:bg-white px-5 py-5 md:mr-4 shadow-sm">
              <h1 className="text-center font-semibold pb-2 md:pb-4 text-[#4c3398]">
                Giriş yap veya kayıt ol
              </h1>
              <div className="flex px-3 md:px-0 gap-x-2 ">
                <ReactFlagsSelect
                  className="select-flag"
                  countries={["TR", "US", "GB", "FR", "DE", "IT", "NL", "ES"]}
                  customLabels={ulkeKod}
                  selected={selected}
                  onSelect={(code) => setSelected(code)}
                />
                <label className="flex-grow relative">
                  <input
                    required
                    type="text"
                    maxlength="10"
                    className="h-14 px-4 border-2 border-gray-300 rounded w-full bg-[#f5f5f5] md:bg-white transition-colors focus:border-[#4c3398] text-sm focus:outline-none pt-3 peer"
                    onChange={(e) => setPhone(e.target.value)}
                  />
                  <span className="absolute top-0 left-0 h-full px-4 flex items-center text-gray-500 peer-focus:h-8 peer-focus:text-xs peer-focus:text-[#5d3ebc] peer-valid:text-[#5d3ebc] peer-valid:h-8 peer-valid:text-xs transition-all">
                    Telefon Numarası
                  </span>
                </label>
              </div>
              <button
                onClick={() => handleLoginButton()}
                className="bg-[#ffd300] mt-3 h-12 flex items-center justify-center rounded-lg w-full md:text-sm font-semibold text-[#5d3ebc] hover:bg-[#7849f7] hover:text-[#ddf300] transition-colors"
              >
                Telefon numarası ile devam et
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

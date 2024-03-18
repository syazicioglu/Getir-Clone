import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function BGCarousel() {
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
    <div className="bgcarousel overflow-hidden">
      <div className="w-full h-auto">
        <Slider {...settings}>
          {slidesData.map((slide) => (
            <div key={slide.id}>
              <div
                style={{
                  height: "500px",
                  backgroundSize: "cover",
                  backgroundImage: slide.image,
                }}
              ></div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

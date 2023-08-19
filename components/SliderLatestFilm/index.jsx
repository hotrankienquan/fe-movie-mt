import Link from "next/link";
import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/legacy/image";
import { arrSliderLatestFilm, settings } from "./constSliderLatestFilm";

const Movie = ({ key, imageSrc, alt, title, isActive, onClick }) => {
  return (
    <div key={key} className="h-full">
      <div className="relative overflow-hidden h-full mx-2.5 group">
        <Link href={`/detail/${title.replace(/\s+/g, "-")}`} className="">
          <Image
            className="h-full block w-full object-cover group-hover:scale-110 transition-all duration-300 group-hover:opacity-50"
            src={imageSrc || "/vercel.svg"}
            alt={alt}
            // layout="fill"
            width={213}
            height={340}
            // loading="lazy"
            priority
          />
          <span className="flex justify-center absolute top-[43%] inset-x-0">
            <i className="fa-solid fa-circle-play text-5xl text-white scale-150 opacity-0 group-hover:scale-100 group-hover:opacity-80 duration-500 ease-in-out"></i>
          </span>
        </Link>

        <div className="absolute top-[45%] inset-x-0 bg-black">
          <span className="absolute -left-[15%] group-hover:left-[20%] duration-500 ease-in-out">
            <button
              className="text-white z-50"
              onClick={(e) => {
                e.preventDefault();
                onClick();
              }}
            >
              {isActive ? (
                <i className="fa-solid fa-heart text-2xl"></i>
              ) : (
                <i className="fa-regular fa-heart text-2xl"></i>
              )}
            </button>
          </span>

          <span className="absolute -right-[15%] group-hover:right-[20%] duration-500 ease-in-out">
            <button
              className="text-white z-50"
              onClick={(e) => {
                e.preventDefault();
              }}
            >
              {isActive ? (
                <i className="fa-solid fa-bookmark text-2xl"></i>
              ) : (
                <i className="fa-regular fa-bookmark text-2xl"></i>
              )}
            </button>
          </span>
        </div>

        <div className="absolute bottom-0 left-0 right-0 text-center p-2 bg-black bg-opacity-70">
          <span className=" block text-white">
            <h3 className="whitespace-nowrap text-ellipsis overflow-hidden">
              <Link href={`/detail/${title.replace(/\s+/g, "-")}`} title="film">
                {title}
              </Link>
            </h3>
          </span>
        </div>
      </div>
    </div>
  );
};

const SliderLastetFilm = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleActive = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <div className="mt-20 mb-8 -mx-2.5">
      <div className="px-2.5 mb-4">
        <h2 className="text-[#da966e] text-3xl font-normal border-l-4 pl-2.5">
          Phim Mới Nhất
        </h2>
      </div>
      <Slider {...settings}>
        {arrSliderLatestFilm.map((item, index) => (
          <Movie
            key={index}
            imageSrc={item.image}
            alt={item.image}
            title={item.title}
            isActive={index === activeIndex}
            onClick={() => toggleActive(index)}
          />
        ))}
      </Slider>
    </div>
  );
};

export default SliderLastetFilm;

import Link from "next/link";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/legacy/image";
import { arrSliderLatestFilm, settings } from "./constSliderLatestFilm";

const SliderLastetFilm = () => {
  return (
    <div className="mt-16 mb-8 -mx-2.5">
      <div className="px-2.5 mb-4">
        <h2 className="text-[#da966e] text-3xl font-normal border-l-4 pl-2.5">
          Phim Mới Nhất
        </h2>
      </div>
      <Slider {...settings}>
        {arrSliderLatestFilm.map((item, i) => (
          <div key={item.id} className="h-full">
            <div className="relative h-full mx-2.5 overflow-hidden group">
              <Link
                href={`/detail/${item.title.replace(/\s+/g, "-")}`}
                className="flex h-full w-full items-center justify-center z-50"
              >
                <Image
                  className="h-full block w-full object-cover group-hover:scale-110 transition-all duration-300 group-hover:opacity-50"
                  src={item.image || "/vercel.svg"}
                  alt="error"
                  // layout="fill"
                  width={213}
                  height={340}
                  // loading="lazy"
                  priority
                />
              </Link>

              <div className="h-full flex items-center justify-center">
                <Link
                  href={`/detail/${item.title.replace(/\s+/g, "-")}`}
                  className="h-full absolute -top-2/4 group-hover:top-[40%] block scale-150 opacity-0 text-white group-hover:scale-100 group-hover:opacity-80 duration-500 ease-in-out"
                >
                  <i className="fa-solid fa-circle-play text-5xl"></i>
                </Link>
              </div>

              <div className="absolute bottom-0 left-0 right-0 text-center p-2 bg-black bg-opacity-70">
                <span className=" block text-white">
                  <h3 className="whitespace-nowrap text-ellipsis overflow-hidden">
                    <Link
                      href={`/detail/${item.title.replace(/\s+/g, "-")}`}
                      title="film"
                    >
                      {item.title}
                    </Link>
                  </h3>
                </span>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default SliderLastetFilm;

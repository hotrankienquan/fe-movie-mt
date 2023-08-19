import Link from "next/link";
import {
  arrDetailInfoFilm,
  arrTopTrendingFilm,
} from "./constSidebarContentFilm";
import Image from "next/legacy/image";
import React from "react";

const SidebarContentFilm = () => {
  return (
    <>
      <div className=" py-[15px] rounded-md bg-[#1b2d58]">
        <div className="h-full px-[15px]">
          <span className="block w-full">
            <img
              className="block w-full h-full"
              src="https://static.bunnycdn.ru/i/cache/images/f/fa/fad20ae6e3418f3367ae8d023d9855c2.jpg"
              alt=""
              // width={55}
              // height={55}
              // layout="fill"
              // priority
            />
          </span>
        </div>

        <div>
          <h1 className="mx-[15px] mt-[22.5px] text-lg font-semibold text-white">
            Elemental
          </h1>
          <div className="flex items-center pt-[7.5px] pb-[15px] px-[15px] mb-[15px] border-[1px] border-[#21376c]">
            <span className="min-w-[20px] px-[3px] bg-[#c7d2ee] text-xs font-medium text-black border-[1px] border-[#c7d2ee]">
              HD
            </span>
            <span className="ml-[6px] px-[3px] text-[#c7d2ee] text-xs font-medium border-[1px] border-[#c7d2ee]">
              PG
            </span>
            <span className="ml-[6px] text-base text-white">109 min</span>
          </div>
          <div className="px-[15px] pb-[15px] border-b-[1px] border-[#21376c]">
            <p className="text-[15px] text-white">
              Follows Ember and Wade, in a city where fire-, water-, land- and
              air-residents live together.
            </p>
          </div>
          <div className="m-[15px] text-[#c7d2ee]">
            {arrDetailInfoFilm.map((item, index) => (
              <div
                className={`flex text-[14px] font-normal ${
                  index >= 1 ? "mt-[5px]" : ""
                }`}
              >
                <div className="min-w-[90px]">{item.name}:</div>
                <span className="flex-1">
                  {/* {item.name !== "Release" ? (
                    item.text.map((item) => (
                      <Link href="#" className="text-[#f1ffff]">
                        {item}
                      </Link>
                    ))
                  ) : (
                    <p className="">{item.text}</p>
                  )} */}

                  {/* {Array.isArray(item.text) ? (
                    item.text.map((subText, i) => (
                      <Link key={i} href="#" className="text-[#f1ffff]">
                        {subText}
                      </Link>
                    ))
                  ) : (
                    <p className="">{item.text}</p>
                  )} */}

                  {Array.isArray(item.text) ? (
                    item.text.map((subText, i) => (
                      <React.Fragment key={i}>
                        <Link
                          href="#"
                          className="text-[#f1ffff] hover:text-[#e94a68] transition-all duration-150 ease-in-out"
                        >
                          {subText}
                        </Link>
                        {i !== item.text.length - 1 && ", "}
                      </React.Fragment>
                    ))
                  ) : (
                    <p className="">{item.text}</p>
                  )}
                </span>
              </div>
            ))}
          </div>
          <div className="bg-[#e94a68] py-[9px] px-[15px] mx-[15px] rounded-[4px] text-center">
            <span className="flex justify-center items-center">
              <span className="inline-block w-[27px] h-[27px] text-[rgba(0,0,0,.4)] cursor-pointer">
                <i class="fa-regular fa-star text-xl"></i>
                <i class="fa-solid fa-star hidden"></i>
              </span>
              <span className="inline-block w-[27px] h-[27px] text-[rgba(0,0,0,.4)] cursor-pointer">
                <i class="fa-regular fa-star text-xl"></i>
                <i class="fa-solid fa-star hidden"></i>
              </span>
              <span className="inline-block w-[27px] h-[27px] text-[rgba(0,0,0,.4)] cursor-pointer">
                <i class="fa-regular fa-star text-xl"></i>
                <i class="fa-solid fa-star hidden"></i>
              </span>
              <span className="inline-block w-[27px] h-[27px] text-[rgba(0,0,0,.4)] cursor-pointer">
                <i class="fa-regular fa-star text-xl"></i>
                <i class="fa-solid fa-star hidden"></i>
              </span>
              <span className="inline-block w-[27px] h-[27px] text-[rgba(0,0,0,.4)] cursor-pointer">
                <i class="fa-regular fa-star text-xl"></i>
                <i class="fa-solid fa-star hidden"></i>
              </span>
            </span>
            <div>
              <span>
                <b>7.82</b> of <b>10</b> (<span>2754</span> 2,754 reviews)
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SidebarContentFilm;
{
  /* <div className="mb-4">
          <h3 className="text-[#da966e] text-2xl font-normal border-l-4 pl-2.5">
            Top Trending
          </h3>
        </div>

        <div className="list_top_trend_film h-[800px] overflow-auto">
          {arrTopTrendingFilm.map((item) => (
            <div
              key={item.id}
              className="overflow-hidden grid grid-cols-4 mb-2.5 h-[100px] gap-1"
            >
              <div className="col-span-1 h-full">
                <Link href={`/detail/${item.title.replace(/\s+/g, "-")}`}>
                  <img
                    src={item.image}
                    alt={item.image}
                    title={item.title}
                    className="w-full h-[100px] object-cover border-[1px]"
                  />
                </Link>
              </div>

              <div className="p-2 col-span-3 text-white bg-black opacity-60 hover:opacity-100 flex flex-col justify-center">
                <h3 className="font-bold">
                  <Link
                    href={`/detail/${item.title.replace(/\s+/g, "-")}`}
                    title={item.title}
                  >
                    {item.title}
                  </Link>
                </h3>
                <p>{item.updated}</p>
                <p>{item.views} Lượt xem</p>
              </div>
            </div>
          ))}
        </div> */
}

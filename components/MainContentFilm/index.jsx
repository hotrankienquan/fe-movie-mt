import Link from "next/link";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { arrSliderCategory, settings } from "./constMainContentFilm";
import SidebarContentFilm from "../SidebarContentFilm";

const MainContentFilm = () => {
  return (
    <div className="grid grid-cols-7 -mx-2.5 gap-6">
      {/* LEFT */}
      <div className="col-span-5">
        {arrSliderCategory.map((item, i) => (
          <div key={item.id} className="mb-10">
            <div className="px-2.5 mb-4">
              <h3 className="text-[#da966e] text-2xl font-normal border-l-4 pl-2.5">
                {item.title}
              </h3>
            </div>
            <Slider {...settings}>
              {item.image.map((item, i) => (
                <div key={i} className="h-full">
                  <div className="mx-2 relative h-full overflow-hidden group">
                    <Link
                      href="#"
                      className="flex h-full items-center justify-center overflow-hidden z-50"
                    >
                      <img
                        src={item}
                        alt="user profile avatar"
                        className="block h-[196px] w-full object-cover group-hover:scale-110 transition-all duration-300 group-hover:opacity-50 "
                      />
                      <i className="fa-solid fa-circle-play text-4xl absolute text-white scale-150 opacity-0 group-hover:scale-100 group-hover:opacity-80 duration-500 ease-in-out"></i>
                    </Link>

                    <div className="text-center p-2 bg-black bg-opacity-70">
                      <span className=" block text-white">
                        <h3 className="whitespace-nowrap text-ellipsis overflow-hidden">
                          <Link href="/cc" title="film">
                            OpenHeimmerccccccccccccccccccccccccccccccccc
                          </Link>
                        </h3>
                        <p className="text-sm opacity-50 whitespace-nowrap text-ellipsis overflow-hidden">
                          OpenHeimmerccccccccccccccccccccccccccccccccc
                        </p>
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        ))}
      </div>

      {/* RIGHT */}
      <div className="col-span-2 px-2.5">
        <SidebarContentFilm />
      </div>
    </div>
  );
};

export default MainContentFilm;

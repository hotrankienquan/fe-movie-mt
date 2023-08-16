import Link from "next/link";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { arrSliderRelatedFilm, settings } from "./constSliderRelatedFilm";
import Image from "next/legacy/image";

const SliderRelatedFilm = () => {
  return (
    <div className="mt-10 mb-8 -mx-2.5">
      <div className="px-2.5 mb-4">
        <h2 className="text-[#da966e] text-3xl font-normal border-l-4 pl-2.5">
          Phim Liên Quan
        </h2>
      </div>
      <Slider {...settings}>
        {arrSliderRelatedFilm.map((item, i) => (
          <div key={item.id} className="h-full overflow-hidden">
            <div className="relative h-full mx-2 overflow-hidden group">
              <Link
                href={`/detail/${item.title.replace(/\s+/g, "-")}`}
                className="absolute h-full w-full group overflow-hidden"
              >
                <Image
                  className="h-full block w-full object-cover group-hover:opacity-70 transition-all duration-500"
                  src={item.image || "/vercel.svg"}
                  alt="error"
                  layout="fill"
                  // width={213}
                  // height={340}
                  // loading="lazy"
                  priority
                />

                {/* <img
                  src={item.image || "/vercel.svg"}
                  alt="user profile avatar"
                  className="h-full block w-full object-cover group-hover:opacity-70 transition-all duration-500"
                /> */}

                <span className="opacity-0 group-hover:opacity-100 absolute top-[45%] inset-x-0 text-white text-center transition-all duration-500">
                  <i className="fa-regular fa-circle-play text-4xl"></i>
                </span>

                <span className="p-2 absolute bottom-0 inset-x-0 text-white bg-black bg-opacity-70">
                  <h3 className="whitespace-nowrap text-ellipsis overflow-hidden">
                    {item.title}
                  </h3>
                  <p className="text-sm opacity-50 whitespace-nowrap text-ellipsis overflow-hidden">
                    {item.title}
                  </p>
                </span>
              </Link>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default SliderRelatedFilm;

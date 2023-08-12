import Link from "next/link";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { arrSliderCategory, arrTopTrendingFilm } from "./constMainContentFilm";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} z-10`}
      style={{
        ...style,
        display: "absolute",
        top: "50%",
        right: 0,
      }}
      onClick={onClick}
    ></div>
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} z-10`}
      style={{
        ...style,
        display: "absolute",
        top: "50%",
        left: 0,
      }}
      onClick={onClick}
    />
  );
}

const MainContentFilm = () => {
  var settings = {
    className: "list_slider_film",
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: false,
    speed: 1000,
    autoplaySpeed: 2000,
    swipeToSlide: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="grid grid-cols-6 -mx-2.5 gap-5">
      {/* LEFT */}
      <div className="col-span-4">
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
                  <div className="mx-2.5 relative h-full overflow-hidden group">
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
                          <p className="text-sm opacity-50 whitespace-nowrap text-ellipsis overflow-hidden">
                            OpenHeimmerccccccccccccccccccccccccccccccccc
                          </p>
                        </h3>
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
        <div className="mb-20">
          <div className="mb-4">
            <h3 className="text-[#da966e] text-2xl font-normal border-l-4 pl-2.5">
              Top Trending
            </h3>
          </div>

          <div className="list_top_trend_film h-[600px] overflow-auto">
            {arrTopTrendingFilm.map((item) => (
              <div
                key={item.id}
                className="overflow-hidden grid grid-cols-4 mb-2.5 h-[100px] gap-1"
              >
                <div className="col-span-1 h-full">
                  <Link href="#">
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
                    <Link href="#" title={item.title}>
                      {item.title}
                    </Link>
                  </h3>
                  <p>{item.updated}</p>
                  <p>{item.views} Lượt xem</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-20">
          <div className="mb-4">
            <h3 className="text-[#da966e] text-2xl font-normal border-l-4 pl-2.5">
              BXH
            </h3>
          </div>

          <div className="list_top_trend_film h-[600px] overflow-auto">
            {arrTopTrendingFilm.map((item) => (
              <div
                key={item.id}
                className="overflow-hidden grid grid-cols-4 mb-2.5 h-[100px] gap-1"
              >
                <div className="col-span-1 h-full">
                  <Link href="#">
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
                    <Link href="#" title={item.title}>
                      {item.title}
                    </Link>
                  </h3>
                  <p>{item.updated}</p>
                  <p>{item.views} Lượt xem</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainContentFilm;

import Link from "next/link";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {
  arrSliderCategory,
  arrSliderWatchFilmToday,
  settings,
} from "./constant";
import SidebarContentFilm from "../SidebarContentFilm";
import MovieMainContent from "./components/Movie";
import SliderRelatedFilm from "../SliderRelatedFilm";
import { useEffect, useRef, useState } from "react";
import { getAllMovies } from "../../store/apiRequest";

const MainContentFilm = ({ movies }) => {
  const [arrMovie, setArrMovie] = useState();

  useEffect(() => {
    const renderMainContentMovies = async () => {
      try {
        const res = await getAllMovies();
        console.log("check res get all movies", res);
        // console.log(">>> Main Content Film <<<", res.data.data.movie);
        setArrMovie(res.data.data.movie);
      } catch (err) {
        console.log(err);
      }
    };
    // renderMainContentMovies();
  }, []);

  return (
    <>
      <div className="grid grid-cols-7 -mx-2.5 gap-6 h-[700px] overflow-hidden">
        {/* LEFT */}
        <div className="col-span-5 h-full flex flex-col justify-between">
          {arrSliderCategory.map((item, i) => (
            <div
              key={item.id}
              className={`${i === arrSliderCategory.length - 1 ? "" : "mb-10"}`}
            >
              <div className="px-2.5 mb-4 flex justify-between items-center">
                <h3 className="text-[#da966e] text-2xl font-normal border-l-4 pl-2.5">
                  {item.title.toUpperCase()}
                </h3>

                <Link
                  href={`/category/${item.title.replace(/\s+/g, "-")}`}
                  className="py-[3px] px-[8px] rounded-[3px] bg-[#408BEA] font-light text-[10px] text-white uppercase select-none"
                >
                  Xem thêm
                </Link>
              </div>
              {/* <Slider {...settings}>
                {item.image.map((item, i) => (
                  <div key={i} className="h-full">
                    <div className="mx-2 relative h-full overflow-hidden group flex flex-col justify-between">
                      <Link
                        href="#"
                        className="flex h-full items-center justify-center z-50 overflow-hidden"
                        onClick={(e) => {
                          e.preventDefault();
                          console.log(e.target);
                        }}
                      >
                        <img
                          src={item}
                          alt="user profile avatar"
                          className="block h-[200px] w-full object-cover group-hover:scale-110 transition-all duration-300 group-hover:opacity-50 "
                        />
                        <i className="fa-solid fa-circle-play text-4xl absolute text-white scale-150 opacity-0 group-hover:scale-100 group-hover:opacity-80 duration-500 ease-in-out"></i>
                        <span className="absolute left-[15%] opacity-0 group-hover:opacity-100 duration-500 ease-in-out z-50">
                          <button
                            className="text-white z-50"
                            // onClick={handleLove}
                            onClick={(e) => {
                              e.preventDefault();
                              e.stopPropagation();
                              console.log(e.target);
                            }}
                          >
                            {false ? (
                              <i className="fa-solid fa-heart text-xl"></i>
                            ) : (
                              <i className="fa-regular fa-heart text-xl"></i>
                            )}
                          </button>
                        </span>
                        <span className="absolute right-[15%] opacity-0 group-hover:opacity-100 duration-500 ease-in-out z-50">
                          <button
                            className="text-white z-50"
                            // onClick={handleBookmark}
                            onClick={(e) => {
                              e.preventDefault();
                              e.stopPropagation();
                              console.log(e.target);
                            }}
                          >
                            {false ? (
                              <i className="fa-solid fa-bookmark text-xl"></i>
                            ) : (
                              <i className="fa-regular fa-bookmark text-xl"></i>
                            )}
                          </button>
                        </span>
                      </Link>

                      <div className="absolute top-[40%] inset-x-0 bg-black">
                        <span className="absolute left-[15%] duration-500 ease-in-out z-50">
                          <button
                            className="text-white z-50"
                            // onClick={handleLove}
                          >
                            {false ? (
                              <i className="fa-solid fa-heart text-2xl"></i>
                            ) : (
                              <i className="fa-regular fa-heart text-2xl"></i>
                            )}
                          </button>
                        </span>

                        <span className="absolute right-[15%] duration-500 ease-in-out z-50">
                          <button
                            className="text-white z-50"
                            // onClick={handleBookmark}
                          >
                            {false ? (
                              <i className="fa-solid fa-bookmark text-2xl"></i>
                            ) : (
                              <i className="fa-regular fa-bookmark text-2xl"></i>
                            )}
                          </button>
                        </span>
                      </div>

                      <div className="p-2 bg-black bg-opacity-70 text-white">
                        <h3 className="whitespace-nowrap text-ellipsis overflow-hidden">
                          <Link href="/cc" title="film">
                            OpenHeimmerccccccccccccccccccccccccccccccccc
                          </Link>
                        </h3>
                        <p className="text-sm opacity-50 whitespace-nowrap text-ellipsis overflow-hidden">
                          OpenHeimmerccccccccccccccccccccccccccccccccc
                        </p>
                        <p className="text-[10px] opacity-50 whitespace-nowrap text-ellipsis overflow-hidden">
                          Tài liệu • Môi trường • 10'
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </Slider> */}

              <Slider {...settings}>
                {item.image.map((item, index) => {
                  return <MovieMainContent key={item} item={item} />;
                })}
              </Slider>
            </div>
          ))}
        </div>

        {/* RIGHT */}
        <div className="col-span-2 px-2.5 h-full overflow-hidden">
          <SidebarContentFilm movies={movies} />
        </div>
      </div>

      {/* {arrSliderWatchFilmToday.map((item, i) => (
        <div key={item.id} className="mt-14">
          <div className="px-2.5 mb-4">
            <h3 className="text-[#da966e] text-2xl font-normal border-l-4 pl-2.5">
              {item.title.toUpperCase()}
            </h3>
          </div>
          <Slider {...settings}>
            {item.image.map((item, i) => (
              <div key={i} className="h-full">
                <div className="mx-2 relative h-full overflow-hidden group flex flex-col justify-between">
                  <Link
                    href="#"
                    className="flex h-full items-center justify-center z-50 overflow-hidden"
                  >
                    <img
                      src={item}
                      alt="user profile avatar"
                      className="block h-[280px] w-full object-cover group-hover:scale-110 transition-all duration-300 group-hover:opacity-50 "
                    />
                    <i className="fa-solid fa-circle-play text-4xl absolute text-white scale-150 opacity-0 group-hover:scale-100 group-hover:opacity-80 duration-500 ease-in-out"></i>
                    <span className="absolute left-[25%] opacity-0 group-hover:opacity-100 duration-500 ease-in-out z-50">
                      <button
                        className="text-white z-50"
                        // onClick={handleLove}
                        onClick={(e) => {
                          e.preventDefault();
                          e.stopPropagation();
                          console.log(e.target);
                        }}
                      >
                        {false ? (
                          <i className="fa-solid fa-heart text-xl"></i>
                        ) : (
                          <i className="fa-regular fa-heart text-xl"></i>
                        )}
                      </button>
                    </span>
                    <span className="absolute right-[25%] opacity-0 group-hover:opacity-100 duration-500 ease-in-out z-50">
                      <button
                        className="text-white z-50"
                        // onClick={handleBookmark}
                        onClick={(e) => {
                          e.preventDefault();
                          e.stopPropagation();
                          console.log(e.target);
                        }}
                      >
                        {false ? (
                          <i className="fa-solid fa-bookmark text-xl"></i>
                        ) : (
                          <i className="fa-regular fa-bookmark text-xl"></i>
                        )}
                      </button>
                    </span>
                  </Link>

                  <div className="p-2 bg-black bg-opacity-70 text-white">
                    <h3 className="whitespace-nowrap text-ellipsis overflow-hidden">
                      <Link href="/cc" title="film">
                        OpenHeimmerccccccccccccccccccccccccccccccccc
                      </Link>
                    </h3>
                    <p className="text-sm opacity-50 whitespace-nowrap text-ellipsis overflow-hidden">
                      OpenHeimmerccccccccccccccccccccccccccccccccc
                    </p>
                    <p className="text-[10px] opacity-50 whitespace-nowrap text-ellipsis overflow-hidden">
                      Tài liệu • Môi trường • 10'
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      ))} */}

      <SliderRelatedFilm movies={movies} />
    </>
  );
};

export default MainContentFilm;

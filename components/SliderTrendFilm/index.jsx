import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { arrSliderLatestFilm, settings } from "./constants";
import Movie from "./components/Movie";
import { getAllMovies, getAllUsers } from "../../store/apiRequest";
import { useSelector } from "react-redux";
import { createAxios } from "../../utils/createInstance";
// sửa lại redux chưa, nhìn truyền mệt z, sửa r. sửa ròi z đâu phải truyền từ dashboard qua chi, cái movie này khác mà
const SliderTrendingFilm = ({ movies }) => {
  const user = useSelector((state) => state.auth.login.currentUser);
  const accessToken = user?.accessToken;
  let axiosJWT = createAxios(user, null, null);
  const [arrMovie, setArrMovie] = useState([]);
  // console.log(">>> Trending Film <<<", arrMovie);

  const film = useSelector((state) => state.film);
  const { favoriteFilm, watchLaterFilm } = film;

  useEffect(() => {
    // setArrMovie(movies.trending);
  }, [movies]);
  const userId = user?._id;
  // console.log(">>>chek film", film);
  // console.log("favoriteFilm", favoriteFilm);

  return (
    <div className="mt-20 mb-8 -mx-2.5">
      {/* <div>
        <img
          className="block w-full"
          src="https://ax.mpapis.xyz/motchill/uploads/342f50804f3a0bc5d9ff4b9e3b9c9964.gif"
          alt=""
        />
      </div> */}
      <div className="px-2.5 mb-4">
        <h2 className="text-[#da966e] text-3xl font-normal border-l-4 pl-2.5">
          Top Trending
        </h2>
      </div>
      {/* // cai nay moi lan map qua la no re render lai Movie comp ne, eo', t slice co 1 phim thoi */}
      <Slider {...settings}>
        {arrMovie.map((item, index) => {
          return <Movie key={item._id} item={item} />;
        })}
      </Slider>
    </div>
  );
};

export default SliderTrendingFilm;

import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { arrSliderLatestFilm, settings } from "./constants";
import Movie from "./components/Movie";
import { getAllMovies, getAllUsers } from "../../store/apiRequest";
import { useSelector } from "react-redux";
import { createAxios } from "../../utils/createInstance";

const SliderLastetFilm = () => {
  const user = useSelector((state) => state.auth.login.currentUser);
  const accessToken = user?.accessToken;
  let axiosJWT = createAxios(user, null, null);
  const [arrMovie, setArrMovie] = useState();
  // console.log(">>> Latest Film <<<", arrMovie);
  // console.log(slider);
  // function getAll(data) {
  //   // console.log("data get all item",data)
  //   getAllMovies();
  // }

  useEffect(() => {
    const renderTopTrendingMovies = async () => {
      try {
        const res = await getAllMovies();
        // console.log(">>> Latest Film <<<", res.data.data.movie);
        setArrMovie(res.data.data.movie);
      } catch (err) {
        console.log(err);
      }
    };
    renderTopTrendingMovies();
  }, []);

  // useEffect(() => {
  //   const renderAllUsers = async () => {
  //     try {
  //       const res = await getAllUsers(accessToken, null, axiosJWT);
  //       console.log(">>> All Users <<<", res);
  //       // setArrMovie(res);
  //     } catch (err) {
  //       console.log(err);
  //     }
  //   };
  //   renderAllUsers();
  // }, []);

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

      <Slider {...settings}>
        {arrSliderLatestFilm.map((item, index) => {
          return <Movie key={item.id} item={item} />;
        })}
      </Slider>
    </div>
  );
};

export default SliderLastetFilm;

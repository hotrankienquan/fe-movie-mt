import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { createAxios } from "../../../../utils/createInstance";
import { getWatchLaterMovies } from "../../../../store/apiRequest";

const arrWatchLaterFilm = [
  {
    id: 1,
    poster: "https://img.idesign.vn/1920x-/2019/01/25/ides_oscars_05.jpg",
  },
  {
    id: 2,
    poster: "https://img.idesign.vn/1920x-/2019/01/25/ides_oscars_05.jpg",
  },
  {
    id: 3,
    poster: "https://img.idesign.vn/1920x-/2019/01/25/ides_oscars_05.jpg",
  },
  {
    id: 4,
    poster: "https://img.idesign.vn/1920x-/2019/01/25/ides_oscars_05.jpg",
  },
  {
    id: 5,
    poster: "https://img.idesign.vn/1920x-/2019/01/25/ides_oscars_05.jpg",
  },
  {
    id: 6,
    poster: "https://img.idesign.vn/1920x-/2019/01/25/ides_oscars_05.jpg",
  },
  {
    id: 7,
    poster: "https://img.idesign.vn/1920x-/2019/01/25/ides_oscars_05.jpg",
  },
  {
    id: 8,
    poster: "https://img.idesign.vn/1920x-/2019/01/25/ides_oscars_05.jpg",
  },
  {
    id: 9,
    poster: "https://img.idesign.vn/1920x-/2019/01/25/ides_oscars_05.jpg",
  },
];

const WatchLaterMovie = () => {
  const user = useSelector((state) => state.auth.login.currentUser);
  const accessToken = user?.accessToken;
  let axiosJWT = createAxios(user, null, null);
  const [arrMovie, setArrMovie] = useState();

  useEffect(() => {
    const renderWatchLaterMovies = async () => {
      try {
        const res = await getWatchLaterMovies(accessToken, null, axiosJWT);
        console.log(">>> Watch Later Film <<<", res.data.markBookMovie);
        // setArrMovie(res.data.markBookMovie);
      } catch (err) {
        console.log(err);
      }
    };
    // renderWatchLaterMovies();
  }, []);

  return (
    <div className="srcoll_film_manage_user grid grid-cols-5 gap-4 max-h-[1000px] min-h-[300px] overflow-y-auto">
      {arrWatchLaterFilm.map((film, index) => (
        <div key={film.id} className="">
          <Link href="#" className="relative block overflow-hidden group">
            <img
              className="block w-full object-cover group-hover:opacity-50 transition-all duration-500"
              src={film.poster}
              alt="pic"
            />
            <span className="absolute top-[50%] inset-x-0 opacity-0 group-hover:opacity-100 text-white text-center transition-all duration-500">
              <i className="fa-regular fa-circle-play text-4xl"></i>
            </span>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default WatchLaterMovie;

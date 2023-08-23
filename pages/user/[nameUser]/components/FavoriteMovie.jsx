import Link from "next/link";
import React, { useEffect, useState } from "react";
import { createAxios } from "../../../../utils/createInstance";
import { getFavoriteMovies } from "../../../../store/apiRequest";
import { useSelector } from "react-redux";

const arrFavoriteFilm = [
  {
    id: 1,
    poster: "https://img.idesign.vn/1920x-/2019/01/25/ides_oscars_01.jpg",
  },
  {
    id: 2,
    poster: "https://img.idesign.vn/1920x-/2019/01/25/ides_oscars_01.jpg",
  },
  {
    id: 3,
    poster: "https://img.idesign.vn/1920x-/2019/01/25/ides_oscars_01.jpg",
  },
  {
    id: 4,
    poster: "https://img.idesign.vn/1920x-/2019/01/25/ides_oscars_01.jpg",
  },
  {
    id: 5,
    poster: "https://img.idesign.vn/1920x-/2019/01/25/ides_oscars_01.jpg",
  },
  {
    id: 6,
    poster: "https://img.idesign.vn/1920x-/2019/01/25/ides_oscars_01.jpg",
  },
  {
    id: 7,
    poster: "https://img.idesign.vn/1920x-/2019/01/25/ides_oscars_01.jpg",
  },
  {
    id: 8,
    poster: "https://img.idesign.vn/1920x-/2019/01/25/ides_oscars_01.jpg",
  },
  {
    id: 9,
    poster: "https://img.idesign.vn/1920x-/2019/01/25/ides_oscars_01.jpg",
  },
];

const FavoriteMovie = () => {
  const user = useSelector((state) => state.auth.login.currentUser);
  const accessToken = user?.accessToken;
  let axiosJWT = createAxios(user, null, null);
  const [arrMovie, setArrMovie] = useState();

  useEffect(() => {
    const renderFavoriteMovies = async () => {
      try {
        const res = await getFavoriteMovies(accessToken, null, axiosJWT);
        // console.log(">>> Favorite Film <<<", res.data.loveMovie);
        // setArrMovie(res.data.loveMovie);
      } catch (err) {
        console.log(err);
      }
    };
    // renderFavoriteMovies();
  }, []);

  return (
    <div className="srcoll_film_manage_user grid grid-cols-5 gap-4 max-h-[1000px] min-h-[300px] overflow-y-auto">
      {arrFavoriteFilm.map((film, index) => (
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

export default FavoriteMovie;

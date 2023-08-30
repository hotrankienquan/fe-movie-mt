import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createAxios } from "../../../../utils/createInstance";
import { getWatchLaterMovies } from "../../../../store/apiRequest";

// const arrWatchLaterFilm = [
//   {
//     id: 1,
//     poster: "https://img.idesign.vn/1920x-/2019/01/25/ides_oscars_05.jpg",
//   },
//   {
//     id: 2,
//     poster: "https://img.idesign.vn/1920x-/2019/01/25/ides_oscars_05.jpg",
//   },
//   {
//     id: 3,
//     poster: "https://img.idesign.vn/1920x-/2019/01/25/ides_oscars_05.jpg",
//   },
//   {
//     id: 4,
//     poster: "https://img.idesign.vn/1920x-/2019/01/25/ides_oscars_05.jpg",
//   },
//   {
//     id: 5,
//     poster: "https://img.idesign.vn/1920x-/2019/01/25/ides_oscars_05.jpg",
//   },
//   {
//     id: 6,
//     poster: "https://img.idesign.vn/1920x-/2019/01/25/ides_oscars_05.jpg",
//   },
//   {
//     id: 7,
//     poster: "https://img.idesign.vn/1920x-/2019/01/25/ides_oscars_05.jpg",
//   },
//   {
//     id: 8,
//     poster: "https://img.idesign.vn/1920x-/2019/01/25/ides_oscars_05.jpg",
//   },
//   {
//     id: 9,
//     poster: "https://img.idesign.vn/1920x-/2019/01/25/ides_oscars_05.jpg",
//   },
// ];

const WatchLaterMovie = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.login.currentUser);
  const accessToken = user?.accessToken;
  const userId = user?._id;
  let axiosJWT = createAxios(user, null, null);

  const [arrWatchLaterMovie, setArrWatchLaterMovie] = useState([]);

  const [activeFavorite, setActiveFavorite] = useState(false);
  const [activeBookmark, setActiveBookmark] = useState(false);

  const handleLove = async (idMovie) => {
    try {
      setActiveFavorite(!activeFavorite);

      const res = await toggleFavoriteMovie(userId, idMovie, !activeFavorite);
      console.log(res);
    } catch (err) {
      console.log(err);
      throw new Error(err);
    }
  };

  const handleBookmark = async (idMovie) => {
    try {
      setActiveBookmark(!activeBookmark);

      const res = await toggleBookmarkMovie(userId, idMovie, !activeBookmark);
      console.log(res);
    } catch (err) {
      console.log(err);
      throw new Error(err);
    }
  };

  useEffect(() => {
    const renderWatchLaterMovies = async () => {
      try {
        const res = await getWatchLaterMovies(accessToken, dispatch, axiosJWT);
        console.log(">>> Watch Later Film <<<", res.data.markBookMovie);
        setArrWatchLaterMovie(res.data.markBookMovie);
      } catch (err) {
        console.log(err);
      }
    };
    renderWatchLaterMovies();
  }, []);

  return (
    <div className="srcoll_film_manage_user grid grid-cols-5 gap-4 max-h-[1000px] min-h-[300px] overflow-y-auto">
      {arrWatchLaterMovie.map((movie, index) => (
        <div key={movie._id} className="">
          <Link
            href={`/playFilm/${movie.slug}`}
            className="relative block h-[300px] overflow-hidden group"
          >
            <img
              className="block w-full h-full object-cover group-hover:opacity-50 transition-all duration-500"
              src={movie.photo?.[0]}
              alt="pic"
            />
            <span className="absolute top-[50%] inset-x-0 opacity-0 group-hover:opacity-100 text-white text-center transition-all duration-500">
              <i className="fa-regular fa-circle-play text-4xl"></i>
            </span>

            <span className="absolute top-[50%] left-[20%] opacity-0 group-hover:opacity-100 duration-500 ease-in-out z-50">
              <button
                className="text-white z-50"
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  handleLove(movie._id);
                }}
              >
                {activeFavorite ? (
                  <i className="fa-solid fa-heart text-2xl"></i>
                ) : (
                  <i className="fa-regular fa-heart text-2xl"></i>
                )}
              </button>
            </span>

            <span className="absolute top-[50%] right-[20%] opacity-0 group-hover:opacity-100 duration-500 ease-in-out z-50">
              <button
                className="text-white z-50"
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  handleBookmark(movie._id);
                }}
              >
                {activeBookmark ? (
                  <i className="fa-solid fa-bookmark text-2xl"></i>
                ) : (
                  <i className="fa-regular fa-bookmark text-2xl"></i>
                )}
              </button>
            </span>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default WatchLaterMovie;

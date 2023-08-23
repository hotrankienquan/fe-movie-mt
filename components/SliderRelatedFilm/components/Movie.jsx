import React from "react";
import Image from "next/legacy/image";
import Link from "next/link";
import { useState } from "react";
import { useSelector } from "react-redux";
import {
  toggleBookmarkMovie,
  toggleFavoriteMovie,
} from "../../../store/apiRequest";

const MovieRalated = ({ item }) => {
  const user = useSelector((state) => state.auth.login.currentUser);
  const userId = user?._id;

  const [activeFavorite, setActiveFavorite] = useState(false);
  const [activeBookmark, setActiveBookmark] = useState(false);

  const handleLove = async (e) => {
    e.preventDefault();
    e.stopPropagation();
    try {
      setActiveFavorite(!activeFavorite);

      const res = await toggleFavoriteMovie(
        userId,
        "64e30de0e2032779af0a65e7",
        !activeFavorite
      );
      console.log(res);
    } catch (err) {
      console.log(err);
      throw new Error(err);
    }
  };

  const handleBookmark = async (e) => {
    e.preventDefault();
    e.stopPropagation();
    try {
      setActiveBookmark(!activeBookmark);

      const res = await toggleBookmarkMovie(
        userId,
        "64e30de0e2032779af0a65e7",
        !activeBookmark
      );
      console.log(res);
    } catch (err) {
      console.log(err);
      throw new Error(err);
    }
  };

  return (
    <div key={item.id} className="h-full overflow-hidden">
      <div className="relative h-full mx-2 overflow-hidden group">
        <Link
          href={`/playFilm/${item.title.replace(/\s+/g, "-")}`}
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

          <span className="opacity-0 group-hover:opacity-100 absolute top-[40%] inset-x-0 text-white text-center transition-all duration-500">
            <i className="fa-regular fa-circle-play text-4xl"></i>
          </span>

          <span className="absolute top-[40%] left-[20%] opacity-0 group-hover:opacity-100 duration-500 ease-in-out z-50">
            <button className="text-white z-50" onClick={handleLove}>
              {activeFavorite ? (
                <i className="fa-solid fa-heart text-2xl"></i>
              ) : (
                <i className="fa-regular fa-heart text-2xl"></i>
              )}
            </button>
          </span>

          <span className="absolute top-[40%] right-[20%] opacity-0 group-hover:opacity-100 duration-500 ease-in-out z-50">
            <button className="text-white z-50" onClick={handleBookmark}>
              {activeBookmark ? (
                <i className="fa-solid fa-bookmark text-2xl"></i>
              ) : (
                <i className="fa-regular fa-bookmark text-2xl"></i>
              )}
            </button>
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
  );
};

export default MovieRalated;

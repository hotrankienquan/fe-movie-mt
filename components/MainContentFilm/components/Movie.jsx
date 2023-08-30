import React from "react";
import Image from "next/legacy/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import {
  toggleBookmarkMovie,
  toggleFavoriteMovie,
} from "../../../store/apiRequest";

const MovieMainContent = ({ item }) => {
  let {
    _id,
    title,
    titleWithoutAccent,
    slug,
    desc,
    author,
    actors,
    photo,
    video,
    category,
    rating,
    quality,
    yearPublish,
    timeVideo,
    country,
    views,
    updated,
    image,
  } = item;
  const user = useSelector((state) => state.auth.login.currentUser);
  const userId = user?._id;
  const [activeFavorite, setActiveLove] = useState(false);
  const [activeBookmark, setActiveBookmark] = useState(false);

  // function handleLove(e) {
  //   e.preventDefault();
  //   e.stopPropagation();
  //   setActive(!activeFavorite);
  //   console.log(e.target);
  // }
  // function handleBookmark(e) {
  //   e.preventDefault();
  //   e.stopPropagation();
  //   setActiveBookmark(!activeBookmark);
  //   console.log(e.target);
  // }

  const handleLove = async (e) => {
    e.preventDefault();
    e.stopPropagation();
    try {
      setActiveLove(!activeFavorite);

      const res = await toggleFavoriteMovie(userId, _id, !activeFavorite);
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

      const res = await toggleBookmarkMovie(userId, _id, !activeBookmark);
      console.log(res);
    } catch (err) {
      console.log(err);
      throw new Error(err);
    }
  };

  return (
    <div className="h-full">
      <div className="mx-2 relative h-full overflow-hidden group flex flex-col justify-between">
        <Link
          href={`/playFilm/${slug}`}
          className="flex h-full items-center justify-center z-50 overflow-hidden"
          onClick={(e) => {
            e.stopPropagation();
          }}
        >
          <img
            src={photo?.[0] || ""}
            alt="user profile avatar"
            className="block h-[200px] w-full object-cover group-hover:scale-110 transition-all duration-300 group-hover:opacity-50 "
          />
          <i className="fa-solid fa-circle-play text-4xl absolute text-white scale-150 opacity-0 group-hover:scale-100 group-hover:opacity-80 duration-500 ease-in-out"></i>
          <span className="absolute left-[15%] opacity-0 group-hover:opacity-100 duration-500 ease-in-out z-50">
            <button className="text-white z-50" onClick={handleLove}>
              {activeFavorite ? (
                <i className="fa-solid fa-heart text-xl"></i>
              ) : (
                <i className="fa-regular fa-heart text-xl"></i>
              )}
            </button>
          </span>
          <span className="absolute right-[15%] opacity-0 group-hover:opacity-100 duration-500 ease-in-out z-50">
            <button className="text-white z-50" onClick={handleBookmark}>
              {activeBookmark ? (
                <i className="fa-solid fa-bookmark text-xl"></i>
              ) : (
                <i className="fa-regular fa-bookmark text-xl"></i>
              )}
            </button>
          </span>
        </Link>

        <div className="p-2 bg-black bg-opacity-70 text-white">
          <h3 className="whitespace-nowrap text-ellipsis overflow-hidden">
            <Link href={`/playFilm/${slug}`} title={title}>
              {title}
            </Link>
          </h3>
          <p className="text-sm opacity-50 whitespace-nowrap text-ellipsis overflow-hidden">
            {titleWithoutAccent}
          </p>
          <p className="text-[10px] opacity-50 whitespace-nowrap text-ellipsis overflow-hidden">
            Tài liệu • Môi trường • {timeVideo}
            {/* &apos; */}
          </p>
        </div>
      </div>
    </div>
  );
};

export default MovieMainContent;

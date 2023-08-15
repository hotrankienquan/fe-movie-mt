import React from "react";
import LayoutRoot from "../../../components/Layout";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import SidebarContentFilm from "../../../components/SidebarContentFilm";
import Image from "next/legacy/image";
import CommentFilm from "../../../components/CommentFilm";
import SliderLastetFilm from "../../../components/SliderLatestFilm";
import SliderRelatedFilm from "../../../components/SliderRelatedFilm";
import { useState } from "react";
import ReactJWPlayer from "react-jw-player";
const PlayFilmPage = () => {
  const playlist = [{
    file: 'https://firebasestorage.googleapis.com/v0/b/movie-the-stone.appspot.com/o/files%2FN%E1%BA%BFu%20%C4%90%C3%A1nh%20M%E1%BA%A5t%20Em%20-%20Reddy%20-%20Official%20Lyrics%20Video%20(1).mp4%20%20%20%20%20%20%202023-8-11%2017%3A54%3A34?alt=media&token=e595d5ee-2a75-4160-904c-f25dda4e4583',
    image: 'https://link-to-my-poster.jpg',
    tracks: [{
      file: 'https://link-to-subtitles.vtt',
      label: 'English',
      kind: 'captions',
      'default': true
    }],
  },
  {
    file: 'https://firebasestorage.googleapis.com/v0/b/movie-the-stone.appspot.com/o/files%2FN%E1%BA%BFu%20%C4%90%C3%A1nh%20M%E1%BA%A5t%20Em%20-%20Reddy%20-%20Official%20Lyrics%20Video%20(1).mp4%20%20%20%20%20%20%202023-8-11%2017%3A54%3A34?alt=media&token=e595d5ee-2a75-4160-904c-f25dda4e4583',
    image: 'https://link-to-my-other-poster.jpg',
  }];
  return (
    <LayoutRoot>
      <div className="mt-16 ">
        <div className=" mb-8 bg-white">
          <nav className="flex p-2.5" aria-label="Breadcrumb">
            <ol className="inline-flex items-center space-x-1 md:space-x-3">
              <li className="inline-flex items-center">
                <Link
                  href="/"
                  className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white"
                >
                  <svg
                    className="w-3 h-3 mr-2.5"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z" />
                  </svg>
                  Home
                </Link>
              </li>
              <li>
                <div className="flex items-center">
                  <svg
                    className="w-3 h-3 text-gray-400 mx-1"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 6 10"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m1 9 4-4-4-4"
                    />
                  </svg>
                  <Link
                    href="/"
                    className="ml-1 text-sm font-medium text-gray-700 hover:text-blue-600 md:ml-2 dark:text-gray-400 dark:hover:text-white"
                  >
                    Projects
                  </Link>
                </div>
              </li>
              <li aria-current="page">
                <div className="flex items-center">
                  <svg
                    className="w-3 h-3 text-gray-400 mx-1"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 6 10"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m1 9 4-4-4-4"
                    />
                  </svg>
                  <span className="ml-1 text-sm font-medium text-gray-500 md:ml-2 dark:text-gray-400">
                    {/* Xem phim {nameFilm.replace(/-/g, " ")} */}
                  </span>
                </div>
              </li>
            </ol>
          </nav>
        </div>

        <div className="grid grid-cols-7 gap-6">
          {/* LEFT */}
          <div className="col-span-5">
            <div className="p-2.5 bg-[#2D2D2D]">
              {/* SECTION INFO FILM */}
              <div className="overflow-hidden">
                {/* <h3 className="text-white text-center">react player</h3>
                <ReactPlayer controls width="100%" 
                url='https://firebasestorage.googleapis.com/v0/b/movie-the-stone.appspot.com/o/files%2FN%E1%BA%BFu%20%C4%90%C3%A1nh%20M%E1%BA%A5t%20Em%20-%20Reddy%20-%20Official%20Lyrics%20Video%20(1).mp4%20%20%20%20%20%20%202023-8-11%2017%3A54%3A34?alt=media&token=e595d5ee-2a75-4160-904c-f25dda4e4583' /> */}
                 <div
                    className="jw-video-container"
                    data-mediaid="TAITbudl"
                    style={{ height: "100%", width: "100%" }}
                  >
                    <ReactJWPlayer
                      playerId="TAITbudl"
                      playerScript="https://content.jwplatform.com/libraries/j9BLvpMc.js"
                      // playlist="https://cdn.jwplayer.com/v2/media/TAITbudl"
                      file='/neudanhmatem.mp4'
                      // playlist={playlist}
                      // onReady={onReady}
                    />
                  </div>
              </div>

              <div className="mt-[30px] p-2.5 bg-[#222222]">
                <h3 className="mb-2 text-[#da966e] text-xl font-medium">
                  Nội dung chi tiết
                </h3>
                <div>
                  <h3 className="text-[#ddd] mb-2.5 font-normal text-2xl">
                    {/* {nameFilm?.replace(/-/g, " ")} */}
                  </h3>
                  <p className="text-base text-[#abb7c4]">
                    Từ ngôi sao NBA, Kevin Durant, nhà làm phim Reggie Rock
                    Bythewood và đội ngũ làm phim Friday Night Lights. Bộ phim
                    kể về một thần đồng bóng rổ phải tìm kiếm lối đi trong mê
                    cung đầy rẫy những áp lực để tìm được con đường thành công
                    và học được ý nghĩa thật sự của “ngông nghênh”.
                  </p>
                </div>
              </div>

              {/* SECTION TRAILER */}
              <div className="mt-[30px]">
                <div className="mb-2">
                  <h2 className="text-[#da966e] text-xl font-medium">
                    Official Trailer:
                  </h2>
                </div>
                <iframe
                  className="w-full h-[450px]"
                  src="https://www.youtube-nocookie.com/embed/ilB9h1pfjc8"
                  title="Và Thế Là Hết - Chillies (Original)"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              </div>

              {/* SECTION COMMENT */}
              <CommentFilm />
            </div>

            {/* SECTION RELATED FILM? */}
            <SliderRelatedFilm />
          </div>
          {/* RIGHT */}
          <div className="col-span-2">
            <SidebarContentFilm />
          </div>
        </div>
      </div>
    </LayoutRoot>
  );
};

export default PlayFilmPage;


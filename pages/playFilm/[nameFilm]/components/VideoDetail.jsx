import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import ReactStars from "react-stars";

const VideoDetail = ({ movie }) => {
  console.log(movie);
  const user = useSelector((state) => state.auth.login.currentUser);
  const category = movie?.category?.map((category) => category.name);
  const arrDetailInfoFilm = [
    { id: 1, name: "Thể loại", text: category },
    { id: 2, name: "Phát hành", text: movie.yearPublish },
    { id: 3, name: "Đạo diễn", text: movie.author },
    { id: 4, name: "Diễn viên", text: movie.actors },
    { id: 5, name: "Quốc gia", text: movie.country },
    { id: 6, name: "Giải thưởng", text: movie.awards },
    { id: 7, name: "Lượt xem", text: movie.views },
  ];

  const ratingChanged = (newRating) => {
    console.log(newRating);
  };

  return (
    <div className=" py-[10px] rounded-md bg-[#1b2d58]">
      <div className="h-[400px] px-[15px]">
        <span className="block w-full h-full">
          <img
            className="block w-full h-full object-cover"
            src={movie?.photo?.[0] || ""}
            alt={movie?.photo?.[0] || ""}
            // width={55}
            // height={55}
            // layout="fill"
            // priority
          />
        </span>
      </div>

      <div>
        <h1 className="mx-[15px] mt-[22.5px] text-lg font-semibold text-white">
          {movie?.title}
        </h1>
        <div className="flex items-center pt-[7.5px] pb-[15px] px-[15px] mb-[15px] border-[1px] border-[#21376c]">
          <span className="min-w-[20px] px-[3px] bg-[#c7d2ee] text-xs font-medium text-black border-[1px] border-[#c7d2ee]">
            {movie?.quality}
          </span>
          <span className="ml-[6px] px-[3px] text-[#c7d2ee] text-xs font-medium border-[1px] border-[#c7d2ee]">
            PG
          </span>
          <span className="ml-[6px] text-base text-white">
            {movie?.timeVideo}
          </span>
        </div>
        <div className="px-[15px] pb-[15px] border-b-[1px] border-[#21376c]">
          <p className="scroll_desc max-h-[200px] text-[15px] text-white overflow-y-auto">
            {movie?.desc}
          </p>
        </div>
        <div className="m-[15px] text-[#c7d2ee]">
          {arrDetailInfoFilm.map((item, index) => (
            <div
              key={item.id}
              className={`flex text-[14px] font-normal ${
                index >= 1 ? "mt-[5px]" : ""
              }`}
            >
              <div className="min-w-[90px]">{item.name}:</div>
              <span className="flex-1">
                {Array.isArray(item.text) ? (
                  [1, 6].includes(item.id) ? (
                    item.text.map((subText, i) => (
                      <React.Fragment key={i}>
                        <p className="inline-block">{subText}</p>
                        {i !== item.text.length - 1 && ", "}
                      </React.Fragment>
                    ))
                  ) : (
                    item.text.map((subText, i) => (
                      <React.Fragment key={i}>
                        <Link
                          href={`/search/${subText.replace(/\s+/g, "+")}`}
                          className="text-[#f1ffff] hover:text-[#e94a68] transition-all duration-150 ease-in-out"
                        >
                          {subText}
                        </Link>
                        {i !== item.text.length - 1 && ", "}
                      </React.Fragment>
                    ))
                  )
                ) : (
                  <p className="inline-block">{item.text}</p>
                )}
              </span>
            </div>
          ))}
        </div>
        <div className="bg-[#e94a68] py-[9px] px-[15px] mx-[15px] rounded-[4px] text-center">
          <span className="flex justify-center items-center">
            <ReactStars
              count={5}
              half={true}
              value={10}
              onChange={ratingChanged}
              size={24}
              color2={"#ffd700"}
              edit={user ? true : false}
            />
          </span>
          <div>
            <span>
              {/* <b>7.82</b> of <b>10</b> (<span>2754</span> 2,754 reviews) */}
              <b>{movie?.rating}</b> of <b>10</b> ({" "}
              {movie?.listUserRating?.length} reviews )
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoDetail;

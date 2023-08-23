import LayoutRoot from "@/components/Layout";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import Image from "next/legacy/image";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import MovieSearchResults from "./components/Movie";

const arrFilmCategory = [
  {
    id: 1,
    title: "Thất nghiệp chuyển sinh",
    views: "24,123",
    updated: "2023-08-12",
    image:
      "https://img.vxdn.net/t-max/w_312/h_468/tulsa-king-season-1-1630854430.webp",
  },
  {
    id: 2,
    title: "Thế chiến Z",
    views: "36,723",
    updated: "2023-07-12",
    image: "https://phimmoiyyy.net/wp-content/uploads/2023/07/Oppenheimer.jpg",
  },
  {
    id: 3,
    title: "Cậu bé mất tích",
    views: "42,863",
    updated: "2023-06-12",
    image:
      "https://img.vxdn.net/t-max/w_312/h_468/black-panther-wakanda-forever-1630854429.jpg",
  },
  {
    id: 4,
    title: "Thợ săn quái vật",
    views: "42,863",
    updated: "2023-06-12",
    image: "https://bluphim.com/Content/Imgs/Movies/thumb-2547.jpg",
  },
  {
    id: 5,
    title: "Thợ săn quái vật",
    views: "42,863",
    updated: "2023-06-12",
    image: "https://bluphim.com/Content/Imgs/Movies/thumb-2610.jpg?id=1382b45",
  },
  {
    id: 6,
    title: "Thợ săn quái vật",
    views: "42,863",
    updated: "2023-06-12",
    image: "https://bluphim.com/Content/Imgs/Movies/thumb-2579.jpg?id=d96a445",
  },
  {
    id: 7,
    title: "Thợ săn quái vật",
    views: "42,863",
    updated: "2023-06-12",
    image: "https://bluphim.com/Content/Imgs/Movies/thumb-2548.jpg",
  },
  {
    id: 8,
    title: "Thợ săn quái vật",
    views: "42,863",
    updated: "2023-06-12",
    image: "https://bluphim.com/Content/Imgs/Movies/thumb-2580.jpg?id=82d87b5",
  },
];

const searchFilmPage = ({ queryString }) => {
  return (
    <LayoutRoot>
      <div className="mt-20">
        <div className="overflow-hidden">
          <div className="mb-4">
            <h3 className="text-[#da966e] text-2xl font-normal border-l-4 pl-2.5">
              Kết quả tìm kiếm: {queryString.replace(/\+/g, " ")}
              {/* href={`/playFilm/${title.replace(/\s+/g, "-")}`} */}
            </h3>
          </div>

          <div className="grid grid-cols-5 gap-x-3.5 gap-y-[20px]">
            {arrFilmCategory.map((item, index) => {
              return <MovieSearchResults key={index} item={item} />;
            })}
          </div>
        </div>
      </div>
    </LayoutRoot>
  );
};

export default searchFilmPage;

export async function getServerSideProps(context) {
  const queryString = context.params.queryString;
  return {
    props: {
      queryString,
    },
  };
}

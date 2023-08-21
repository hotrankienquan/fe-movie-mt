import Link from "next/link";
import { arrDetailInfoFilm, arrTopTrendingFilm } from "./constant";
import Image from "next/legacy/image";
import React from "react";

const SidebarContentFilm = ({ arrMovie }) => {
  console.log(">>> Sidebar Main Content <<<", arrMovie);
  return (
    <>
      {arrTopTrendingFilm.map((item) => (
        <div key={item.id} className="h-full overflow-hidden">
          <div className="mb-4">
            <h3 className="text-[#da966e] text-2xl font-normal border-l-4 pl-2.5">
              {item.title.toUpperCase()}
            </h3>
          </div>

          <div className="list_top_trend_film h-full overflow-y-auto">
            {item.listFilm.map((itemFilm) => (
              <div
                key={itemFilm.id}
                className="overflow-hidden grid grid-cols-4 mb-2.5 h-[100px] gap-1"
              >
                <div className="col-span-1 h-full">
                  <Link
                    href={`/playFilm/${itemFilm.title.replace(/\s+/g, "-")}`}
                  >
                    <img
                      src={itemFilm.image}
                      alt={itemFilm.image}
                      title={itemFilm.title}
                      className="w-full h-[100px] object-cover border-[1px]"
                    />
                  </Link>
                </div>

                <div className="p-2 col-span-3 text-white bg-black opacity-60 hover:opacity-100 flex flex-col justify-center">
                  <h3 className="font-bold">
                    <Link
                      href={`/playFilm/${itemFilm.title.replace(/\s+/g, "-")}`}
                      title={itemFilm.title}
                    >
                      {itemFilm.title}
                    </Link>
                  </h3>
                  <p>{itemFilm.updated}</p>
                  <p>{itemFilm.views} Lượt xem</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </>
  );
};

export default SidebarContentFilm;

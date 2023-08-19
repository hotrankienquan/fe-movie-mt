import Link from "next/link";
import { arrTopTrendingFilm } from "./constSidebarContentFilm";

const SidebarContentFilm = () => {
  return (
    <>
      <div className="mb-20">
        <div className="mb-4">
          <h3 className="text-[#da966e] text-2xl font-normal border-l-4 pl-2.5">
            Top Trending
          </h3>
        </div>

        <div className="list_top_trend_film h-[800px] overflow-auto">
          {arrTopTrendingFilm.map((item) => (
            <div
              key={item.id}
              className="overflow-hidden grid grid-cols-4 mb-2.5 h-[100px] gap-1"
            >
              <div className="col-span-1 h-full">
                <Link href={`/detail/${item.title.replace(/\s+/g, "-")}`}>
                  <img
                    src={item.image}
                    alt={item.image}
                    title={item.title}
                    className="w-full h-[100px] object-cover border-[1px]"
                  />
                </Link>
              </div>

              <div className="p-2 col-span-3 text-white bg-black opacity-60 hover:opacity-100 flex flex-col justify-center">
                <h3 className="font-bold">
                  <Link
                    href={`/detail/${item.title.replace(/\s+/g, "-")}`}
                    title={item.title}
                  >
                    {item.title}
                  </Link>
                </h3>
                <p>{item.updated}</p>
                <p>{item.views} Lượt xem</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default SidebarContentFilm;

import Image from "next/legacy/image";
import Link from "next/link";
import { useState, useEffect } from "react";

const Movie = ({ item, getAll }) => {
  let { title, views, updated, image } = item;
  const [active, setActive] = useState(false);
  const [activeBookmark, setActiveBookmark] = useState(false);
  function handleLove(e) {
    e.preventDefault();
    setActive(!active);
  }
  function handleBookmark(e) {
    e.preventDefault();
    setActiveBookmark(!activeBookmark);
  }
  useEffect(() => {
    getAll({ ...item, active, activeBookmark });
  }, [active, activeBookmark]);

  return (
    <div className="h-full">
      <div className="relative overflow-hidden h-full mx-2.5 group">
        <Link href="#">
          <Image
            className="h-full block w-full object-cover group-hover:scale-110 transition-all duration-300 group-hover:opacity-50"
            src={image || "/vercel.svg"}
            alt={"something"}
            // layout="fill"
            width={213}
            height={340}
            // loading="lazy"
            priority
          />
          <span className="flex justify-center absolute top-[43%] inset-x-0">
            <i className="fa-solid fa-circle-play text-5xl text-white scale-150 opacity-0 group-hover:scale-100 group-hover:opacity-80 duration-500 ease-in-out"></i>
          </span>
        </Link>

        <div className="absolute top-[45%] inset-x-0 bg-black">
          <span className="absolute -left-[15%] group-hover:left-[20%] duration-500 ease-in-out">
            <button className="text-white z-50" onClick={handleLove}>
              {active ? (
                <i className="fa-solid fa-heart text-2xl"></i>
              ) : (
                <i className="fa-regular fa-heart text-2xl"></i>
              )}
            </button>
          </span>

          <span className="absolute -right-[15%] group-hover:right-[20%] duration-500 ease-in-out">
            <button className="text-white z-50" onClick={handleBookmark}>
              {activeBookmark ? (
                <i className="fa-solid fa-bookmark text-2xl"></i>
              ) : (
                <i className="fa-regular fa-bookmark text-2xl"></i>
              )}
            </button>
          </span>
        </div>

        <div className="absolute bottom-0 left-0 right-0 text-center p-2 bg-black bg-opacity-70">
          <span className=" block text-white">
            <h3 className="whitespace-nowrap text-ellipsis overflow-hidden">
              <Link href="#" title="film">
                {title || "title"}
              </Link>
            </h3>
          </span>
        </div>
      </div>
    </div>
  );
};
export default Movie;

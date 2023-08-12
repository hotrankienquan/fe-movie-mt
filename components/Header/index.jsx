// "use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [searchInput, setSearchInput] = useState("");
  console.log(searchInput);

  const arrNameCategory = [
    "Phim chiếu rạp",
    "Phim cổ trang",
    "Phim tâm lý",
    "Phim tình cảm",
    "Phim bí ẩn",
    "Phim kinh dị",
    "Phim hành động",
    "Phim võ thuật",
    "Phim kịch tính",
  ];

  const handleSearchInput = (e) => {
    const { name, value } = e.target;
    setSearchInput(value);
  };
  const handleSubmitSearchInput = (e) => {
    e.preventDefault();
  };

  return (
    <header className="bg-[#151414] h-20 fixed top-0 left-0 right-0 z-50">
      <nav className="h-full mx-auto max-w-[1200px]">
        <div className="h-full flex justify-between items-center">
          <div className="">
            <Link href="/" className="flex items-center justify-center">
              <Image
                className="bg-red-300"
                src="/favicon.ico"
                width={55}
                height={55}
                alt="user profile avatar"
              />
            </Link>
          </div>

          <div className="mx-4 flex-1 text-white ">
            <ul className="flex justify-center items-center ">
              <li className="inline-block ">
                <Link
                  href="/"
                  className="px-5 py-5 mx-2 block text-base font-semibold cursor-pointer"
                >
                  Trang chủ
                </Link>
              </li>

              <li className="inline-block relative group">
                <Link
                  href="#"
                  className="px-5 py-5 mx-2 block text-base font-semibold cursor-pointer"
                >
                  Thể loại
                  <span className="ml-1.5">
                    <i className="fa-solid fa-caret-down"></i>
                  </span>
                </Link>

                <ul className="overflow-hidden absolute z-50 top-14 left-0 w-[500px] hidden bg-white text-gray-700 border border-gray-300 rounded-md group-hover:grid grid-cols-3 ">
                  {arrNameCategory.map((item, i) => (
                    <li key={i} className="block hover:bg-gray-100">
                      <Link
                        href="#"
                        className="py-2.5 px-3.5 block w-full text-sm"
                      >
                        <span className="mr-2">
                          <i className="fa-solid fa-caret-right"></i>
                        </span>
                        {item}
                      </Link>
                    </li>
                  ))}
                </ul>
              </li>

              <li className="inline-block ">
                <Link
                  href="#"
                  className="px-5 py-5 mx-2 block text-base font-semibold cursor-pointer"
                >
                  Oscar Film
                </Link>
              </li>

              <li className="inline-block ">
                <Link
                  href="#"
                  className="px-5 py-5 mx-2 block text-base font-semibold cursor-pointer"
                >
                  Top IMDB
                </Link>
              </li>

              <li className="inline-block ">
                <Link
                  href="#"
                  className="px-5 py-5 mx-2 block text-base font-semibold cursor-pointer"
                >
                  Quốc gia
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <ul className="flex justify-between items-center">
              <li className="mr-3.5 relative flex">
                <form className="z-50 bg-[#2D2D2D] ">
                  <input
                    className="bg-[#2D2D2D] focus:outline-0 focus:outline-none px-3.5 text-white"
                    type="text"
                    name="searchInput"
                    value={searchInput}
                    onChange={handleSearchInput}
                    placeholder="Tìm kiếm..."
                  />

                  <button
                    data-tooltip-target="search-tooltip-bottom"
                    data-tooltip-placement="bottom"
                    className="rounded-full bg-white text-black h-11 w-11"
                    onClick={handleSubmitSearchInput}
                  >
                    <i className="fa-solid fa-magnifying-glass"></i>
                  </button>
                  <div
                    id="search-tooltip-bottom"
                    role="tooltip"
                    className="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700"
                  >
                    Search
                    <div className="tooltip-arrow" data-popper-arrow></div>
                  </div>
                </form>
              </li>

              <li>
                <Link
                  data-tooltip-target="auth-tooltip-bottom"
                  data-tooltip-placement="bottom"
                  className="flex justify-center items-center rounded-full bg-white text-black h-11 w-11"
                  href="/login"
                >
                  <i className="fa-solid fa-user"></i>
                </Link>
                <div
                  id="auth-tooltip-bottom"
                  role="tooltip"
                  className="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700"
                >
                  Login / Register
                  <div className="tooltip-arrow" data-popper-arrow></div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

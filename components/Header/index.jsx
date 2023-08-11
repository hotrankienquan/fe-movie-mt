"use client";
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
  const handleSubmitSearchInput = (e) => {};

  return (
    <header className="bg-[#151414] h-20 fixed top-0 left-0 right-0 z-50">
      <nav className="h-full">
        <div className="h-full max-w-7xl mx-auto flex justify-between items-center">
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

                <ul className="absolute z-50 top-14 left-0 w-[500px] hidden bg-white text-gray-700 border border-gray-300 rounded-md group-hover:grid grid-cols-3 ">
                  {arrNameCategory.map((item, i) => (
                    <li
                      key={i}
                      className="block py-2.5 px-3.5 hover:bg-gray-100"
                    >
                      <a href="" className="block w-full">
                        <span className="mr-2">
                          <i className="fa-solid fa-caret-right"></i>
                        </span>
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </li>
            </ul>
          </div>

          <div>
            <ul className="flex justify-between items-center">
              <li className="mr-3.5 relative flex">
                <form className="z-50 bg-[#2D2D2D] ">
                  <input
                    className="bg-[#2D2D2D] outline-0 px-3.5 text-white"
                    type="text"
                    name="searchInput"
                    value={searchInput}
                    onChange={handleSearchInput}
                    placeholder="Tìm kiếm..."
                  />

                  <button
                    className="rounded-full bg-white text-black h-11 w-11"
                    onClick={handleSubmitSearchInput}
                  >
                    <i className="fa-solid fa-magnifying-glass"></i>
                  </button>
                </form>
              </li>

              <li>
                <Link
                  className="flex justify-center items-center rounded-full bg-white text-black h-11 w-11"
                  href="/login"
                >
                  <i className="fa-solid fa-user"></i>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

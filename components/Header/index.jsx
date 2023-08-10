import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [showSearch, setShowSearch] = useState(false);

  const handleSearch = () => {
    // setShowSearch((prev) => !prev);
  };

  return (
    <header className="bg-[#151414] h-20">
      <nav className="h-full block my-auto">
        <div className="h-full max-w-7xl mx-auto flex justify-between items-center ">
          <div>
            <Link href="/" className="">
              <Image
                className="rounded-full bg-red-300 "
                src="/favicon.ico"
                width={55}
                height={55}
                alt="user profile avatar"
              />
            </Link>
          </div>

          <div className="h-full mx-4 flex-1 text-white ">
            <ul className="flex justify-center items-center ">
              <li className=" inline-block ">
                <Link
                  href="/"
                  className="px-2 py-2 mx-2 block text-base font-semibold cursor-pointer"
                >
                  Home
                </Link>
              </li>

              <li className="inline-block relative group hover:bg-blue-600 focus:outline-none focus:bg-blue-600">
                <Link
                  href="/category"
                  className="px-2 py-2 mx-2 block text-base font-semibold cursor-pointer"
                >
                  Category
                  <span className="ml-1.5">
                    <i class="fa-solid fa-caret-down"></i>
                  </span>
                </Link>

                <ul className="absolute top-0 left-0 hidden mt-2 bg-white text-gray-700 border border-gray-300 rounded-md group-hover:block">
                  <li className="py-2 px-4 hover:bg-gray-100">Item 1</li>
                  <li className="py-2 px-4 hover:bg-gray-100">Item 2</li>
                  <li className="py-2 px-4 hover:bg-gray-100">Item 3</li>
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
                    placeholder="Tìm kiếm..."
                  />

                  <button
                    className="rounded-full bg-white text-black h-11 w-11"
                    onClick={handleSearch}
                  >
                    <i class="fa-solid fa-magnifying-glass"></i>
                  </button>
                </form>
              </li>

              <li>
                <Link
                  className="flex justify-center items-center rounded-full bg-white text-black h-11 w-11"
                  href="/login"
                >
                  <i class="fa-solid fa-user"></i>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

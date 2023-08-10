import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [showSearch, setShowSearch] = useState(false);

  const handleSearch = () => {
    // setShowSearch((prev) => !prev);
  };

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
                  Home
                </Link>
              </li>

              <li className="inline-block relative group">
                <Link
                  href="#"
                  className="px-5 py-5 mx-2 block text-base font-semibold cursor-pointer"
                >
                  Category
                  <span className="ml-1.5">
                    <i class="fa-solid fa-caret-down"></i>
                  </span>
                </Link>

                <ul className="absolute top-14 left-0 max-w-lg w-full hidden bg-white text-gray-700 border border-gray-300 rounded-md group-hover:block">
                  <li className="py-2.5 px-5 hover:bg-gray-100 w-4/12">
                    <a href="" className="block w-full">
                      Item 1
                    </a>
                  </li>
                  <li className="py-2.5 px-5 hover:bg-gray-100 w-4/12">
                    <a href="" className="block w-full">
                      Item 2
                    </a>
                  </li>
                  <li className="py-2.5 px-5 hover:bg-gray-100 w-4/12">
                    <a href="" className="block w-full">
                      Item 3
                    </a>
                  </li>
                  <li className="py-2.5 px-5 hover:bg-gray-100 w-4/12">
                    <a href="" className="block w-full">
                      Item 4
                    </a>
                  </li>
                  <li className="py-2.5 px-5 hover:bg-gray-100 w-4/12">
                    <a href="" className="block w-full">
                      Item 5
                    </a>
                  </li>
                  <li className="py-2.5 px-5 hover:bg-gray-100 w-4/12">
                    <a href="" className="block w-full">
                      Item 6
                    </a>
                  </li>
                  <li className="py-2.5 px-5 hover:bg-gray-100 w-4/12">
                    <a href="" className="block w-full">
                      Item 7
                    </a>
                  </li>
                  <li className="py-2.5 px-5 hover:bg-gray-100 w-4/12">
                    <a href="" className="block w-full">
                      Item 8
                    </a>
                  </li>
                  <li className="py-2.5 px-5 hover:bg-gray-100 w-4/12">
                    <a href="" className="block w-full">
                      Item 9
                    </a>
                  </li>
                  <li className="py-2.5 px-5 hover:bg-gray-100 w-4/12">
                    <a href="" className="block w-full">
                      Item 9
                    </a>
                  </li>
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

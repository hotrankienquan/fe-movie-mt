import LayoutRoot from "@/components/Layout";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import SidebarContentFilm from "../../../components/SidebarContentFilm";
import Image from "next/legacy/image";
import { arrFilmCategory } from "./constFilmCategory";
import Pagination from "../../../components/Pagination";
import { useState } from "react";

export async function getServerSideProps({ params }) {
  const nameCategory = params.nameCategory;
  return {
    props: {
      nameCategory,
    },
  };
}

const CategoryPage = ({ nameCategory }) => {
  const searchParams = useSearchParams();
  const pageNumber = searchParams.get("page");
  console.log(">>> Pagination <<<", pageNumber);

  const [currentPage, setCurrentPage] = useState(parseInt(pageNumber) || 1);
  const [pageSize, setPageSize] = useState(30);
  const [totalPages, setTotalPages] = useState(0);

  // set "page" query string url
  const newUrl = `${window.location.pathname}?page=${currentPage}`;
  window.history.pushState(null, null, newUrl);

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
                    Xem phim {nameCategory.replace(/-/g, " ")}
                  </span>
                </div>
              </li>
            </ol>
          </nav>
        </div>

        <div className="overflow-hidden">
          <div className="mb-4">
            <h3 className="text-[#da966e] text-2xl font-normal border-l-4 pl-2.5">
              {nameCategory.replace(/-/g, " ")}
            </h3>
          </div>

          <div className="grid grid-cols-5 gap-x-3.5 gap-y-[20px]">
            {arrFilmCategory.map((item, i) => (
              <div key={item.id} className="h-[300px] overflow-hidden">
                <div className="relative h-full overflow-hidden group">
                  <Link
                    href={`/detail/${item.title.replace(/\s+/g, "-")}`}
                    className="absolute h-full w-full group overflow-hidden"
                  >
                    <Image
                      className="h-full block w-full object-cover group-hover:opacity-70 transition-all duration-500"
                      src={item.image || "/vercel.svg"}
                      alt="error"
                      layout="fill"
                      // width={213}
                      // height={340}
                      // loading="lazy"
                      priority
                    />

                    <span className="opacity-0 group-hover:opacity-100 absolute top-[45%] inset-x-0 text-white text-center transition-all duration-500">
                      <i className="fa-regular fa-circle-play text-4xl"></i>
                    </span>

                    <span className="p-2 absolute bottom-0 inset-x-0 text-white bg-black bg-opacity-70">
                      <h3 className="whitespace-nowrap text-ellipsis overflow-hidden">
                        {item.title}
                      </h3>
                      <p className="text-sm opacity-50 whitespace-nowrap text-ellipsis overflow-hidden">
                        {item.title}
                      </p>
                    </span>
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="flex items-center justify-center my-[30px] h-[50px]">
            <Pagination
              paginationData={{
                currentPage,
                totalPages,
                setCurrentPage: setCurrentPage,
              }}
            />
          </div>
        </div>
      </div>
    </LayoutRoot>
  );
};

export default CategoryPage;

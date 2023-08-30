import LayoutRoot from "@/components/Layout";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import Image from "next/legacy/image";
// import { arrFilmCategory } from "./constant";
import Pagination from "../../../components/Pagination";
import { useEffect, useState } from "react";
import MovieCategory from "./components/Movie";
import { getAllMovies } from "../../../store/apiRequest";
import { useRouter } from "next/router";
import axios from "axios";

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

const CategoryPage = ({ nameCategory, categories }) => {
  const router = useRouter();
  // console.log(router);
  const searchParams = useSearchParams();
  const pageNumber = searchParams.get("page");
  // console.log(">>> Pagination <<<", pageNumber);

  const [arrMovie, setArrMovie] = useState([]);
  const [currentPage, setCurrentPage] = useState(parseInt(pageNumber) || 1);
  const [pageSize, setPageSize] = useState(30);
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    router.push(`${nameCategory.replace(/\s+/g, "-")}?page=${currentPage}`);
  }, [currentPage, nameCategory]);

  // useEffect(() => {
  //   try {
  //     // set "page" query string url
  //     // const newUrl = `${window.location.pathname}?page=${currentPage}`;
  //   } catch (err) {
  //     throw new Error(err);
  //   }
  // }, [currentPage]);

  useEffect(() => {
    const renderCategoryMovies = async () => {
      try {
        const res = await getAllMovies();
        // console.log(">>> Category Film <<<", res.data.data.movie);
        setArrMovie(res.data.data.movie);
      } catch (err) {
        console.log(err);
      }
    };
    // renderCategoryMovies();
  }, []);

  return (
    <LayoutRoot categories={categories}>
      <div className="mt-16 ">
        <div className=" mb-8">
          <nav className="flex p-2.5" aria-label="Breadcrumb">
            <ol className="inline-flex items-center space-x-1 md:space-x-3">
              <li className="inline-flex items-center">
                <Link
                  href="/"
                  className="inline-flex items-center text-sm font-medium text-white hover:text-[#da966e]"
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
                    className="ml-1 text-sm font-medium text-white hover:text-[#da966e] md:ml-2"
                  >
                    Thể loại
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
                  <span className="ml-1 text-sm font-medium text-gray-500 md:ml-2">
                    Xem phim {nameCategory?.replace(/-/g, " ")}
                  </span>
                </div>
              </li>
            </ol>
          </nav>
        </div>

        <div className="overflow-hidden">
          <div className="mb-4">
            <h3 className="text-[#da966e] text-2xl font-normal border-l-4 pl-2.5">
              {nameCategory?.replace(/-/g, " ")}
            </h3>
          </div>

          <div className="grid grid-cols-5 gap-x-3.5 gap-y-[20px]">
            {/* {arrFilmCategory.map((item, i) => (
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

                    <span className="opacity-0 group-hover:opacity-100 absolute top-[40%] inset-x-0 text-white text-center transition-all duration-500">
                      <i className="fa-regular fa-circle-play text-4xl"></i>
                    </span>

                    <span className="absolute top-[40%] left-[25%] opacity-0 group-hover:opacity-100 duration-500 ease-in-out z-50">
                      <button className="text-white z-50" onClick={handleLove}>
                        {activeFavorite ? (
                          <i className="fa-solid fa-heart text-2xl"></i>
                        ) : (
                          <i className="fa-regular fa-heart text-2xl"></i>
                        )}
                      </button>
                    </span>

                    <span className="absolute top-[40%] right-[25%] opacity-0 group-hover:opacity-100 duration-500 ease-in-out z-50">
                      <button
                        className="text-white z-50"
                        onClick={handleBookmark}
                      >
                        {activeBookmark ? (
                          <i className="fa-solid fa-bookmark text-2xl"></i>
                        ) : (
                          <i className="fa-regular fa-bookmark text-2xl"></i>
                        )}
                      </button>
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
            ))} */}

            {arrFilmCategory.map((item, index) => {
              return <MovieCategory key={index} item={item} />;
            })}
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

export async function getStaticProps(context) {
  const nameCategory = context.params.nameCategory;
  let allCategory = await axios.get(
    `${process.env.NEXT_PUBLIC_URL}/api/v1/category`
  );
  return {
    props: {
      nameCategory,
      categories: allCategory.data.data,
    },
    revalidate: 20,
  };
}
export async function getStaticPaths(context) {
  let allCategory = await axios.get(
    `${process.env.NEXT_PUBLIC_URL}/api/v1/category`
  );
  const paths = allCategory.data.data.map((item) => {
    return { params: { nameCategory: `${item.name}` } };
  });
  return {
    paths,
    fallback: true, // false or "blocking"
  };
}

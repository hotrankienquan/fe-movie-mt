import { Inter } from "next/font/google";
import LayoutRoot from "@/components/Layout";
import Dashboard from "@/pages/Dashboard";
import Head from "next/head";
import { useEffect, useState, useLayoutEffect } from "react";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";
import Cookies from "js-cookie";
const inter = Inter({ subsets: ["latin"] });
import axios from "axios";
import { createAxios } from "../utils/createInstance";
import { getFavoriteMovies, getWatchLaterMovies } from "../store/apiRequest";

const Home = (props) => {
  const router = useRouter();
  const user = useSelector((state) => state.auth.login?.currentUser);
  // console.log(user);
  const accessToken = user?.accessToken;
  const userId = user?._id;
  let axiosJWT = createAxios(user, null, null);
  // console.log("arr movie", props.movies);
  // console.log("dataMovies", props.dataMovies);
  // console.log("arr category", props.categories);

  const [arrFavoriteMovie, setArrFavoriteMovie] = useState([]);
  const [arrWatchLaterMovie, setArrWatchLaterMovie] = useState([]);

  useLayoutEffect(() => {
    const renderFavoriteMovies = async () => {
      try {
        const res = await getFavoriteMovies(accessToken, null, axiosJWT);
        // console.log(">>> Favorite Film <<<", res);
        setArrFavoriteMovie(res.data.loveMovie);
      } catch (err) {
        console.log(err);
      }
    };
    renderFavoriteMovies();
  }, []);

  useEffect(() => {
    const renderWatchLaterMovies = async () => {
      try {
        const res = await getWatchLaterMovies(accessToken, null, axiosJWT);
        // console.log(">>> Watch Later Film <<<", res.data.markBookMovie);
        setArrWatchLaterMovie(res.data.markBookMovie);
      } catch (err) {
        console.log(err);
      }
    };
    renderWatchLaterMovies();
  }, []);

  return (
    <>
      <Head>
        <title>The Stone</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <meta property="og:type" content="blog" />
        <meta
          property="og:image"
          content="https://img.freepik.com/free-vector/flat-vertical-hotel-information-flyer-template_23-2148898863.jpg?w=2000"
        ></meta>
        <meta
          name="description"
          content="Web site created using create-react-app"
        />
        <meta property="og:title" content="My page title" key="title" />

        {/* <script
          async
          defer
          crossorigin="anonymous"
          src="https://connect.facebook.net/en_GB/sdk.js#xfbml=1&version=v17.0&appId=285996387018931&autoLogAppEvents=1"
          nonce="eRCeEIuo"
        ></script> */}
      </Head>
      <LayoutRoot categories={props.categories}>
        {/* <div id="fb-root"></div> */}

        <Dashboard
          dataMovies={props.dataMovies}
          arrFavoriteMovie={arrFavoriteMovie}
          arrWatchLaterMovie={arrWatchLaterMovie}
        />
      </LayoutRoot>
    </>
  );
};
export default Home;

export async function getServerSideProps(context) {
  // if need accesstoken, get here
  // nếu api nào cần verify token, thì gắn accesstoken này vào rồi call api
  // console.log(context.req.cookies.accessToken) // get cookie accessToken
  let allMovie = await axios.get(`${process.env.NEXT_PUBLIC_URL}/api/v1/movie`);
  let allCategory = await axios.get(
    `${process.env.NEXT_PUBLIC_URL}/api/v1/category`
  );
  return {
    props: {
      dataMovies: allMovie.data.data,
      categories: allCategory.data.data,
    },
  };
}

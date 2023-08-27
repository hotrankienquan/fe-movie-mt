import { Inter } from "next/font/google";
import LayoutRoot from "@/components/Layout";
import Dashboard from "@/pages/Dashboard";
import Head from "next/head";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";
import Cookies from "js-cookie";
const inter = Inter({ subsets: ["latin"] });
import axios from "axios";
import { createAxios } from "../utils/createInstance";
const Home = (props) => {
  const router = useRouter();
  const user = useSelector((state) => state.auth.login?.currentUser);

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

      </Head>
      <LayoutRoot categories={props.categories}>\

        <Dashboard movies={props.movies} />
      </LayoutRoot>
    </>
  );
};
export default Home;


export async function getStaticProps(context){
  let allMovie = await axios.get(`${process.env.NEXT_PUBLIC_URL}/api/v1/movie`);
  let allCategory = await axios.get(
    `${process.env.NEXT_PUBLIC_URL}/api/v1/category`
  );
   return {
    props: {
      movies: allMovie.data.data.movie,
      categories: allCategory.data.data,
    },
    revalidate:20
  };
}
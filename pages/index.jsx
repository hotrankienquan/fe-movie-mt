import { Inter } from "next/font/google";
import LayoutRoot from "@/components/Layout";
import Dashboard from "@/pages/Dashboard";
import Head from "next/head";
import { useEffect } from "react";
import { useSelector } from "react-redux";
const inter = Inter({ subsets: ["latin"] });

const Home = (props) => {
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

        {/* <script
          async
          defer
          crossorigin="anonymous"
          src="https://connect.facebook.net/en_GB/sdk.js#xfbml=1&version=v17.0&appId=285996387018931&autoLogAppEvents=1"
          nonce="eRCeEIuo"
        ></script> */}
      </Head>
      <LayoutRoot>
        {/* <div id="fb-root"></div> */}

        <Dashboard />
      </LayoutRoot>
    </>
  );
};
export default Home;

import { Inter } from "next/font/google";
import LayoutRoot from "@/components/Layout";
import Dashboard from "@/pages/Dashboard";
import Head from "next/head";
const inter = Inter({ subsets: ["latin"] });

const Home = (props) => {
  return (
    <>
      <Head>
        <title>The Stone</title>
        <meta property="og:title" content="My page title" key="title" />
      </Head>
      <LayoutRoot>
        <Dashboard />
      </LayoutRoot>
    </>
  );
};
export default Home;

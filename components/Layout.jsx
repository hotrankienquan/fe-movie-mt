import { Inter } from "next/font/google";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
const inter = Inter({ subsets: ["latin"] });

const LayoutRoot = ({ children }) => {
  return (
    <>
      <Header />
      {/* <div className="sm:w-11/12 md:w-[1170px] mx-auto my-2">{children}</div> */}
      {/* <Footer /> */}
    </>
  );
};

export default LayoutRoot;

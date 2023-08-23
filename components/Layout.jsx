import { Inter } from "next/font/google";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ArrowGotoUp from "./ArrowGoToUp";
const inter = Inter({ subsets: ["latin"] });

const LayoutRoot = ({ children, categories }) => {
  // console.log("arr category", categories);
  return (
    <>
      <Header categories={categories} />
      <div className="bg-[#424040]">
        <div className="sm:w-11/12 md:w-[1200px] mx-auto bg-[#151414] p-7">
          {children}
        </div>
      </div>
      <ArrowGotoUp />
      <Footer />
    </>
  );
};

export default LayoutRoot;

import { Inter } from "next/font/google";
import HeaderManageInfo from "@/components/HeaderManageInfo";
import ArrowGotoUp from "./ArrowGoToUp";
import { useState } from "react";
import SidebarManageInfo from "./SidebarManageInfo";

const inter = Inter({ subsets: ["latin"] });
// className="sm:w-11/12 md:w-[1200px] mx-auto bg-[#151414] p-7"
const LayoutManageInfo = ({ children }) => {
  const [showSideBar, setShowSideBar] = useState(true);

  return (
    <>
      <HeaderManageInfo
        showSideBar={showSideBar}
        setShowSideBar={setShowSideBar}
      />
      <div className="">{children}</div>
      <SidebarManageInfo showSideBar={showSideBar} />
      {/* <ArrowGotoUp /> */}
    </>
  );
};

export default LayoutManageInfo;

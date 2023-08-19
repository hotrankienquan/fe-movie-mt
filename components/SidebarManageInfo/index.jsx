import Link from "next/link";
import { useState } from "react";
import { arrItemSidebar } from "./constants";
import ListComponent from "./components/ListComponent";

const SidebarManageInfo = ({ showSideBar }) => {
  return (
    <div className={`${showSideBar ? "block" : "hidden"}`}>
      <aside
        className="fixed top-[70px] bottom-0 w-[240px] bg-[#2b3a4a] z-50 transition-transform -translate-x-full sm:translate-x-0"
        aria-label="Sidebar"
      >
        <div className="sidebar_manage_info h-full px-3 py-4 overflow-y-auto">
          <ul className="space-y-2 font-medium text-white">
            {arrItemSidebar.map((item, index) => {
              return <ListComponent item={item} key={item.id} index={index} />;
            })}
          </ul>
        </div>
      </aside>
    </div>
  );
};

export default SidebarManageInfo;

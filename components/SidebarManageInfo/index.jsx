import Link from "next/link";
import { useState } from "react";
import { arrItemSidebar } from "./constants";
import ListComponent from "./components/ListComponent";

const SidebarManageInfo = ({ showSideBar }) => {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [activeSubmenu, setActiveSubmenu] = useState(null);

  // tabs parent dont have submenu
  const handleDropdownClick = (index) => {
    if (activeDropdown === index) {
      return; // Do nothing if the clicked dropdown is already active
    }
    setActiveDropdown(index);
  };

  // tabs parent have submenu
  const handleDropdownSubmenuClick = (index) => {
    if (activeDropdown === index) {
      setActiveDropdown(null);
    } else {
      setActiveDropdown(index);
    }
  };

  // tabs children
  const handleSubmenuClick = (index) => {
    if (activeSubmenu === index) {
      return; // Do nothing if the clicked dropdown is already active
    }
    setActiveSubmenu(index);
  };

  return (
    <div className={`${showSideBar ? "block" : "hidden"}`}>
      <aside
        className="fixed top-[70px] bottom-0 w-[240px] bg-[#2b3a4a] z-50 transition-transform -translate-x-full sm:translate-x-0"
        aria-label="Sidebar"
      >
        <div className="sidebar_manage_info h-full px-3 py-4 overflow-y-auto">
          <ul className="space-y-2 font-medium text-white">
            {arrItemSidebar.map((item, index) => {
              return <ListComponent item={item} key={item.id} />;
            })}
          </ul>
        </div>
      </aside>
    </div>
  );
};

export default SidebarManageInfo;

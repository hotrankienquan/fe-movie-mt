import Link from "next/link";
import { useState } from "react";
import { arrItemSidebar } from "./constSidebarManaInfo";

const SidebarManageInfo = ({ showSideBar }) => {
  const [activeDropdown, setActiveDropdown] = useState(null);
  console.log(">>> Active Dropdown <<<", activeDropdown);
  const [activeSubmenu, setActiveSubmenu] = useState(null);
  console.log(">>> Active Submenu <<<", activeSubmenu);

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
              // tabs dont have submenu
              if (item.subMenu === false) {
                return (
                  <li
                    key={item.id}
                    className="group"
                    onClick={() => handleDropdownClick(index)}
                  >
                    <Link
                      href="#"
                      className={`flex items-center p-2 text-[#8699ad] rounded-lg group-hover:bg-gray-100 ${
                        activeDropdown === index ? "bg-gray-100" : ""
                      }`}
                    >
                      <i
                        className={`${
                          item.icon
                        } flex-shrink-0 w-5 my-auto transition duration-75 group-hover:text-gray-900 ${
                          activeDropdown === index ? "text-gray-900" : ""
                        } `}
                      ></i>
                      <span
                        className={`ml-3 group-hover:text-gray-900 ${
                          activeDropdown === index ? "text-gray-900" : ""
                        }`}
                      >
                        {item.name}
                      </span>
                    </Link>
                  </li>
                );
              }

              // tabs have submenu
              if (item.subMenu) {
                return (
                  <li
                    key={item.id}
                    className="group"
                    onClick={() => handleDropdownSubmenuClick(index)}
                  >
                    <Link
                      href="#"
                      className={`flex items-center p-2 text-[#8699ad] rounded-lg group-hover:bg-gray-100 ${
                        activeDropdown === index ? "bg-gray-100" : ""
                      }`}
                    >
                      <i
                        className={`${
                          item.icon
                        } flex-shrink-0 w-5 my-auto transition duration-75 group-hover:text-gray-900 ${
                          activeDropdown === index ? "text-gray-900" : ""
                        } `}
                      ></i>

                      <span
                        className={`flex-1 ml-3 group-hover:text-gray-900 ${
                          activeDropdown === index ? "text-gray-900" : ""
                        }`}
                      >
                        {item.name}
                      </span>
                      <i
                        className={`fa-solid fa-caret-down w-3 h-3 group-hover:text-gray-900 ${
                          activeDropdown === index ? "text-gray-900" : ""
                        }`}
                      ></i>
                    </Link>

                    <ul
                      className={`${
                        activeDropdown === index ? "block" : "hidden"
                      } py-2 space-y-2 bg-white z-10`}
                    >
                      {item.subMenu.map((item, i) => (
                        <li key={item.id}>
                          <Link
                            href="#"
                            // className={`flex items-center p-2 text-[#8699ad] rounded-lg ${
                            //   activeDropdown === i ? "bg-gray-100" : ""
                            // }`}
                            className={`flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 hover:bg-gray-100 ${
                              activeSubmenu === i &&
                              item.belongToTabParent - 1 === index
                                ? "bg-gray-300"
                                : ""
                            }`}
                            onClick={(e) => {
                              console.log(index);
                              e.stopPropagation();
                              handleSubmenuClick(i);
                            }}
                          >
                            {item.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </li>
                );
              }
            })}
          </ul>
        </div>
      </aside>
    </div>
  );
};

export default SidebarManageInfo;

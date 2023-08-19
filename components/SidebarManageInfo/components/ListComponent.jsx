import Link from "next/link";
import React, { useState } from "react";

const ListComponent = (props) => {
  const { item, index } = props;
  const [show, setShow] = useState(false);
  function handleSelectSub(item) {
    console.log(">>> Sub <<<", item);
  }

  return (
    <li className="group" onClick={() => setShow(!show)}>
      <Link
        href="#"
        className={`flex items-center p-2 text-[#8699ad] rounded-lg group-hover:bg-gray-100 ${
          show ? "bg-gray-100" : ""
        }`}
      >
        <i
          className={`${
            item.icon
          } flex-shrink-0 w-5 my-auto transition duration-75 group-hover:text-gray-900 ${
            show ? "text-gray-900" : ""
          }`}
        ></i>
        <span
          className={`flex-1 ml-3 group-hover:text-gray-900 ${
            show ? "text-gray-900" : ""
          }`}
        >
          {item.name}
        </span>
        {item.subMenu && (
          <i
            className={`fa-solid fa-caret-down w-3 h-3 group-hover:text-gray-900 ${
              show ? "text-gray-900" : ""
            }`}
          ></i>
        )}
      </Link>

      {item.subMenu != null && (
        <ul className={`py-2 space-y-2 bg-white z-10 ${!show && "hidden"}`}>
          {item.subMenu.map((item, i) => (
            <li key={item.id}>
              <Link
                href="#"
                className={`flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 hover:bg-gray-100 `}
                onClick={() => handleSelectSub(item.name)}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </li>
  );
};

export default ListComponent;

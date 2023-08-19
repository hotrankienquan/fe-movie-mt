import Link from "next/link";
import React, { useEffect, useState } from "react";

const SubChild = ({ item, setActiveItem, activeItem }) => {
  function handleSelectSub(e, name) {
    e.preventDefault();
    setActiveItem(name);
  }
  return (
    <li key={item.id}>
      <Link
        href="#"
        className={`flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 hover:bg-gray-100 ${
          activeItem === item.name ? "bg-gray-500" : ""
        }`}
        onClick={(e) => handleSelectSub(e, item.name)}
      >
        {item.name}
      </Link>
    </li>
  );
};

export default SubChild;

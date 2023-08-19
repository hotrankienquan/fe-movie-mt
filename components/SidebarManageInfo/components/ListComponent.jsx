import Link from "next/link";
import React, { forwardRef, useState } from "react";
import withClickOutside from "../../../utils/withClickOutside";
import SubChild from "./SubChild";

const ListComponent = forwardRef((props, ref) => {
  const [activeItem, setActiveItem] = useState(null);
  function handleOpen(e) {
    props.setOpen(!props.open);
  }
  return (
    <li
      className={`group ${props.open && "bg-slate-50"}`}
      onClick={(e) => handleOpen(e)}
      ref={ref}
    >
      <Link
        href="#"
        className={`flex items-center p-2 text-[#8699ad] rounded-lg group-hover:bg-gray-100`}
      >
        <i
          className={` flex-shrink-0 w-5 my-auto transition duration-75 group-hover:text-gray-900`}
        ></i>

        <span className={`flex-1 ml-3 group-hover:text-gray-900 `}>
          {props.item.name}
        </span>
        <i
          className={`fa-solid fa-caret-down w-3 h-3 group-hover:text-gray-900`}
        ></i>
      </Link>

      {props.item.subMenu != null && (
        <ul
          className={`py-2 space-y-2 bg-white z-10 ${!props.open && "hidden"}`}
        >
          {props.item.subMenu.map((item, i) => (
            <SubChild
              item={item}
              key={item.id}
              setActiveItem={setActiveItem}
              activeItem={activeItem}
            />
          ))}
        </ul>
      )}
    </li>
  );
});

export default withClickOutside(ListComponent);

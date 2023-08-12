import React, { useEffect, useRef, useState } from "react";

const ArrowGotoUp = () => {
  const [showArrowTop, setShowArrowTop] = useState(false);
  const arrowRef = useRef();

  const arrowClass = `cursor-pointer text-2xl fixed right-4 bottom-4 z-50 border border-black rounded-full bg-white h-14 w-14 flex items-center justify-center shadow-md transition-all duration-500 ${
    showArrowTop ? "opacity-100 visible" : "opacity-0 invisible"
  }`;

  let handleClickToTop = (e) => {
    window.scroll({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    let handleScroll = () => {
      if (window.scrollY >= 400) {
        setShowArrowTop(true);
        // console.log("true");
      } else {
        setShowArrowTop(false);
        // console.log("false");
      }
    };

    window.addEventListener("scroll", handleScroll);

    // return () => {
    //   window.removeEventListener("scroll", handleScroll);
    // };
  }, []);

  // useEffect(() => {
  //   let handleClickToTop = (e) => {
  //     window.scroll({ top: 0, behavior: "smooth" });
  //   };

  //   arrowRef.current.addEventListener("click", handleClickToTop);

  //   // return () => {
  //   //   arrowRef.current.removeEventListener("click", handleClickToTop);
  //   // };
  // }, []);

  return (
    <div>
      <div ref={arrowRef} className={arrowClass} onClick={handleClickToTop}>
        <i className="fa-solid fa-arrow-up"></i>
      </div>
    </div>
  );
};

export default ArrowGotoUp;

import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { arrSliderLatestFilm, settings } from "./constants";
import Movie from './components/Movie'

const SliderLastetFilm = () => {
  function getAll(data){
    // console.log("data get all item",data)
  }

  return (
    <div className="mt-20 mb-8 -mx-2.5">
      <div className="px-2.5 mb-4">
        <h2 className="text-[#da966e] text-3xl font-normal border-l-4 pl-2.5">
          Phim Mới Nhất
        </h2>
      </div>
      <Slider {...settings}>
        {arrSliderLatestFilm.map((item, index) => {
          return (
            <Movie key={item.id} item={item} getAll={getAll}/>
          )
        })}
      </Slider>
    </div>
  );
};

export default SliderLastetFilm;

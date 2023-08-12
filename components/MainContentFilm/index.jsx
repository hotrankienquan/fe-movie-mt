import Link from "next/link";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} z-10`}
      style={{
        ...style,
        display: "absolute",
        top: "50%",
        right: 0,
      }}
      onClick={onClick}
    ></div>
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} z-10`}
      style={{
        ...style,
        display: "absolute",
        top: "50%",
        left: 0,
      }}
      onClick={onClick}
    />
  );
}

const MainContentFilm = () => {
  const arrSliderCategory = [
    {
      id: 1,
      title: "Phim chiếu rạp",
      image: [
        "https://img.vxdn.net/t-max/w_312/h_468/tulsa-king-season-1-1630854430.webp",
        "https://phimmoiyyy.net/wp-content/uploads/2023/07/Oppenheimer.jpg",
        "https://img.vxdn.net/t-max/w_312/h_468/black-panther-wakanda-forever-1630854429.jpg",
        "https://bluphim.com/Content/Imgs/Movies/thumb-2547.jpg",
        "https://bluphim.com/Content/Imgs/Movies/thumb-2610.jpg?id=1382b45",
        "https://bluphim.com/Content/Imgs/Movies/thumb-2579.jpg?id=d96a445",
        "https://bluphim.com/Content/Imgs/Movies/thumb-2548.jpg",
        "https://bluphim.com/Content/Imgs/Movies/thumb-2580.jpg?id=82d87b5",
      ],
    },
    {
      id: 2,
      title: "Phim hoạt hình",
      image: [
        "https://img.vxdn.net/t-max/w_312/h_468/tulsa-king-season-1-1630854430.webp",
        "https://phimmoiyyy.net/wp-content/uploads/2023/07/Oppenheimer.jpg",
        "https://img.vxdn.net/t-max/w_312/h_468/black-panther-wakanda-forever-1630854429.jpg",
        "https://bluphim.com/Content/Imgs/Movies/thumb-2547.jpg",
        "https://bluphim.com/Content/Imgs/Movies/thumb-2610.jpg?id=1382b45",
        "https://bluphim.com/Content/Imgs/Movies/thumb-2579.jpg?id=d96a445",
        "https://bluphim.com/Content/Imgs/Movies/thumb-2548.jpg",
        "https://bluphim.com/Content/Imgs/Movies/thumb-2580.jpg?id=82d87b5",
      ],
    },
    {
      id: 3,
      title: "Phim hành động",
      image: [
        "https://img.vxdn.net/t-max/w_312/h_468/tulsa-king-season-1-1630854430.webp",
        "https://phimmoiyyy.net/wp-content/uploads/2023/07/Oppenheimer.jpg",
        "https://img.vxdn.net/t-max/w_312/h_468/black-panther-wakanda-forever-1630854429.jpg",
        "https://bluphim.com/Content/Imgs/Movies/thumb-2547.jpg",
        "https://bluphim.com/Content/Imgs/Movies/thumb-2610.jpg?id=1382b45",
        "https://bluphim.com/Content/Imgs/Movies/thumb-2579.jpg?id=d96a445",
        "https://bluphim.com/Content/Imgs/Movies/thumb-2548.jpg",
        "https://bluphim.com/Content/Imgs/Movies/thumb-2580.jpg?id=82d87b5",
      ],
    },
    {
      id: 4,
      title: "Phim kiếm hiệp",
      image: [
        "https://img.vxdn.net/t-max/w_312/h_468/tulsa-king-season-1-1630854430.webp",
        "https://phimmoiyyy.net/wp-content/uploads/2023/07/Oppenheimer.jpg",
        "https://img.vxdn.net/t-max/w_312/h_468/black-panther-wakanda-forever-1630854429.jpg",
        "https://bluphim.com/Content/Imgs/Movies/thumb-2547.jpg",
        "https://bluphim.com/Content/Imgs/Movies/thumb-2610.jpg?id=1382b45",
        "https://bluphim.com/Content/Imgs/Movies/thumb-2579.jpg?id=d96a445",
        "https://bluphim.com/Content/Imgs/Movies/thumb-2548.jpg",
        "https://bluphim.com/Content/Imgs/Movies/thumb-2580.jpg?id=82d87b5",
      ],
    },
  ];

  var settings = {
    className: "list_slider_film",
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 5,
    initialSlide: 0,
    // autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    swipeToSlide: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="grid grid-cols-6 -mx-2.5 gap-6">
      {/* LEFT */}
      <div className="col-span-4">
        {arrSliderCategory.map((item, i) => (
          <div key={item.id} className="mb-10">
            <div className="px-2.5 mb-4">
              <h3 className="text-[#da966e] text-2xl font-normal border-l-4 pl-2.5">
                {item.title}
              </h3>
            </div>
            <Slider {...settings}>
              {item.image.map((item, i) => (
                <div key={i} className="h-full">
                  <div className="relative h-full mx-2.5 overflow-hidden group">
                    <Link
                      href="#"
                      className="flex h-full items-center justify-center z-50"
                    >
                      <img
                        src={item}
                        alt="user profile avatar"
                        className="h-full block w-full object-cover group-hover:scale-110 transition-all duration-300 group-hover:opacity-50 "
                      />
                      <i className="fa-solid fa-circle-play text-4xl absolute text-white scale-150 opacity-0 group-hover:scale-100 group-hover:opacity-80 duration-500 ease-in-out"></i>
                    </Link>

                    {/* <div className="h-full flex items-center justify-center">
                      <Link
                        href="#"
                        className="h-full absolute -top-2/4 group-hover:top-[40%] block scale-150 opacity-0 text-white group-hover:scale-100 group-hover:opacity-80 duration-500 ease-in-out"
                      >
                        <i className="fa-solid fa-circle-play text-4xl"></i>
                      </Link>
                    </div> */}

                    <div className="absolute bottom-0 left-0 right-0 text-center p-2 bg-black bg-opacity-70">
                      <span className=" block text-white">
                        <h3 className="whitespace-nowrap text-ellipsis overflow-hidden">
                          <Link href="/cc" title="film">
                            OpenHeimmerccccccccccccccccccccccccccccccccc
                          </Link>
                        </h3>
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        ))}
      </div>

      {/* RIGHT */}
      <div className="col-span-2">
        <div className="px-2.5 mb-4">
          <h3 className="text-[#da966e] text-2xl font-normal border-l-4 pl-2.5">
            Top Trending
          </h3>
        </div>

        <div>
          <div className="flex items-center p-2.5">
            <div className="w-20 h-26">
              <Link href="#">
                <img
                  src="https://bluphim.com/Content/Imgs/Movies/thumb-2610.jpg?id=1382b45"
                  alt="film"
                  className="object-cover block w-full h-full border-[1px]"
                />
              </Link>
            </div>

            <div className="bg-white flex-1">
              <h3>
                <a href="#">OpenHeimmer</a>
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainContentFilm;

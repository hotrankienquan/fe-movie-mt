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
export var settings = {
  className: "slider_latest_film",
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 5,
  slidesToScroll: 1,
  initialSlide: 0,
  autoplay: true,
  speed: 1000,
  autoplaySpeed: 5000,
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

export const arrSliderLatestFilm = [
  {
    id: 1,
    title: "Thất nghiệp chuyển sinh",
    views: "24,123",
    updated: "2023-08-12",
    image:
      "https://img.vxdn.net/t-max/w_312/h_468/tulsa-king-season-1-1630854430.webp",
  },
  {
    id: 2,
    title: "Thế chiến Z",
    views: "36,723",
    updated: "2023-07-12",
    image: "https://phimmoiyyy.net/wp-content/uploads/2023/07/Oppenheimer.jpg",
  },
  {
    id: 3,
    title: "Cậu bé mất tích",
    views: "42,863",
    updated: "2023-06-12",
    image:
      "https://img.vxdn.net/t-max/w_312/h_468/black-panther-wakanda-forever-1630854429.jpg",
  },
  {
    id: 4,
    title: "Thợ săn quái vật",
    views: "42,863",
    updated: "2023-06-12",
    image: "https://bluphim.com/Content/Imgs/Movies/thumb-2547.jpg",
  },
  {
    id: 5,
    title: "Thợ săn quái vật",
    views: "42,863",
    updated: "2023-06-12",
    image: "https://bluphim.com/Content/Imgs/Movies/thumb-2610.jpg?id=1382b45",
  },
  {
    id: 6,
    title: "Thợ săn quái vật",
    views: "42,863",
    updated: "2023-06-12",
    image: "https://bluphim.com/Content/Imgs/Movies/thumb-2579.jpg?id=d96a445",
  },
  {
    id: 7,
    title: "Thợ săn quái vật",
    views: "42,863",
    updated: "2023-06-12",
    image: "https://bluphim.com/Content/Imgs/Movies/thumb-2548.jpg",
  },
  {
    id: 8,
    title: "Thợ săn quái vật",
    views: "42,863",
    updated: "2023-06-12",
    image: "https://bluphim.com/Content/Imgs/Movies/thumb-2580.jpg?id=82d87b5",
  },
];

import MainContentFilm from "../components/MainContentFilm";
import SliderTrendingFilm from "../components/SliderTrendFilm";

export default function Dashboard({
  dataMovies,
  arrFavoriteMovie,
  arrWatchLaterMovie,
}) {
  return (
    <>
      <SliderTrendingFilm
        movies={dataMovies}
        arrFavoriteMovie={arrFavoriteMovie}
        arrWatchLaterMovie={arrWatchLaterMovie}
      />
      <MainContentFilm
        movies={dataMovies}
        arrFavoriteMovie={arrFavoriteMovie}
        arrWatchLaterMovie={arrWatchLaterMovie}
      />
    </>
  );
}

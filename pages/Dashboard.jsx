import MainContentFilm from "../components/MainContentFilm";
import SliderLastetFilm from "../components/SliderLatestFilm";

export default function Dashboard({ movies }) {
  return (
    <>
      <SliderLastetFilm movies={movies} />
      <MainContentFilm movies={movies} />
    </>
  );
}

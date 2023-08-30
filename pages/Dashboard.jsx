import MainContentFilm from "../components/MainContentFilm";
import SliderTrendingFilm from "../components/SliderTrendFilm";

export default function Dashboard({ dataMovies }) {
  // movies nay luu vo redux lun di, m thay movies m truyen tu index vao roi vo day truyen vo 2 comp nua, no re render lien tuc, bo vao redux xong cung update UI meo dung,nay demo cai tim r do
  // luuw heet vo roi tinh, bo bot may cai prop truyen truyen nay di
  return (
    <>
      <SliderTrendingFilm movies={dataMovies} />
      <MainContentFilm movies={dataMovies} />
    </>
  );
}

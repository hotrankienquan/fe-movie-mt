import React from "react";
import LayoutRoot from "../../components/Layout";
import axios from "axios";
import Breadcrumb from "../../components/BreadCrumb";
import Heading from "../../components/Heading";
import LayoutAllFilm from "../../components/LayoutAllFilm";
import Pagination from "../../components/Pagination";

const MoreFilm = ({ nameMoreFilm }) => {
  return (
    <LayoutRoot>
      <div className="mt-16">
        <Breadcrumb content={nameMoreFilm.replace(/-/g, " ")} />

        <Heading content={nameMoreFilm.replace(/-/g, " ")} />

        {/* <LayoutAllFilm arrMovie={arrMovie} /> */}

        {/* {arrMovie.length !== 0 ? (
          <Pagination
            paginationData={{
              currentPage,
              totalPages,
              setCurrentPage: setCurrentPage,
            }}
          />
        ) : (
          ""
        )} */}
      </div>
    </LayoutRoot>
  );
};

export default MoreFilm;

export async function getServerSideProps(context) {
  const nameMoreFilm = context.params.moreFilm;

  let allCategory = await axios.get(
    `${process.env.NEXT_PUBLIC_URL}/api/v1/category`
  );
  return {
    props: {
      nameMoreFilm,
      categories: allCategory.data.data,
    },
  };
}

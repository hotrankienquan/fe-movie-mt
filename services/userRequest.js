import axios from "axios";
import Cookies from "js-cookie";

export const forgotPwdUser = async (formData, router, toast) => {
  // dispatch(getUsersStart());
  const base_url = process.env.NEXT_PUBLIC_URL;
  try {
    const res = await axios.put(
      `${base_url}/api/v1/auth/forgot-pwd-user`,
      formData
    );
    console.log(res);
    if (res.data.code === 200) {
      alert(res.data.mes);
    }
    router.push("/login");
    return res;
  } catch (err) {
    // dispatch(getUsersFailed());
    console.log(err);
    if (err.response.data.code === 404) {
      toast(err.response.data.mes);
    }
    // throw new Error(err);
  }
};

// SEARCH MOVIES
export const searchMovies = async (query) => {
  const base_url = process.env.NEXT_PUBLIC_URL;
  try {
    const res = await axios.get(
      `${base_url}/api/v1/movie/search-movie?q=${query}`
    );
    return res;
  } catch (err) {
    console.log(err);
    throw new Error(err);
  }
};

export const getMoviesByCate = async (cateId, currentPage, pageSize) => {
  const base_url = process.env.NEXT_PUBLIC_URL;
  try {
    const res = await axios.get(
      `${base_url}/api/v1/movie/get-category-movie?cateId=${cateId}&page=${currentPage}&pageSize=${pageSize}`
    );
    return res;
  } catch (err) {
    console.log(err);
    throw new Error(err);
  }
};

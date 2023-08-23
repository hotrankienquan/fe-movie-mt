import {
  loginFailed,
  loginStart,
  loginSuccess,
  logOutSuccess,
  logOutFailed,
  logOutStart,
} from "./authSlice";
import axios from "axios";
// import Cookies from "js-cookie";

import Cookies from "universal-cookie";
const cookies = new Cookies();
////////////////////******************** AUTH ********************////////////////////////////
export const login = async (user, dispatch, router) => {
  const base_url = process.env.NEXT_PUBLIC_URL;
  dispatch(loginStart());
  try {
    const res = await axios.post(`${base_url}/api/v1/auth/login`, user);
    if (res.data.code == 200) {
      let c = res.data.data.accessToken.toString()
      cookies.set("user-server","abc")
      cookies.set("accessToken", c)
      dispatch(loginSuccess(res.data.data));
      // Cookies.set(
      //   "dataUser",
      //   JSON.stringify({ accessToken: res?.data?.data?.accessToken })
      // );
      router.push("/");
    }
  } catch (err) {
    dispatch(loginFailed());
    alert(err.response.data.err.mes);
  }
};

export const register = async (user, dispatch, navigate) => {
  dispatch(registerStart());
  try {
    await axios.post("/v1/auth/register", user);
    dispatch(registerSuccess());
    navigate("/login");
  } catch (err) {
    console.log(err);
    dispatch(registerFailed("Something is wrong"));
  }
};

export const logOut = async (dispatch, id, router, accessToken, axiosJWT) => {
  const base_url = process.env.NEXT_PUBLIC_URL;
  dispatch(logOutStart());
  try {
    await axios.post(`${base_url}/api/v1/auth/logout`, id);
    cookies.remove("accessToken")
    dispatch(logOutSuccess());
    router.push("/");
  } catch (err) {
    dispatch(logOutFailed());
  }
};

////////////////////******************** USERS ********************////////////////////////////
export const getAllUsers = async (token, dispatch, axiosJWT) => {
  // dispatch(getUsersStart());
  const base_url = process.env.NEXT_PUBLIC_URL;
  try {
    const res = await axiosJWT.get(`${base_url}/api/v1/user/`, {
      headers: { token: `Bearer ${token}` },
    });
    // dispatch(getUsersSuccess(res.data));
    // console.log(res);
    return res;
  } catch (err) {
    // dispatch(getUsersFailed());
    console.log(err);
    throw new Error(err);
  }
};

export const updateInfoUser = async (
  formData,
  token,
  refreshToken,
  dispatch,
  axiosJWT
) => {
  // dispatch(getUsersStart());
  const base_url = process.env.NEXT_PUBLIC_URL;
  try {
    const res = await axiosJWT.put(
      `${base_url}/api/v1/user/update-info-user`,
      formData,
      {
        headers: { token: `Bearer ${token}` },
      }
    );
    const newData = { ...res.data.data, accessToken: token, refreshToken };
    // console.log(res);
    if (res.status == 200) {
      dispatch(loginSuccess(newData));
    }
    return res;
  } catch (err) {
    // dispatch(getUsersFailed());
    console.log(err);
    if (err.response.data.codeName === "DuplicateKey")
      alert(`${Object.keys(err.response.data.keyValue)[0]} đã tồn tại`);
    throw new Error(err);
  }
};

export const deleteUser = async (id, dispatch, token) => {
  dispatch(deleteUsersStart());
  try {
    const res = await axios.delete("/v1/user/" + id, {
      headers: { token: `Bearer ${token}` },
    });
    dispatch(deleteUsersSuccess(res.data));
  } catch (err) {
    dispatch(deleteUsersFailed(err.response.data));
  }
};

////////////////////******************** MOVIES ********************////////////////////////////
export const getAllMovies = async () => {
  const base_url = process.env.NEXT_PUBLIC_URL;
  // dispatch(getUsersStart());
  try {
    const res = await axios.get(`${base_url}/api/v1/movie`);
    // console.log(res);
    return res;
    // dispatch(getUsersSuccess(res.data));
  } catch (err) {
    // dispatch(getUsersFailed());
    console.log(err);
    throw new Error(err);
  }
};

export const getFavoriteMovies = async (token, dispatch, axiosJWT) => {
  // dispatch(getUsersStart());
  const base_url = process.env.NEXT_PUBLIC_URL;

  try {
    const res = await axiosJWT.get(`${base_url}/api/v1/user/get-love-movie`, {
      headers: { token: `Bearer ${token}` },
    });
    // dispatch(getUsersSuccess(res.data));
    // console.log(res);
    return res;
  } catch (err) {
    // dispatch(getUsersFailed());
    console.log(err);
    throw new Error(err);
  }
};

export const getWatchLaterMovies = async (token, dispatch, axiosJWT) => {
  // dispatch(getUsersStart());
  const base_url = process.env.NEXT_PUBLIC_URL;

  try {
    const res = await axiosJWT.get(
      `${base_url}/api/v1/user/get-bookmark-movie`,
      {
        headers: { token: `Bearer ${token}` },
      }
    );
    // dispatch(getUsersSuccess(res.data));
    // console.log(res);
    return res;
  } catch (err) {
    // dispatch(getUsersFailed());
    console.log(err);
    throw new Error(err);
  }
};

export const toggleFavoriteMovie = async (userId, movieId, isLove) => {
  const data = { userId, movieId, isLove };
  const base_url = process.env.NEXT_PUBLIC_URL;
  // dispatch(getUsersStart());
  try {
    const res = await axios.post(
      `${base_url}/api/v1/movie/add-love-movie`,
      data
    );
    console.log(res);
    return res;
    // dispatch(getUsersSuccess(res.data));
  } catch (err) {
    // dispatch(getUsersFailed());
    console.log(err);
    throw new Error(err);
  }
};

export const toggleBookmarkMovie = async (userId, movieId, isBookmark) => {
  const data = { userId, movieId, isBookmark };
  const base_url = process.env.NEXT_PUBLIC_URL;
  // dispatch(getUsersStart());
  try {
    const res = await axios.post(
      `${base_url}/api/v1/movie/add-bookmark-movie`,
      data
    );
    console.log(res);
    return res;
    // dispatch(getUsersSuccess(res.data));
  } catch (err) {
    // dispatch(getUsersFailed());
    console.log(err);
    throw new Error(err);
  }
};

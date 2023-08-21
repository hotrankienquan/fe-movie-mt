import {
  loginFailed,
  loginStart,
  loginSuccess,
  logOutSuccess,
  logOutFailed,
  logOutStart,
} from "./authSlice";
import axios from "axios";

////////////////////******************** AUTH ********************////////////////////////////
export const login = async (user, dispatch, router) => {
  const base_url = process.env.NEXT_PUBLIC_URL;
  dispatch(loginStart());
  try {
    const res = await axios.post(`${base_url}/api/v1/auth/login`, user);
    if (res.data.code == 200) {
      dispatch(loginSuccess(res.data.data));
      router.push("/");
    }
  } catch {
    dispatch(loginFailed());
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
    await axiosJWT.post(`${base_url}/api/v1/auth/logout`, id, {
      headers: { token: `Bearer ${accessToken}` },
    });
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
    const res = await axios.get(`${base_url}/api/v1/movie/`);
    // console.log(res);
    return res;
    // dispatch(getUsersSuccess(res.data));
  } catch (err) {
    // dispatch(getUsersFailed());
    console.log(err);
    throw new Error(err);
  }
};

export const toggleLoveMovie = async (userId, movieId, isLove) => {
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

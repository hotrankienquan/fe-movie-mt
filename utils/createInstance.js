import axios from "axios";
import jwt_decode from "jwt-decode";

const refreshToken = async () => {
  try {
    // truyen len cookies
    const base_url = process.env.NEXT_PUBLIC_URL;
    const res = await axios.post(`${base_url}/api/v1/auth/refresh`, {
      withCredentials: true,
    });
    return res.data;
  } catch (err) {
    console.log(err);
  }
};

export const createAxios = (user, dispatch, stateSuccess) => {
  const newInstance = axios.create();
  newInstance.interceptors.request.use(
    async (config) => {
      let date = new Date();
      const decodedToken = jwt_decode(user?.accessToken);
      //   check accesstoken expires , get new token with refresh token
      if (decodedToken.exp < date.getTime() / 1000) {
        const data = await refreshToken();
        const refreshUser = {
          ...user,
          accessToken: data.accessToken,
        };
        dispatch(stateSuccess(refreshUser));
        config.headers["token"] = "Bearer " + data.accessToken;
      }
      //
      return config;
    },
    (err) => {
      return Promise.reject(err);
    }
  );
  return newInstance;
};

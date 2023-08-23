import axios from "axios";
import Cookies from "js-cookie";

export const changePwdUser = async (formData, router) => {
  // dispatch(getUsersStart());
  const base_url = process.env.NEXT_PUBLIC_URL;
  try {
    const res = await axios.put(
      `${base_url}/api/v1/auth/change-pwd-user`,
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
      alert(err.response.data.mes);
    }
    // throw new Error(err);
  }
};

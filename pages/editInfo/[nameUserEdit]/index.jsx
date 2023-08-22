import React, { useState } from "react";
import LayoutManageInfo from "../../../components/LayoutManageInfo";
import Link from "next/link";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { updateInfoUser } from "../../../store/apiRequest";
import { createAxios } from "../../../utils/createInstance";

const editInfoUser = ({ nameUserEdit }) => {
  const router = useRouter();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.login.currentUser);
  const accessToken = user?.accessToken;
  const refreshToken = user?.refreshToken;
  let axiosJWT = createAxios(user, null, null);
  const userId = user?._id;

  const [formValue, setFormValue] = useState({
    username: "",
    givenName: "",
    familyName: "",
    email: "",
    national: "",
    avatar: "",
  });
  console.log(formValue);
  const { username, givenName, familyName, email, national, avatar } =
    formValue;

  const handleChange = (e) => {
    // console.log([e.target]);
    const { name, value } = e.target;
    setFormValue((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmitForm = async (e) => {
    e.preventDefault();
    if (
      !userId ||
      !username ||
      !givenName ||
      !familyName ||
      !email ||
      !national
    ) {
      alert("Nhập đầy đủ các trường");
      return;
    }
    try {
      const formData = { ...formValue, userId };
      console.log("submit", formData);
      // console.log(formData);
      const response = await updateInfoUser(
        formData,
        accessToken,
        refreshToken,
        dispatch,
        axiosJWT
      );
      console.log(response);
      setFormValue((prev) => ({
        ...prev,
        username: "",
        givenName: "",
        familyName: "",
        email: "",
        national: "",
        avatar: "",
      }));
      alert("Chỉnh sửa thành công!");

      router.push(`user/${response.data.data.username}`);
    } catch (error) {
      console.log(error);
      alert(error || "ADD error");
    }
  };

  return (
    <LayoutManageInfo>
      <div className="mt-20 mb-8 min-h-[400px] overflow-hidden">
        <div className="flex justify-start items-center mb-[25px]">
          <div className="h-[130px] w-[130px]">
            <img
              className="block w-full rounded-[50%] object-cover"
              src={avatar || `/unknowAvatar.webp`}
              alt="pic"
            />
          </div>

          <div className="ml-[15px]">
            <div className="mb-[10px] max-w-[300px]">
              <h1 className="w-full text-xl font-semibold text-white whitespace-nowrap text-ellipsis overflow-hidden">
                {nameUserEdit}
              </h1>
            </div>
            <div>
              <Link
                className="py-[6px] px-[10px] bg-[#567] text-[#c8d4e0] text-sm font-normal tracking-[.075em] rounded-[3px] shadow cursor-pointer select-none hover:bg-[#678] hover:text-white"
                href="#"
              >
                Thay avatar
              </Link>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-6 gap-4">
          <div className="col-span-2 col-start-3">
            <h2 className="mb-[20px] text-xl font-normal text-white">
              Chỉnh sửa thông tin
            </h2>
            <div className="">
              <div className="mb-[20px]">
                <label className="block mb-[5px] text-base text-white">
                  Username
                </label>
                <input
                  className="block p-[9px] w-full text-[#89a] bg-[#2c3440] shadow-md outline-none rounded focus:bg-white focus:text-black"
                  name="username"
                  type="text"
                  onChange={handleChange}
                  value={username}
                />
              </div>

              <div className="mb-[20px] grid grid-cols-4 gap-4">
                <div className="col-span-2">
                  <label className="block mb-[5px] text-base text-white">
                    Tên
                  </label>
                  <input
                    className="block p-[9px] w-full text-[#89a] bg-[#2c3440] shadow-md outline-none rounded focus:bg-white focus:text-black"
                    name="givenName"
                    type="text"
                    onChange={handleChange}
                    value={givenName}
                  />
                </div>
                <div className="col-span-2">
                  <label className="block mb-[5px] text-base text-white">
                    Họ
                  </label>
                  <input
                    className="block p-[9px] w-full text-[#89a] bg-[#2c3440] shadow-md outline-none rounded focus:bg-white focus:text-black"
                    name="familyName"
                    type="text"
                    onChange={handleChange}
                    value={familyName}
                  />
                </div>
              </div>

              <div className="mb-[20px]">
                <label className="block mb-[5px] text-base text-white">
                  Email
                </label>
                <input
                  className="block p-[9px] w-full text-[#89a] bg-[#2c3440] shadow-md outline-none rounded focus:bg-white focus:text-black"
                  name="email"
                  type="email"
                  onChange={handleChange}
                  value={email}
                />
              </div>

              <div className="mb-[20px]">
                <label className="block mb-[5px] text-base text-white">
                  Quốc gia
                </label>
                <input
                  className="block p-[9px] w-full text-[#89a] bg-[#2c3440] shadow-md outline-none rounded focus:bg-white focus:text-black"
                  name="national"
                  type="text"
                  onChange={handleChange}
                  value={national}
                />
              </div>

              <div className="flex items-center justify-end">
                <button
                  className="py-[9px] px-[16px] tracking-[.085em] text-sm font-bold text-[#f4fcf0] bg-[#00b020] rounded select-none cursor-pointer"
                  onClick={handleSubmitForm}
                >
                  Lưu
                </button>
                <button
                  className="ml-[10px] py-[9px] px-[16px] tracking-[.085em] text-sm font-bold text-[#f4fcf0] bg-[#2daaed] rounded select-none cursor-pointer"
                  onClick={() => {
                    router.back();
                  }}
                >
                  Trở lại
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </LayoutManageInfo>
  );
};

export default editInfoUser;

export async function getServerSideProps({ params }) {
  const nameUserEdit = params.nameUserEdit;
  return {
    props: {
      nameUserEdit,
    },
  };
}

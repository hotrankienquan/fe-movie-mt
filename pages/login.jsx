import React, { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useRouter } from "next/router";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch } from "react-redux";
import { login } from "../store/apiRequest";
import Link from "next/link";
const LoginPage = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const schema = yup.object().shape({
    password: yup.string().min(6).max(32).required(),
    username: yup.string().min(6).max(20).required(),
  });
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });
  const onSubmit = async (data) => {
    console.log(">>> Data LOGIN <<<", data);
    login(data, dispatch, router);
  };

  return (
    <section className="bg-gray-50 dark:bg-gray-900">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              Đăng nhập tài khoản
            </h1>
            <form
              className="space-y-4 md:space-y-6"
              onSubmit={handleSubmit(onSubmit)}
            >
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Nhập username
                </label>

                <input
                  type="text"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Tên đăng nhập..."
                  {...register("username", { required: true })}
                />
                {
                  <span className="text-red-500">
                    {errors.username?.message}
                  </span>
                }
              </div>
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Nhập mật khẩu
                </label>

                <input
                  type="password"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="..."
                  {...register("password", { required: true })}
                />
                {
                  <span className="text-red-500">
                    {errors.password?.message}
                  </span>
                }
              </div>
              <div className="flex items-start">
                <div className="flex items-center h-5">
                  <input
                    id="terms"
                    aria-describedby="terms"
                    type="checkbox"
                    className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                    required=""
                  />
                </div>
                <div className="ml-3 text-sm">
                  <label className="font-light text-gray-500 dark:text-gray-300">
                    Tôi đồng ý{" "}
                    <a
                      className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                      href="#"
                    >
                      Điều khoản
                    </a>
                  </label>
                </div>
              </div>
              <button
                type="submit"
                className="w-full text-white bg-black hover:opacity-70 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
              >
                Đăng nhập
              </button>
              <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                Bạn chưa có tài khoản?{" "}
                <Link
                  href="/register"
                  className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                >
                  Đăng ký ngay
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
      <ToastContainer />
    </section>
  );
};

export default LoginPage;

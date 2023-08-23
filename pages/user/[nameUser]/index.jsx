import Link from "next/link";
import LayoutManageInfo from "../../../components/LayoutManageInfo";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import FavoriteMovie from "./components/FavoriteMovie";
import WatchLaterMovie from "./components/WatchLaterMovie";
import { useSelector } from "react-redux";
import ProtectedRoute from "../../../HOCs/ProtectedRoutes";

const arrTabs = [
  { id: 1, tabName: "Profile", tabPath: "profile" },
  { id: 2, tabName: "Favorite", tabPath: "favorite" },
  { id: 3, tabName: "WatchLater", tabPath: "watchLater" },
];

const UserManagePage = ({ nameUser }) => {
  const router = useRouter();
  const user = useSelector((state) => state.auth.login.currentUser);
  

  const [activeTab, setActiveTab] = useState(router?.query?.tab || "profile");
  const handleNavigate = (tabName) => {
    router.push(`/user/${nameUser.replace(/\s+/g, "-")}?tab=${tabName}`);
  };
  
  return (
    <ProtectedRoute>
      <LayoutManageInfo>
        <div className="mt-20 mb-8 overflow-hidden">
          <div className="flex justify-start items-center mb-[25px]">
            <div className="h-[130px] w-[130px]">
              <img
                className="block w-full rounded-[50%] object-cover"
                src="/unknowAvatar.webp"
                alt="pic"
              />
            </div>

            <div className="ml-[15px]">
              <div className="mb-[10px] max-w-[300px]">
                <h1 className="w-full text-xl font-semibold text-white whitespace-nowrap text-ellipsis overflow-hidden">
                  {nameUser}
                </h1>
              </div>
              <div>
                <Link
                  className="py-[6px] px-[10px] bg-[#567] text-[#c8d4e0] text-sm font-normal tracking-[.075em] rounded-[3px] shadow cursor-pointer select-none hover:bg-[#678] hover:text-white"
                  href={`/editInfo/${nameUser}`}
                >
                  Edit profile
                </Link>
              </div>
            </div>
          </div>

          {/* TABs */}
          <nav className="block border-[1px] border-[#24303c] rounded-[3px]">
            <ul className="scroll_tab_manage_user flex flex-nowrap mx-auto items-center overflow-x-auto">
              {arrTabs.map((item, index) => (
                <li key={item.id} className="mx-auto">
                  <Link
                    href="#"
                    className={`block p-[12px] text-base text-white underline-offset-8 hover:underline ${
                      activeTab == item.tabPath ? "underline" : ""
                    }`}
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      setActiveTab(item.tabPath);
                      handleNavigate(item.tabPath);
                    }}
                  >
                    {item.tabName}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {(router && router.asPath == `/user/${nameUser}`) ||
        (router && router.query && router.query?.tab == "profile") ? (
          <div className="min-h-[300px]">
            <h2 className="text-white">profile</h2>
          </div>
        ) : (
          ""
        )}

        {/* FILMs */}

        {router && router.query && router.query?.tab == "favorite" && (
          <FavoriteMovie />
        )}
        {router && router.query && router.query?.tab == "watchLater" && (
          <WatchLaterMovie />
        )}
      </LayoutManageInfo>
    </ProtectedRoute>

  );
};

export default UserManagePage;

export async function getServerSideProps({ params }) {
  const nameUser = params.nameUser;
  return {
    props: {
      nameUser,
    },
  };
}

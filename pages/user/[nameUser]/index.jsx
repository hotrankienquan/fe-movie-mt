import Link from "next/link";
import LayoutManageInfo from "../../../components/LayoutManageInfo";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import FavoriteMovie from "./components/FavoriteMovie";
import WatchLaterMovie from "./components/WatchLaterMovie";
import { useSelector } from "react-redux";

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

  const [showBigAvatar, setShowBigAvatar] = useState(false);

  // useEffect(() => {
  //   router.push(`/user/${nameUser.replace(/\s+/g, "-")}?tab=${activeTab}`);
  // }, [activeTab]);

  // useEffect(() => {
  //   if (user == null) {
  //     router.push("/");
  //   } else return;
  // }, []);

  return (
    <LayoutManageInfo>
      <div className="mt-20 mb-8 overflow-hidden">
        <div className="flex justify-start items-center mb-[25px]">
          <div className="h-[130px] w-[130px] select-none">
            <img
              className="block w-full rounded-[50%] object-cover hover:border-[1px] transition-all duration-100 cursor-pointer"
              src={user?.avatar || "/unknowAvatar.webp"}
              alt="pic"
              onClick={() => {
                setShowBigAvatar(true);
              }}
            />
          </div>

          {/* big overlay img */}
          {showBigAvatar && (
            <>
              <div
                className="fixed inset-x-0 inset-y-0 bg-black opacity-70 z-[150] cursor-pointer"
                onClick={() => {
                  setShowBigAvatar(false);
                }}
              ></div>

              <div className="fixed top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 flex items-center justify-center select-none z-[200]">
                <img
                  className="block w-[500px] h-[500px] object-cover z-[200]"
                  src={user?.avatar || "/unknowAvatar.webp"}
                  alt="big pic"
                />
                <i
                  className="fa-solid fa-xmark flex items-center justify-center w-[30px] h-[30px] absolute top-1 right-1 bg-white opacity-60 rounded-[50%] z-[250] cursor-pointer hover:opacity-100"
                  onClick={() => {
                    setShowBigAvatar(false);
                  }}
                ></i>
              </div>
            </>
          )}

          <div className="ml-[15px]">
            <div className="mb-[10px] max-w-[300px]">
              <h1 className="w-full text-xl font-semibold text-white whitespace-nowrap text-ellipsis overflow-hidden">
                {user?.username || nameUser}
              </h1>
            </div>
            <div>
              <Link
                className="py-[6px] px-[10px] bg-[#567] text-[#c8d4e0] text-sm font-normal tracking-[.075em] rounded-[3px] shadow cursor-pointer select-none hover:bg-[#678] hover:text-white"
                href={`/editInfo/${user?.username || nameUser}`}
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

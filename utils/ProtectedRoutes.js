import { useRouter } from "next/router";
import { useSelector } from "react-redux";

const ProtectedRoute = ({ children }) => {
  const router = useRouter();
  const user = useSelector((state) => state.auth.login.currentUser) || null;
  console.log(user);

  if (user == null || !user.accessToken) {
    router.push("/");
  }

  if (user || user?.accessToken) {
    return children;
  }
};

export default ProtectedRoute;

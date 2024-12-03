import { useSelector } from "react-redux";
import { useRouter } from "expo-router";
import { useEffect } from "react";

const PrivateRoute = ({ children }) => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const router = useRouter();

  useEffect(() => {
    if (!isAuthenticated) {
      router.replace("/login");
    }
  }, [isAuthenticated]);

  if (!isAuthenticated) return null;

  return children;
};

export default PrivateRoute;

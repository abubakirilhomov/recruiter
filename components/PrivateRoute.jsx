import React from "react";
import { useSelector } from "react-redux";
import { useRouter } from "expo-router";
import { ActivityIndicator, View } from "react-native";

const PrivateRoute = ({ children }) => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const router = useRouter();
  const [isReady, setIsReady] = React.useState(false);

  React.useEffect(() => {
    setIsReady(true); // Ensure the component is fully mounted
  }, []);

  React.useEffect(() => {
    if (isReady && !isAuthenticated) {
      router.replace("/login");
    }
  }, [isAuthenticated, isReady, router]);

  if (!isReady || !isAuthenticated) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  return children; // Render children when authenticated
};

export default PrivateRoute;

import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useRouter } from "expo-router";
import { ActivityIndicator, View } from "react-native";

const PrivateRoute = ({ children }) => {
  const [isReady, setIsReady] = useState(false);
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const router = useRouter();

  useEffect(() => {
    setIsReady(true); // Устанавливаем, что компонент готов
  }, []);

  useEffect(() => {
    if (isReady && !isAuthenticated) {
      router.replace("/login"); // Перенаправление после монтирования
    }
  }, [isReady, isAuthenticated]);

  if (!isReady || !isAuthenticated) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  return children;
};

export default PrivateRoute;

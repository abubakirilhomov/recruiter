// app/_layout.tsx
import React from "react";
import { Slot, Stack } from "expo-router";
import { Provider } from "react-redux";
import store from "../store/store";
import "../global.css";

const RootLayout = () => {
  return (
    <Provider store={store}>
      <Stack>
        <Slot/>
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="login" options={{ headerShown: false }} />
        <Stack.Screen name="register" options={{ headerShown: false }} />
      </Stack>
    </Provider>
  );
};

export default RootLayout;

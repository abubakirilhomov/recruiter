import React from "react";
import { Text, View, TextInput, TouchableOpacity, Image } from "react-native";
import loginImg from "../assets/images/login-img.jpg";
import { SafeAreaView } from "react-native-safe-area-context";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "expo-router";
import { login } from "../store/slices/AuthSlice";

const Login = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const store = useSelector((store) => store);

  console.log(store);

  const handleLogin = (e) => {
    const userData = {
      username: "JohnSmith", // mock username
      email: "Johnsmiths@gmail.com", // mock email
    };

    dispatch(login(userData)); // dispatch with payload
    router.push("/home"); // Correct navigation for expo-router
  };

  return (
    <SafeAreaView>
      <Image source={loginImg} style={{ width: "100%", height: 200 }} />
      <View className="max-w-[90%] w-full mx-auto h-screen">
        <Text className="text-3xl font-bold text-primary-default mt-2 mb-2">Welcome Back!</Text>
        <Text className="mb-4">Fill in your login details</Text>
        <View>
          <Text className="mb-2">Email Address or Username</Text>
          <View className="flex-row rounded-2xl px-2 border-primary-light border items-center">
            <MaterialCommunityIcons name="email-open-outline" size={20} color="#FF7754" />
            <TextInput className="p-4 w-full" placeholder="Johnsmiths@gmail.com" />
          </View>
        </View>

        <View>
          <Text className="mb-2 mt-3">Password</Text>
          <View className="flex-row rounded-2xl px-2 border-primary-light border items-center">
            <MaterialIcons name="lock-outline" size={20} color="#FF7754" />
            <TextInput className="p-4 w-full" placeholder="········" />
          </View>
        </View>

        <View className="mt-8">
          <TouchableOpacity onPress={handleLogin} className="bg-accent rounded-3xl flex-row justify-center py-4 shadow-sm shadow-accent">
            <Text className="text-white text-xl font-semibold">Login</Text>
          </TouchableOpacity>

          <TouchableOpacity className="bg-transparent mt-3 rounded-3xl flex-row justify-center py-4 border border-accent">
            <Text className="text-default text-xl font-semibold">Create an account</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity className="flex-row justify-center mt-[60%]" onPress={() => router.push("/register")}>
          <Text>Don't have an account?</Text> <Text className="font-bold underline">Register here</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Login;

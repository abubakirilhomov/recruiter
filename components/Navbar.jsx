import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import logo from "../assets/images/recruiter-logo.png";
import Feather from "@expo/vector-icons/Feather";
import Ionicons from "@expo/vector-icons/Ionicons";
import AntDesign from "@expo/vector-icons/AntDesign";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import Entypo from "@expo/vector-icons/Entypo";

const Navbar = () => {
  return (
    <View className="w-full py-4 bg-black">
      <View className="flex flex-row items-center justify-between w-full px-4">
        {/* Logo */}
        <Image style={{ width: 50, height: 50 }} source={logo} />

        {/* Icons */}
        <View className="flex flex-row space-x-4">
          <TouchableOpacity>
            <Feather name="search" size={24} color="gray" />
          </TouchableOpacity>
          <TouchableOpacity>
            <Ionicons name="chatbubble-outline" size={24} color="gray" />
          </TouchableOpacity>
          <TouchableOpacity>
            <AntDesign name="hearto" size={24} color="gray" />
          </TouchableOpacity>
          <TouchableOpacity>
            <MaterialIcons name="notifications-none" size={24} color="gray" />
          </TouchableOpacity>
          <TouchableOpacity>
            <Entypo name="menu" size={24} color="gray" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Navbar;

import { View, Text, Image, TouchableOpacity, SafeAreaView } from "react-native";
import React from "react";
import logo from "../assets/images/recruiter-logo.png";
import Feather from "@expo/vector-icons/Feather";
import Ionicons from "@expo/vector-icons/Ionicons";
import AntDesign from "@expo/vector-icons/AntDesign";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import Entypo from "@expo/vector-icons/Entypo";

const Navbar = () => {
  return (
    <SafeAreaView className="w-full py-4" style={{ backgroundColor: "#E6E4E6" }}>
      <View
        className="flex flex-row items-center justify-between w-full px-4"
        style={{
          justifyContent: "space-between",
          maxWidth: "90%",
          marginHorizontal: "auto",
        }}
      >
        {/* Logo */}
        <Image style={{ width: 60, height: 60 }} source={logo} />

        {/* Icons */}
        <View style={{ flexDirection: "row" }}>
          <TouchableOpacity style={{ marginRight: 10 }}>
            <Feather name="search" size={28} color="gray" />
          </TouchableOpacity>
          <TouchableOpacity style={{ marginRight: 10 }}>
            <Ionicons name="chatbubble-outline" size={28} color="gray" />
          </TouchableOpacity>
          <TouchableOpacity style={{ marginRight: 10 }}>
            <AntDesign name="hearto" size={28} color="gray" />
          </TouchableOpacity>
          <TouchableOpacity style={{ marginRight: 10 }}>
            <MaterialIcons name="notifications-none" size={28} color="gray" />
          </TouchableOpacity>
          <TouchableOpacity>
            <Entypo name="menu" size={28} color="gray" />
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Navbar;

import React, { useState } from "react";
import { Text, View, TextInput, TouchableOpacity, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Eye, EyeOff } from "lucide-react-native";

export default function RegistrationForm() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: "#E9D8FD",
        justifyContent: "center",
        padding: 16,
      }}
    >
      <View style={{ width: "100%", maxWidth: 400, alignSelf: "center" }}>
        <View
          style={{
            backgroundColor: "#fff",
            borderRadius: 16,
            padding: 16,
            shadowColor: "#000",
            shadowOpacity: 0.1,
            shadowRadius: 4,
            elevation: 2,
          }}
        >
          <Text
            style={{
              fontSize: 20,
              fontWeight: "bold",
              textAlign: "center",
              marginBottom: 16,
            }}
          >
            Register Your Account
          </Text>

          <View style={{ marginBottom: 12 }}>
            <TextInput
              placeholder="Username"
              style={{
                width: "100%",
                paddingHorizontal: 16,
                paddingVertical: 12,
                borderRadius: 8,
                borderWidth: 1,
                borderColor: "#D1D5DB",
              }}
            />
          </View>

          <View style={{ marginBottom: 12 }}>
            <TextInput
              placeholder="Email"
              style={{
                width: "100%",
                paddingHorizontal: 16,
                paddingVertical: 12,
                borderRadius: 8,
                borderWidth: 1,
                borderColor: "#D1D5DB",
              }}
            />
          </View>

          <View style={{ position: "relative", marginBottom: 16 }}>
            <TextInput
              secureTextEntry={!showPassword}
              placeholder="Password"
              style={{
                width: "100%",
                paddingHorizontal: 16,
                paddingVertical: 12,
                borderRadius: 8,
                borderWidth: 1,
                borderColor: "#D1D5DB",
              }}
            />
            <TouchableOpacity
              style={{ position: "absolute", right: 16, top: 16 }}
              onPress={() => setShowPassword(!showPassword)}
            >
              {showPassword ? (
                <EyeOff size={24} color="#9CA3AF" />
              ) : (
                <Eye size={24} color="#9CA3AF" />
              )}
            </TouchableOpacity>
          </View>

          <TouchableOpacity
            style={{
              width: "100%",
              backgroundColor: "#8B5CF6",
              paddingVertical: 12,
              borderRadius: 8,
              alignItems: "center",
              marginTop: 8,
            }}
          >
            <Text style={{ color: "#fff", fontWeight: "bold" }}>Sign Up</Text>
          </TouchableOpacity>

          <View style={{ alignItems: "center", marginTop: 16 }}>
            <Text style={{ fontSize: 14, color: "#6B7280" }}>
              Or Continue with
            </Text>
            <View style={{ flexDirection: "row", marginTop: 8 }}>
              <TouchableOpacity style={{ marginHorizontal: 8 }}>
                <Image
                  source={{
                    uri: "https://i.pinimg.com/736x/42/75/49/427549f6f22470ff93ca714479d180c2.jpg",
                  }}
                  style={{ width: 40, height: 40, borderRadius: 20 }}
                />
              </TouchableOpacity>
              <TouchableOpacity style={{ marginHorizontal: 8 }}>
                <Image
                  source={{
                    uri: "https://t3.ftcdn.net/jpg/05/18/09/32/360_F_518093233_bYlgthr8ZLyAUQ3WryFSSSn3ruFJLZHM.jpg",
                  }}
                  style={{ width: 40, height: 40, borderRadius: 20 }}
                />
              </TouchableOpacity>
            </View>
          </View>

          <Text
            style={{
              textAlign: "center",
              fontSize: 14,
              color: "#6B7280",
              marginTop: 16,
            }}
          >
            Already have an account?
            <Text
              style={{ color: "#8B5CF6", fontWeight: "bold" }}
              onPress={() => alert("Navigate to login")}
            >
              {" "}
              Log in here
            </Text>
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

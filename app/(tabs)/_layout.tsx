import { Slot, Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import PrivateRoute from "@/components/PrivateRoute";

export default function TabsLayout() {
  return (
    <PrivateRoute>
        <Tabs
        screenOptions={{
          headerShown: false, // Скрыть заголовок
          tabBarActiveTintColor: "tomato", // Цвет активного таба
          tabBarInactiveTintColor: "gray", // Цвет неактивного таба
          tabBarStyle: { backgroundColor: "#fff" }, // Стиль нижней панели
        }}
      >
        <Tabs.Screen
          name="home"
          options={{
            tabBarLabel: "Главная",
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="home-outline" size={size} color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="profile"
          options={{
            tabBarLabel: "Профиль",
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="person-outline" size={size} color={color} />
            ),
          }}
        />
      </Tabs>
    </PrivateRoute>
  );
}

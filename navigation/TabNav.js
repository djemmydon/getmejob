import React from "react";
import HomeScreen from "../pages/HomeScreen";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { FontAwesome5 } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import ProfileScreen from "../pages/ProfileScreen";

const Tab = createBottomTabNavigator();

function TabNav() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: true,
        headerShown: false,
        tabBarStyle: { backgroundColor: "#6d9773" },
        tabBarInactiveBackgroundColor: "",
        tabBarActiveTintColor: "#0c3b2e",
        tabBarInactiveTintColor: "#fff",
        tabBarHideOnKeyboard: true,
      }}
    >
      <Tab.Screen
        name="Main"
        component={HomeScreen}
        options={{
          headerShown: false,

          tabBarIcon: ({ color }) => (
            <FontAwesome5 name="home" size={20} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Message"
        component={HomeScreen}
        options={{
          headerShown: false,

          tabBarIcon: ({ color }) => (
            <Entypo name="message" size={20} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Saved"
        component={HomeScreen}
        options={{
          headerShown: false,

          tabBarIcon: ({ color }) => (
            <Entypo name="save" size={20} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          headerShown: false,

          tabBarIcon: ({ color }) => (
            <FontAwesome name="user-circle" size={20} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default TabNav;

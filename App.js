import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { StatusBar } from "expo-status-bar";
import HomeScreen from "./pages/HomeScreen";
import TabNav from "./navigation/TabNav";
import { useFonts } from "expo-font";
import JobScreen from "./pages/JobScreen";
import JobDetailsScreen from "./pages/JobDetailsScreen";
import LoginScreen from "./pages/AuthPage/LoginScreen";
import RegisterScreen from "./pages/AuthPage/RegisterScreen";
import React, { useState } from "react";

const Stack = createStackNavigator();

export default function App() {
  const [user, setUser] = React.useState(false);
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {user ? (
          <>
            <Stack.Screen
              name="Login"
              component={LoginScreen}
              options={{
                headerShown: false,
              }}
            />

            <Stack.Screen
              options={{
                headerShown: false,
              }}
              name="Register"
              component={RegisterScreen}
            />
          </>
        ) : (
          <>
            <Stack.Screen
              name="Home"
              options={{
                headerShown: false,
              }}
              component={TabNav}
            />
            <Stack.Screen
              name="JobScreen"
              component={JobScreen}
              options={{
                headerShown: false,
              }}
            />
          </>
        )}

        <Stack.Screen name="JobDetails" component={JobDetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

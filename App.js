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
import React, { useEffect, useState } from "react";
import { Provider, useSelector } from "react-redux";
import { store } from "./redux/store";
// import { store } from "./redux/store";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { View, useWindowDimensions } from "react-native";
import { Image } from "react-native";
import TextFont from "./assets/fonts/useThisFont";
const Stack = createStackNavigator();

export default function App() {
  const [users, setUsers] = React.useState({});
  const [isShown, setIsShown] = React.useState(true);
  const getData = async () => {
    try {
      const value = await AsyncStorage.getItem("user");
      const jsonValue = value != null ? JSON.parse(value) : null;
      setUsers(jsonValue);
    } catch (e) {
      // error reading value
    }
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsShown(false);
    }, 1000);

    return () => {
      // clear timeout when the component unmounts
      clearTimeout(timeout);
    };
  }, []);

  useEffect(() => {
    getData();
    // const data = JSON.parse(user);
    // const keys = AsyncStorage.getAllKeys();
    // AsyncStorage.removeItem("user");
    // console.warn(users?.user, "dsnooinonfv");
  }, []);

  const { width } = useWindowDimensions();
  if (isShown) {
    return (
      <View
        style={{
          flex: 1,
          width: "100%",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Image
          style={{ width: 140, height: 140 }}
          source={require("./assets/land.gif")}
        />
        <TextFont style={{fontSize: 20}}>GETMEJOB</TextFont>
      </View>
    );
  }

  // console.warn(user, "dsnooinonfv");
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          {!users?.token && (
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
          )}
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

          <Stack.Screen name="JobDetails" component={JobDetailsScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

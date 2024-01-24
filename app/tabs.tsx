import React, { useState } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { View, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import About from "./about/about";
import Welcome from "./welcome/welcome";
import NewScreen from "./welcome/screen";
import Register from "./register/register";
import Signin from "./signin/signin";
import { useAppSelector } from "./store/hooks";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function MyBottomTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={Welcome}

        options={{ headerShown: false , tabBarShowLabel:false, 
          tabBarIcon: ({focused}) => (
            <Ionicons
              name="home"
              color={focused ? "deepskyblue" : "black"}
              size={25}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Settings"
        component={NewScreen}
        options={{ headerShown: false, tabBarShowLabel:false, 
          tabBarIcon: ({focused}) => (
            <Ionicons
              name="newspaper-outline"
              color={focused ? "deepskyblue" : "black"}
              size={25}
            />
          ), }}
      />
    </Tab.Navigator>
  );
}

export default function tabs() {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const Logging = useAppSelector((state) => state.logins.value);

  return (
    <Stack.Navigator>
      {Logging ? (
        <Stack.Group>
          <Stack.Screen
            name="HomeTabs"
            component={MyBottomTabs}
            options={{ headerShown: false }}
          />
        </Stack.Group>
      ) : (
        <Stack.Group>
          <Stack.Screen
            name="WelcomeLogin"
            component={About}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Register"
            component={Register}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="SignIn"
            component={Signin}
            options={{ headerShown: false }}
          />
        </Stack.Group>
      )}
    </Stack.Navigator>
  );
}

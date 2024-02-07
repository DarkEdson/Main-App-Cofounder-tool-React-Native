import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import About from "./about/about";
import Welcome from "./welcome/welcome";
import NewScreen from "./welcome/screen";
import Register from "./register/register";
import Signin from "./signin/signin";
import ResourcesHome from "./screens/resourcesScreens/resourceHome";
import Resource from "./screens/resourcesScreens/resource";
import { useAppSelector } from "./store/hooks";
import CoFoundersFindForm from "./screens/coFounders/coFoundersFindForm";
import CoFoundersFindSearch from "./screens/coFounders/coFoundersFindSearch";
import CoFoundersFindResult from "./screens/coFounders/coFoundersFindResult";
import CustomBackButton from "./components/customBackButton";

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
          <Stack.Screen
            name="CoFoundersFind"
            component={CoFoundersFindForm}
            options={{ title: 'Find your Co-Founder' }}
          />
          <Stack.Screen
            name="FindingPage"
            component={CoFoundersFindSearch}
            options={{ title: '' }}
          />
          <Stack.Screen
            name="ResulltPage"
            component={CoFoundersFindResult}
            options={{ title: '' ,  headerLeft: () => (
              <CustomBackButton  />
            ),}}
          />
          <Stack.Screen
            name="ResourcesHome"
            component={ResourcesHome}
            options={{ title: 'Articles' }}
          />
          <Stack.Screen
            name="Resource"
            component={Resource}
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



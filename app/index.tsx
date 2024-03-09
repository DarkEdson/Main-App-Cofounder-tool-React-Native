import { Provider } from "react-redux";
import { store } from "./store/store";
import { SplashScreen, Slot } from 'expo-router';
import { NavigationContainer } from "@react-navigation/native";
import '@tamagui/core/reset.css'
import * as Font from 'expo-font';
import { TamaguiProvider } from 'tamagui'
import config from './tamagui.config'

import React , { useEffect }from "react";
import TabsScreen from "./tabs";
import { LogBox } from "react-native";
LogBox.ignoreLogs([
  'The action \'NAVIGATE\' with payload {"name":"WelcomeLogin"} was not handled by any navigator.',
]);



export default function Page() {
  const [loaded] = Font.useFonts({
    Inter: require('@tamagui/font-inter/otf/Inter-Medium.otf'),
    InterBold: require('@tamagui/font-inter/otf/Inter-Bold.otf'),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) return null;

  return (
    <Provider store={store}>
      <TamaguiProvider config={config}>
        <NavigationContainer independent={true}>
          <TabsScreen />
        </NavigationContainer>
        </TamaguiProvider>
    </Provider>
  );
}

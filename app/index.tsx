import { Provider } from "react-redux";
import { store } from "./store/store";
import { NavigationContainer } from "@react-navigation/native";
import '@tamagui/core/reset.css'

import { TamaguiProvider } from 'tamagui'
import config from './tamagui.config'

import React from "react";
import TabsScreen from "./tabs";
import { LogBox } from "react-native";
LogBox.ignoreLogs([
  'The action \'NAVIGATE\' with payload {"name":"WelcomeLogin"} was not handled by any navigator.',
]);


export default function Page() {
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

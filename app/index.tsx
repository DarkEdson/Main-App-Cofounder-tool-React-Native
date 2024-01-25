import { Provider } from "react-redux";
import { store } from "./store/store";
import { NavigationContainer } from "@react-navigation/native";

import React from "react";
import TabsScreen from "./tabs";
import { LogBox } from "react-native";
LogBox.ignoreLogs([
  'The action \'NAVIGATE\' with payload {"name":"WelcomeLogin"} was not handled by any navigator.',
]);

export default function Page() {
  return (
    <Provider store={store}>
        <NavigationContainer independent={true}>
          <TabsScreen />
        </NavigationContainer>
    </Provider>
  );
}

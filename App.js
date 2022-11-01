import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import TelaInicial from "./components/TelaInicial";
import TelaTobey from "./components/TelaTobey";
import TelaAndrew from "./components/TelaAndrew";
import TelaTom from "./components/TelaTom";

const Stack = createStackNavigator();

export default function App () {
  return (
    <NavigationContainer >
      <Stack.Navigator>
        <Stack.Screen name="Tela inicial" component = { TelaInicial } />
        <Stack.Screen name="Tobey" component = { TelaTobey } />
        <Stack.Screen name="Andrew" component = { TelaAndrew } />
        <Stack.Screen name="Tom" component = { TelaTom } />
      </Stack.Navigator>
    </NavigationContainer>
  )
};
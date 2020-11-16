import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { Main } from './main';
import { JotaTree } from './jota/jota.navigation';
import { BusTree } from './bus/bus.navigation';
import { GameConfig } from './game-config/GameConfig';

const Stack = createStackNavigator();

export function Tree() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="Main">
      <Stack.Screen name="Main" component={Main} />
      <Stack.Screen name="GameConfig" component={GameConfig} />
      <Stack.Screen name="Jota" component={JotaTree} />
      <Stack.Screen name="Bus" component={BusTree} />
    </Stack.Navigator>
  );
}

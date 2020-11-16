import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { Main } from './main';
import { JotaTree } from './jota/jota.navigation';
import { BusTree } from './bus/bus.navigation';

const Stack = createStackNavigator();

export function Tree() {
  return (
    <Stack.Navigator initialRouteName="Main">
      <Stack.Screen name="Main" component={Main} />
      <Stack.Screen name="Jota" component={JotaTree} />
      <Stack.Screen name="Bus" component={BusTree} />
    </Stack.Navigator>
  );
}

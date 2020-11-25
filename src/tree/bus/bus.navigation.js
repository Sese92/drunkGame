import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import { BusElection } from './BusElection/BusElection';
import { Bus } from './Bus/Bus';

const Stack = createStackNavigator();

export function BusTree() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="BusElection">
      <Stack.Screen name="BusElection" component={BusElection} />
      <Stack.Screen name="Bus" component={Bus} />
    </Stack.Navigator>
  );
}

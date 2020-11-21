import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import { BusElection } from './BusElection';
import { Bus } from './Bus';

// import { useTheme } from '@react-navigation/native';

const Stack = createStackNavigator();

export function BusTree() {
  // const { colors } = useTheme();

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

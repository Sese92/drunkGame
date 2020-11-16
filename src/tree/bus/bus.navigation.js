import React from 'react';

import { View, Text } from 'react-native';

import { createStackNavigator } from '@react-navigation/stack';
// import { useTheme } from '@react-navigation/native';

const Stack = createStackNavigator();

const BusWelcome = () => {
  return (
    <View>
      <Text>Welcome to Bus</Text>
    </View>
  );
};

export function BusTree() {
  // const { colors } = useTheme();

  return (
    <Stack.Navigator initialRouteName="busWelcome">
      <Stack.Screen name="busWelcome" component={BusWelcome} />
    </Stack.Navigator>
  );
}

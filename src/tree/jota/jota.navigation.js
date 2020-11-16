import React from 'react';

import { View, Text } from 'react-native';

import { createStackNavigator } from '@react-navigation/stack';
// import { useTheme } from '@react-navigation/native';

const Stack = createStackNavigator();

const JotaWelcome = () => {
  return (
    <View>
      <Text>Welcome to jota!</Text>
    </View>
  );
};

export function JotaTree() {
  // const { colors } = useTheme();

  return (
    <Stack.Navigator initialRouteName="jotaWelcome">
      <Stack.Screen name="jotaWelcome" component={JotaWelcome} />
    </Stack.Navigator>
  );
}

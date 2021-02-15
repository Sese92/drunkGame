import React, { useState } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { StatusBar } from 'expo-status-bar';

import { Host, Portal } from 'react-native-portalize';

import { SplashScreen } from './../ui/organisms/SplashScreen';
import { Main } from './main';
import { Jota } from './jota/Jota';
import { GameConfig } from './game-config/GameConfig';
import { BusTree } from './bus/bus.navigation';

const Stack = createStackNavigator();

export function Tree() {
  const [showSplash, setShowSplash] = useState(true);

  return (
    <Host>
      {showSplash && (
        <Portal>
          <SplashScreen onAfterReady={() => setShowSplash(false)} />
        </Portal>
      )}
      <StatusBar style="light" />

      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName="Main">
        <Stack.Screen name="Main" component={Main} />
        <Stack.Screen name="GameConfig" component={GameConfig} />
        <Stack.Screen name="Jota" component={Jota} />
        <Stack.Screen name="Bus" component={BusTree} />
      </Stack.Navigator>
    </Host>
  );
}

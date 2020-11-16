import React from 'react';

import { View, Text } from 'react-native';

// import { useTheme } from '@react-navigation/native';

import { Button } from '../ui/atoms/Button';

import { flex } from '../ui/style/layout';
import { margins, paddings } from '../ui/style/spacing';

export const Main = () => {
  // const { colors } = useTheme();

  return (
    <View style={[flex.centerContent, paddings.p5]}>
      <Text style={{ fontSize: 30 }}>Welcome to the drunk game!</Text>
      <View style={[margins.mt8]}>
        <Button>
          <Text style={{ textAlign: 'center' }}>Jota</Text>
        </Button>
        <Button style={[margins.mt8]}>
          <Text>Autobús</Text>
        </Button>
      </View>
    </View>
  );
};

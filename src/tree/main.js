import React from 'react';
import { useDispatch } from 'react-redux';

import { View, Text } from 'react-native';

import { useNavigation, useTheme } from '@react-navigation/native';

import { selectGame } from '../services/game/game.service';

import { Button } from '../ui/atoms/Button';

import { flex } from '../ui/style/layout';
import { margins, paddings } from '../ui/style/spacing';

export const Main = () => {
  const { colors } = useTheme();
  const navigation = useNavigation();
  const dispatch = useDispatch();

  return (
    <View
      style={[
        flex.centerContent,
        paddings.p5,
        { backgroundColor: colors.primary },
      ]}>
      <Text style={{ fontSize: 40, color: colors.white, fontWeight: 'bold' }}>
        Let´s get drunk!
      </Text>
      <Text style={[margins.mt4, { fontSize: 20, color: colors.white }]}>
        How do you want to do it?
      </Text>
      <View style={[margins.mt8]}>
        <Button
          onPress={() => {
            dispatch(selectGame({ game: 'Jota' }));
            navigation.navigate('GameConfig', { game: 'Jota' });
          }}>
          <Text
            style={{
              textAlign: 'center',
              fontWeight: 'bold',
              fontSize: 20,
            }}>
            Jota
          </Text>
        </Button>
        <Button
          style={[margins.mt8]}
          onPress={() => {
            dispatch(selectGame({ game: 'Bus' }));
            navigation.navigate('GameConfig', { game: 'Bus' });
          }}>
          <Text
            style={{
              textAlign: 'center',
              fontWeight: 'bold',
              fontSize: 20,
            }}>
            Autobús
          </Text>
        </Button>
      </View>
    </View>
  );
};

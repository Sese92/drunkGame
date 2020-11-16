import React, { useState } from 'react';

import { SafeAreaView, View, Text, TextInput } from 'react-native';

import { useNavigation, useTheme } from '@react-navigation/native';

import { Button } from '../../ui/atoms/Button';

import { flex } from '../../ui/style/layout';
import { margins, paddings } from '../../ui/style/spacing';

export const GameConfig = ({ route }) => {
  const { game } = route.params;
  const { colors } = useTheme();
  const navigation = useNavigation();

  console.log(game);
  console.log(navigation);

  const [players, savePlayers] = useState(['']);

  function removePlayer(playerPosition) {
    console.log(playerPosition);
    const removed = players.splice(playerPosition, 1);
    const playersFilter = players.filter((player) => player !== removed);
    savePlayers(playersFilter);
  }

  return (
    <SafeAreaView style={[flex.on, { backgroundColor: colors.secondary }]}>
      <View style={[margins.m6]}>
        <Text style={{ textAlign: 'center', fontSize: 24, fontWeight: 'bold' }}>
          Game configuration
        </Text>

        <View style={[margins.mt4]}>
          <Text
            style={[
              margins.mb3,
              { textAlign: 'center', fontSize: 18, fontWeight: 'bold' },
            ]}>
            Players
          </Text>

          {players.map((player, i) => (
            <View
              key={i}
              style={[flex.row, margins.mb3, { alignItems: 'center' }]}>
              <Text style={[margins.mr3, { fontWeight: 'bold', fontSize: 16 }]}>
                {i + 1}.
              </Text>
              <TextInput
                placeholder={'Player ' + (i + 1)}
                style={[
                  paddings.px3,
                  paddings.py2,
                  {
                    backgroundColor: colors.white,
                    borderRadius: 100,
                    width: '80%',
                  },
                ]}
              />
              {players.length > 1 && (
                <Button onPress={() => removePlayer(i)}>
                  <Text style={{ fontWeight: 'bold' }}>X</Text>
                </Button>
              )}
            </View>
          ))}

          <View style={[margins.mt4]}>
            <Button onPress={() => savePlayers([...players, ''])}>
              <Text style={{ fontWeight: 'bold' }}>Add player</Text>
            </Button>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

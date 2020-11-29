import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { View, Text, TextInput } from 'react-native';

import { setNames } from '../../services/game/game.service';
import { selectPlayers } from '../../features/gameConfiguration/configuration.store';
import { margins, paddings } from '../../ui/style/spacing';
import { Button } from '../../ui/atoms/Button';

export const PlayersNames = ({ continueToGame }) => {
  const players = useSelector(selectPlayers);
  const names = Array(players.length).fill('');
  const dispatch = useDispatch();

  function play() {
    dispatch(setNames({ names: names }));
    continueToGame();
  }

  return (
    <View style={[margins.m6]}>
      <Text style={{ textAlign: 'center', fontSize: 24, fontWeight: 'bold' }}>
        Players
      </Text>
      <View style={[margins.mb8, margins.mt4]}>
        {names.map((name, i) => (
          <View key={i}>
            <TextInput
              placeholder={'Player ' + (i + 1)}
              onChangeText={(input) => (names[i] = input)}
              style={[
                paddings.px2,
                paddings.py1,
                margins.my1,
                { borderBottomWidth: 1, fontSize: 20 },
              ]}>
              {name}
            </TextInput>
          </View>
        ))}
      </View>
      <Button onPress={() => play()}>
        <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Play now!</Text>
      </Button>
    </View>
  );
};

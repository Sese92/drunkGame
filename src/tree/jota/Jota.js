import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { SafeAreaView, View, Text } from 'react-native';
import { useTheme } from '@react-navigation/native';

import { setTurn } from '../../services/game/game.service';
import {
  selectTurn,
  selectPlayers,
  selectRandomDice,
} from '../../features/gameConfiguration/configuration.store';
import { Button } from '../../ui/atoms/Button';
import { flex } from '../../ui/style/layout';
import { margins } from '../../ui/style/spacing';

import { Dice } from '../../ui/atoms/Dice';

export const Jota = () => {
  const { colors } = useTheme();
  const dispatch = useDispatch();

  const players = useSelector(selectPlayers);
  const turn = useSelector(selectTurn);
  const dice = useSelector(selectRandomDice);

  useEffect(() => {
    dispatch(setTurn({ turn: 0 }));
  }, []);

  function setNextTurn() {
    if (turn < players.length - 1) {
      dispatch(setTurn({ turn: turn + 1 }));
    } else {
      dispatch(setTurn({ turn: 0 }));
    }
  }

  return (
    <SafeAreaView style={[flex.on, { backgroundColor: colors.tertiary }]}>
      <View style={[flex.centerContent]}>
        <Dice dice={dice} />
        <Text style={[margins.mt5, { fontSize: 20 }]}>{dice.rule}</Text>
      </View>
      <View style={[margins.mx4]}>
        <Text
          style={[
            margins.mb4,
            { textAlign: 'center', fontWeight: 'bold', fontSize: 20 },
          ]}>
          {players[turn]}
        </Text>
        <Button onPress={() => setNextTurn()}>
          <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Roll it!</Text>
        </Button>
      </View>
    </SafeAreaView>
  );
};

import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { SafeAreaView, View, Text } from 'react-native';
import { useTheme } from '@react-navigation/native';

import { setTurn, removeCard } from '../../services/game/game.service';
import {
  selectTurn,
  selectCard,
  selectPlayers,
} from '../../features/gameConfiguration/configuration.store';
import { Button } from '../../ui/atoms/Button';
import { flex } from '../../ui/style/layout';
import { margins } from '../../ui/style/spacing';

export const Bus = () => {
  const { colors } = useTheme();
  const dispatch = useDispatch();

  const card = useSelector(selectCard);
  const players = useSelector(selectPlayers);
  const turn = useSelector(selectTurn);

  useEffect(() => {
    dispatch(setTurn({ turn: 0 }));
  }, []);

  function setNextTurn() {
    dispatch(removeCard({ card: card }));
    // if (turn < players.length - 1) {
    //   dispatch(setTurn({ turn: turn + 1 }));
    // } else {
    //   dispatch(setTurn({ turn: 0 }));
    // }
  }

  return (
    <SafeAreaView style={[flex.on, { backgroundColor: colors.tertiary }]}>
      <View style={[flex.centerContent]}>
        <Text
          style={[
            {
              textAlign: 'center',
              fontWeight: 'bold',
              fontSize: 60,
              fontStyle: 'italic',
            },
          ]}>
          {players[turn]}
        </Text>
        <View style={[margins.mx4]}>
          <Button onPress={() => setNextTurn()}>
            <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Roll it!</Text>
          </Button>
        </View>
      </View>
    </SafeAreaView>
  );
};

import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  SafeAreaView,
  View,
  Text,
  TouchableWithoutFeedback,
} from 'react-native';
import { useTheme } from '@react-navigation/native';

import { setTurn } from '../../services/game/game.service';
import {
  selectTurn,
  selectPlayers,
} from '../../features/gameConfiguration/configuration.store';
import { selectRandomDice } from '../../features/jota/jota.store';
import { Button } from '../../ui/atoms/Button';
import { flex } from '../../ui/style/layout';
import { margins, paddings } from '../../ui/style/spacing';

import { Dice } from '../../ui/atoms/Dice';

export const Jota = () => {
  const { colors } = useTheme();
  const dispatch = useDispatch();

  const players = useSelector(selectPlayers);
  const turn = useSelector(selectTurn);
  const dice = useSelector(selectRandomDice);
  const [resultsScreen, saveResultsScreen] = useState(false);

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
      {resultsScreen ? (
        <TouchableWithoutFeedback
          onPress={() => {
            setNextTurn(), saveResultsScreen(false);
          }}>
          <View style={[flex.centerContent]}>
            <Dice dice={dice} />
            <Text style={[margins.mt5, { fontSize: 20 }]}>{dice.rule}</Text>
          </View>
        </TouchableWithoutFeedback>
      ) : (
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
          <View style={[margins.my8]}>
            <Button
              style={[
                paddings.px6,
                {
                  borderColor: colors.black,
                  borderWidth: 2,
                  borderRadius: 20,
                },
              ]}
              onPress={() => saveResultsScreen(true)}>
              <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Roll it!</Text>
            </Button>
          </View>
        </View>
      )}
    </SafeAreaView>
  );
};

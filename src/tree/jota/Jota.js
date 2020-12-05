import React, { useEffect, useState, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  SafeAreaView,
  View,
  Text,
  TouchableWithoutFeedback,
} from 'react-native';
import { useTheme } from '@react-navigation/native';

import { Portal } from 'react-native-portalize';
import { Modalize } from 'react-native-modalize';

import { setTurn } from '../../services/game/game.service';
import {
  selectTurn,
  selectPlayers,
} from '../../features/gameConfiguration/configuration.store';
import { selectDice, selectFirstRound } from '../../features/jota/jota.store';

import { FloatingTopBar } from '../../ui/atoms/FloatingBar';
import { Button } from '../../ui/atoms/Button';
import { RoundButton } from '../../ui/atoms/RoundButton';
import { flex } from '../../ui/style/layout';
import { margins, paddings } from '../../ui/style/spacing';

import { Dice } from '../../ui/atoms/Dice';
import {
  setPlayerAsJota,
  finishFirstRound,
} from '../../services/jota/jota.service';

export const Jota = () => {
  const { colors } = useTheme();
  const dispatch = useDispatch();

  const players = useSelector(selectPlayers);
  const turn = useSelector(selectTurn);
  const dice = useSelector(selectDice);
  const firstRound = useSelector(selectFirstRound);
  const [resultsScreen, saveResultsScreen] = useState(false);
  const [diceSelected, saveDiceSelected] = useState(null);

  const modalizeJota = useRef(null);

  useEffect(() => {
    dispatch(setTurn({ turn: 0 }));
  }, []);

  function setNextTurn() {
    if (diceSelected.number === 'J' && firstRound) {
      dispatch(setPlayerAsJota({ player: players[turn] }));
    }
    if (turn < players.length - 1) {
      dispatch(setTurn({ turn: turn + 1 }));
    } else {
      let anyJota = false;
      for (let i = 0; i < players.length; i++) {
        if (players[i].jota === true) {
          anyJota = true;
        }
      }
      if (anyJota) {
        dispatch(finishFirstRound());
      }
      dispatch(setTurn({ turn: 0 }));
    }
  }

  function rollIt() {
    saveDiceSelected(dice[Math.floor(Math.random() * dice.length)]);
    saveResultsScreen(true);
  }

  const onOpenPlayers = () => {
    modalizeJota.current?.open();
  };

  return (
    <SafeAreaView style={[flex.on, { backgroundColor: colors.tertiary }]}>
      {firstRound && (
        <Text style={{ fontSize: 16, fontWeight: 'bold', textAlign: 'center' }}>
          First round
        </Text>
      )}
      {!firstRound && (
        <FloatingTopBar style={{ left: 'auto' }}>
          <View style={[margins.mx4]}>
            <RoundButton onPress={() => onOpenPlayers()}>
              <Text
                style={{
                  color: colors.white,
                  fontWeight: 'bold',
                  fontSize: 20,
                }}>
                J
              </Text>
            </RoundButton>
          </View>
        </FloatingTopBar>
      )}
      <Portal>
        <Modalize ref={modalizeJota} adjustToContentHeight={true}>
          <View style={[margins.m5]}>
            <Text
              style={{ textAlign: 'center', fontSize: 24, fontWeight: 'bold' }}>
              Jota players
            </Text>
            {players.map((player, i) => (
              <View key={i}>
                {player.jota && (
                  <Text style={[margins.mt4, { fontSize: 18 }]}>
                    {player.name}
                  </Text>
                )}
              </View>
            ))}
          </View>
        </Modalize>
      </Portal>
      {resultsScreen ? (
        <TouchableWithoutFeedback
          onPress={() => {
            setNextTurn(), saveResultsScreen(false);
          }}>
          <View style={[flex.centerContent]}>
            <Dice dice={diceSelected} />
            {!firstRound && (
              <Text style={[margins.mt5, { fontSize: 20 }]}>
                {diceSelected.rule}
              </Text>
            )}
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
            {players[turn].name}
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
              onPress={() => rollIt()}>
              <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Roll it!</Text>
            </Button>
          </View>
        </View>
      )}
    </SafeAreaView>
  );
};

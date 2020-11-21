import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { SafeAreaView, View, Text } from 'react-native';
import { useNavigation, useTheme } from '@react-navigation/native';

import { setTurn, removeCard } from '../../services/game/game.service';
import {
  selectPlayers,
  selectTurn,
  selectCard,
} from '../../features/gameConfiguration/configuration.store';
import { Button } from '../../ui/atoms/Button';
import { Card, SmallCard } from '../../ui/atoms/Card';
import { flex } from '../../ui/style/layout';
import { margins, paddings } from '../../ui/style/spacing';

export const BusElection = () => {
  const navigation = useNavigation();

  const { colors } = useTheme();
  const dispatch = useDispatch();

  const card = useSelector(selectCard);
  const players = useSelector(selectPlayers);
  const turn = useSelector(selectTurn);

  const [flipCard, saveFlipCard] = useState(false);

  useEffect(() => {
    dispatch(setTurn({ turn: 0 }));
    saveFlipCard(false);
  }, []);

  function nextTurn() {
    if (turn < players.length - 1) {
      saveFlipCard(false);
      dispatch(removeCard({ card: card }));
      if (card.type !== 'Joker') {
        dispatch(setTurn({ turn: turn + 1 }));
      }
    } else {
      if (players[0].hand.length === 4) {
        navigation.navigate('Bus');
      } else {
        saveFlipCard(false);
        dispatch(removeCard({ card: card }));
        if (card.type !== 'Joker') {
          dispatch(setTurn({ turn: 0 }));
        }
      }
    }
  }

  function selectOption() {
    saveFlipCard(true);
  }

  function renderLeftButton() {
    switch (players[turn].hand.length) {
      case 0:
        return 'Red';
      case 1:
        return 'Up';
      case 2:
        return 'Inside';
      case 3:
        return 'Same';
    }
  }

  function renderRightButton() {
    switch (players[turn].hand.length) {
      case 0:
        return 'Black';
      case 1:
        return 'Down';
      case 2:
        return 'Outside';
      case 3:
        return 'Different';
    }
  }

  return (
    <SafeAreaView
      style={[
        flex.on,
        flex.centerContent,
        { backgroundColor: colors.tertiary },
      ]}>
      <Text
        style={[
          margins.mb2,
          {
            textAlign: 'center',
            fontWeight: 'bold',
            fontSize: 40,
            fontStyle: 'italic',
          },
        ]}>
        {players[turn].name}
      </Text>
      <View
        style={[
          flex.row,
          margins.mb6,
          { justifyContent: 'space-evenly', width: '100%' },
        ]}>
        {players[turn].hand.map(
          (card, i) =>
            card.type !== 'Joker' && <SmallCard key={i} card={card} />
        )}
      </View>

      <Card
        styles={{ height: '65%', width: '90%' }}
        flip={flipCard}
        card={flipCard ? card : null}
      />

      {!flipCard ? (
        <View
          style={[
            margins.mt3,
            flex.row,
            paddings.px3,
            {
              justifyContent: 'space-between',
              width: '100%',
            },
          ]}>
          <Button style={{ width: '25%' }} onPress={() => selectOption()}>
            <Text
              style={{ fontSize: 20, fontWeight: 'bold', textAlign: 'center' }}>
              {renderLeftButton()}
            </Text>
          </Button>
          {players[turn].hand.length > 0 && players[turn].hand.length < 3 && (
            <Button style={{ width: '25%' }} onPress={() => selectOption()}>
              <Text
                style={{
                  fontSize: 20,
                  fontWeight: 'bold',
                  textAlign: 'center',
                }}>
                Same
              </Text>
            </Button>
          )}
          <Button style={{ width: '25%' }} onPress={() => selectOption()}>
            <Text
              style={{ fontSize: 20, fontWeight: 'bold', textAlign: 'center' }}>
              {renderRightButton()}
            </Text>
          </Button>
        </View>
      ) : (
        <View
          style={[
            margins.mt3,
            flex.row,
            paddings.px3,
            {
              justifyContent: 'center',
            },
          ]}>
          <Button style={[paddings.px5]} onPress={() => nextTurn()}>
            <Text
              style={{
                fontSize: 20,
                fontWeight: 'bold',
                textAlign: 'center',
              }}>
              Next!
            </Text>
          </Button>
        </View>
      )}
    </SafeAreaView>
  );
};

import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { SafeAreaView, View, Text } from 'react-native';
import { useTheme, useNavigation } from '@react-navigation/native';

import {
  clearPlayerHand,
  removeCard,
  setPlayerHand,
  removePlayer,
} from '../../../services/bus/bus.service';
import { setTurn } from '../../../services/game/game.service';
import {
  selectTurn,
  selectPlayers,
} from '../../../features/gameConfiguration/configuration.store';
import { selectCard } from '../../../features/bus/bus.store';
import { Button } from '../../../ui/atoms/Button';
import { Card, SmallCard } from '../../../ui/atoms/Card';
import { flex } from '../../../ui/style/layout';
import { margins, paddings } from '../../../ui/style/spacing';

import {
  renderLeftButton,
  renderRightButton,
  leftClicked,
  rightClicked,
  middleClicked,
} from '../bus.utils';

export const FinalRound = () => {
  const navigation = useNavigation();

  const { colors } = useTheme();
  const dispatch = useDispatch();

  const card = useSelector(selectCard);
  const players = useSelector(selectPlayers);
  const turn = useSelector(selectTurn);

  const [flipCard, saveFlipCard] = useState(false);
  const [buttonClicked, saveButtonClicked] = useState('');

  useEffect(() => {
    dispatch(setTurn({ turn: 0 }));
    saveFlipCard(false);
  }, []);

  function nextCard() {
    saveFlipCard(false);
    if (
      (buttonClicked === 'Left' && leftClicked(players[turn].hand, card)) ||
      (buttonClicked === 'Middle' && middleClicked(players[turn].hand, card)) ||
      (buttonClicked === 'Right' && rightClicked(players[turn].hand, card))
    ) {
      dispatch(setPlayerHand({ player: players[turn], card: card })); // Add to player hand
      dispatch(removeCard({ card: card })); // Remove from stack
      if (players[turn].hand.length === 3) {
        dispatch(removePlayer({ player: players[turn] })); // Winner, remove from stack
      }
    } else {
      dispatch(removeCard({ card: card })); // Remove from stack
      if (card.type !== 'Joker') {
        dispatch(clearPlayerHand({ player: players[turn] }));
        if (turn < players.length - 1) {
          dispatch(setTurn({ turn: turn + 1 }));
        } else {
          dispatch(setTurn({ turn: 0 }));
        }
      }
    }
  }

  return (
    <View style={[flex.on]}>
      {players.length > 0 ? (
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
              { justifyContent: 'space-around', width: '100%' },
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
          {!flipCard && players[players.length - 1].hand.length < 4 ? (
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
              <Button
                style={{ width: '25%' }}
                onPress={() => {
                  saveFlipCard(true);
                  saveButtonClicked('Left');
                }}>
                <Text
                  style={{
                    fontSize: 20,
                    fontWeight: 'bold',
                    textAlign: 'center',
                  }}>
                  {renderLeftButton(players[turn].hand)}
                </Text>
              </Button>
              {players[turn].hand.length > 0 && players[turn].hand.length < 3 && (
                <Button
                  style={{ width: '25%' }}
                  onPress={() => {
                    saveFlipCard(true);
                    saveButtonClicked('Middle');
                  }}>
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
              <Button
                style={{ width: '25%' }}
                onPress={() => {
                  saveFlipCard(true);
                  saveButtonClicked('Right');
                }}>
                <Text
                  style={{
                    fontSize: 20,
                    fontWeight: 'bold',
                    textAlign: 'center',
                  }}>
                  {renderRightButton(players[turn].hand)}
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
              <Button style={{ width: '25%' }} onPress={() => nextCard()}>
                <Text
                  style={{
                    fontSize: 20,
                    fontWeight: 'bold',
                    textAlign: 'center',
                  }}>
                  Continue
                </Text>
              </Button>
            </View>
          )}
        </SafeAreaView>
      ) : (
        <SafeAreaView
          style={[
            flex.on,
            flex.centerContent,
            { backgroundColor: colors.tertiary },
          ]}>
          <Text style={{ fontSize: 20, fontWeight: 'bold' }}>
            You have finished the game
          </Text>
          <Button
            style={[paddings.px3]}
            onPress={() => navigation.navigate('Main')}>
            <Text
              style={{
                fontSize: 20,
                fontWeight: 'bold',
                textAlign: 'center',
              }}>
              Play again!
            </Text>
          </Button>
        </SafeAreaView>
      )}
    </View>
  );
};

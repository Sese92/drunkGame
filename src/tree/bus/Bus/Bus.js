import React, { useEffect, useRef } from 'react';
import { SafeAreaView, View, Text } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { useTheme, useNavigation } from '@react-navigation/native';

import { Portal } from 'react-native-portalize';
import { Modalize } from 'react-native-modalize';

import { FloatingBar } from '../../../ui/atoms/FloatingBar';
import { PlayersHands } from './PlayersHands';
import { BusDisplay } from './BusDisplay';

import { RoundButton } from '../../../ui/atoms/RoundButton/RoundButton';
import { margins } from '../../../ui/style/spacing';
import { IconCards } from '../../../ui/zicons/Cards';
import { Button } from '../../../ui/atoms/Button';
import { SmallCard } from '../../../ui/atoms/Card';

import {
  selectCard,
  selectPlayersFiltered,
  selectNumberOfRows,
  selectBusCards,
  selectNumberOfJokers,
} from '../../../features/bus/bus.store';
import { setTurn, renewPlayers } from '../../../services/game/game.service';
import { flipCard, finalRound } from '../../../services/bus/bus.service';

export const Bus = () => {
  const navigation = useNavigation();
  const { colors } = useTheme();
  const filtered = useSelector(selectPlayersFiltered);
  const card = useSelector(selectCard);
  const rows = useSelector(selectNumberOfRows);
  const busCards = useSelector(selectBusCards);
  const numberOfJokers = useSelector(selectNumberOfJokers);

  const numberOfBusCards = busCards.filter((card) => card !== 0);

  const modalizeHands = useRef(null);
  const modalizeCard = useRef(null);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setTurn({ turn: 0 }));
  }, []);

  const onOpenHands = () => {
    modalizeHands.current?.open();
  };

  const onOpenCard = () => {
    modalizeCard.current?.open();
  };

  const onCloseCard = () => {
    modalizeCard.current?.close();
    dispatch(flipCard({ card: card }));
  };

  function checkCard() {
    onOpenCard();
  }

  function nextCard() {
    onCloseCard();
  }

  function formButtonTitle() {
    if (rows * 2 === numberOfBusCards.length) {
      return 'Shot!';
    }
    const title = (numberOfBusCards.length + 1) % 2 === 1 ? 'Drink' : 'Send';
    const number = Math.ceil((numberOfBusCards.length + 1) / 2);
    return title + ' ' + number.toString();
  }

  function goToFinalRound() {
    dispatch(renewPlayers());
    dispatch(finalRound({ jokers: numberOfJokers }));
    modalizeHands.current?.close();
    navigation.navigate('FinalRound');
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <BusDisplay />

      <Portal>
        <Modalize ref={modalizeHands} adjustToContentHeight={true}>
          <PlayersHands
            finalRound={rows * 2 + 1 === numberOfBusCards.length}
            toFinalRound={() => goToFinalRound()}
          />
        </Modalize>
      </Portal>

      <Portal>
        <Modalize ref={modalizeCard} adjustToContentHeight={true}>
          <View style={[margins.m4, margins.mb9]}>
            <Text style={{ fontWeight: 'bold', fontSize: 16 }}>
              {formButtonTitle()}
            </Text>
            <SmallCard
              style={{
                height: 120,
                width: 85,
                alignSelf: 'center',
                marginBottom: filtered.length === 0 ? 30 : 0,
              }}
              card={card}
            />

            <PlayersHands playersPassed={filtered} card={card} />

            <Button
              disabled={
                filtered.length > 0 && rows * 2 === numberOfBusCards.length
              }
              onPress={() => nextCard()}>
              <Text style={{ fontWeight: 'bold' }}>
                {rows * 2 === numberOfBusCards.length ? 'Finish' : 'Next card'}
              </Text>
            </Button>
          </View>
        </Modalize>
      </Portal>

      <FloatingBar style={{ left: 'auto', bottom: 140 }}>
        <View style={[margins.mx4]}>
          <RoundButton onPress={() => onOpenHands()}>
            <IconCards
              width={24}
              height={24}
              iconLineColor={colors.info}></IconCards>
          </RoundButton>
        </View>
      </FloatingBar>

      {rows * 2 + 1 > numberOfBusCards.length ? (
        <FloatingBar>
          <View style={[margins.mx4]}>
            <Button
              disabled={rows * 2 + 1 === numberOfBusCards.length}
              onPress={() => checkCard()}>
              <Text style={{ fontSize: 20, fontWeight: 'bold' }}>
                {formButtonTitle()}
              </Text>
            </Button>
          </View>
        </FloatingBar>
      ) : (
        <FloatingBar>
          <View style={[margins.mx4]}>
            <Button onPress={() => onOpenHands()}>
              <Text style={{ fontSize: 20, fontWeight: 'bold' }}>
                Final round
              </Text>
            </Button>
          </View>
        </FloatingBar>
      )}
    </SafeAreaView>
  );
};

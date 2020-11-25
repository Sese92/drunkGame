import React, { useEffect, useRef } from 'react';
import { SafeAreaView, View, Text } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { useTheme } from '@react-navigation/native';

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
} from '../../../features/bus/bus.store';
import { setTurn } from '../../../services/game/game.service';
import { flipCard } from '../../../services/bus/bus.service';

export const Bus = () => {
  const { colors } = useTheme();
  const filtered = useSelector(selectPlayersFiltered);
  const card = useSelector(selectCard);
  const rows = useSelector(selectNumberOfRows);
  const busCards = useSelector(selectBusCards);

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
  };

  function checkCard() {
    onOpenCard();
  }

  function nextCard() {
    onCloseCard();
    dispatch(flipCard({ card: card }));
    if (rows * 2 + 1 === numberOfBusCards.length) {
      onCloseCard();
    }
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <BusDisplay />

      <Portal>
        <Modalize ref={modalizeHands} adjustToContentHeight={true}>
          <PlayersHands />
        </Modalize>
      </Portal>

      <Portal>
        <Modalize ref={modalizeCard} adjustToContentHeight={true}>
          <View style={[margins.m4]}>
            <Text style={{ alignSelf: 'center' }}>
              {/* {cardNumber % 2 === 0 ? 'Drink' : 'Send'}{' '}
              {Math.floor(cardNumber / 2) + 1} */}
            </Text>
            <SmallCard
              style={{ height: 130, width: 90, alignSelf: 'center' }}
              card={card}
            />
            <PlayersHands playersPassed={filtered} card={card} />

            <Button
              disabled={rows * 2 + 1 === numberOfBusCards.length}
              onPress={() => nextCard()}>
              <Text>Next card</Text>
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
      <FloatingBar>
        <View style={[margins.mx4]}>
          <Button
            disabled={rows * 2 + 1 === numberOfBusCards.length}
            onPress={() => checkCard()}>
            <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Next!</Text>
          </Button>
        </View>
      </FloatingBar>
    </SafeAreaView>
  );
};

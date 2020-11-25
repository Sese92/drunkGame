import React, { useState, useRef } from 'react';
import { View, Text } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';

import { Portal } from 'react-native-portalize';
import { Modalize } from 'react-native-modalize';

import {
  selectBusCards,
  selectCard,
  selectNumberOfRows,
  selectPlayersFiltered,
} from '../../../features/gameConfiguration/configuration.store';

import { flipCard } from '../../../services/game/game.service';
import { SmallCard } from '../../../ui/atoms/Card';
import { Button } from '../../../ui/atoms/Button';
import { margins } from '../../../ui/style/spacing';
import { FloatingBar } from '../../../ui/atoms/FloatingBar';
import { PlayersHands } from './PlayersHands';

export const BusDisplay = () => {
  const card = useSelector(selectCard);
  const rows = useSelector(selectNumberOfRows);
  const busCards = useSelector(selectBusCards);
  const dispatch = useDispatch();
  const modalizeRef = useRef(null);
  const filtered = useSelector(selectPlayersFiltered);

  const [cardNumber, saveCardNumber] = useState(0);

  function nextCard() {
    console.log('rows', rows * 2 + 1);
    console.log('cardNumber', cardNumber);

    if (rows * 2 + 1 >= cardNumber) {
      saveCardNumber(cardNumber + 1);
      dispatch(flipCard({ card: card }));
    }
  }

  const onOpen = () => {
    modalizeRef.current?.open();
  };

  const onClose = () => {
    modalizeRef.current?.close();
  };

  function checkCard() {
    onOpen();
  }

  return (
    <View style={{ height: '100%' }}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
        }}>
        <View style={{ alignItems: 'center' }}>
          <Text>Drink</Text>
          {busCards.map(
            (card, i) =>
              i % 2 === 0 &&
              i < busCards.length - 1 && (
                <View key={i} style={[margins.mb6]}>
                  {card === 0 ? (
                    <SmallCard
                      style={{ height: 110, width: 80 }}
                      backSide={true}
                    />
                  ) : (
                    <SmallCard style={{ height: 110, width: 80 }} card={card} />
                  )}
                </View>
              )
          )}
        </View>
        <View style={[margins.ml8, { alignItems: 'center' }]}>
          <Text>Send</Text>
          {busCards.map(
            (card, i) =>
              i % 2 !== 0 && (
                <View key={i} style={[margins.mb6]}>
                  {card === 0 ? (
                    <SmallCard
                      style={{ height: 110, width: 80 }}
                      backSide={true}
                    />
                  ) : (
                    <SmallCard style={{ height: 110, width: 80 }} card={card} />
                  )}
                </View>
              )
          )}
        </View>
      </View>
      <View style={{ alignItems: 'center' }}>
        {busCards.map(
          (card, i) =>
            i === busCards.length - 1 && (
              <View key={i}>
                {card === 0 ? (
                  <SmallCard
                    style={{ height: 110, width: 80 }}
                    backSide={true}
                  />
                ) : (
                  <SmallCard style={{ height: 110, width: 80 }} card={card} />
                )}
              </View>
            )
        )}
      </View>

      <FloatingBar>
        <View style={[margins.mx4]}>
          <Button
            disabled={rows * 2 + 1 === cardNumber}
            onPress={() => checkCard()}>
            <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Next!</Text>
          </Button>
        </View>
      </FloatingBar>
      <Portal>
        <Modalize ref={modalizeRef} adjustToContentHeight={true}>
          <View style={[margins.m4]}>
            <Text style={{ alignSelf: 'center' }}>
              {cardNumber % 2 === 0 ? 'Drink' : 'Send'}{' '}
              {Math.floor(cardNumber / 2) + 1}
            </Text>
            <SmallCard
              style={{ height: 130, width: 90, alignSelf: 'center' }}
              card={card}
            />
            <PlayersHands playersPassed={filtered} card={card} />
            {cardNumber === rows * 2 + 1 ? (
              <Button onPress={() => onClose()}>
                <Text>Finish</Text>
              </Button>
            ) : (
              <Button onPress={() => nextCard()}>
                <Text>Next card</Text>
              </Button>
            )}
          </View>
        </Modalize>
      </Portal>
    </View>
  );
};

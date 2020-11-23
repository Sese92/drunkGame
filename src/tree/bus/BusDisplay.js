import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';

import {
  selectBusCards,
  selectCard,
  selectNumberOfRows,
} from '../../features/gameConfiguration/configuration.store';

import { flipCard } from '../../services/game/game.service';
import { SmallCard } from '../../ui/atoms/Card';
import { Button } from '../../ui/atoms/Button';
import { margins } from '../../ui/style/spacing';
import { FloatingBar } from '../../ui/atoms/FloatingBar';

export const BusDisplay = () => {
  const card = useSelector(selectCard);
  const rows = useSelector(selectNumberOfRows);
  const busCards = useSelector(selectBusCards);
  const dispatch = useDispatch();

  const [cardNumber, saveCardNumber] = useState(0);

  function nextCard() {
    if (rows * 2 + 1 > cardNumber) {
      saveCardNumber(cardNumber + 1);
      dispatch(flipCard({ card: card }));
    }
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
            disabled={rows * 2 + 1 <= cardNumber}
            onPress={() => nextCard()}>
            <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Next!</Text>
          </Button>
        </View>
      </FloatingBar>
    </View>
  );
};

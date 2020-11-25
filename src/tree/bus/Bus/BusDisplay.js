import React from 'react';
import { ScrollView, View, Text } from 'react-native';
import { useSelector } from 'react-redux';

import { selectBusCards } from '../../../features/bus/bus.store';

import { SmallCard } from '../../../ui/atoms/Card';
import { margins } from '../../../ui/style/spacing';

export const BusDisplay = () => {
  const busCards = useSelector(selectBusCards);

  return (
    <ScrollView style={{ height: '100%', marginBottom: 80 }}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
        }}>
        <View style={{ alignItems: 'center' }}>
          <Text style={[margins.my3, { fontWeight: 'bold', fontSize: 22 }]}>
            Drink
          </Text>
          {busCards.map(
            (card, i) =>
              i % 2 === 0 &&
              i < busCards.length - 1 && (
                <View key={i} style={[margins.mb4]}>
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
          <Text style={[margins.my3, { fontWeight: 'bold', fontSize: 22 }]}>
            Send
          </Text>
          {busCards.map(
            (card, i) =>
              i % 2 !== 0 && (
                <View key={i} style={[margins.mb4]}>
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
    </ScrollView>
  );
};

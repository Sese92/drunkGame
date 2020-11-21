import React from 'react';

import { RFValue } from 'react-native-responsive-fontsize';

import { View, Text } from 'react-native';

export const Six = ({ card }) => {
  return (
    <View
      style={{
        width: '100%',
        height: '100%',
      }}>
      <View
        style={{
          justifyContent: 'space-between',
          flex: 1,
          flexDirection: 'row',
          alignItems: 'center',
        }}>
        <Text style={{ color: card.color, fontSize: RFValue(80) }}>
          {card.type}
        </Text>
        <Text style={{ color: card.color, fontSize: RFValue(80) }}>
          {card.type}
        </Text>
      </View>
      <View
        style={{
          justifyContent: 'space-between',
          flex: 1,
          flexDirection: 'row',
          alignItems: 'center',
        }}>
        <Text style={{ color: card.color, fontSize: RFValue(80) }}>
          {card.type}
        </Text>
        <Text style={{ color: card.color, fontSize: RFValue(80) }}>
          {card.type}
        </Text>
      </View>
      <View
        style={{
          justifyContent: 'space-between',
          flex: 1,
          alignItems: 'center',
          flexDirection: 'row',
        }}>
        <Text style={{ color: card.color, fontSize: RFValue(80) }}>
          {card.type}
        </Text>
        <Text style={{ color: card.color, fontSize: RFValue(80) }}>
          {card.type}
        </Text>
      </View>
    </View>
  );
};

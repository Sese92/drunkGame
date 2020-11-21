import React from 'react';

import { RFValue } from 'react-native-responsive-fontsize';

import { View, Text } from 'react-native';

export const Two = ({ card }) => {
  return (
    <View style={{ justifyContent: 'center' }}>
      <Text style={{ color: card.color, fontSize: RFValue(120) }}>
        {card.type}
      </Text>
      <Text style={{ color: card.color, fontSize: RFValue(120) }}>
        {card.type}
      </Text>
    </View>
  );
};

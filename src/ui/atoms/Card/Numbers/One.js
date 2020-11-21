import React from 'react';

import { RFValue } from 'react-native-responsive-fontsize';

import { View, Text } from 'react-native';

export const One = ({ card }) => {
  return (
    <View style={{ justifyContent: 'center' }}>
      <Text style={{ color: card.color, fontSize: RFValue(160) }}>
        {card.type}
      </Text>
    </View>
  );
};

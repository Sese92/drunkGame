import React from 'react';

import { View, Text } from 'react-native';

export const One = ({ card }) => {
  return (
    <View style={{ justifyContent: 'center', padding: 10 }}>
      <Text style={{ color: card.color, fontSize: 220 }}>{card.type}</Text>
    </View>
  );
};

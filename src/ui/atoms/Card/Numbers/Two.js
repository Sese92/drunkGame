import React from 'react';

import { View, Text } from 'react-native';

export const Two = ({ card }) => {
  return (
    <View style={{ justifyContent: 'center' }}>
      <Text style={{ color: card.color, fontSize: 160 }}>{card.type}</Text>
      <Text style={{ color: card.color, fontSize: 160 }}>{card.type}</Text>
    </View>
  );
};

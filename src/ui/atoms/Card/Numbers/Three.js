import React from 'react';

import { View, Text } from 'react-native';

export const Three = ({ card }) => {
  return (
    <View style={{ justifyContent: 'center' }}>
      <Text style={{ color: card.color, fontSize: 120 }}>{card.type}</Text>
      <Text style={{ color: card.color, fontSize: 120 }}>{card.type}</Text>
      <Text style={{ color: card.color, fontSize: 120 }}>{card.type}</Text>
    </View>
  );
};

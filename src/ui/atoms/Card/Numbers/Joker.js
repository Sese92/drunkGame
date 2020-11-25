import React from 'react';

import { View, Image } from 'react-native';

export const Joker = ({ height, width }) => {
  return (
    <View style={{ alignItems: 'center', justifyContent: 'center' }}>
      <Image
        style={{ height: height, width: width }}
        source={require('../../../images/joker.png')}
      />
    </View>
  );
};

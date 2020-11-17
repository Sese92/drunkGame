import React from 'react';
import { View } from 'react-native';

import { position } from '../../style/layout';

export const FloatingBar = ({ children }) => {
  return <View style={[position.a, position.bottom]}>{children}</View>;
};

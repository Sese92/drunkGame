import React from 'react';
import { View, StyleSheet } from 'react-native';

import { position } from '../../style/layout';

export const FloatingBar = ({ children, style }) => {
  return (
    <View style={[position.a, position.bottom, StyleSheet.flatten(style)]}>
      {children}
    </View>
  );
};

import React from 'react';
import { View } from 'react-native';
import { useTheme } from '@react-navigation/native';

export const Card = ({ children }) => {
  const { colors } = useTheme();

  return (
    <View
      style={{
        backgroundColor: colors.white,
        width: '80%',
        height: '60%',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 20,
        shadowColor: colors.black,
        shadowOffset: {
          width: 4,
          height: 4,
        },
        shadowOpacity: 1,
      }}>
      {children}
    </View>
  );
};

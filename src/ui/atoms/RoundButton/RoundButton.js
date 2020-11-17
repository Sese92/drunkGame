import React from 'react';
import { useTheme } from '@react-navigation/native';
import { StyleSheet, View } from 'react-native';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';

import { flex } from '../../style/layout';

export const RoundButton = ({
  disabled = false,
  alignement = 'center', // center, left, right
  height = height ? height : 44,
  width = width ? width : 44,
  onPress,
  children,
  bgColor,
  borderColor,
  style,
}) => {
  const { colors } = useTheme();
  return (
    <TouchableWithoutFeedback
      disabled={disabled}
      style={[
        {
          backgroundColor: bgColor ? bgColor : colors.primary,
          opacity: disabled ? 0.3 : 1,
          borderRadius: 22,
          height,
          width,
          borderColor: borderColor ? borderColor : colors.primary,
          borderWidth: 1,
        },
        StyleSheet.flatten(style),
      ]}
      onPress={() => !disabled && onPress && onPress()}>
      <View style={[flex.centerContent, alignementStyle[alignement]]}>
        {children}
      </View>
    </TouchableWithoutFeedback>
  );
};

const alignementStyle = StyleSheet.create({
  center: {
    alignItems: 'center',
  },
  left: {
    alignItems: 'flex-start',
  },
  right: {
    alignItems: 'flex-end',
  },
});

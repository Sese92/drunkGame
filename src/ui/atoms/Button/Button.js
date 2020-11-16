import React from 'react';

import { TouchableHighlight, StyleSheet, View } from 'react-native';

import { useTheme } from '@react-navigation/native';

import { border, flex } from '../../style/layout';
import { margins, paddings } from '../../style/spacing';

export const Button = ({
  disabled = false,
  children,
  style = [],
  onPress,
  underlayColor,
  LeftElement,
  RightElement,
  shadow,
}) => {
  const { colors } = useTheme();

  return (
    <TouchableHighlight
      underlayColor={underlayColor}
      onPress={() => !disabled && onPress && onPress()}
      style={[border.rounded, StyleSheet.flatten(style)]}>
      <View
        style={[
          {
            backgroundColor: colors.ok,
            borderColor: colors.primary,
            borderWidth: 1,
            alignItems: 'center',
          },
          border.rounded,
          paddings.px6,
          paddings.py3,
          shadow,
        ]}>
        <View style={[flex.row, flex.centerX]}>
          {LeftElement && <View style={[margins.mr2]}>{LeftElement}</View>}
          {children}
          {RightElement && <View style={[margins.ml2]}>{RightElement}</View>}
        </View>
      </View>
    </TouchableHighlight>
  );
};

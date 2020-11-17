import React from 'react';

import { TouchableHighlight, StyleSheet, View } from 'react-native';

import { useTheme } from '@react-navigation/native';

import { border, flex } from '../../style/layout';
import { margins, paddings } from '../../style/spacing';
import { shadows } from '../../style/shadows';

export const Button = ({
  disabled = false,
  children,
  style = [],
  onPress,
  underlayColor,
  LeftElement,
  RightElement,
  bgColor,
  shadow = shadows.L1Info,
}) => {
  const { colors } = useTheme();

  return (
    <TouchableHighlight
      activeOpacity={0.85}
      underlayColor={underlayColor || 'none'}
      onPress={() => !disabled && onPress && onPress()}
      style={[border.rounded, StyleSheet.flatten(style)]}>
      <View
        style={[
          {
            backgroundColor: bgColor || colors.info,
            alignItems: 'center',
          },
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

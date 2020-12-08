import React from 'react';
import { useTheme } from '@react-navigation/native';

import { View, TouchableOpacity, Text } from 'react-native';

import { RoundButton } from '../../atoms/RoundButton';
import { IconMinus } from '../../zicons/Minus';
import { IconPlus } from '../../zicons/Plus';

export const QuantityButtons = ({
  value,
  min = 1,
  max = 99,
  addQuantity,
  subQuantity,
}) => {
  const { colors } = useTheme();

  return (
    <View
      style={{
        flexDirection: 'row',
        backgroundColor: colors.primary,
        borderRadius: 100,
        padding: 1,
        alignSelf: 'flex-start',
      }}>
      <TouchableOpacity>
        <RoundButton
          disabled={value <= min}
          onPress={subQuantity}
          bgColor={colors.info}
          borderColor={colors.primary}>
          <IconMinus
            width={24}
            height={24}
            iconLineColor={colors.primary}></IconMinus>
        </RoundButton>
      </TouchableOpacity>

      {/* <TextInput
        value={value}
        keyboardType="number-pad"
        returnKeyType={'done'}
        maxLength={2}
        style={{
          flexGrow: 1,
          color: colors.white,
          textAlign: 'center',
          fontWeight: 'bold',
          fontSize: 16,
        }}
      /> */}

      <Text
        style={{
          width: 50,
          color: colors.white,
          textAlign: 'center',
          alignSelf: 'center',
          fontWeight: 'bold',
          fontSize: 16,
        }}>
        {value}
      </Text>

      <TouchableOpacity>
        <RoundButton
          disabled={value >= max}
          onPress={addQuantity}
          bgColor={colors.info}>
          <IconPlus
            width={24}
            height={24}
            iconLineColor={colors.black}></IconPlus>
        </RoundButton>
      </TouchableOpacity>
    </View>
  );
};

export default QuantityButtons;

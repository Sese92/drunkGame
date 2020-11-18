import React from 'react';
import { View, Text } from 'react-native';
import { useTheme } from '@react-navigation/native';

export const Dice = ({ dice }) => {
  const { colors } = useTheme();

  const RenderSmallDot = ({ color }) => {
    return (
      <View
        style={{
          width: 50,
          height: 50,
          backgroundColor: color,
          borderRadius: 100,
        }}></View>
    );
  };

  function RenderNumber(numberOfDots, color) {
    switch (numberOfDots) {
      case 1:
        return (
          <View
            style={{
              width: 150,
              height: 150,
              backgroundColor: color,
              borderRadius: 100,
            }}></View>
        );
      case 7:
        return (
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              padding: 30,
              width: 300,
              height: 300,
            }}>
            <View
              style={{
                flexDirection: 'column',
                justifyContent: 'space-between',
              }}>
              <RenderSmallDot color={color} />
              <RenderSmallDot color={color} />
              <RenderSmallDot color={color} />
            </View>
            <View
              style={{
                flexDirection: 'column',
                justifyContent: 'center',
              }}>
              <RenderSmallDot color={color} />
            </View>
            <View
              style={{
                flexDirection: 'column',
                justifyContent: 'space-between',
              }}>
              <RenderSmallDot color={color} />
              <RenderSmallDot color={color} />
              <RenderSmallDot color={color} />
            </View>
          </View>
        );
      case 8:
        return (
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              padding: 30,
              width: 300,
              height: 300,
            }}>
            <View
              style={{
                flexDirection: 'column',
                justifyContent: 'space-between',
              }}>
              <RenderSmallDot color={color} />
              <RenderSmallDot color={color} />
              <RenderSmallDot color={color} />
            </View>
            <View
              style={{
                paddingTop: 40,
                paddingBottom: 40,
                flexDirection: 'column',
                justifyContent: 'space-between',
              }}>
              <RenderSmallDot color={color} />
              <RenderSmallDot color={color} />
            </View>
            <View
              style={{
                flexDirection: 'column',
                justifyContent: 'space-between',
              }}>
              <RenderSmallDot color={color} />
              <RenderSmallDot color={color} />
              <RenderSmallDot color={color} />
            </View>
          </View>
        );
    }
  }

  return (
    <View
      style={{
        backgroundColor: colors.white,
        width: 300,
        height: 300,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 20,
        borderColor: colors.black,
        borderWidth: 6,
        shadowColor: colors.black,
        shadowOffset: {
          width: 12,
          height: 12,
        },
        shadowOpacity: 0.6,
        elevation: 12,
      }}>
      {Number(dice.number) ? (
        <View>{RenderNumber(dice.number, dice.color)}</View>
      ) : (
        <Text style={{ fontSize: 150, color: dice.color }}>{dice.number}</Text>
      )}
    </View>
  );
};

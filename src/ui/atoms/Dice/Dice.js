import React from 'react';
import { View, Text } from 'react-native';
import { useTheme } from '@react-navigation/native';

export const Dice = ({ dice }) => {
  const { colors } = useTheme();

  var points = null;
  var styles = null;
  if (Number(dice.number)) {
    points = Array.from(Array(dice.number).keys());
    switch (dice.number) {
      case 1:
        styles = {
          width: 120,
          height: 120,
          backgroundColor: dice.color,
          borderRadius: 100,
        };
    }
  }
  console.log(points);

  return (
    <View
      style={{
        backgroundColor: colors.white,
        width: 300,
        height: 300,
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
      {Number(dice.number) ? (
        <View style={{ justifyContent: 'space-between' }}>
          {points.map((point) => (
            <View key={point} style={styles}></View>
          ))}
        </View>
      ) : (
        <Text style={{ fontSize: 150, color: dice.color }}>{dice.number}</Text>
      )}
    </View>
  );
};

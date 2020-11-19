import React from 'react';
import { View, Text } from 'react-native';
import { useTheme } from '@react-navigation/native';
import CardFlip from 'react-native-card-flip';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';

import { margins } from '../../style/spacing';

export const Card = ({ card }) => {
  const { colors } = useTheme();

  var cardDisplay;

  function RenderCard() {
    switch (card.number) {
      case 1:
        return;
      case 7:
        return;
      case 8:
        return;
      default:
        return (
          <Text style={{ fontSize: 150, color: card.color }}>
            {card.number}
          </Text>
        );
    }
  }

  return (
    <View
      style={{
        width: '90%',
        height: '70%',
      }}>
      <CardFlip
        style={{
          width: '100%',
          height: '100%',
        }}
        ref={(c) => (cardDisplay = c)}>
        {/* Front Side */}
        <TouchableWithoutFeedback
          style={{
            backgroundColor: colors.white,
            borderRadius: 20,
            borderColor: colors.black,
            borderWidth: 4,
          }}
          onPress={() => cardDisplay.flip()}>
          <Text
            style={{
              position: 'absolute',
              top: 1,
              left: 8,
              fontSize: 30,
              fontWeight: 'bold',
              color: card.color,
            }}>
            {card.number}
            {card.type}
          </Text>
          <View style={[margins.m9]}>
            <View
              style={[
                {
                  justifyContent: 'center',
                  alignItems: 'center',
                  width: '100%',
                  height: '100%',
                  borderRadius: 20,
                  borderColor: colors.black,
                  borderWidth: 1,
                },
              ]}>
              {RenderCard()}
            </View>
          </View>

          <Text
            style={{
              position: 'absolute',
              fontSize: 30,
              fontWeight: 'bold',
              bottom: 1,
              right: 8,
              color: card.color,
            }}>
            {card.number}
            {card.type}
          </Text>
        </TouchableWithoutFeedback>

        {/* Back Side */}
        <TouchableWithoutFeedback onPress={() => cardDisplay.flip()}>
          <View
            style={{
              width: '100%',
              height: '100%',
              backgroundColor: colors.info,
              borderRadius: 10,
              borderWidth: 2,
              borderColor: colors.black,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text
              style={{
                textAlign: 'center',
                fontSize: 80,
                fontWeight: 'bold',
                textTransform: 'uppercase',
                color: colors.primary,
              }}>
              Bus game
            </Text>
          </View>
        </TouchableWithoutFeedback>
      </CardFlip>
    </View>
  );
};

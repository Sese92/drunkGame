import React from 'react';
import { View, Text } from 'react-native';
import { useTheme } from '@react-navigation/native';
import CardFlip from 'react-native-card-flip';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';

import { margins } from '../../style/spacing';

import {
  One,
  Two,
  Three,
  Four,
  Five,
  Six,
  Seven,
  Eight,
  Nine,
  Ten,
  Joker,
} from './Numbers';

export const Card = ({ card }) => {
  const { colors } = useTheme();

  var cardDisplay;

  function RenderCard() {
    switch (card.number) {
      case 'A':
        return <One card={card} />;
      case 2:
        return <Two card={card} />;
      case 3:
        return <Three card={card} />;
      case 4:
        return <Four card={card} />;
      case 5:
        return <Five card={card} />;
      case 6:
        return <Six card={card} />;
      case 7:
        return <Seven card={card} />;
      case 8:
        return <Eight card={card} />;
      case 9:
        return <Nine card={card} />;
      case 10:
        return <Ten card={card} />;
      case 'Joker':
        return <Joker />;
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
        <TouchableWithoutFeedback onPress={() => cardDisplay.flip()}>
          <View
            style={{
              borderRadius: 10,
              borderWidth: 4,
              borderColor: colors.black,
              padding: 20,
              backgroundColor: colors.white,
            }}>
            <View
              style={{
                backgroundColor: colors.primary,
                width: '100%',
                height: '100%',
                borderRadius: 10,
                justifyContent: 'center',
              }}>
              <Text
                style={{
                  textAlign: 'center',
                  fontSize: 80,
                  fontWeight: 'bold',
                  textTransform: 'uppercase',
                  color: colors.info,
                }}>
                Bus game
              </Text>
            </View>
          </View>
        </TouchableWithoutFeedback>

        {/* Back Side */}

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
            {card.type !== 'Joker' && card.number}
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
                  borderWidth: card.type !== 'Joker' ? 1 : 0,
                  padding: 10,
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
            {card.type !== 'Joker' && card.number}
            {card.type}
          </Text>
        </TouchableWithoutFeedback>
      </CardFlip>
    </View>
  );
};

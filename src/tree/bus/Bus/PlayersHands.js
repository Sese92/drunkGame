import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useTheme } from '@react-navigation/native';

import { View, Text } from 'react-native';

import { SmallCard } from '../../../ui/atoms/Card';
import { Button } from '../../../ui/atoms/Button';

import { flex } from '../../../ui/style/layout';
import { margins, paddings } from '../../../ui/style/spacing';
import { selectPlayers } from '../../../features/gameConfiguration/configuration.store';
import { removeFromHand } from '../../../services/bus/bus.service';

export const PlayersHands = ({ playersPassed, card }) => {
  const dispatch = useDispatch();
  const { colors } = useTheme();

  var players = useSelector(selectPlayers);
  if (playersPassed) {
    players = playersPassed;
  }

  return (
    <View style={[paddings.px4, paddings.pb4]}>
      {players.map((player, i) => (
        <View key={i}>
          <View style={[margins.my4]}>
            <Text style={[margins.mb3, { fontSize: 22, fontWeight: 'bold' }]}>
              {player.name}
            </Text>
            <View style={[flex.row, { justifyContent: 'space-around' }]}>
              {player.hand.map((card, j) => (
                <SmallCard key={j} card={card} />
              ))}
            </View>
            {playersPassed && (
              <View
                style={[flex.row, margins.mt4, { justifyContent: 'center' }]}>
                <Button
                  style={[paddings.px5]}
                  onPress={() => {
                    dispatch(removeFromHand({ player: player, card: card }));
                  }}>
                  <Text style={{ fontWeight: 'bold', fontSize: 14 }}>
                    Place card
                  </Text>
                </Button>
              </View>
            )}
          </View>
          {i < players.length - 1 && (
            <View
              style={{
                width: '100%',
                height: 1,
                backgroundColor: colors.gray,
              }}></View>
          )}
        </View>
      ))}
    </View>
  );
};

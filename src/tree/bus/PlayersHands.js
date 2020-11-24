import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { View, Text } from 'react-native';

import { SmallCard } from '../../ui/atoms/Card';
import { Button } from '../../ui/atoms/Button';

import { flex } from '../../ui/style/layout';
import { margins, paddings } from '../../ui/style/spacing';
import { selectPlayers } from '../../features/gameConfiguration/configuration.store';
import { removeFromHand, flipCard } from '../../services/game/game.service';

export const PlayersHands = ({ playersPassed, card }) => {
  const dispatch = useDispatch();

  var players = useSelector(selectPlayers);
  if (playersPassed) {
    players = playersPassed;
  }

  return (
    <View style={[paddings.p8]}>
      {players.map((player, i) => (
        <View key={i} style={[margins.mb8]}>
          <Text style={[margins.mb3, { fontSize: 22, fontWeight: 'bold' }]}>
            {player.name}
          </Text>
          <View style={[flex.row, { justifyContent: 'space-around' }]}>
            {player.hand.map((card, j) => (
              <SmallCard key={j} card={card} />
            ))}
          </View>
          {playersPassed && (
            <View style={[flex.row]}>
              <View style={{ width: '45%' }}>
                <Button
                  onPress={() => {
                    dispatch(removeFromHand({ player: player, card: card }));
                    dispatch(flipCard({ card: card }));
                  }}>
                  <Text>Place</Text>
                </Button>
              </View>

              <View style={{ width: '45%', marginLeft: 'auto' }}>
                <Button>
                  <Text>Wait</Text>
                </Button>
              </View>
            </View>
          )}
        </View>
      ))}
    </View>
  );
};

import React from 'react';

import { View, Text } from 'react-native';
import { useSelector } from 'react-redux';

import { SmallCard } from '../../ui/atoms/Card';
import { flex } from '../../ui/style/layout';
import { margins, paddings } from '../../ui/style/spacing';
import { selectPlayers } from '../../features/gameConfiguration/configuration.store';

export const PlayersHands = () => {
  const players = useSelector(selectPlayers);

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
        </View>
      ))}
    </View>
  );
};

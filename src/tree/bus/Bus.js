import React from 'react';
import { SafeAreaView, View, Text } from 'react-native';

import { useSelector } from 'react-redux';

import {
  selectPlayers,
  selectTurn,
  selectCard,
  selectNumberOfRows,
} from '../../features/gameConfiguration/configuration.store';

export const Bus = () => {
  const card = useSelector(selectCard);
  const players = useSelector(selectPlayers);
  const turn = useSelector(selectTurn);
  const rows = useSelector(selectNumberOfRows);

  return (
    <SafeAreaView>
      <Text>BUS!</Text>
      <Text>
        {card.type}
        {card.number}
      </Text>
      {players.map((player, i) => (
        <View key={i}>
          <Text>{player.name}</Text>
          {player.hand.map(
            (ha, j) => (
              console.log(ha),
              (
                <View key={j}>
                  <Text>
                    {ha.number}
                    {ha.type}
                  </Text>
                </View>
              )
            )
          )}
        </View>
      ))}
      <Text>{turn}</Text>
      <Text>{rows}</Text>
    </SafeAreaView>
  );
};

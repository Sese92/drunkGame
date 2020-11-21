import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { SafeAreaView, View, Text, Platform } from 'react-native';
import { useNavigation, useTheme } from '@react-navigation/native';

import { selectGame } from '../../features/gameConfiguration/configuration.store';
import {
  setNumberOfPlayers,
  setNumberOfJokers,
} from '../../services/game/game.service';
import { flex } from '../../ui/style/layout';
import { margins } from '../../ui/style/spacing';
import { QuantityButtons } from '../../ui/organisms/QuantityButtons';
import { FloatingBar } from '../../ui/atoms/FloatingBar';
import { Button } from '../../ui/atoms/Button';
import { IconArrow } from '../../ui/zicons/Arrow';

export const GameConfig = () => {
  const game = useSelector(selectGame);
  const [players, savePlayers] = useState(1);
  const [jokers, saveJokers] = useState(0);
  const { colors } = useTheme();
  const navigation = useNavigation();
  const dispatch = useDispatch();

  function nextScreen() {
    dispatch(setNumberOfPlayers({ numberOfPlayers: players }));
    if (game === 'Bus') {
      if (jokers > 0) {
        dispatch(setNumberOfJokers({ jokers: jokers }));
      }
      navigation.navigate('Bus');
    } else {
      navigation.navigate('Jota');
    }
  }

  return (
    <SafeAreaView
      style={[
        flex.on,
        {
          backgroundColor: colors.secondary,
          paddingTop: Platform.OS === 'android' ? 20 : 0,
        },
      ]}>
      <View style={{ flexDirection: 'row' }}>
        <Button
          onPress={() => navigation.navigate('Main')}
          bgColor="transparent"
          style={{ height: 30 }}>
          <IconArrow height={20} width={20} rotate={270} />
        </Button>
      </View>

      <View style={[margins.mx6]}>
        <Text style={{ textAlign: 'center', fontSize: 26, fontWeight: 'bold' }}>
          {game}
        </Text>

        <View style={[margins.mt8]}>
          <Text
            style={[
              margins.mb3,
              { textAlign: 'center', fontSize: 18, fontWeight: 'bold' },
            ]}>
            Number of players
          </Text>

          <View style={{ alignSelf: 'center' }}>
            <QuantityButtons
              value={players.toString()}
              addQuantity={() => savePlayers(players + 1)}
              subQuantity={() => savePlayers(players - 1)}
            />
          </View>
        </View>
      </View>
      {game === 'Bus' && (
        <View>
          <View style={[margins.mt8]}>
            <Text
              style={[
                margins.mb3,
                { textAlign: 'center', fontSize: 18, fontWeight: 'bold' },
              ]}>
              Number of jokers 😏
            </Text>

            <View style={{ alignSelf: 'center' }}>
              <QuantityButtons
                min={0}
                addQuantity={() => saveJokers(jokers + 1)}
                subQuantity={() => saveJokers(jokers - 1)}
                value={jokers.toString()}
              />
            </View>
          </View>
        </View>
      )}

      <FloatingBar>
        <View style={[margins.mx4]}>
          <Button onPress={() => nextScreen()}>
            <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Play now!</Text>
          </Button>
        </View>
      </FloatingBar>
    </SafeAreaView>
  );
};

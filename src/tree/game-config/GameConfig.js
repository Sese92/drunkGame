import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { SafeAreaView, View, Text } from 'react-native';
import { useNavigation, useTheme } from '@react-navigation/native';

import {
  selectGame,
  selectNumberOfPlayers,
  selectNumberOfJokers,
  selectNumberOfRows,
} from '../../features/gameConfiguration/configuration.store';
import {
  setNumberOfPlayers,
  setNumberOfJokers,
  setNumberOfRows,
} from '../../services/game/game.service';
import { flex } from '../../ui/style/layout';
import { margins } from '../../ui/style/spacing';
import { QuantityButtons } from '../../ui/organisms/QuantityButtons';
import { FloatingBar } from '../../ui/atoms/FloatingBar';
import { Button } from '../../ui/atoms/Button';
import { IconArrow } from '../../ui/zicons/Arrow';

export const GameConfig = () => {
  const game = useSelector(selectGame);
  const numberOfPlayers = useSelector(selectNumberOfPlayers);
  const numberOfJokers = useSelector(selectNumberOfJokers);
  const numberOfRows = useSelector(selectNumberOfRows);

  const { colors } = useTheme();
  const navigation = useNavigation();
  const dispatch = useDispatch();

  return (
    <SafeAreaView style={[flex.on, { backgroundColor: colors.secondary }]}>
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
          Game configuration
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
              value={numberOfPlayers.toString()}
              addQuantity={() =>
                dispatch(
                  setNumberOfPlayers({ numberOfPlayers: numberOfPlayers + 1 })
                )
              }
              subQuantity={() =>
                dispatch(
                  setNumberOfPlayers({ numberOfPlayers: numberOfPlayers - 1 })
                )
              }
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
                addQuantity={() =>
                  dispatch(setNumberOfJokers({ jokers: numberOfJokers + 1 }))
                }
                subQuantity={() =>
                  dispatch(setNumberOfJokers({ jokers: numberOfJokers - 1 }))
                }
                value={numberOfJokers.toString()}
              />
            </View>
          </View>
          <View style={[margins.mt8]}>
            <Text
              style={[
                margins.mb3,
                { textAlign: 'center', fontSize: 18, fontWeight: 'bold' },
              ]}>
              Number of rows (+1)
            </Text>

            <View style={{ alignSelf: 'center' }}>
              <QuantityButtons
                addQuantity={() =>
                  dispatch(setNumberOfRows({ rows: numberOfRows + 1 }))
                }
                subQuantity={() =>
                  dispatch(setNumberOfRows({ rows: numberOfRows - 1 }))
                }
                value={numberOfRows.toString()}
              />
            </View>
          </View>
        </View>
      )}

      <FloatingBar>
        <View style={[margins.mx4]}>
          <Button>
            <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Play now!</Text>
          </Button>
        </View>
      </FloatingBar>
    </SafeAreaView>
  );
};

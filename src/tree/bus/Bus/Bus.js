import React, { useEffect, useRef } from 'react';
import { SafeAreaView, View, Text as RNText } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { useTheme, useNavigation } from '@react-navigation/native';
import { useTranslation } from 'react-i18next';

import { Portal } from 'react-native-portalize';
import { Modalize } from 'react-native-modalize';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import { FloatingBar } from '../../../ui/atoms/FloatingBar';
import { PlayersHands } from './PlayersHands';
import { BusDisplay } from './BusDisplay';

import { Text } from '../../../ui/atoms/Text';
import { RoundButton } from '../../../ui/atoms/RoundButton/RoundButton';
import { margins } from '../../../ui/style/spacing';
import { Button } from '../../../ui/atoms/Button';
import { SmallCard } from '../../../ui/atoms/Card';

import {
  selectCard,
  selectPlayersFiltered,
  selectNumberOfRows,
  selectBusCards,
} from '../../../features/bus/bus.store';
import { setTurn, renewPlayers } from '../../../services/game/game.service';
import { flipCard, finalRound } from '../../../services/bus/bus.service';

export const Bus = () => {
  const navigation = useNavigation();
  const { colors } = useTheme();
  const filtered = useSelector(selectPlayersFiltered);
  const card = useSelector(selectCard);
  const rows = useSelector(selectNumberOfRows);
  const busCards = useSelector(selectBusCards);
  const { t } = useTranslation();

  const numberOfBusCards = busCards.filter((card) => card !== 0);

  const modalizeHands = useRef(null);
  const modalizeCard = useRef(null);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setTurn({ turn: 0 }));
  }, []);

  const onOpenHands = () => {
    modalizeHands.current?.open();
  };

  const onOpenCard = () => {
    modalizeCard.current?.open();
  };

  const onCloseCard = () => {
    modalizeCard.current?.close();
    dispatch(flipCard({ card: card }));
  };

  function checkCard() {
    onOpenCard();
  }

  function nextCard() {
    onCloseCard();
  }

  function formButtonTitle() {
    if (rows * 2 === numberOfBusCards.length || card.type === 'Joker') {
      return t('bus_game.shot');
    }
    const title =
      (numberOfBusCards.length + 1) % 2 === 1
        ? t('bus_game.drink')
        : t('bus_game.send');
    const number = Math.ceil((numberOfBusCards.length + 1) / 2);
    return title + ' ' + number.toString();
  }

  function goToFinalRound() {
    dispatch(renewPlayers());
    dispatch(finalRound());
    modalizeHands.current?.close();
    navigation.navigate('FinalRound');
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <BusDisplay />

      <Portal>
        <Modalize ref={modalizeHands} adjustToContentHeight={true}>
          <PlayersHands
            finalRound={rows * 2 + 1 === numberOfBusCards.length}
            toFinalRound={() => goToFinalRound()}
          />
        </Modalize>
      </Portal>

      <Portal>
        <Modalize ref={modalizeCard} adjustToContentHeight={true}>
          <View style={[margins.m4, margins.mb9]}>
            <Text
              text={formButtonTitle()}
              style={{ fontWeight: 'bold', fontSize: 16 }}
            />
            <SmallCard
              style={{
                height: 120,
                width: 85,
                alignSelf: 'center',
                marginBottom: filtered.length === 0 ? 30 : 0,
              }}
              card={card}
            />

            <PlayersHands playersPassed={filtered} card={card} />

            <Button
              disabled={
                filtered.length > 0 && rows * 2 === numberOfBusCards.length
              }
              onPress={() => nextCard()}>
              <Text
                text={
                  rows * 2 === numberOfBusCards.length
                    ? 'bus_game.finish'
                    : 'bus_game.next_card'
                }
                style={{ fontWeight: 'bold' }}
              />
            </Button>
          </View>
        </Modalize>
      </Portal>

      <FloatingBar style={{ left: 'auto', bottom: 140 }}>
        <View style={[margins.mx4]}>
          <RoundButton onPress={() => onOpenHands()}>
            <Icon name="cards" size={23} color={colors.info} />
          </RoundButton>
        </View>
      </FloatingBar>

      {rows * 2 + 1 > numberOfBusCards.length ? (
        <FloatingBar>
          <View style={[margins.mx4]}>
            <Button
              disabled={rows * 2 + 1 === numberOfBusCards.length}
              onPress={() => checkCard()}>
              <RNText style={{ fontSize: 20, fontWeight: 'bold' }}>
                {formButtonTitle()}
              </RNText>
            </Button>
          </View>
        </FloatingBar>
      ) : (
        <FloatingBar>
          <View style={[margins.mx4]}>
            <Button onPress={() => onOpenHands()}>
              <Text
                text="bus_game.final_round"
                style={{ fontSize: 20, fontWeight: 'bold' }}
              />
            </Button>
          </View>
        </FloatingBar>
      )}
    </SafeAreaView>
  );
};

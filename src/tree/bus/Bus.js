import React, { useEffect, useRef } from 'react';
import { SafeAreaView, View } from 'react-native';
import { useDispatch } from 'react-redux';
import { useTheme } from '@react-navigation/native';

import { Portal } from 'react-native-portalize';
import { Modalize } from 'react-native-modalize';

import { FloatingBar } from '../../ui/atoms/FloatingBar';
import { PlayersHands } from './PlayersHands';
import { BusDisplay } from './BusDisplay';

import { RoundButton } from '../../ui/atoms/RoundButton/RoundButton';
import { margins } from '../../ui/style/spacing';
import { IconCards } from '../../ui/zicons/Cards';

import { setTurn } from '../../services/game/game.service';

export const Bus = () => {
  const { colors } = useTheme();

  const modalizeRef = useRef(null);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setTurn({ turn: 0 }));
  }, []);

  const onOpen = () => {
    modalizeRef.current?.open();
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <BusDisplay />

      <Portal>
        <Modalize ref={modalizeRef} adjustToContentHeight={true}>
          <PlayersHands />
        </Modalize>
      </Portal>
      <FloatingBar style={{ left: 'auto', bottom: 140 }}>
        <View style={[margins.mx4]}>
          <RoundButton onPress={() => onOpen()}>
            <IconCards
              width={24}
              height={24}
              iconLineColor={colors.info}></IconCards>
          </RoundButton>
        </View>
      </FloatingBar>
    </SafeAreaView>
  );
};

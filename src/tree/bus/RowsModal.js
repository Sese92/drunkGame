import React, { useState } from 'react';

import { View, Text } from 'react-native';
import { useDispatch } from 'react-redux';

import { setNumberOfRows, removeCard } from '../../services/game/game.service';

import { QuantityButtons } from '../../ui/organisms/QuantityButtons';

import { margins } from '../../ui/style/spacing';
import { Button } from '../../ui/atoms/Button';

export const RowsModal = ({ navigation, onClose, lastCard }) => {
  const [localRows, saveRows] = useState(1);
  const dispatch = useDispatch();

  function nextScreen() {
    dispatch(setNumberOfRows({ rows: localRows }));
    dispatch(removeCard({ card: lastCard }));

    onClose();
    navigation.navigate('Bus');
  }

  return (
    <View style={[margins.m10, { alignSelf: 'center' }]}>
      <Text
        style={[
          margins.mb3,
          { textAlign: 'center', fontSize: 18, fontWeight: 'bold' },
        ]}>
        Number of rows
      </Text>

      <View style={[margins.mb8]}>
        <QuantityButtons
          value={localRows.toString()}
          addQuantity={() => saveRows(localRows + 1)}
          subQuantity={() => saveRows(localRows - 1)}
        />
      </View>

      <Button onPress={() => nextScreen()}>
        <Text style={{ fontSize: 16, fontWeight: 'bold' }}>Continue</Text>
      </Button>
    </View>
  );
};

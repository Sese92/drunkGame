import React from 'react';
import { useDispatch } from 'react-redux';

import { SafeAreaView, View } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';

import { useNavigation, useTheme } from '@react-navigation/native';

import { selectGame } from '../services/game/game.service';

import { Button } from '../ui/atoms/Button';
import { Text } from '../ui/atoms/Text';

import { flex } from '../ui/style/layout';
import { margins, paddings } from '../ui/style/spacing';

import i18n from '../i18n';

export const Main = () => {
  const { colors } = useTheme();
  const navigation = useNavigation();
  const dispatch = useDispatch();

  return (
    <SafeAreaView
      style={[
        flex.centerContent,
        paddings.p5,
        { backgroundColor: colors.primary },
      ]}>
      <DropDownPicker
        activeLabelStyle={{ color: colors.primary }}
        items={[
          {
            label: 'English',
            value: 'en',
          },
          {
            label: 'Spanish',
            value: 'es',
          },
        ]}
        defaultValue={i18n.language}
        containerStyle={{
          height: 40,
          width: '22%',
          position: 'absolute',
          top: '6%',
          alignSelf: 'flex-end',
          right: '8%',
        }}
        style={{ paddingLeft: 4 }}
        itemStyle={{
          justifyContent: 'flex-start',
        }}
        onChangeItem={(item) => i18n.changeLanguage(item.value)}
      />
      <Text
        text="welcome"
        style={{ fontSize: 40, color: colors.white, fontWeight: 'bold' }}
      />
      <Text
        text="how_to"
        style={[margins.mt4, { fontSize: 20, color: colors.white }]}
      />

      <View style={[margins.mt8]}>
        <Button
          onPress={() => {
            dispatch(selectGame({ game: 'Jota' }));
            navigation.navigate('GameConfig', { game: 'Jota' });
          }}>
          <Text
            text="j"
            style={{
              fontWeight: 'bold',
              fontSize: 20,
            }}
          />
        </Button>
        <Button
          style={[margins.mt8, paddings.px6]}
          onPress={() => {
            dispatch(selectGame({ game: 'Bus' }));
            navigation.navigate('GameConfig', { game: 'Bus' });
          }}>
          <Text
            text="bus"
            style={{
              fontWeight: 'bold',
              fontSize: 20,
            }}
          />
        </Button>
      </View>
    </SafeAreaView>
  );
};

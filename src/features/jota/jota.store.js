import { createSlice } from '@reduxjs/toolkit';
import { createSelector } from 'reselect';

import { dice } from './jota.utils';

export const initialState = {
  dice: dice,
  jotas: [],
};

const jotaSlice = createSlice({
  name: 'jota',
  initialState,
  extraReducers: {},
});

const selectRoot = (state) => state.jota;

const selectRandomDice = createSelector(
  selectRoot,
  (jota) => jota.dice[Math.floor(Math.random() * jota.dice.length)]
);

export { selectRandomDice };

export const { actions, reducer } = jotaSlice;

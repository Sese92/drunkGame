import { createSlice } from '@reduxjs/toolkit';
import { createSelector } from 'reselect';

import {
  SELECT_GAME,
  SET_NUMBER_PLAYERS,
  SET_NUMBER_JOKERS,
  SET_NUMBER_ROWS,
} from '../../services/game/game.service';

import { setPlayers } from './configuration.utils';

export const initialState = {
  game: '',
  numberOfPlayers: 1,
  players: [],
  // Jota
  jotas: [],
  // Bus
  cards: [],
  jokers: 0,
  rows: 1,
  hands: [],
};

const configurationSlice = createSlice({
  name: 'configuration',
  initialState,
  extraReducers: {
    [SELECT_GAME]: (state, action) => {
      return {
        ...state,
        game: action.meta.game,
      };
    },
    [SET_NUMBER_PLAYERS]: (state, action) => {
      return {
        ...state,
        numberOfPlayers: action.meta.numberOfPlayers,
        players: setPlayers(action.meta.numberOfPlayers),
      };
    },
    [SET_NUMBER_JOKERS]: (state, action) => {
      return {
        ...state,
        jokers: action.meta.jokers,
      };
    },
    [SET_NUMBER_ROWS]: (state, action) => {
      return {
        ...state,
        rows: action.meta.rows,
      };
    },
  },
});

const selectRoot = (state) => state.configuration;

const selectGame = createSelector(
  selectRoot,
  (configuration) => configuration.game
);

const selectNumberOfPlayers = createSelector(
  selectRoot,
  (configuration) => configuration.numberOfPlayers
);

const selectNumberOfJokers = createSelector(
  selectRoot,
  (configuration) => configuration.jokers
);

const selectNumberOfRows = createSelector(
  selectRoot,
  (configuration) => configuration.rows
);

export {
  selectGame,
  selectNumberOfPlayers,
  selectNumberOfJokers,
  selectNumberOfRows,
};

export const { actions, reducer } = configurationSlice;

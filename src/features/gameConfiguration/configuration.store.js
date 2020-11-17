import { createSlice } from '@reduxjs/toolkit';
import { createSelector } from 'reselect';

import {
  SELECT_GAME,
  SET_NUMBER_PLAYERS,
  SET_NUMBER_JOKERS,
  SET_NUMBER_ROWS,
  SET_TURN,
} from '../../services/game/game.service';

import { setPlayers } from './configuration.utils';

export const initialState = {
  game: '',
  numberOfPlayers: 1,
  players: [],
  turn: null,
  // Jota
  dice: [
    { number: 1, color: 'red', rule: 'New rule!' },
    { number: 8, color: 'red', rule: 'The one on the left drink!' },
    { number: 9, color: 'black', rule: 'The one on the right drink!' },
    { number: 'J', color: 'black', rule: 'All the J drink!' },
    { number: 'Q', color: 'black', rule: '...' },
    { number: 'K', color: 'red', rule: 'The ones by your side drink!' },
  ],
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
    [SET_TURN]: (state, action) => {
      return {
        ...state,
        turn: action.meta.turn,
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

const selectPlayers = createSelector(
  selectRoot,
  (configuration) => configuration.players
);

const selectNumberOfJokers = createSelector(
  selectRoot,
  (configuration) => configuration.jokers
);

const selectNumberOfRows = createSelector(
  selectRoot,
  (configuration) => configuration.rows
);

const selectRandomDice = createSelector(
  selectRoot,
  (configuration) =>
    configuration.dice[Math.floor(Math.random() * configuration.dice.length)]
);

const selectTurn = createSelector(
  selectRoot,
  (configuration) => configuration.turn
);

export {
  selectGame,
  selectNumberOfPlayers,
  selectNumberOfJokers,
  selectNumberOfRows,
  selectRandomDice,
  selectTurn,
  selectPlayers,
};

export const { actions, reducer } = configurationSlice;
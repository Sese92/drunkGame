import { createSlice } from '@reduxjs/toolkit';
import { createSelector } from 'reselect';

import {
  SELECT_GAME,
  SET_NUMBER_PLAYERS,
  SET_NUMBER_ROWS,
  SET_TURN,
  SET_NUMBER_JOKERS,
  REMOVE_CARD,
  FLIP_CARD,
} from '../../services/game/game.service';

import {
  setPlayers,
  setJokers,
  selectRandomCard,
  removeCard,
  setBusCard,
  setHand,
  dice,
  cards,
} from './configuration.utils';

export const initialState = {
  game: '',
  numberOfPlayers: 1,
  players: [],
  turn: 0,
  // Jota
  dice: dice,
  jotas: [],
  // Bus
  cards: cards,
  rows: 1,
  busCards: [],
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
        cards: [...cards, setJokers(action.meta.jokers)],
      };
    },
    [SET_NUMBER_ROWS]: (state, action) => {
      return {
        ...state,
        rows: action.meta.rows,
        busCards: Array(action.meta.rows * 2 + 1).fill(0),
      };
    },
    [SET_TURN]: (state, action) => {
      return {
        ...state,
        turn: action.meta.turn,
      };
    },
    [REMOVE_CARD]: (state, action) => {
      return {
        ...state,
        cards: removeCard(state.cards.slice(), action.meta.card),
        players: setHand(state.players.slice(), state.turn, action.meta.card),
      };
    },
    [FLIP_CARD]: (state, action) => {
      return {
        ...state,
        cards: removeCard(state.cards.slice(), action.meta.card),
        busCards: setBusCard(state.busCards.slice(), action.meta.card),
      };
    },
  },
});

const selectRoot = (state) => state.configuration;

const selectGame = createSelector(
  selectRoot,
  (configuration) => configuration.game
);

const selectPlayers = createSelector(
  selectRoot,
  (configuration) => configuration.players
);

const selectTurn = createSelector(
  selectRoot,
  (configuration) => configuration.turn
);

// Jota
const selectRandomDice = createSelector(
  selectRoot,
  (configuration) =>
    configuration.dice[Math.floor(Math.random() * configuration.dice.length)]
);

// Bus
const selectNumberOfJokers = createSelector(
  selectRoot,
  (configuration) => configuration.jokers
);

const selectNumberOfRows = createSelector(
  selectRoot,
  (configuration) => configuration.rows
);

const selectCard = createSelector(selectRoot, (configuration) =>
  selectRandomCard(configuration.cards)
);

const selectBusCards = createSelector(
  selectRoot,
  (configuration) => configuration.busCards
);

export {
  selectGame,
  selectNumberOfJokers,
  selectNumberOfRows,
  selectRandomDice,
  selectTurn,
  selectPlayers,
  selectCard,
  selectBusCards,
};

export const { actions, reducer } = configurationSlice;

import { createSlice } from '@reduxjs/toolkit';
import { createSelector } from 'reselect';

import {
  SET_NUMBER_ROWS,
  SET_NUMBER_JOKERS,
  REMOVE_CARD,
  FLIP_CARD,
} from '../../services/bus/bus.service';

import {
  setJokers,
  selectRandomCard,
  removeCard,
  setBusCard,
  selectPlayersByCard,
  cards,
} from './bus.utils';

export const initialState = {
  cards: cards,
  rows: 1,
  busCards: [],
};

const busSlice = createSlice({
  name: 'bus',
  initialState,
  extraReducers: {
    [SET_NUMBER_JOKERS]: (state, action) => {
      return {
        ...state,
        cards:
          action.meta.jokers !== 0
            ? [...cards, setJokers(action.meta.jokers)]
            : cards,
      };
    },
    [SET_NUMBER_ROWS]: (state, action) => {
      return {
        ...state,
        rows: action.meta.rows,
        busCards: Array(action.meta.rows * 2 + 1).fill(0),
      };
    },
    [REMOVE_CARD]: (state, action) => {
      return {
        ...state,
        cards: removeCard(state.cards.slice(), action.meta.card),
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

const selectRoot = (state) => state.bus;

const selectConfigRoot = (state) => state.configuration;

const selectNumberOfJokers = createSelector(selectRoot, (bus) => bus.jokers);

const selectNumberOfRows = createSelector(selectRoot, (bus) => bus.rows);

const selectCard = createSelector(selectRoot, (bus) =>
  selectRandomCard(bus.cards)
);

const selectBusCards = createSelector(selectRoot, (bus) => bus.busCards);

const selectPlayersFiltered = createSelector(
  selectConfigRoot,
  selectCard,
  (configuration, card) => selectPlayersByCard(configuration.players, card)
);

export {
  selectNumberOfJokers,
  selectNumberOfRows,
  selectCard,
  selectBusCards,
  selectPlayersFiltered,
};

export const { actions, reducer } = busSlice;

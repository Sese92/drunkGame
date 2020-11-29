import { createSlice } from '@reduxjs/toolkit';
import { createSelector } from 'reselect';

import {
  SELECT_GAME,
  SET_NUMBER_PLAYERS,
  SET_TURN,
} from '../../services/game/game.service';

import {
  SET_PLAYER_HAND,
  REMOVE_CARD_FROM_HAND,
} from '../../services/bus/bus.service';

import { SET_PLAYER_AS_JOTA } from '../../services/jota/jota.service';

import { setPlayers } from './configuration.utils';
import { setHand, removeFromHand } from '../bus/bus.utils';
import { setJota } from '../jota/jota.utils';
export const initialState = {
  game: '',
  players: [],
  turn: 0,
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
        players: setPlayers(action.meta.numberOfPlayers, state.game),
      };
    },
    [SET_TURN]: (state, action) => {
      return {
        ...state,
        turn: action.meta.turn,
      };
    },

    // Jota
    [SET_PLAYER_AS_JOTA]: (state, action) => {
      return {
        ...state,
        players: setJota(state.players, action.meta.player),
      };
    },
    // Bus
    [SET_PLAYER_HAND]: (state, action) => {
      return {
        ...state,
        players: setHand(state.players, action.meta.player, action.meta.card),
      };
    },
    [REMOVE_CARD_FROM_HAND]: (state, action) => {
      return {
        ...state,
        players: removeFromHand(
          state.players.slice(),
          action.meta.player,
          action.meta.card
        ),
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

const selectNumberOfPlayers = createSelector(
  selectRoot,
  (configuration) => configuration.players.length
);

const selectTurn = createSelector(
  selectRoot,
  (configuration) => configuration.turn
);

export { selectGame, selectPlayers, selectNumberOfPlayers, selectTurn };

export const { actions, reducer } = configurationSlice;

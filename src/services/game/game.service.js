export const SELECT_GAME = 'SELECT_GAME';
export const SET_NUMBER_PLAYERS = 'SET_NUMBER_PLAYERS';
export const SET_NAMES = 'SET_NAMES';
export const SET_TURN = 'SET_TURN';

export const selectGame = ({ game }) => ({
  type: SELECT_GAME,
  meta: {
    game,
  },
});

export const setNumberOfPlayers = ({ numberOfPlayers }) => ({
  type: SET_NUMBER_PLAYERS,
  meta: {
    numberOfPlayers,
  },
});

export const setNames = ({ names }) => ({
  type: SET_NAMES,
  meta: {
    names,
  },
});

export const setTurn = ({ turn }) => ({
  type: SET_TURN,
  meta: {
    turn,
  },
});

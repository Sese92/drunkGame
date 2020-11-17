export const SELECT_GAME = 'SELECT_GAME';
export const SET_NUMBER_PLAYERS = 'SET_NUMBER_PLAYERS';
export const SET_NUMBER_JOKERS = 'SET_NUMBER_JOKERS';
export const SET_NUMBER_ROWS = 'SET_NUMBER_ROWS';

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

export const setNumberOfJokers = ({ jokers }) => ({
  type: SET_NUMBER_JOKERS,
  meta: {
    jokers,
  },
});

export const setNumberOfRows = ({ rows }) => ({
  type: SET_NUMBER_ROWS,
  meta: {
    rows,
  },
});

export const SELECT_GAME = 'SELECT_GAME';
export const SET_NUMBER_PLAYERS = 'SET_NUMBER_PLAYERS';
export const SET_NUMBER_JOKERS = 'SET_NUMBER_JOKERS';
export const SET_NUMBER_ROWS = 'SET_NUMBER_ROWS';
export const SET_TURN = 'SET_TURN';
export const REMOVE_CARD = 'REMOVE_CARD';
export const FLIP_CARD = 'FLIP_CARD';
export const REMOVE_CARD_FROM_HAND = 'REMOVE_CARD_FROM_HAND';

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

export const setTurn = ({ turn }) => ({
  type: SET_TURN,
  meta: {
    turn,
  },
});

export const removeCard = ({ card }) => ({
  type: REMOVE_CARD,
  meta: {
    card,
  },
});

export const flipCard = ({ card }) => ({
  type: FLIP_CARD,
  meta: {
    card,
  },
});

export const removeFromHand = ({ player, card }) => ({
  type: REMOVE_CARD_FROM_HAND,
  meta: {
    player,
    card,
  },
});

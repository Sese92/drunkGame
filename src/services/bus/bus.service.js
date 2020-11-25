export const SET_NUMBER_JOKERS = 'SET_NUMBER_JOKERS';
export const SET_NUMBER_ROWS = 'SET_NUMBER_ROWS';
export const SET_PLAYER_HAND = 'SET_PLAYER_HAND';
export const REMOVE_CARD = 'REMOVE_CARD';
export const FLIP_CARD = 'FLIP_CARD';
export const REMOVE_CARD_FROM_HAND = 'REMOVE_CARD_FROM_HAND';

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

export const setPlayerHand = ({ player, card }) => ({
  type: SET_PLAYER_HAND,
  meta: {
    player,
    card,
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

export const FINISH_FIRST_ROUND = 'FINISH_FIRST_ROUND';
export const SET_PLAYER_AS_JOTA = 'SET_PLAYER_AS_JOTA';

export const finishFirstRound = () => ({
  type: FINISH_FIRST_ROUND,
});

export const setPlayerAsJota = ({ player }) => ({
  type: SET_PLAYER_AS_JOTA,
  meta: {
    player,
  },
});

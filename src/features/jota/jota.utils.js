export const dice = [
  { number: 1, color: 'red', rule: 'New rule!' },
  { number: 7, color: 'black', rule: 'The one on the left drink!' },
  { number: 8, color: 'red', rule: 'The one on the right drink!' },
  { number: 'J', color: 'black', rule: 'All the J drink!' },
  { number: 'Q', color: 'black', rule: '...' },
  { number: 'K', color: 'red', rule: 'The ones by your side drink!' },
];

export function setJota(players, player) {
  const string = JSON.stringify(players);
  const goodPlayers = JSON.parse(string);
  let pl = goodPlayers.find((play) => play.name === player.name);
  let index = goodPlayers.indexOf(pl);

  goodPlayers[index] = { name: player.name, jota: true };

  return goodPlayers;
}

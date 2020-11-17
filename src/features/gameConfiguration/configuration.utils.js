export function setPlayers(number) {
  const arrayOfPlayers = [];
  for (let i = 0; i < number; i++) {
    arrayOfPlayers.push('Player' + (i + 1));
  }
  return arrayOfPlayers;
}

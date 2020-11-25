export function setPlayers(number, game) {
  const arrayOfPlayers = [];
  if (game === 'Jota') {
    for (let i = 0; i < number; i++) {
      arrayOfPlayers.push({ name: 'Player ' + (i + 1), jota: false });
    }
  } else if (game === 'Bus') {
    for (let i = 0; i < number; i++) {
      arrayOfPlayers.push({ name: 'Player ' + (i + 1), hand: [] });
    }
  }
  return arrayOfPlayers;
}

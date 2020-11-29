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

export function setPlayersNames(players, names) {
  const string = JSON.stringify(players);
  const goodPlayers = JSON.parse(string);
  for (let i = 0; i < goodPlayers.length; i++) {
    if (names[i] !== '') {
      goodPlayers[i].name = names[i];
    }
  }
  return goodPlayers;
}

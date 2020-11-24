export function setPlayers(number) {
  const arrayOfPlayers = [];
  for (let i = 0; i < number; i++) {
    arrayOfPlayers.push({ name: 'Player ' + (i + 1), hand: [] });
  }
  return arrayOfPlayers;
}

export function setJokers(number) {
  const jokers = [];
  for (let i = 0; i < number; i++) {
    jokers.push('Joker ' + (i + 1));
  }
  return { type: 'Joker', cards: jokers };
}

export function selectRandomCard(cards) {
  let type = cards[Math.floor(Math.random() * cards.length)];
  let number = type.cards[Math.floor(Math.random() * type.cards.length)];
  let card = { type: type.type, number, color: type.color };
  return card;
}

export function removeCard(cards, card) {
  const string = JSON.stringify(cards);
  const goodCards = JSON.parse(string);
  const type = goodCards.find((type) => type.type === card.type);
  var cardsByType;
  cardsByType = type.cards.filter((c) => c !== card.number);
  if (type.type === 'Joker') {
    cardsByType = type.cards.slice(0, type.cards.length - 1);
  }
  var index = goodCards
    .map(function (e) {
      return e.type;
    })
    .indexOf(type.type);
  goodCards[index] = {
    type: type.type,
    color: type.color,
    cards: cardsByType,
  };
  if (goodCards[index].cards.length === 0) {
    const car = goodCards.filter((typ) => typ.type !== type.type);
    return car;
  } else {
    return goodCards;
  }
}

export function setHand(players, turn, card) {
  const string = JSON.stringify(players);
  const goodPlayers = JSON.parse(string);
  const player = goodPlayers[turn];

  if (card.type !== 'Joker') {
    goodPlayers[turn] = { name: player.name, hand: [...player.hand, card] };
  }

  return goodPlayers;
}

export function setBusCard(busCards, card) {
  const string = JSON.stringify(busCards);
  const goodCards = JSON.parse(string);

  let car = goodCards.find((card) => card === 0);
  let index = goodCards.indexOf(car);
  goodCards[index] = card;
  return goodCards;
}

export function selectPlayersByCard(players, card) {
  let playersAffected = [];
  for (let i = 0; i < players.length; i++) {
    for (let j = 0; j < players[i].hand.length; j++) {
      if (players[i].hand[j].number === card.number) {
        playersAffected.push(players[i]);
      }
    }
  }
  return playersAffected;
}

export function removeFromHand(players, player, card) {
  const string = JSON.stringify(players);
  const goodPlayers = JSON.parse(string);
  let index = 0;
  for (let i = 0; i < goodPlayers.length; i++) {
    if (goodPlayers[i].name === player.name) {
      index = i;
    }
  }

  var cards = [];
  for (let j = 0; j < goodPlayers[index].hand.length; j++) {
    if (goodPlayers[index].hand[j].number !== card.number) {
      cards.push(goodPlayers[index].hand[j]);
    }
  }
  if (card.type !== 'Joker') {
    goodPlayers[index] = { name: player.name, hand: [...cards] };
  }

  return goodPlayers;
}

export const dice = [
  { number: 1, color: 'red', rule: 'New rule!' },
  { number: 7, color: 'black', rule: 'The one on the left drink!' },
  { number: 8, color: 'red', rule: 'The one on the right drink!' },
  { number: 'J', color: 'black', rule: 'All the J drink!' },
  { number: 'Q', color: 'black', rule: '...' },
  { number: 'K', color: 'red', rule: 'The ones by your side drink!' },
];

export const cards = [
  {
    type: '♥',
    color: 'red',
    cards: ['A', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K'],
  },
  {
    type: '♦',
    color: 'red',
    cards: ['A', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K'],
  },
  {
    type: '♣',
    color: 'black',
    cards: ['A', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K'],
  },
  {
    type: '♠',
    color: 'black',
    cards: ['A', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K'],
  },
];

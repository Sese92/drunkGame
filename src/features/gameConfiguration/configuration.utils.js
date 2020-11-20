export function setPlayers(number) {
  const arrayOfPlayers = [];
  for (let i = 0; i < number; i++) {
    arrayOfPlayers.push('Player ' + (i + 1));
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
  console.log(cards);
  console.log(card);

  return cards;
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

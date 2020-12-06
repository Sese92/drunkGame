function transformToNumber(card) {
  if (card.number === 'J') {
    card.number = 11;
  } else if (card.number === 'Q') {
    card.number = 12;
  } else if (card.number === 'K') {
    card.number = 13;
  } else if (card.number === 'A') {
    card.number = 14;
  }
  return card;
}

export function renderLeftButton(hand) {
  switch (hand.length) {
    case 0:
      return 'Red';
    case 1:
      return 'Up';
    case 2:
      return 'Inside';
    case 3:
      return 'Same';
  }
}

export function renderRightButton(hand) {
  switch (hand.length) {
    case 0:
      return 'Black';
    case 1:
      return 'Down';
    case 2:
      return 'Outside';
    case 3:
      return 'Different';
  }
}

export function leftClicked(hand, card) {
  if (card.type === 'Joker') {
    return false;
  }
  const cardNumber = transformToNumber(card).number;
  let firstCardNumber = 0;
  let secondCardNumber = 0;
  if (hand[0]) {
    firstCardNumber = transformToNumber(hand[0]).number;
  }
  if (hand[1]) {
    secondCardNumber = hand[1] && transformToNumber(hand[1]).number;
  }

  switch (hand.length) {
    case 0:
      if (card.color === 'red') {
        return true;
      } else {
        return false;
      }
    case 1:
      if (firstCardNumber < cardNumber) {
        return true;
      } else {
        return false;
      }
    case 2:
      if (firstCardNumber < secondCardNumber) {
        if (firstCardNumber < cardNumber && cardNumber < secondCardNumber) {
          return true;
        } else {
          return false;
        }
      } else if (firstCardNumber > secondCardNumber) {
        if (firstCardNumber > cardNumber && cardNumber > secondCardNumber) {
          return true;
        } else {
          return false;
        }
      } else {
        return false;
      }
    case 3:
      if (hand.find((handCard) => handCard.type === card.type) !== undefined) {
        return true;
      } else {
        return false;
      }
  }
}

export function middleClicked(hand, card) {
  if (card.type === 'Joker') {
    return false;
  }
  const cardNumber = transformToNumber(card).number;
  let firstCardNumber = 0;
  let secondCardNumber = 0;
  if (hand[0]) {
    firstCardNumber = transformToNumber(hand[0]).number;
  }
  if (hand[1]) {
    secondCardNumber = hand[1] && transformToNumber(hand[1]).number;
  }
  switch (hand.length) {
    case 1:
      if (firstCardNumber === cardNumber) {
        return true;
      } else {
        return false;
      }
    case 2:
      if (firstCardNumber === cardNumber || secondCardNumber === cardNumber) {
        return true;
      } else {
        return false;
      }
  }
}

export function rightClicked(hand, card) {
  if (card.type === 'Joker') {
    return false;
  }
  const cardNumber = transformToNumber(card).number;
  let firstCardNumber = 0;
  let secondCardNumber = 0;
  if (hand[0]) {
    firstCardNumber = transformToNumber(hand[0]).number;
  }
  if (hand[1]) {
    secondCardNumber = hand[1] && transformToNumber(hand[1]).number;
  }
  switch (hand.length) {
    case 0:
      if (card.color === 'black') {
        return true;
      } else {
        return false;
      }
    case 1:
      if (firstCardNumber > cardNumber) {
        return true;
      } else {
        return false;
      }
    case 2:
      if (firstCardNumber < secondCardNumber) {
        if (cardNumber < firstCardNumber || secondCardNumber < cardNumber) {
          return true;
        } else {
          return false;
        }
      } else if (firstCardNumber > secondCardNumber) {
        if (cardNumber < secondCardNumber || firstCardNumber < cardNumber) {
          return true;
        } else {
          return false;
        }
      } else {
        return false;
      }
    case 3:
      if (hand.find((handCard) => handCard.type === card.type) === undefined) {
        return true;
      } else {
        return false;
      }
  }
}

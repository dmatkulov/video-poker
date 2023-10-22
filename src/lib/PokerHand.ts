import Card from './Card';

class PokerHand {
  constructor(
    public cards: Card[],
  ) {
  }

  getOutCome(): string {
    const ranks: { [key: string]: number } = {};
    const suits: { [key: string]: number } = {};

    let flush: boolean = false;
    let fourOfKind: boolean = false;
    let threeOfKind: boolean = false;
    let twoPairs: boolean = false;
    let onePair: boolean = false;
    const values: string[] = [];

    this.cards.forEach(card => {
      ranks[card.rank] = (ranks[card.rank] || 0) + 1;
      suits[card.suit] = (suits[card.suit] || 0) + 1;
    });

    for (const rank in ranks) {
      if (ranks[rank] === 4) {
        values.push(rank);
        fourOfKind = true;
      } else if (ranks[rank] === 3) {
        values.push(rank);
        threeOfKind = true;
      } else if (ranks[rank] === 2) {
        if (onePair) {
          values.push(rank);
          twoPairs = true;
        } else {
          values.push(rank);
          onePair = true;
        }
      }
    }

    for (const suit in suits) {
      if (suits[suit] === 5) {
        values.push(suit);
        flush = true;
      }
    }

    if (flush) {
      return `Флэш (${values.join(', ')})`;
    } else if (fourOfKind) {
      return `Покер (${values.join(', ')})`;
    } else if (threeOfKind) {
      return `Тройка (${values.join(', ')})`;
    } else if (twoPairs) {
      return `Две пары (${values.join(', ')})`;
    } else if (onePair) {
      return `Пара (${values.join(', ')})`;
    } else {
      return 'Старшая карта';
    }
  }
}

export default PokerHand;
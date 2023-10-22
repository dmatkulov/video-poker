import Card from './Card';

class PokerHand {
  constructor(
    public cards: Card[],
  ) {
  }

  getOutCome(): string {
    let flush: boolean = false;
    let fourOfKind: boolean = false;
    let threeOfKind: boolean = false;
    let twoPairs: boolean = false;
    let onePair: boolean = false;
    const values: string[] = [];

    const ranks = this.cards.reduce((acc: { [key: string]: number }, card) => {
      const rank = card.rank;
      if (!acc[rank]) {
        acc[rank] = 1;
      } else {
        acc[rank]++;
      }
      return acc;
    }, {});

    const suits = this.cards.reduce((acc: { [key: string]: number }, card) => {
      const suit = card.suit;
      if (!acc[suit]) {
        acc[suit] = 1;
      } else {
        acc[suit]++;
      }
      return acc;
    }, {});

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
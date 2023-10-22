import Card from './Card';

class PokerHand {
  constructor(
    public cards: Card[],
  ) {
  }

  getOutCome(): string {
    const totalRank: string[] = [];
    const totalSuit: string[] = [];

    let flush: boolean = false;
    let fourOfKind: boolean = false;
    let threeOfKind: boolean = false;
    let twoPairs: boolean = false;
    let onePair: boolean = false;

    this.cards.forEach(card => {
      totalRank.push(card.rank);
      totalSuit.push(card.suit);
    });

    const countTotal = (arr: string[]) => {
      return arr.reduce((map: { [key: string]: number }, val: string) => {
        if (!map[val]) {
          map[val] = 1;
        } else {
          map[val]++;
        }
        return map;
      }, {});
    };

    const ranks: {[key: string]: number} = countTotal(totalRank);
    const suits: {[key: string]: number} = countTotal(totalSuit);

    for (const rank in ranks) {
      if (ranks[rank] === 4) {
        fourOfKind = true;
      } else if (ranks[rank] === 3) {
        threeOfKind = true;
      } else if (ranks[rank] === 2) {
        if (onePair) {
          twoPairs = true;
        } else {
          onePair = true;
        }
      }
    }

    for (const suit in suits) {
      if (suits[suit] === 5) {
        flush = true;
      }
    }

    if (flush) {
      return 'Флэш';
    } else if (fourOfKind) {
      return 'Покер';
    } else if (threeOfKind) {
      return 'Тройка';
    } else if (twoPairs) {
      return 'Две пары';
    } else if (onePair) {
      return `Пара`;
    } else {
      return 'Старшая карта';
    }
  }
}

export default PokerHand;
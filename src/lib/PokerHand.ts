import Card from './Card';

class PokerHand {
  constructor(
    public cards: Card[],
  ) {}
  getOutCome(): string {
    const duplicates: string[] = [];

    this.cards.forEach(card => {
      duplicates.push(card.rank);
    });

    const counts = duplicates.reduce((map: {[key: string]: number} , val) => {
      map[val] = (map[val] || 0) + 1;
      return map;
    }, {} );

    let twoPairs: boolean = false;

    for (const count in counts) {
      if (counts[count]) {
        if (counts[count] === 3) {
          return 'Тройка';
        }
        if (counts[count] === 2) {
          if (twoPairs) {
            return 'Две пары';
          }
          twoPairs = true;
        } else if (counts[count] === 3) {
          return 'Тройка';
        }
      }
    }

    if (twoPairs) {
      return 'Одна пара';
    }

    return 'Старшая карта';
  }
}
export default PokerHand;
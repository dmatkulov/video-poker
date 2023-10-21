import Card from './Card';

class PokerHand {
  constructor(
    public cards: Card[],
  ) {}
  getOutCome(): string {
    const message: string = 'Старшая карта';
    // const pair: string[] = [];

    this.cards.forEach(card => {
      console.log(card.rank);
    });

    for (let i = 0; i < this.cards.length; i++) {
      for (let j = i + 1; j < this.cards.length; j++) {
        if (this.cards[i].rank === this.cards[j].rank) {
          console.log(this.cards[i].rank, this.cards[j].rank);
          return 'Одна пара';
        }
      }
    }

    return message;
  }
}
export default PokerHand;
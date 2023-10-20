import Card from './Card';

class CardDeck {
  constructor(
    public card: Card[] = [],
    public ranks: string[] = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'],
    public suits: string[] = ['diams', 'hearts', 'clubs', 'spades'],
  ) {
    suits.forEach(suit => {
      ranks.forEach(rank => {
        this.card.push(new Card(rank, suit));
      });
    });
  }

  getCard(): Card {
    const randomIndex: number = Math.floor(Math.random() * this.card.length);
    return this.card.splice(randomIndex, 1)[0];
  }

  getCards(howMany: number) {
    const cards = [];
    for (let i = 0; i < howMany; i++) {
      const card = this.getCard();
      if (card) {
        cards.push(card);
      }
    }
    return cards;
  }
}

export default CardDeck;
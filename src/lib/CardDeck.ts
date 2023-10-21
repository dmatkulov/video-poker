import Card from './Card';

class CardDeck {
  public deck: Card[] = [];
  constructor(
    public ranks: string[] = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'],
    public suits: string[] = ['diams', 'hearts', 'clubs', 'spades'],
  ) {
    suits.forEach(suit => {
      ranks.forEach(rank => {
        this.deck.push(new Card(rank, suit));
      });
    });
    console.log('Все комбинации: ', this.deck);
  }

  private getCard(): Card {
    const randomIndex: number = Math.floor(Math.random() * this.deck.length);
    return this.deck.splice(randomIndex, 1)[0];
  }

  getCards(howMany: number): Card[] {
    const cards: Card[] = [];
    for (let i = 0; i < howMany; i++) {
      const card = this.getCard();
      if (card) {
        cards.push(card);
      }
    }
    console.log('5 случайных карт: ', cards);
    console.log('После удаления: ', this.deck);
    return cards;
  }
}

export default CardDeck;
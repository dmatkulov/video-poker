import PlayingCard from './PlayingCard/PlayingCard';
import {useState} from 'react';
import Card from './lib/Card';
import CardDeck from './lib/CardDeck';
import './App.css';
import PokerHand from './lib/PokerHand';

const newCardDeck = new CardDeck();
let message: string;

function App() {
  const [cards, setCards] = useState<Card[]>([]);

  const dealCards = (): string => {
    const newCards = newCardDeck.getCards(5);
    setCards(newCards);
    const combination = new PokerHand(newCards);
    return message = combination.getOutCome();
  };

  if (cards.length > 0) {
    return (
      <div>
        <p className="msg">{message}</p>
        <div className="playingCards faceImages">
          {cards.map((card, key: number) => (
            <PlayingCard key={key} rank={card.rank} suit={card.suit}/>
          ))}
        </div>
        <button className="btn" onClick={dealCards}>Раздать карты</button>
      </div>
    );
  } else {
    return (
      <div>
        <p>Раздайте карты, чтобы начать игру</p>
        <button onClick={dealCards}>Раздать карты</button>
      </div>
    );
  }
}

export default App;

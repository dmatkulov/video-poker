import PlayingCard from './PlayingCard/PlayingCard';
import {useState} from 'react';
import Card from './lib/Card';
import CardDeck from './lib/CardDeck';
import './App.css';

const newCardDeck = new CardDeck();
function App() {
  const [cards, setCards] = useState<Card[]>([]);

  const dealCards = () => {
    const newCards = newCardDeck.getCards(5);
    setCards(newCards);
  };

  if (cards.length > 0) {
    return (
      <div>
        <div className="playingCards faceImages">
          {cards.map((card, key: number) => (
            <PlayingCard key={key} rank={card.rank} suit={card.suit}/>
          ))}
        </div>
        <button onClick={dealCards}>Раздать карты</button>
      </div>
    );
  } else {
    return (
      <button onClick={dealCards}>Раздать карты</button>
    );
  }
}

export default App;

import PlayingCard from './PlayingCard/PlayingCard';
import {useState} from 'react';
import Card from './lib/Card';
import CardDeck from './lib/CardDeck';
import './App.css';

function App() {
  const [cards, setCards] = useState<Card[]>([]);
  const dealCards = () => {
    const newCardDeck = new CardDeck();
    const newCards = newCardDeck.getCards(5);
    setCards(newCards);
    newCardDeck.getCard();
    console.log('До ', cards);
    console.log('После ', newCards);
  };

  if (cards.length > 0) {
    return (
      <div>
        <button onClick={dealCards}>После раздачи</button>
        <div className="playingCards faceImages">
          {cards.map((card, key: number) => (
            <PlayingCard key={key} rank={card.rank} suit={card.suit}/>
          ))}
        </div>
      </div>
    );
  } else {
    return (
      <button onClick={dealCards}>Раздать карты</button>
    );
  }
}

export default App;

import './App.css';
import Card from './lib/Card';
import CardDeck from './lib/CardDeck';
import {useState} from 'react';

function App() {
  const [cards, setCards] = useState<Card[]>([]);
  const dealCards = () => {
    const newDeck = new CardDeck();
    const deck = newDeck.getCards(5);
    console.log(deck);
  };

  return (
    <div>
      <button onClick={dealCards}>Раздать карты</button>
    </div>
  );
}

export default App;

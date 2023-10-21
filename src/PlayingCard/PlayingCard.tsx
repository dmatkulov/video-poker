import React from 'react';

interface Props {
  rank: string;
  suit: string;
}

const PlayingCard: React.FC<Props> = ({rank, suit}) => {
  const symbol: { [key: string]: string } = {
    diams: '♦',
    hearts: '♥',
    clubs: '♣',
    spades: '♠'
  };

  return (
    <span className={`card rank-${rank.toLowerCase()} ${suit}`}>
      <span className="rank">{rank}</span>
      <span className="suit">{symbol[suit]}</span>
    </span>
  );
};

export default PlayingCard;
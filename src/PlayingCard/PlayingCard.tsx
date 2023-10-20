import React from 'react';

interface Props {
  rank: 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 'J' | 'Q' | 'K' | 'A';
  suit: 'diams' | 'hearts' | 'clubs' | 'spades';
}

const PlayingCard: React.FC<Props> = ({rank, suit}) => {
  return (
    <span className={`card rank-${rank} ${suit}`}>
      <span className="rank">{rank}</span>
      <span className="suit">{suit}</span>
    </span>
  );
};

export default PlayingCard;
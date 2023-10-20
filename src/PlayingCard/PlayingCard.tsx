import React from 'react';

interface Props {
  rank: string;
  suit: string;
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
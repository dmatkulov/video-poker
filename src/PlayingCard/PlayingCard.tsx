import React from 'react';

interface Props {
  rank: string | number;
  suit: string;
}

const PlayingCard: React.FC<Props> = ({rank, suit}) => {
  return (
    <span className="card rank-k diams">
      <span className="rank">{rank}</span>
      <span className="suit">{suit}</span>
    </span>
  );
};

export default PlayingCard;
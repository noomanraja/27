import React from 'react';
import { Link } from 'react-router-dom';

function TypeCard({ type }) {
  return (
    <div>
      <h3>{type.name}</h3>
      <Link to={`/${type.name}`}>View Pokemons</Link>
    </div>
  );
}

export default TypeCard;

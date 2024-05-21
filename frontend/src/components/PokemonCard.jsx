import React from 'react';
import { Link } from 'react-router-dom';

function PokemonCard({ pokemon }) {
  return (
    <div>
      <h3>{pokemon.name}</h3>
      <Link to={`/pokemons/${pokemon.name}`}>View Details</Link>
    </div>
  );
}

export default PokemonCard;

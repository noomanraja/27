import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

function PokemonCard({ pokemon }) {
  const [pokemonDetails, setPokemonDetails] = useState(null);

  useEffect(() => {
    axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`)
      .then(response => {
        setPokemonDetails(response.data);
      })
      .catch(console.error);
  }, [pokemon.name]);

  if (!pokemonDetails) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h3>{pokemonDetails.name}</h3>
      <img src={pokemonDetails.sprites.front_default} alt={pokemonDetails.name} />
      <p>Number: {pokemonDetails.id}</p>
      <Link to={`/pokemons/${pokemonDetails.name}`}>View Details</Link>
    </div>
  );
}

export default PokemonCard;

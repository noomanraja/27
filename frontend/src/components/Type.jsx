import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from 'react-query';
import axios from 'axios';
import PokemonCard from './PokemonCard';

function fetchPokemonsOfType(typeName) {
  return axios.get(`https://pokeapi.co/api/v2/type/${typeName}`)
    .then(response => response.data.pokemon);
}

function Type() {
  const { type } = useParams();
  const { data: pokemons, isLoading, error } = useQuery(['type', type], () => fetchPokemonsOfType(type));

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error occurred while fetching data</div>;
  }

  return (
    <div>
      <h1>{type}</h1>
      {pokemons.map(pokemon => (
        <PokemonCard key={pokemon.pokemon.name} pokemon={pokemon.pokemon} />
      ))}
    </div>
  );
}

export default Type;


import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from 'react-query';
import axios from 'axios';

function fetchPokemon(pokemonName) {
  return axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
    .then(response => response.data);
}

function Pokemon() {
  const { pokemon } = useParams();
  const { data, isLoading, error } = useQuery(['pokemon', pokemon], () => fetchPokemon(pokemon));

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error occurred while fetching data</div>;
  }

  return (
    <div>
      <h1>{data.name}</h1>
      <img src={data.sprites.front_default} alt={data.name} />
      <h2>Types</h2>
      {data.types.map((type, index) => (
        <div key={index}>{type.type.name}</div>
      ))}
      <h2>Stats</h2>
      {data.stats.map((stat, index) => (
        <div key={index}>{stat.stat.name}: {stat.base_stat}</div>
      ))}
      <h2>Abilities</h2>
      {data.abilities.map((ability, index) => (
        <div key={index}>{ability.ability.name}</div>
      ))}
    </div>
  );
}

export default Pokemon;

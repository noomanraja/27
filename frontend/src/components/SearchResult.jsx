
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useQuery } from 'react-query';
import axios from 'axios';

function fetchPokemon(pokemonName) {
  return axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
    .then(response => response.data);
}

function SearchResult() {
  const { pokemon } = useParams();
  const { data, isLoading, error } = useQuery(['pokemon', pokemon], () => fetchPokemon(pokemon));

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Det du søker etter finnes ikke</div>;
  }

  return (
    <div>
      <h1>{data.name}</h1>
      <Link to={`/pokemons/${data.name}`}>View Details</Link>
    </div>
  );
}

export default SearchResult;

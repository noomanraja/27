
import React from 'react';
import { useQuery } from 'react-query';
import axios from 'axios';
import PokemonCard from './PokemonCard';
import TypeCard from './TypeCard';

function fetchPokemons() {
  return axios.get('https://pokeapi.co/api/v2/pokemon?limit=9')
    .then(response => response.data.results);
}

function fetchTypes() {
  return axios.get('https://pokeapi.co/api/v2/type')
    .then(response => response.data.results);
}

function Home() {
  const { data: pokemons, isLoading: pokemonsLoading, error: pokemonsError } = useQuery('pokemons', fetchPokemons);
  const { data: types, isLoading: typesLoading, error: typesError } = useQuery('types', fetchTypes);

  if (pokemonsLoading || typesLoading) {
    return <div>Loading...</div>;
  }

  if (pokemonsError || typesError) {
    return <div>Error occurred while fetching data</div>;
  }

  return (
    <div>
      <section>
        <h2>Main Pokemons</h2>
        {pokemons.map(pokemon => (
          <PokemonCard key={pokemon.name} pokemon={pokemon} />
        ))}
      </section>
      <section>
        <h2>Types</h2>
        {types.map(type => (
          <TypeCard key={type.name} type={type} />
        ))}
      </section>
    </div>
  );
}

export default Home;

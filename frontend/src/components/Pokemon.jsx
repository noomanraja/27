import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from 'react-query';
import axios from 'axios';

const fetchPokemon = (pokemonName) =>
  axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`).then((response) => response.data);

const fetchAbilityDetails = async (abilityUrl) => {
  const response = await axios.get(`${abilityUrl}?language=en`);
  return response.data;
};

const AbilityDetails = ({ abilityUrl }) => {
  const { data, isLoading, error } = useQuery(['ability', abilityUrl], () => fetchAbilityDetails(abilityUrl));

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error fetching ability details</p>;

  const { effect, short_effect } = data.effect_entries[0];

  return (
    <>
      <p>
        <strong>Effect:</strong> {effect}
      </p>
      <p>
        <strong>Short Effect:</strong> {short_effect}
      </p>
    </>
  );
};

const Pokemon = () => {
  const { pokemon } = useParams();
  const { data, isLoading, error } = useQuery(['pokemon', pokemon], () => fetchPokemon(pokemon));

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error fetching data</p>;

  return (
    <>
      <h1>{data.name}</h1>
      <img src={data.sprites.front_default} alt={data.name} />
      <h2>Types</h2>
      {data.types.map((type, index) => (
        <p key={index}>{type.type.name}</p>
      ))}
      <h2>Stats</h2>
      {data.stats.map((stat, index) => (
        <p key={index}>
          {stat.stat.name}: {stat.base_stat}
        </p>
      ))}
      <h2>Abilities</h2>
      {data.abilities.map((ability, index) => (
        <div key={index}>
          <p>{ability.ability.name}</p>
          <AbilityDetails abilityUrl={ability.ability.url} />
        </div>
      ))}
    </>
  );
};

export default Pokemon;
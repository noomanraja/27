import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import sanityClient from '@sanity/client';
import PokemonCard from './PokemonCard';

const client = sanityClient({
  projectId: 'your-project-id', // erstatt med ditt prosjekt-ID
  dataset: 'production', // eller hvilket datasett du bruker
  useCdn: true // `false` hvis du vil bruke den backend-lagrede versjonen
});

function Team() {
  const { teamId } = useParams();
  const [team, setTeam] = useState(null);

  useEffect(() => {
    client.fetch('*[_type == "team" && _id == $teamId]', { teamId })
      .then((data) => {
        setTeam(data[0]);
      })
      .catch(console.error);
  }, [teamId]);

  if (!team) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{team.title}</h1>
      {team.pokemon.map(pokemon => (
        <PokemonCard key={pokemon._id} pokemon={pokemon} />
      ))}
    </div>
  );
}

export default Team;

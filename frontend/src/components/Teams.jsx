import React, { useEffect, useState } from 'react';
import sanityClient from '@sanity/client';

const client = sanityClient({
  projectId: 'your-project-id', 
  dataset: 'production', 
  useCdn: true 
});

function Teams() {
  const [teams, setTeams] = useState([]);

  useEffect(() => {
    client.fetch('*[_type == "team"]')
      .then((data) => {
        setTeams(data);
      })
      .catch(console.error);
  }, []);

  return (
    <div>
      <h1>Teams</h1>
      {teams.map(team => (
        <div key={team._id}>
          <h2>{team.title}</h2>
          <img src={team.image.url} alt={team.title} />
        </div>
      ))}
    </div>
  );
}

export default Teams;

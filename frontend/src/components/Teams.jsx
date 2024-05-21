import React, { useEffect, useState } from 'react';
import sanityClient from '@sanity/client';
import logo from '../images/favicon-32x32.png'
import '../index.css'


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
    <div className='container-header'>
    <img src={logo} className='img-logo' alt='logo'/>
      <h1>Teams</h1>
      </div>
      {teams.map(team => (
        <div key={team._id}>
          <h2>{team.title}</h2>
          <img src={team.image.url} alt={team.title} /> // https://pixabay.com/illustrations/pokemon-pokemon-ball-free-graphics-1702772/

        </div>
      ))}
    </div>
  );
}

export default Teams;

import React from 'react';
import sanityClient from '@sanity/client';

const client = sanityClient({
  projectId: 'your-project-id', // erstatt med ditt prosjekt-ID
  dataset: 'production', // erstatt med ditt datasett
  useCdn: true,
});

const Team = ({ match }) => {
  // ...
};

export default Team;

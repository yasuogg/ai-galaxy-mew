// pages/websites.js

import React from 'react';
import { Card } from "../../components/Card";
export const getStaticProps = async () => {
  try {
    const res = await fetch('https://rickandmortyapi.com/api/character');
    const repo = await res.json();
    const characters = repo?.results?.map(
      ({ id, name, status, species, location, image }) => ({
        id,
        name,
        status,
        species,
        location,
        image,
      })
    );

    return { props: { characters } };
  } catch (error) {
    console.error('Error fetching data:', error);
    return {
      props: {
        characters: [], // You can return an empty array or a default value
      },
    };
  }
};

const WebsitesPage = ({ characters }) => {
  return (
    <div>
      <h1>characters</h1>
      {characters.map((char)=>(
    <Card key={char.id} {...char}></Card>
      ))}
    </div>
  );
};

export default WebsitesPage;

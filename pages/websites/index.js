import styles from "../../styles/websites.module.css";
import Head from "next/head";
import fetch from "isomorphic-fetch";
import { Card } from "../../components/Card";

const RickAndMorty = ({ characters = [] }) => {
  return (
    <>
      <Head>
        <title>the Rick and Morty API</title>
      </Head>
      <div className={styles.container}>
        <h1 className={styles.title}>the Rick and Morty API</h1>
        <p className={styles.paragraph}>
          this Examples is using data from this{" "}
          <a className={styles.link} href="https://rickandmortyapi.com/">
            API
          </a>
          .
        </p>
        <h1 className={styles.title}>Characters 👇</h1>
        <div className={styles.charactersContainer}>
          {characters.map((char) => (
            <Card key={char.id} {...char} />
          ))}
        </div>
      </div>
    </>
  );
};

export const getStaticProps = async () => {
  const res = await fetch("https://rickandmortyapi.com/api/character");
  const data = await res.json();
  const characters = data?.results?.map(
    ({ id, name, status, species, location, image }) => ({
      id,
      name,
      status,
      species,
      location: location.name,
      image,
    })
  );
  if (!characters) return { props: { characters: [] } };
  return { props: { characters } };
};

export default RickAndMorty;
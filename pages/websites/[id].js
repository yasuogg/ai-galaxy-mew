import styles from "../../styles/websites.module.css";
import Head from "next/head";
import fetch from "isomorphic-fetch";
import { useRouter } from "next/router";

const CharacterPage = ({ character }) => {
  const router = useRouter();

  if (router.isFallback) {
    return (
      <div className={styles.characterWrapper}>
        <h1 className={styles.title}>Loading...</h1>
      </div>
    );
  }

  return (
    <>
      <Head>
        <title>{character.name}</title>
      </Head>
      <div className={styles.container}>
        <div className={styles.characterWrapper}>
          <img src={character.image} />
          <h1 className={styles.title}>{character.name}</h1>
          <h5 className={styles.statusText}>
            <span
              className={
                character.status === "Alive"
                  ? styles.statusGreen
                  : styles.statusRed
              }
            ></span>{" "}
            {character.status} - {character.species}
          </h5>
          <div className={styles.locationContainer}>
            Last known Location:{" "}
            <b className={styles.loaction}>{character?.location?.name}</b>
          </div>
        </div>
      </div>
    </>
  );
};

export const getStaticPaths = async () => {
  const res = await fetch("https://rickandmortyapi.com/api/character");
  const data = await res.json();
  const paths = data?.results?.map(({ id }) => ({
    params: { id: id.toString() },
  }));
  return { paths, fallback: true };
};

export const getStaticProps = async ({ params }) => {
  const { id } = params;
  const res = await fetch(`https://rickandmortyapi.com/api/character/${id}`);
  const data = await res.json();
  if (!data) return { notFound: true };
  return { props: { character: data } };
};

export default CharacterPage;
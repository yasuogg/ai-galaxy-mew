import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import { FaBar, FaTimer } from "react-icons/fa";
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import RickAndMorty from './websites/index'
export default function Home() {
  return (
   <>
      <div className={styles['home']}>

        <div className={styles['title']}>

          <h1><span className={styles['Discover']}>Discover</span> the future</h1>
          <div className={styles['serch-bar']}>
            <Image src="/magnifier.png" alt="serch-icon" width="40" height="40" >
            </Image>
            <input type='text' placeholder="WHAT YOU ARE LOOKING FOR ?">

            </input>
          </div>
          <a href="https://google.com"> <button type="button">Search</button></a>
          <a href="https://google.com"> <button type="button">Search</button></a>
          <br></br>
          <div className={styles["card"]}>
          <div className={styles["card1"]}>
            <h2>150 +</h2>
            <h1>AI Websites </h1>
           </div>
           <div className={styles["card2"]}>
           <h2>150 +</h2>
            <h1>AI Websites </h1>
           </div>

           <div className={styles["card3"]}>
           <h2>150 +</h2>
            <h1>AI Websites </h1>
           </div>
        </div>
        </div>
        <div className={styles['imgbox']}>

          <Image src="/home.png" alt="Logo" width="634" height="634" >

          </Image>
        </div>

      </div>
     <RickAndMorty/>
      </>
  )
}


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

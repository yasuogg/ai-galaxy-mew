import Link from "next/link"
import Image from 'next/image'
import Logo from './logo'
import styles from '@/styles/header.module.css'
import {useRef} from 'react'
import {FaBars,FaTimes} from "react-icons/fa";
export default function Header(){

  const navRef=useRef();

  const shownavbar=()=>{
    navRef.current.classList.toggle("responsive_nav")
  }
    return (
<bod>
      <div className={styles['top-header']}>
          <nav ref={navRef}>
            <div>
              <Logo />
            </div>
            <ul>
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="websites">Catalogue</Link>
              </li>
              <li>
                <Link href="/">Pricing</Link>
              </li>
              <li>
                <Link href="/about">About</Link>
              </li>
              <li>
                <Link href="/">FAQ</Link>
              </li>
            <a href="https://chrome.google.com/webstore/category/extensions" target="_blank" rel="noopener noreferrer" > <button type="button">Get Chrome extensions</button></a>
            </ul>
            <button className={styles['nav-close-btn']} onClick={shownavbar}>
              <FaTimes />
            </button>
          </nav>
          <button className={styles['nav-btn']} onClick={shownavbar}>
              <FaBars />
            </button>
            </div>
            <script src="https://cdn.botpress.cloud/webchat/v0/inject.js"></script>
<script src="https://mediafiles.botpress.cloud/6d24cad5-0a97-4ce0-b346-c04ac4a11086/webchat/config.js" defer></script>
            </bod>
      );
    }

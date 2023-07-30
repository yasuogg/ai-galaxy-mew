import Link from "next/link"
import Image from 'next/image'
import Logo from './logo'
import styles from '@/styles/footer.module.css'
import {FaTwitter,FaInstagram,FaLinkedin} from "react-icons/fa";

export default function Footer(){
    return(

        <>
             <div className={styles['logo']}>
          <Logo />
        </div>
        <div className={styles['social']}>
          <ul>
          <li> <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
        <FaTwitter />
      </a></li>
      <li> <a href="https://www.instagram.com/galxy.ai/" target="_blank" rel="noopener noreferrer"> 
        <FaInstagram />
      </a></li>
    <li><a href="https://www.instagram.com/galxy.ai/" target="_blank" rel="noopener noreferrer"> 
        <FaLinkedin />
      </a></li>
      </ul>
    </div>

        <div className={styles['line']}>
        <hr></hr>
        </div>
        <center>
           <h5>©2023 Ai Galaxy. All rights reserved .</h5>
           </center>



        </>
    )

}
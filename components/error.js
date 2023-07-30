import Link from "next/link"
import Image from 'next/image'
import Logo from './logo'
import styles from '@/styles/error.module.css'
import {FaTwitter,FaInstagram,FaLinkedin} from "react-icons/fa";
export default function error(){
    return(

        <>
        
      <div class="col-md-6 align-self-center">
        <h1>404</h1>
        <h2>UH OH! You're lost.</h2>
        <p>The page you are looking for does not exist.
          How you got here is a mystery. But you can click the button below
          to go back to the homepage.
        </p>
        <button class="btn green">HOME</button>
      </div>
        </>
    )

}
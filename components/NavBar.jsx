import Head from 'next/head'
import Image from 'next/image'
import BookwardenLogo from '../assets/bookwarden.svg'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'


function NavBar() {
  return (
    <>
    	<header className={styles.header}>
            <Image src={BookwardenLogo} alt="Logo Bookwarden" className={styles.logo}/>
	</header> 
    <div className={styles.container}>
    </div>
    </>
  )
}
export default NavBar;
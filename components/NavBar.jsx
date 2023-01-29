import Head from 'next/head'
import Image from 'next/image'
import BookwardenLogo from '../assets/bookwarden.svg'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'


function NavBar() {
  return (
    <>
    	<div className={styles.navContainer}>
            <Image src={BookwardenLogo} alt="Logo Bookwarden" className={styles.logo}/>
    </div>
    </>
  )
}
export default NavBar;
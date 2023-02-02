import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import NavBar from '@/components/NavBar'
import HeroHeader from "@/components/HeroHeader"
import CommercialBar from "@/components/CommercialBar"
import CommercialSection from "@/components/CommercialSection"
import MailSection from "@/components/MailSection"
import BookSection from '@/components/BookSection'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Bookwarden</title>
        <meta name="description" content="Apprenez l'informatique en un click à travers des formats ward ou de lecture de résumé de livre." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar/>
      <HeroHeader/>
      <CommercialBar/>
      <CommercialSection/>
      <MailSection/>
      <BookSection/>
      
    </>
  )
}

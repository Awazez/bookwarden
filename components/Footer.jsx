import Image from 'next/image'
import styles from '@/styles/Home.module.css'
import logoSmall from '../assets/logoSmall.svg'

function Footer() {
  return (
    <>
<br></br>
<br></br>
<br></br>
<br></br>
  
    <div className={styles.containerAsset}>
            <Image src={logoSmall} alt="Logo Bookwarden"/>
    </div>
    </>
  )
}
export default Footer;
import Image from 'next/image'
import styles from '@/styles/Home.module.css'
import assets2 from '../assets/assets2.svg'

function CommercialBar() {
  return (
    <>
<br></br>
<br></br>
<br></br>
<br></br>
<br></br>
<br></br>
<br></br>
<br></br>
<br></br>
<div className={styles.HeroHeader}>
    <div className={styles.containerHeader}>
    <div className={styles.containerAsset}>
            <Image src={assets2} alt="Logo Bookwarden" className={styles.assets2}/>
    </div>
    <div className={styles.title}>Apprendre par la lecture ou l’écoute
 
    </div>
    <br></br>
    <div className={styles.commercialHeader}>
    <div className={styles.title2}>
    La lecture de livres ou l’écoute permet une meilleur appropriation des concepts et notamment en informatique 
    Elle éveille votre curiosité et vous permet vous former en continue
    </div>
    </div>
    </div>
    </div>
    
    </>
  )
}
export default CommercialBar;
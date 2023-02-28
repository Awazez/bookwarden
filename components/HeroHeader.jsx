import Image from 'next/image'
import styles from '@/styles/Home.module.css'
import assets1 from '../assets/assets1.svg'

function HeroHeader() {
  return (
    <>
    <div className={styles.heroHeader}>
    <div className={styles.containerHeader}>
    <div className={styles.title}>LA CONNAISSANCE
    <br></br> EN UN CLIC 
    </div>
    <br></br>
    <div className={styles.title2}>
    Parfait pour les développeurs<br></br>
    curieux qui ont envie de se<br></br>
    perfectionner <br></br>
    Parfait pour les passionnés<br></br> 
    qui veulent découvrir le<br></br>
    monde du numérique<br></br>
    Parfait pour les séniors un peu <br></br>
    pressé par le temps <br></br>
    </div>
    <button className={styles.button}>Rejoignez la waiting list</button>
    </div>
    <div className={styles.containerAsset}>
            <Image src={assets1} alt="Logo Bookwarden" className={styles.assets1}/>
    </div>
    </div>
    </>
  )
}
export default HeroHeader;
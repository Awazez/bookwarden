import Image from 'next/image'
import styles from '@/styles/Home.module.css'
import bookasset from '../assets/bookasset.svg'
import lampasset from '../assets/lampasset.svg'
import clockasset from '../assets/clockasset.svg'


function BookSection() {
  return (
    <>
<br></br>
<br></br>
<br></br>
<br></br>
<br></br>
<br></br>
<br></br>
    <div className={styles.commercialContainer}>
    <div className={styles.titleJustify}>Apprendre l’informatique par l’écoute ou la lecture</div>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <div className={styles.commercialContainer2}>
        <div className={styles.assetContainer}>
            <div className={styles.assetCommercial}>
            <Image src={bookasset} alt="Logo Bookwarden" className={styles.commercialAsset}/>
            </div>
        
            <div className={styles.title3}>
            Lire ou écoutez
            </div>
            <div className={styles.p}>
            Comprendre un livre en moins de 10 minutes 
            </div>
        </div>

        <div className={styles.assetContainer}>
        <div className={styles.assetCommercial}>
        <Image src={lampasset} alt="Logo Bookwarden" className={styles.commercialAsset}/>
        </div>
            <div className={styles.title3}>
            Quoi lire ? 
            </div>
            <div className={styles.p}>
            Obtenir une liste de livre à découvrir 
            </div>
        </div>

        <div className={styles.assetContainer}>
        <div className={styles.assetCommercial}>
        <Image src={clockasset} alt="Logo Bookwarden" className={styles.commercialAsset}/>
        </div>
            <div className={styles.title3}>
            Rapide
            </div>
            <div className={styles.p}>
            Optimiser votre apprentissage par l'écoute
            </div>
        </div>
        
        </div> 
    </div>

    </>
  )
}
export default BookSection;
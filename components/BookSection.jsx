import Image from 'next/image'
import styles from '@/styles/Home.module.css'
import brick3 from '../assets/brick3.svg'


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
    <div className={styles.titleJustify}>Les livres à lire ou à écouter sur Bookwarden</div>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <div className={styles.commercialContainer2}>
        <div className={styles.assetContainer}>
            <Image src={brick3} alt="Logo Bookwarden"/>
        </div>

             
        </div> 
        <br></br>
<br></br>
<br></br>
<br></br>
    </div>

    </>
  )
}
export default BookSection;
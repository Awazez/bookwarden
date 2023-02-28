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
<br></br>
<br></br>
<br></br>
<br></br>

<div className={styles.blocContainer}>
<div className={styles.bloc}>
<div className={styles.blocSeparation}>
<span className={styles.blocColor}>56%</span> des Français ont déjà écouté du contenus audio <br></br>
</div>
<div className={styles.blocSeparation}>
<span className={styles.blocColor}>57%</span> des Français le font pour se cultiver <br></br>
</div>
<div className={styles.blocSeparation}>
<span className={styles.blocColor}>63%</span> des Français pense que c’est une solution complémentaire à la lecture classique <br></br>
</div>
<div className={styles.blocSeparation}>
<span className={styles.blocColor}>63%</span> des Français pense que c’est une solution complémentaire à la lecture classique <br></br>
</div>

</div>
<div className={styles.blocText}>
<div className={styles.blocSeparation}>
  </div>
  <div className={styles.titleBloc}>Soyez plus efficace</div>
  <div className={styles.titleBloc}>Soyez plus productif</div>
  <div className={styles.titleBloc}>Soyez plus studieux</div>
  <div className={styles.titleBloc}>Soyez plus performant</div>
  <div className={styles.titleBloc}>Soyez plus pointu</div>
 <br></br>
 <br></br>
 <br></br>
</div>
</div>
    
    </>
  )
}
export default CommercialBar;
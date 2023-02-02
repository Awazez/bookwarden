import Image from 'next/image'
import styles from '@/styles/Home.module.css'
import assets2 from '../assets/assets2.svg'
import { useState } from 'react'
import firebase from 'firebase/app';
import {db} from "../firebaseconfig";
import { getFirestore, collection,addDoc } from "firebase/firestore"
const colRef = collection(db, "contacts")
function CommercialBar() {
  const[email, setEmail] = useState("");

  const handleSubmit =  (e) => {
    e.preventDefault();
    addDoc(colRef,{
      email: email
    })
    .then(() => {
      alert("Votre email a été enregistré 🚀")
    });
    setEmail("");
  };
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
    <div className={styles.commercialSection}>
    <form onSubmit={handleSubmit} className={styles.containerSection}>
    <div htmlFor="last" className={styles.title}>Entrer votre email pour rejoindre la waiting liste</div>
    <div className={styles.mailSection}>
    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className={styles.input}/>
    <button type="submit">Submit</button>
    </div>
    
    </form>
    </div>
<br></br>
<br></br>
<br></br>
<br></br>
<br></br>
<br></br>

    </>
  )
}
export default CommercialBar;
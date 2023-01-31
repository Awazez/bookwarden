import Image from 'next/image'
import styles from '@/styles/Home.module.css'
import assets2 from '../assets/assets2.svg'
import { useState } from 'react'
import firebase from 'firebase/app';
import 'firebase/firestore';
import firebaseConfig from '../firebaseConfig';


function CommercialBar() {
  const[email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const firestore = firebase.firestore();
      const docRef = firestore.collection('contact_forms').doc();
      await docRef.set({ email});
      setLoading(false);
      router.push('/success');
    } catch (error) {
      setError(error.message);
      setLoading(false);
    }
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
    <div >
    </div>
    </div>
    <form onSubmit={handleSubmit} className={styles.containerSection}>
    <div htmlFor="last" className={styles.title}>Entrer votre email pour rejoindre la waiting liste</div>
    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className={styles.input}/>
    {loading ? (
        <p>Loading...</p>
      ) : (
        <button type="submit">Submit</button>
      )}
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </form>
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
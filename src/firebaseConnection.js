import { initializeApp } from "firebase/app";
import { getFirestore} from 'firebase/firestore';
import { getAuth } from 'firebase/auth'




const firebaseConfig = {
    apiKey: "AIzaSyCPa6GO4Kl3udNPrqmLm4BbXlRNwzTstrk",
    authDomain: "projeto-4c65a.firebaseapp.com",
    projectId: "projeto-4c65a",
    storageBucket: "projeto-4c65a.appspot.com",
    messagingSenderId: "260317084960",
    appId: "1:260317084960:web:7130df44660bd252a96b45",
    measurementId: "G-BLGC7NZ5ET"
  };

  const firebaseApp = initializeApp(firebaseConfig);
  const db = getFirestore(firebaseApp);
  const auth = getAuth(firebaseApp)
 
export  { db, auth };
import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider, createUserWithEmailAndPassword } from 'firebase/auth'
import { Navigate, useNavigate } from 'react-router-dom';
import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore'
import { getDatabase } from "firebase/database";

function startFirebase(){

    const firebaseConfig = {
      apiKey: "AIzaSyCUQZ258TnlHxUXpEaFIowysBl0SizobEA",
      authDomain: "endeavor-e2d67.firebaseapp.com",
      projectId: "endeavor-e2d67",
      storageBucket: "endeavor-e2d67.appspot.com",
      messagingSenderId: "659110002844",
      appId: "1:659110002844:web:551083df20067c3812ad59"
    };
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
    return getDatabase(app);
}

export default startFirebase
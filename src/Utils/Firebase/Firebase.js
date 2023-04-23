import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider, createUserWithEmailAndPassword } from 'firebase/auth'
import { Navigate, useNavigate } from 'react-router-dom';
import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore'
import { getDatabase } from "firebase/database";


// Your web app's Firebase configuration
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



const provider = new GoogleAuthProvider()

provider.setCustomParameters({
    prompt: 'select_account'
})

export const auth = getAuth()
export const signInWithGooglePopup = () => {
    return (
        signInWithPopup(auth, provider)
    )
}

export const db = getFirestore()

export const createUserDocument = async (user, signUpName = null) => {
    const userDocRef = doc(db, 'users', user.uid)
    
    const userData = await getDoc(userDocRef)
    console.log(userData.exists())

    if(!userData.exists()){
        const { displayName, email } = user
        const createdDate = new Date();
        try {
            if(!signUpName){
                await setDoc(userDocRef,{
                    displayName,
                    email,
                    createdDate
                })
            }
            else {
                await setDoc(userDocRef, {
                    displayName : signUpName,
                    email,
                    createdDate,
                })
            }
          }
          catch{
            
          }
        }
    return userDocRef
}

export const createSignUpWithEmailAndPassword = async (email, password) => {
    if (email && password) {
        return await createUserWithEmailAndPassword(auth, email, password)
    }
}
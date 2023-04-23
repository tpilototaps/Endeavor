import { onAuthStateChanged, signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react'
import { auth } from '../../Utils/Firebase/Firebase'
import './IfUserAuthenticated.css'

const IfUserAuthenticated = () => {
    const [authUser, setAuthUser] = useState(null);

    useEffect(() => {
        const listen = onAuthStateChanged(auth, (user) => {
            if (user) {
                setAuthUser(user)
            }
            else{
                setAuthUser(null)
            }
        });
        return () => {
            listen();
        }
    }, []);

    const userSignOut = () => {
        signOut(auth).then(() => {
            console.log('signed out')
        })
        .catch(error => console.log(error))
        
    }

  return (
    <div >{ authUser ? <p className='userAuth'><span className='logout' onClick={userSignOut}>Logout</span>(Welcome, {authUser.displayName})</p> : <p className='signed-out'>Signed Out</p>}  </div>
    );
}

export default IfUserAuthenticated
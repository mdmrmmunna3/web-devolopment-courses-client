import React from 'react';
import { createContext } from 'react';
import app from '../../firebase/firebase.config';

import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithPopup } from 'firebase/auth';
import { useState } from 'react';
import { useEffect } from 'react';


export const AuthContext = createContext();

const auth = getAuth(app)

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null)

    // googleLogin
    const providerLogin = (provider) => {
        return signInWithPopup(auth, provider)
    } 

    // signOut
     

    // create account by gmail and password
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }


    // call by useeffect 
    useEffect(() => {
        const unsubsrcibe = onAuthStateChanged(auth, (currentUser) => {
            if (currentUser) {
                setUser(currentUser)
            }
        })
        return () => {
            unsubsrcibe()
        }
    }, [])
    const authInfo = {
        user,
        providerLogin,
        createUser,
    }

    return (
        <div>
            <AuthContext.Provider value={authInfo}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;
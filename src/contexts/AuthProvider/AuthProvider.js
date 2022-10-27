import React, { useEffect, useState } from 'react';
import { createContext } from 'react';
import app from '../../firebase/firebase.config';

import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, sendEmailVerification, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';


export const AuthContext = createContext();

const auth = getAuth(app)

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true);

    // googleLogin
    const providerLogin = (provider) => {
        setLoading(true)
        return signInWithPopup(auth, provider)
    }

    // signOut
    const logOut = () => {
        setLoading(true)
        signOut(auth)
            .then(() => {})
            .catch(error => console.error(error))
    }

    // create account by gmail and password
    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password);
    }

    // signInwithEmailAndPassword
    const signIn = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    // updateProfile
    const updateUserProfile = (userProfile) => {
        setLoading(true)
        return updateProfile(auth.currentUser, userProfile);
    }

    // email verification
    const verificationEmail = () => {
        setLoading(true)
        return sendEmailVerification(auth.currentUser);
    }

    // call by useeffect 
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            console.log('user inside sate change', currentUser);
            if (currentUser === null || currentUser.emailVerified) {
                setUser(currentUser);
            }
            setLoading(false);
        })

        return () => {
            unsubscribe();
        }
    }, [])

    const authInfo = {
        user,
        providerLogin,
        createUser,
        logOut,
        signIn,
        loading,
        setLoading,
        updateUserProfile,
        verificationEmail,
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
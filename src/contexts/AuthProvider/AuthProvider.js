import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut,signInWithPopup } from "firebase/auth";
import app from '../../firebase/firebase.config'

export const AuthContext = createContext()
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)


    // create user ,allows new users to register 
    const createUser = (email, password) => {
        
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // signin existing user
    const signIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }
    
     //  google and github signin
     const githubAndGoogleSignIn = (googleProvider) => {
        return signInWithPopup(auth, googleProvider)

    }

    // log out user
    const logOut = () => {
        return signOut(auth)
    }

    // state observer and getting user data
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)
        })
        return () => unsubscribe()
    }, [])

    const authInfo = {
        user,
        createUser,
        signIn,
        logOut,
        githubAndGoogleSignIn

    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
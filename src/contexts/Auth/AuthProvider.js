import React, { createContext, useState } from 'react';
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut} from 'firebase/auth'
import app from '../../Firebase/FireBase.init';
import { useEffect } from 'react';

export const AuthContext = createContext();

const auth = getAuth(app);


const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true)

    const providerLogin = (provider) =>{
        setLoading(true)
        return signInWithPopup(auth, provider)
    }
    const loginGithub =(provider)=>{
        setLoading(true);
        return signInWithPopup(auth, provider);
    }

    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signIn = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password);
    }

    const updateUserProfile = (profile) =>{
        return updateUserProfile(auth.currentUser, profile)
    }
    const logOut = ( )=> {
        setLoading(true)
        return signOut(auth)
    }
    useEffect(()=>{
        const unsubscribe =  onAuthStateChanged(auth, (currentUser) => {
            console.log('user state change', currentUser);
            setUser(currentUser)
            setLoading(false)
        })
        return () => {
            unsubscribe();
        }
    }, [])
    
    const authInfo ={
        user, 
        providerLogin, 
        logOut, 
        createUser, 
        signIn, 
        loading,
        updateUserProfile,
        loginGithub
         
    };

    return (
        <div>
            <AuthContext.Provider value={authInfo}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;
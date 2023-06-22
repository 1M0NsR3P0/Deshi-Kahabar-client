import React, { createContext, useEffect, useState } from 'react';
import { Children } from 'react';
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from '../FIrebase/firebase.config';

const auth = getAuth(app)
const googleProvider = new GoogleAuthProvider()
const githubProvider = new GithubAuthProvider()

export const AuthContext = createContext(null)
const AuthProvider = ({children}) => {


    const [user,setUser] = useState(null)
    const [loading,setLoading] = useState(true)
    const [err,setErr] = useState('')


    const createUser=(email,password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }
    const login=(email,password)=>{
        setLoading(true)

        return signInWithEmailAndPassword(auth,email,password)
    }
    const googleLogin =()=>{
        setLoading(true)
        signInWithPopup(auth,googleProvider)
        .then(result => {
            console.log(result.user)
        })
    }
    const githubLogin =()=>{
        setLoading(true)
        signInWithPopup(auth,githubProvider)
        .then(result => {
            console.log(result.user)
        })
    }
    const update=(name,url)=>{
        updateProfile(auth.currentUser,{
            displayName:name?name:null,
            photoURL:url?url:null,
        })
    }
    const logout = ()=>{
        setLoading(true)
        return signOut(auth)
    }
    useEffect(()=>{
        setLoading(true)
        const unsubscribe = onAuthStateChanged(auth,currentUser=>{
            setUser(currentUser)
            setLoading(false)
        });
        return ()=>{
            return unsubscribe()
        }
    },[])

    const authInfo = {
        user,
        createUser,
        login,
        logout,
        loading,
        googleLogin,
        githubLogin,
        update,
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
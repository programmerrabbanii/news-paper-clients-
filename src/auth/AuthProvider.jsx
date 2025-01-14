import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import auth from "../firebase/firebase.config";

export const AuthContext=createContext()
const provider= new GoogleAuthProvider()

const AuthProvider = ({children}) => {
    const [user,setUser]=useState(null)
    const [loading,setLoading]=useState(true)

    const createUser=(email,password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }
    
    const signUser=(email,password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }

    const loginGoogle=()=>{
        setLoading(true)
        return signInWithPopup(auth,provider)
      }


        const updateUserProfile=(updateData)=>{
        return updateProfile(auth.currentUser,updateData)
    }

    const logOutUser=()=>{
        setLoading(true)
        return signOut(auth)
    }


    const authInfo={
        createUser,
        signUser,
        loginGoogle,
        user,
        setUser,
        updateUserProfile ,
        loading,
        logOutUser

    }
    useEffect(()=>{
        const unsubscribe= onAuthStateChanged(auth, (currentUser)=>{
            setUser(currentUser)
            setLoading(false)
        })
        return()=>{
            unsubscribe()
        } 
    },[])
    
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
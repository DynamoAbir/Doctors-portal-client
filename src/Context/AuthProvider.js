import React, { createContext, useEffect, useState } from 'react';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut, updateProfile } from 'firebase/auth';
import app from '../Firebase/firebase.config'

export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    /* Fire Base Authentication things for Singup and Login,Logout */

    /* SignUp */
    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }
    /* Login */

    const login = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password);
    }

    /* User k Dhorar system ba user er information near ssystem */

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {

            setUser(currentUser);
            setLoading(false);
        });
        return () => unsubscribe();
    }, [])

    /* Fire Base Authentication things for Singup and Login,Logout */

    /* SignOut */
    const logout = () => {
        return signOut(auth),
            setLoading(true);



    }
    /* Update User Profile */
    const updateUser = (displayName) => {
        return updateProfile(user, displayName);
    }
    const sharedInfo = {
        createUser,
        login,
        user,
        logout,
        updateUser,
        loading
    }
    return (
        <AuthContext.Provider value={sharedInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
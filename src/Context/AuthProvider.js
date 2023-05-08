import React, { createContext, useEffect, useState } from 'react';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut } from 'firebase/auth';
import app from '../Firebase/firebase.config'

export const AuthContext = createContext();
const auth = getAuth(app);
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    /* Fire Base Authentication things for Singup and Login,Logout */

    /* SignUp */
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }
    /* Login */

    const login = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }

    /* User k Dhorar system ba user er information near ssystem */

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {

            setUser(currentUser);
        });
        return () => unsubscribe();
    }, [])

    /* Fire Base Authentication things for Singup and Login,Logout */

    /* SignOut */
    const logout = () => {
        return signOut(auth)
            .then(() => { })
            .catch(error => console.error(error))
    }
    const sharedInfo = {
        createUser,
        login,
        user,
        logout
    }
    return (
        <AuthContext.Provider value={sharedInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
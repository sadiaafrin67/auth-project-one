import PropTypes from 'prop-types';
import { createContext, useEffect, useState } from 'react';
import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";
import auth from './../Firebase/firebase.config';
import { signInWithEmailAndPassword } from "firebase/auth";

export const AuthContext = createContext(null);

const googlePrivider = new GoogleAuthProvider();


const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);


    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword ( auth, email, password)

    }


    const logIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword ( auth, email, password)
    }


    const signInWithGoogle = () => {
        setLoading(true);
        return signInWithPopup(auth, googlePrivider)

    }


    const logOut = () => {
        setLoading(true);
        return signOut(auth)
    }

    // observe user
    useEffect(() => {

        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setLoading(false);
            console.log('observing user', currentUser);
        })

        return () => {
            unSubscribe();
        }

    }, [])


    const authInfo = {user, loading, createUser, logIn, signInWithGoogle, logOut};
    
    return (
        <div>
            <AuthContext.Provider value={authInfo}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

AuthProvider.propTypes = {
    children: PropTypes.node,

}

export default AuthProvider;
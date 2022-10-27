import React, { createContext } from 'react';
import app from '../../firebase/firebase.config';
import { getAuth, GithubAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut} from 'firebase/auth'
import { useState } from 'react';
import { useEffect } from 'react';


export const AuthContext = createContext()
const auth = getAuth(app);


const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const gitHubProvider = new GithubAuthProvider();


    const providerLogin = (provider) => {
        setLoading(true);
        return signInWithPopup(auth, provider);
    };

    const gitHubLogIn = () => {
        setLoading(true);
        return signInWithPopup(auth, gitHubProvider);
      }
      
    const logOut = () => {
        return signOut(auth);
    }

    useEffect(()=>{
  const unsubscribe  = onAuthStateChanged(auth,(currentUser)=>{
          setUser(currentUser) ;
        });

        return () => {
            unsubscribe()
        }
    })
   
    const authInfo = { user,providerLogin,gitHubLogIn,logOut };

    return (
        <div>
               <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;
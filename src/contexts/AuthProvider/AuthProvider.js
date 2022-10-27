import React, { createContext } from 'react';
import app from '../../firebase/firebase.config';
import { getAuth, signInWithEmailAndPassword, signInWithPopup} from 'firebase/auth'
import { useState } from 'react';


export const AuthContext = createContext()
const auth = getAuth(app);


const AuthProvider = ({ children }) => {

  
    const [user, setUser] = useState(null);
    
    const providerLogin = (provider) => {
        return signInWithPopup(auth, provider);
    }
   
    const authInfo = { user,providerLogin };

    return (
        <div>
               <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;
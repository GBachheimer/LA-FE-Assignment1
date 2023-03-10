import React, { createContext, useState } from 'react'
import { auth } from 'config/firebase/firebase'

export const AuthContext = createContext();

export const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);

    auth.onAuthStateChanged(setUser);

    return (
        <AuthContext.Provider value = {{user}}>
            {children}
        </AuthContext.Provider>
    );
};
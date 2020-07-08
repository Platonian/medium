import React, { useContext } from 'react'
import {auth, db} from '../firebase'

const FirebaseContext = React.createContext()

export const FirebaseProvider = ({children}) => {
    
    return (
        <FirebaseContext.Provider value={{auth, db}}>
            {children}
        </FirebaseContext.Provider>
    )
}

export const useFirebaseValue = () => useContext(FirebaseContext)
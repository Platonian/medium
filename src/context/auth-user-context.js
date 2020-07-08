import React, {useState, useEffect} from 'react'
import { useContext } from 'react'
import { useFirebaseValue } from './firebase-context'


const AuthUserContext = React.createContext()

export const AuthUserProvider = ({children}) => {
    const [authUser, setAuthUser] = useState()
    const {auth} = useFirebaseValue()

    useEffect(() => {
        auth.onAuthStateChanged(user => {
            user
                ? setAuthUser(user)
                : setAuthUser(null)
        })
    },[auth])
    return (
        <AuthUserContext.Provider value={{authUser}}>
            {children}
        </AuthUserContext.Provider>
    )
}

export const useAuthUserValue = () => useContext(AuthUserContext)
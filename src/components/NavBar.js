import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../logo.svg'
import { useAuthUserValue, useFirebaseValue } from '../context'
import * as ROUTES from '../constants/routes'


const AuthenticatedNavigation = () => {
    const {auth} = useFirebaseValue()
    

    return(
        <ul className="flex items-center">
            <li className="hidden sm:block">
                <Link to={ROUTES.HOME}>Home</Link>
            </li>
            <li className="ml-4">
                <button type="button" onClick={() => {
                    auth.signOut()
                }}>
                    Logout
                </button>
            </li>
            <li className="ml-4">
                <Link to={ROUTES.PROFILE} >
                    <img 
                        src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?&auto=format&fit=crop&w=140&h=140&fit=facearea&facepad=2&q=80" 
                        alt=""
                        className="w-8 h-8 rounded-full"
                    />
                </Link>
            </li>

        </ul>
    )
}


const NonAuthenticatedNavigation = () => (
    <ul className="flex">
        <li className="hidden sm:block">
            <Link to={ROUTES.HOME}>Home</Link>
        </li>
        <li className="hidden sm:block ml-4">
            <Link to={ROUTES.LOGIN}>Login</Link>
        </li>
        <li className="ml-4">
            <Link to={ROUTES.SIGN_UP}>Signup</Link>
        </li>
    </ul>
)



const NavBar = () => {
    const { authUser } = useAuthUserValue()
    
    return (
        <div className="shadow py-3">
            <div className="flex items-center justify-between w-2/3 mx-auto">
                <Link to={ROUTES.HOME}><img src={Logo} alt="Medium Logo" /></Link>
                <nav>
                    {!authUser
                        ? <NonAuthenticatedNavigation />
                        : <AuthenticatedNavigation />}
                </nav>
            </div>
        </div>
    )
}

export default NavBar

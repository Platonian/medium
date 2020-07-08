import React, { useState } from 'react'
import { useFirebaseValue } from '../context'
import { Link } from 'react-router-dom'
import { SignupLink } from './Signup'
import { signInWithGoogle } from '../firebase'
import { FaGoogle } from 'react-icons/fa'
import * as ROUTES from '../constants/routes'



const LoginForm = (props) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState(null)

    const { auth } = useFirebaseValue()
    
    const handleSubmit = (event, email, password) => {
            auth
                .signInWithEmailAndPassword(email, password)
                .then(() => {
                    setEmail('')
                    setPassword('')
                    props.history.push(ROUTES.HOME)
                })
                .catch(error => setError(error))

        event.preventDefault()
    }

    const isInvalid = !email || !password

    return (
        <div className="p-8 border border-gray-500 rounded ">
            <h2>Sign in</h2>
            <form
                onSubmit={(e) => handleSubmit(e, email, password)}
                className="flex flex-col"
            >
                <input
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    type="email"
                    placeholder="Email"
                    className="px-3 py-2 mt-2 border border-gray-800 rounded"
                />
                <input
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    type="password"
                    placeholder="Password"
                    className="px-3 py-2 mt-2 border border-gray-800 rounded"
                />

                <button
                    type="submit"
                    disabled={isInvalid}
                    className="bg-gray-800 py-2 mt-4 text-white rounded"
                >
                    Login
                </button>
                {error && <p>{error.message}</p>}
            </form>
        </div>
    )
}

const GoogleLoginButton = (props) => (
    <button
        onClick={() => {
            signInWithGoogle()
            props.history.push(ROUTES.HOME)
        }}
        className="flex items-center justify-center py-2 w-full text-red-500 border border-red-500 rounded"
    >   <span><FaGoogle /></span>
        <span className="ml-3">Continue with Google</span>
    </button>
)


const Login = (props) => (
    <div className="max-w-xs mx-auto mt-8">
        <LoginForm {...props} />
        <p className="text-center my-4">or</p>
        <GoogleLoginButton {...props} />
        <SignupLink />
    </div>
)


const LoginLink = () => (
    <p className="mt-2">Already have an account? Please <Link to="/login" className="text-blue-600 underline">Login</Link> </p>
)


export default Login
export { LoginLink, GoogleLoginButton }
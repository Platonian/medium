import React from 'react'
import { useFirebaseValue } from '../context'
import { useState } from 'react'
import { LoginLink, GoogleLoginButton } from './Login'
import { Link } from 'react-router-dom'
import * as ROUTES from '../constants/routes'
import { db } from '../firebase'
import moment from 'moment'


const SignupForm = (props) => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [passwordOne, setPasswordOne] = useState('')
    const [passwordTwo, setPasswordTwo] = useState('')
    const [error, setError] = useState(null)

    const { auth } = useFirebaseValue()


    const handleSubmit = (event, email, password) => {
        auth
            .createUserWithEmailAndPassword(email, password)
            .then(authUser => {
                db.collection('users')
                    .doc(authUser.user.uid)
                    .set({
                        name,
                        email,
                        userId: authUser.user.uid,
                        createdAt: moment().toDate()

                    })

            })
            .then(() => {
                setEmail('')
                setPasswordOne('')
                setPasswordTwo('')
                props.history.push(ROUTES.HOME)
            })
            .catch(error => setError(error))
        event.preventDefault()
    }

    const isInvalid = !email || !passwordOne || !passwordTwo || passwordTwo !== passwordOne


    return (
        <div className="p-8 border border-gray-500 rounded ">
            <h2>Create an account</h2>
            <form
                onSubmit={(e) => handleSubmit(e, email, passwordOne)}
                className="flex flex-col"
            >
                <input
                    type="text"
                    value={name}
                    onChange={e => setName(e.target.value)}
                    placeholder="Full Name"
                    className="px-3 py-2 mt-2 border border-gray-800 rounded"
                />
                <input
                    type="text"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    placeholder="Email"
                    className="px-3 py-2 mt-2 border border-gray-800 rounded"
                />
                <input
                    type="password"
                    value={passwordOne}
                    onChange={e => setPasswordOne(e.target.value)}
                    placeholder="Password"
                    className="px-3 py-2 mt-2 border border-gray-800 rounded"
                />
                <input
                    value={passwordTwo}
                    onChange={e => setPasswordTwo(e.target.value)}
                    type="password"
                    placeholder="Confirm Password"
                    className="px-3 py-2 mt-2 border border-gray-800 rounded"
                />
                <button
                    disabled={isInvalid}
                    type="submit"
                    className="bg-gray-800 py-2 mt-4 text-white rounded"
                >
                    Signup
                </button>
                {error && <p>{error.message}</p>}
            </form>
        </div>
    )
}


const Signup = (props) => {
    return (
        <div className="max-w-xs mx-auto mt-8">
            <SignupForm {...props} />
            <p className="text-center my-4">or</p>
            <GoogleLoginButton {...props} />
            <LoginLink />

        </div>
    )
}


const SignupLink = () => (
    <p className="mt-2">If you have no account? Please <Link to="/signup" className="text-blue-600 underline">Signup</Link></p>
)



// const condition = authUser => !authUser

export default Signup
export { SignupLink }
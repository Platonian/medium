import React from 'react'
import { useFirebaseValue } from '../context'
import { useState } from 'react'
import * as ROUTES from '../constants/routes'



const PasswordForget = (props) => {
    const [email, setEmail] = useState('')
    const [error, setError] = useState(null)

    const { auth } = useFirebaseValue()

    const handleSubmit = (event, email) => {
        auth
            .sendPasswordResetEmail(email)
            .then(() => {
                setEmail('')
                props.history.push(ROUTES.LOGIN)
            })
            .catch(error => setError(error))
        event.preventDefault()
    }

    const isInvalid = !email


    return (
        <div className="p-8 border border-gray-500 rounded ">
            <h2>Reset your password</h2>
            <form
                onSubmit={(e) => handleSubmit(e, email)}
                className="flex flex-col"
            >
                <input
                    type="text"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    placeholder="Email"
                    className="px-3 py-2 mt-2 border border-gray-800 rounded"
                />

                <button
                    disabled={isInvalid}
                    type="submit"
                    className={`${isInvalid ? 'bg-gray-400 pointer-events-none' : 'bg-gray-800'} py-2 mt-4 text-white rounded`}
                >
                    Get Password Reset Email
            </button>
            </form>
            {error && <p>{error.messagee}</p>}
        </div>
    )
}


export default PasswordForget
import React from 'react'
import { useFirebaseValue } from '../context'
import { useState } from 'react'

const PasswordUpdate = (props) => {
    const [passwordOne, setPasswordOne] = useState('')
    const [passwordTwo, setPasswordTwo] = useState('')
    const [error, setError] = useState(null)

    const { auth } = useFirebaseValue()

    const handleSubmit = (event, password) => {
        auth
            .currentUser
            .updatePassword(password)
            .then(() => {
                setPasswordOne('')
                setPasswordTwo('')
            })
            .catch(error => setError(error))
        event.preventDefault()
    }

    const isInvalid = !passwordOne || !passwordTwo || passwordTwo !== passwordOne


    return (
        <div className="p-8 border border-gray-500 rounded ">
            <h2>Update your password</h2>

            <form
                onSubmit={(e) => handleSubmit(e, passwordOne)}
                className="flex flex-col"
            >
                <input
                    type="password"
                    value={passwordOne}
                    onChange={e => setPasswordOne(e.target.value)}
                    placeholder="New Password"
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
                    className={`${isInvalid ? 'bg-gray-400 pointer-events-none' : 'bg-gray-800'} py-2 mt-4 text-white rounded`}
                >
                    Update Password
            </button>
            </form>
            {error && <p>{error.messagee}</p>}
        </div>
    )
}



export default PasswordUpdate
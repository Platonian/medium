import React from 'react'
import { useAuthUserValue } from '../context'
import PasswordUpdate from './PasswordUpdate'
import withAuthorization from './withAuthorization'

const Profile = () => {
    const { authUser } = useAuthUserValue()

    return (
        <div className="w-2/3 mx-auto mt-8">
            {authUser &&
                <div>
                    <h1>Account Details</h1>
                    <p>Email: {authUser.email}</p>
                    <div className="max-w-xs mt-4"><PasswordUpdate /></div>
                </div>
            }
        </div>
    )
}

const condition = authUser => !!authUser
export default withAuthorization(condition)(Profile)

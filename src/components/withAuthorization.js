import React, { useEffect } from 'react'
import { compose } from 'recompose'
import { withRouter } from 'react-router-dom'
import { useAuthUserValue } from '../context'
import * as ROUTES from '../constants/routes'
import { auth } from '../firebase'


const withAuthorization = (condition) => Component => {
    const WithAuthorization = (props) => {
        const { authUser } = useAuthUserValue()
        useEffect(() => {
            auth.onAuthStateChanged(
                authUser => {
                    if (!condition(authUser)) {
                        props.history.push(ROUTES.LOGIN)
                    }
                }
            )

        })
        return (
            condition(authUser)
                ? <Component {...props} />
                : null
        )
    }
    return compose(
        withRouter,
    )(WithAuthorization)
}



export default withAuthorization
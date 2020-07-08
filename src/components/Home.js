import React from 'react'
import ArticlesList from './ArticlesList'
import { useAuthUserValue } from '../context'

const Home = () => {
    const {authUser} = useAuthUserValue()


    return (
        <div className="w-2/3 mt-8 mx-auto">
            {authUser && <p className="font-semibold">Welcome, {authUser.email}</p>}
            <ArticlesList />
        </div>
    )
}

export default Home

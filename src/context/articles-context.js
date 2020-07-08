import React from 'react'
import { useState } from 'react'
import { useContext } from 'react'
import data from '../data.json'

const ArticlesContext = React.createContext()


export const ArticlesProvider = ({children}) => {
    const [articles, setArticles] = useState(data)

    return (
        <ArticlesContext.Provider value={{articles, setArticles}}>
            {children}
        </ArticlesContext.Provider>
    )
}


export const useArticlesValue = () => useContext(ArticlesContext)
import React from 'react'
import { useState } from 'react'
import { useContext } from 'react'

const SelectedArticleContext = React.createContext()


export const SelectedArticleProvider = ({children}) => {
    const [selectedArticle, setSelectedArticle] = useState()

    return (
        <SelectedArticleContext.Provider value={{selectedArticle, setSelectedArticle}}>
            {children}
        </SelectedArticleContext.Provider>
    )
}


export const useSelectedArticleValue = () => useContext(SelectedArticleContext)
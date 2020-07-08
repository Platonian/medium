import React from 'react'
import { useArticlesValue } from '../context'

const Article = ({ match }) => {
    let { slug } = match.params
    const { articles } = useArticlesValue()
    const article = articles.length > 0 && articles.filter(item => item.id.toString() === slug.toString())[0]


    return (
        <div className="mt-8  max-w-2xl mx-auto">
            <h1 className="text-4xl">{article.title}</h1>
            <p className="text-lg mt-8">{article.content}</p>
        </div>
    )
}

export default Article

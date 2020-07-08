import React from 'react'
import { useSelectedArticleValue } from '../context'
import { Link } from 'react-router-dom'

const ArticlePreview = ({article}) => {
    const {setSelectedArticle} = useSelectedArticleValue()
    return (
        <div className="mb-8">
            <Link to={`/article/${article.id}`}><h1 onClick={()=>setSelectedArticle(article.id)}>{article.title}</h1></Link>
            <p className="text-sm text-gray-700">{article.content.slice(0, 100)}</p>
        </div>
    )
}

export default ArticlePreview

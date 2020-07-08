import React from 'react'
import ArticlePreview from './ArticlePreview'
import { useArticlesValue } from '../context'

const ArticlesList = () => {
    const {articles} = useArticlesValue()

    return (
        <div>
            {articles.map(article => (
                <ArticlePreview key={article.id} article={article} />
            ))}
        </div>
    )
}

export default ArticlesList

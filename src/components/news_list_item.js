import React from 'react'

const newsItem = ({item}) => {
    return(
        <div className="card col-8 offset-2">
            <h2>{ item.title }</h2>
            <p className="lead">{ item.feed }</p>
        </div>
    )
}

export default newsItem
import React from 'react'
import propTypes from 'prop-types'

export const GifGridItem = ( { title, url } ) => {
    
    return (
        <div className="card animate__animated animate__fadeIn">
            <img src={ url } alt={ title } />
            <p>{ title }</p>
        </div>
    )
}

GifGridItem.propType = {
    title: propTypes.string.isRequired,
    url: propTypes.string.isRequired
}

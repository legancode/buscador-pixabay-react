import React from 'react'

const CardImage = ({ image, fullImage, tags, likes, views }) => {
    return (
        <div className="card bg-dark border-primary">
            <img className="card-image" src={image} alt={tags} />
            <div className="card-body bg-primary">
                <h5 className="card-title">Likes: {views}</h5>
                <h5 className="card-title">Views: {likes}</h5>
                <a href={fullImage} target="_blank" className="btn btn-info">Descargar imagen</a>
            </div>
        </div>
    )
}

export default CardImage

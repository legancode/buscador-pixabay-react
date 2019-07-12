import React from 'react'

const CardImage = ({ key, image, tags }) => {
    return (
        <div key={key} className="card text-white bg-success">
            <img className="card-header" src={image} alt={tags} />
            <div className="card-body">
                <h5 className="card-title">Likes: 200</h5>
                <h5 className="card-title">Views: 500</h5>
                <a href="#" className="btn btn-primary">Ver imagen</a>
            </div>
        </div>
    )
}

export default CardImage

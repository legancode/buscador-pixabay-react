import React from 'react'
import CardImage from '../CardImage/CardImage'

class Results extends React.Component {
    render() {
        const { images } = this.props
        return (
            <div className="col-12 row mt-4 ">
                {images.map(image => (
                    <CardImage

                        key={image.id}
                        image={image.previewURL}
                        tags={image.tags}
                    />
                ))}
            </div>
        )
    }
}

export default Results

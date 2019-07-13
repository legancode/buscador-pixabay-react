import React from 'react'
import CardImage from '../CardImage/CardImage'
import Navigation from '../Navigation/Navigation'

class Results extends React.Component {

    render() {
        const { images } = this.props
        if (images.length <= 0) return null
        return (
            <>
                <div className="container row results">
                    {
                        this.props.status === 400
                            ? <p>No hay mas resultados :(</p>
                            : images.map(image => (
                                <CardImage

                                    key={image.id}
                                    image={image.previewURL}
                                    fullImage={image.largeImageURL}
                                    tags={image.tags}
                                    likes={image.likes}
                                    views={image.views}
                                />
                            ))
                    }
                </div>

                <Navigation
                    backPage={this.props.backPage}
                    nextPage={this.props.nextPage}
                />
            </>
        )
    }
}

export default Results

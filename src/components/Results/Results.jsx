import React from 'react'
import CardImage from '../CardImage/CardImage'
import Navigation from '../Navigation/Navigation'

class Results extends React.Component {

    render() {
        const { images } = this.props
        //Compruebo si los datos estan vacios.
        if (images.length <= 0) {
            // 1. Si lo estan: compruebo si es porque la API no tiene mas que mostrar (busco su status 200, ya que por un tema de bug, en algunas busquedas, la API sigue trayendo informacion vacia hasta cierto punto donde devuelve error 400 y no trae mas resultados)
            if (this.props.status === 200) {
                //2. Si no tiene mas que mostrar: imprimo que no hay resultados + botones de navegacion para retroceder
                return (
                    <>
                        <p className="no-results display-4 text-center">No hay mas resultados :(</p>

                        <Navigation
                            backPage={this.props.backPage}
                            nextPage={this.props.nextPage}
                        />
                    </>
                )
            }
            //3. de lo contrario lo dejo en null porque con esto se detecta que no ha hecho ninguna busqueda aun.
            else return null
        }

        // Si toda la condicion anterior no se cumple, ejecuto lo siguiente
        return (
            <>
                {
                    //1. Compruebo el estado 400(error) de la api al no traer mas resultados
                    this.props.status === 400
                        //2. si es verdad: Mostrar "No hay mas resultados" 
                        ? <p className="no-results display-4 text-center">No hay mas resultados :(</p>
                        //3. De lo contrario: continuar mostrando resultados
                        : <div className="container results ">
                            {images.map(image => (
                                <CardImage

                                    key={image.id}
                                    image={image.previewURL}
                                    fullImage={image.largeImageURL}
                                    tags={image.tags}
                                    likes={image.likes}
                                    views={image.views}
                                />
                            ))}
                        </div>
                }

                <Navigation
                    backPage={this.props.backPage}
                    nextPage={this.props.nextPage}
                />
            </>
        )
    }

}

export default Results
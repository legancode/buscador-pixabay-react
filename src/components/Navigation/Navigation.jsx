import React from 'react'

const Navigation = ({ backPage, nextPage }) => {
    return (

        <div className="col-md-3 navigation">
            <button onClick={backPage} className="btn btn-success btn-lg back">Anterior</button>
            <button onClick={nextPage} className="btn btn-success btn-lg next">Siguiente</button>
        </div>
    )
}

export default Navigation

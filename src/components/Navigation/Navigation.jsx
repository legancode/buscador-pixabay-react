import React from 'react'

const Navigation = ({ backPage, nextPage }) => {
    return (

        <div className="d-flex navigation">
            <button onClick={backPage} className="btn btn-success btn-lg mb-3 back">Anterior</button>
            <button onClick={nextPage} className="btn btn-success btn-lg mb-3 next">Siguiente</button>
        </div>
    )
}

export default Navigation

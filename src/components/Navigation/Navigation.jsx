import React from 'react'

const Navigation = ({ backPage, nextPage }) => {
    return (

        <div className="col-md-2 navigation">
            <button onClick={backPage} className="btn btn-success btn-lg back">Back</button>
            <button onClick={nextPage} className="btn btn-success btn-lg next">Next</button>
        </div>
    )
}

export default Navigation

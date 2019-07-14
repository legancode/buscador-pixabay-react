import React from 'react'

class Searcher extends React.Component {

    input = React.createRef();

    captureWord = e => {
        e.preventDefault()
        const word = this.input.current.value
        this.props.handleDates(word)
    }

    render() {
        return (
            <form className="row col-md-12 m-0 p-0 d-flex justify-content-center" onSubmit={e => { this.captureWord(e) }}>
                <input ref={this.input} name="search" type="text" className="form-control col-md-9" placeholder="Inserta tu busqueda" />
                <button className="col-md-2 btn btn-success ml-2">Buscar</button>
            </form>
        )
    }
}

export default Searcher

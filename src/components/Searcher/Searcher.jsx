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
            <form className="row m-0 p-0 d-flex justify-content-around align-items-center" onSubmit={e => { this.captureWord(e) }}>
                <input ref={this.input} name="search" type="text" className="form-control col-sm-9 mb-3" placeholder="Inserta tu busqueda" />
                <input type="submit" className="mb-3 col-sm-2 btn btn-success" value="Buscar" />
            </form>
        )
    }
}

export default Searcher

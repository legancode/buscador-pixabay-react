import React from 'react'
import Searcher from './components/Searcher/Searcher'
import Results from './components/Results/Results'

class Centralizer extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      wordkey: '',
      images: [],
      status: ''
    }
  }

  handleFetch = async () => {
    try {
      let { wordkey, page } = this.state
      const api = await fetch(`https://pixabay.com/api/?key=13016885-2a7dc0d7aeee4239d7edc685b&q=${wordkey}&per_page=28&page=${page}`)
      const resp = await api.json()

      this.setState({
        images: resp.hits,
        status: api.status
      })
      console.log(resp)
    }
    catch{
      this.setState({
        images: this.state.images,
        status: 400,
      })
      console.log(this.state.status)
    }
  }

  handleDates = word => {
    if (word.length === 0) return null

    this.setState({
      wordkey: word,
      page: 1
    }, () => { this.handleFetch() })
  }

  backPage = () => {
    //capturar el page
    let actualPage = this.state.page
    // Verificar si se encuentra en 1 para evitar retroceder
    if (actualPage === 1) return null
    //Restar en 1 al page
    actualPage--
    //cambiar el page y hacer peticion
    this.setState({
      page: actualPage
    }, () => { this.handleFetch() })
  }
  nextPage = () => {
    //capturar el page
    let actualPage = this.state.page

    //Detener ejecucion si trae resultados vacios
    if (this.state.status === 200 && this.state.images <= 0) return null
    //Detener ejecucion si llega a ultima pagina
    if (this.state.status === 400) return null

    //aumentar en 1
    actualPage++
    //cambiar el page y hacer peticion
    this.setState({
      page: actualPage
    }, () => { this.handleFetch() })
  }

  render() {
    return (
      <>
        <div className="container jumbotron">
          <h1 className="text-center mb-3">Buscador de imagenes v1.0.0</h1>
          <Searcher handleDates={this.handleDates} />
        </div>
        <Results

          images={this.state.images}
          backPage={this.backPage}
          nextPage={this.nextPage}
          status={this.state.status}
        />
      </>
    )
  }
}

export default Centralizer

import React from 'react'
import Searcher from './components/Searcher/Searcher'
import Results from './components/Results/Results'

class Centralizer extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      wordkey: '',
      images: []
    }
  }

  handleFetch = async () => {
    const { wordkey } = this.state
    const api = await fetch(`https://pixabay.com/api/?key=13016885-2a7dc0d7aeee4239d7edc685b&q=${wordkey}&per_page=30`)
    const resp = await api.json()

    this.setState({
      images: resp.hits
    }, () => {
      console.log(this.state.images)
    })
  }

  handleDates = word => {
    this.setState({
      wordkey: word
    }, () => {
      this.handleFetch()
    })
  }


  render() {
    return (
      <div className="container">
        <h1>Buscador</h1>
        <Searcher handleDates={this.handleDates} />
        <Results images={this.state.images} />
      </div>
    )
  }
}

export default Centralizer

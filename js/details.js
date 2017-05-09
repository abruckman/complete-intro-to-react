import React from 'react'
import axios from 'axios'
const {shape, string} = React.PropTypes
import Header from './header'

const Details = React.createClass({
  propTypes: {
    show: shape({
      title: string,
      year: string,
      poster: string,
      trailer: string,
      description: string,
      imdbID: string
    })
  },
  getInitialState () {
    return {
      omdbData: {}
    }
  },
  componentDidMount () {
    axios.get(`http://www.omdbapi.com/?=${this.props.show.imdbID}`).then((response) => {
      console.log(response.data)
      this.setState({omdbData: response.data})
    }).catch((error) => console.error('axios error', error))
  },
  render () {
    let rating
    if (this.state.omdbData.imdbRating) {
      rating = <h3> {this.state.omdbData.imdbRating} </h3>
    } else {
      rating = <img src='/public/img/loading.png' alt='loading indicator' />
    }
    const {title, year, poster, trailer, description} = this.props.show
    return (
      <div className='details'>
        <Header />
        <section>
          <h1>{title}</h1>
          <h2>({year})</h2>
          {rating}
          <img src={`/public/img/posters/${poster}`} />
          <p>{description}</p>
        </section>
        <div>
          <iframe src={`https://www.youtube-nocookie.com/embed/${trailer}?rel=0&amp;controls=0&amp;showinfo=0`} frameBorder='0' allowFullScreen />
        </div>
      </div>
    )
  }
})

export default Details

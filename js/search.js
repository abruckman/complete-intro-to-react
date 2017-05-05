import React from 'react'
import preload from '../public/data.json'
import ShowCard from './showCard'

const Search = React.createClass({
  render () {
    return (
      <div className='search'>
        <h1>svideo</h1>
        {preload.shows.map((show) => {
          return (
            <ShowCard key={show.imdbID} {...show} />
          )
        })}
      </div>
    )
  }
})

export default Search

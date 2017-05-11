import React from 'react'
import { render } from 'react-dom'
import { HashRouter, Match } from 'react-router'
import { Provider } from 'react-redux'
import store from './store'
import Landing from './landing'
import Search from './search'
import Details from './details'
import preload from '../public/data.json'
import '../public/normalize.css'
import '../public/style.css'

const App = React.createClass({
  render () {
    return (
      <HashRouter>
        <Provider store={store}>
          <div className='app'>
            <Match exactly pattern='/' component={Landing} />
            <Match pattern='/search'component={(...props) => <Search shows={preload.shows} />} />
            <Match
              pattern='/details/:id'
              component={(props) => {
                const shows = preload.shows.filter((show) => props.params.id === show.imdbID)
                return <Details show={shows[0]} {...props} />
              }}
            />
          </div>
        </Provider>
      </HashRouter>
    )
  }
})

render(<App />, document.getElementById('app'))

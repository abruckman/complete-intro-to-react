import React from 'react'
import { render } from 'react-dom'
import {HashRouter, Match} from 'react-router'
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
        <div className='app'>
          <Match exactly pattern='/' component={Landing} />
          <Match pattern='/search'component={(...props) => <Search shows={preload.shows} />} />
          <Match
            pattern='/details/:id'
            component={Details}
          />
        </div>
      </HashRouter>
    )
  }
})

render(<App />, document.getElementById('app'))

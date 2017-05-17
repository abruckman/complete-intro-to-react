import React from 'react'
import {render} from 'react-dom'
import { HashRouter } from 'react-router'
import App from './app'

render (<HashRouter><App /></HashRouter>, document.getElementById('app'))

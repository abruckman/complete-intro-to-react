/* global React ReactDOM */
import React from 'react'
import ReactDOM from 'react-dom'
import MyTitle from './myTitle'

var div = React.DOM.div

var myFirstComponent = React.createClass({
  render: function () {
    return (
      React.DOM.div(null,
        React.createElement(MyTitle, { title: 'props are the best', 'color': 'peru'}),
        React.createElement(MyTitle, { title: 'second thing', 'color': 'mediumaquamarine'}),
        React.createElement(MyTitle, { title: 'third thing', 'color': 'tomato'}),
        React.createElement(MyTitle, { title: 'last thing', 'color': 'rebeccapurple'})
      )
    )
  }
})

// var MyTitle = React.createClass({
//   render: function () {
//     return (
//       div(null,
//         h1({style: {color: this.props.color}}, this.props.title)
//       )
//     )
//   }
// })
ReactDOM.render(React.createElement(myFirstComponent), document.getElementById('app'))

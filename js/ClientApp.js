var div = React.DOM.div
var h1 = React.DOM.h1

var myFirstComponent = React.createClass({
  render: function(){
    return(
      React.DOM.div(null,
        React.createElement(MyTitle),
        React.createElement(MyTitle),
        React.createElement(MyTitle),
        React.createElement(MyTitle)
      )
    )
  }
})


var MyTitle = React.createClass({
  render: function(){
    return(
      div(null,
        h1(null, 'check it out')
      )
    )
  }
})
ReactDOM.render(React.createElement(myFirstComponent), document.getElementById('app'))

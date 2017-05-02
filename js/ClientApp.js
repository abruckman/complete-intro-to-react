var myFirstComponent = React.createClass({
  render: function(){
    return(
      React.DOM.div(null,
        React.DOM.h1(null,
          'this is my first component!'
        )
      )
    )
  }
})
ReactDOM.render(React.createElement(myFirstComponent), document.getElementById('app'))

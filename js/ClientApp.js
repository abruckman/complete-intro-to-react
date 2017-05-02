var div = React.DOM.div
var h1 = React.DOM.h1

var MyTitleFactory = React.createFactory(MyTitle)

var myFirstComponent = React.createClass({
  render: function(){
    return(
      React.DOM.div(null,
        React.createElement(MyTitle, {title:"props are the best"}),
        React.createElement(MyTitle, {title:"second thing"}),
        React.createElement(MyTitle, {title:"third thing"}),
        React.createElement(MyTitle, {title:"last thing"})
      )
    )
  }
})


var MyTitle = React.createClass({
  render: function(){
    return(
      div(null,
        h1(null, this.props.title)
      )
    )
  }
})
ReactDOM.render(React.createElement(myFirstComponent), document.getElementById('app'))

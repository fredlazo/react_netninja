var React = require('react');
var ReactDOM = require('react-dom');

//Create component
var TodoComponent = React.createClass({
  render: function(){
    return (
      <div>
        <h1>Crap-tastic!</h1>
        <h2>Westside!</h2>
      </div>
    );
  }
});

//Put component into html page
ReactDOM.render(<TodoComponent/>, document.getElementById('todo-wrapper'));

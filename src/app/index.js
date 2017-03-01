var React = require('react');
var ReactDOM = require('react-dom');

//Create component
var TodoComponent = React.createClass({
  render: function(){
    return (
      <div>
        <h1>City: {this.props.myTeam.city}</h1>
        <h1>Team: {this.props.myTeam.name}</h1>
        <h1>Mascot: {this.props.myTeam.mascot}</h1>
        <p>{this.props.message}</p>
      </div>
    );
  }
});

var team ={city:'San Francisco', name:'Giants', mascot:'Lou Seal'};

//Put component into html page
ReactDOM.render(<TodoComponent message="This is a prop" myTeam={team}/>, document.getElementById('todo-wrapper'));

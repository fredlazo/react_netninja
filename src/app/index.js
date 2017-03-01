var React = require('react');
var ReactDOM = require('react-dom');

//Create component
var TodoComponent = React.createClass({
  getInitialState: function(){
    return {
      todos: ['Eat', 'Sleep', 'Poop'],
      food: ['Bacon', 'Donuts', 'Butter']
    }
  },
  render: function(){
    return (
      <div>
      <p>My To Do List</p>
      <ul>
        <li>{this.state.todos[0]}</li>
        <li>{this.state.todos[1]}</li>
        <li>{this.state.todos[2]}</li>
      </ul>
      <p>My To Eat List</p>
      <ul>
        <li>{this.state.food[0]}</li>
        <li>{this.state.food[1]}</li>
        <li>{this.state.food[2]}</li>
      </ul>

      </div>
    );
  }
});

//Put component into html page
ReactDOM.render(<TodoComponent/>, document.getElementById('todo-wrapper'));

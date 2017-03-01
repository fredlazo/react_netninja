var React = require('react');
var ReactDOM = require('react-dom');

//Create component
var TodoComponent = React.createClass({
  getInitialState: function(){
    return {
      todos: ['Eat', 'Sleep', 'Poop'],
      food: ['Bacon', 'Donuts', 'Butter'],
      age: 44
    }
  },
  render: function(){
    var todos = this.state.todos;
    var food = this.state.food;
    todos = todos.map(function(item, index){
      return (
        <li>{item}</li>
        );
      });
      food = food.map(function(item, index){
        return (
          <li>{item}</li>
        );
      });

    return (
      <div>
        <p>My To Do List</p>
        <ul>
          {todos}
        </ul>
        <p>My To Eat List</p>
        <ul>
          {food}
        </ul>
      </div>
    );
  }
});

//Put component into html page
ReactDOM.render(<TodoComponent/>, document.getElementById('todo-wrapper'));

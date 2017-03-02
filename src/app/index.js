var React = require('react');
var ReactDOM = require('react-dom');

//Create component
var TodoComponent = React.createClass({
  getInitialState: function(){
    return {
      todos: ['Eat', 'Sleep', 'Poop'],
    }
  },
  render: function(){
    var todos = this.state.todos;
    todos = todos.map(function(item, index){
      return (
          <TodoItem item={item} key={index}/>
        );
      });

    return (
      <div>
        <p>My To Do List</p>
        <ul>
          {todos}
        </ul>
      </div>
    );
  }
});

//TodoItemComponent
var TodoItem = React.createClass({
  render: function(){
    return(
      <li>
        <div className = 'todo-item'>
          <span className = 'item-name'>{this.props.item}</span>
        </div>
      </li>
    );
  }
});

//Put component into html page
ReactDOM.render(<TodoComponent></TodoComponent>, document.getElementById('todo-wrapper'));

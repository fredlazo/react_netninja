var React = require('react');
var ReactDOM = require('react-dom');


//TodoItem Component
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

/*
Todo Component
  1. State (Data)
  2. Render (HTML)
  3. Events
*/
var TodoComponent = React.createClass({
  getInitialState: function(){
    return {
      todos: ['Eat', 'Sleep', 'Poop'],
    }
  },

/**************************
render:  function(){

  var = function()[]
      return (one array[index]) this.
    };
    return( insert this html into index.html);

]
*/


  render: function(){
    //The TodoItem component (above) only creates ONE <li>{item}</li>
    //Therefore, we need to iterate through todos array with map, passing 'item' and 'index'
    //into the TodoItem component each time, resulting in a new todos array of  [<li>{item}</li>] elements.

    var todos = this.state.todos;
    todos = todos.map(function(item, index){
        return (
            <TodoItem item={item} key={index}/> //Put component into html page
          );
      });

      //END RESULT:  todos = [<li>Eat<</li>, <li>Sleep</li>, <li>Poop</li>]
/***************************/
    //THIS HTML IS CREATED.
    return (
      <div id="todo-list">
        <p onClick={this.clicked}>My To Do List</p>
          <ul>
            {todos}
          </ul>
      </div>
    );
  }, //End of render function

/***************************/

  clicked: function(){
    console.log('You clicked me!');
  }

});

/************End of TodoComponent*****************/


//Put component into html page
ReactDOM.render(<TodoComponent></TodoComponent>, document.getElementById('todo-wrapper'));

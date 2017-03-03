var React = require('react');
var ReactDOM = require('react-dom');
require('./css/index.css')


//Module requires
var TodoItem = require('./todoItem');
var AddItem = require('./addItem');

/*
Todo Component
  1. State (Data)
  2. Render (HTML)
  3. Events
*/
var TodoComponent = React.createClass({
    getInitialState: function(){
        return {
            todos: ['Eat', 'Sleep', 'Poop', 'Pee', 'Fart', 'Code'],
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
    //The TodoItem component (below) only returns ONE <li>{item}</li>
    //Therefore, we need to iterate through todos array with map, passing 'item' and 'index'
    //into the TodoItem component each time, resulting in a new todos array of  [<li>{item}</li>] elements.

    var todos = this.state.todos;
    todos = todos.map(function(item, index){
        return (
            <TodoItem item={item} key={index} onDelete={this.onDelete}/> //Put component into html page
          );
      }.bind(this));

      //END RESULT:  todos = [<li>Eat<</li>, <li>Sleep</li>, <li>Poop</li>]
/***************************/
    //THIS HTML IS CREATED.
    return (
        <div id="todo-list">
            <p>My To Do List</p>
            <ul>
                {todos}
            </ul>
            <AddItem onAdd={this.onAdd}/>
        </div>
    );
  }, //End of render function

  //Custom functions
      onDelete: function(item){
        var updatedTodos = this.state.todos.filter(function(val,index){
          return item !== val;
        });
        this.setState({
          todos: updatedTodos
        });
    },

    onAdd: function(item){
        var updatedTodos = this.state.todos;
        updatedTodos.push(item);
        this.setState({
            todos: updatedTodos
        })
    }  
});

/************End of TodoComponent*****************/

//Put component into html page
ReactDOM.render(<TodoComponent></TodoComponent>, document.getElementById('todo-wrapper'));

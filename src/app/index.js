var React = require('react');
var ReactDOM = require('react-dom');

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
            /*
            Clicking fires this function...
              handleDelete: function(){
                this.props.onDelete(this.props.item);
              }
            */
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
  }
});

/************End of TodoComponent*****************/

//TodoItem Component
// this. (TodoItem Component) has a props item={item} equal to
//'Eat' or 'Sleep' etc.
var TodoItem = React.createClass({
  render: function(){
    return(
      <li>
        <div className = 'todo-item'>
          <span className = 'item-name'>{this.props.item}</span>
          <span className = 'item-delete' onClick = {this.handleDelete}> x </span>
        </div>
      </li>
    );
  },

//Custom functions
  handleDelete: function(){
    this.props.onDelete(this.props.item);
  }

});

//Put component into html page
ReactDOM.render(<TodoComponent></TodoComponent>, document.getElementById('todo-wrapper'));

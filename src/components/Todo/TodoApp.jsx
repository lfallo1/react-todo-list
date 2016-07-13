var React = require('react');
var moment = require('moment');

var TodoList = require('TodoList');
var TodoApi = require('TodoApi');

var TodoApp = React.createClass({

  getInitialState : function(){
    return {
      'showCompleted': false,
      'searchText' : '',
      'todos' : TodoApi.getTodos()
    };
  },

  handleAddTodo : function(text){
    TodoApi.addTodo(text);
    this.setState(TodoApi.getTodos());
  },

  handleToggle : function(id){
    var updatedTodos = this.state.todos.map(function(todo){
      if(todo.id === id){
        todo.completed = !todo.completed;
        todo.completedAt = todo.completed ? moment().unix() : undefined;
      }
      return todo;
    });

    this.setState({todos:updatedTodos});
  },

  handleSearch : function(searchText, showCompleted){
    this.setState({
      searchText: searchText,
      showCompleted: showCompleted
    })
  },

  render: function(){

    var {todos, showCompleted, searchText} = this.state;
    var filteredTodos = TodoApi.filterTodos(showCompleted, searchText);

    return (
      <div>
        <TodoList todos={filteredTodos} onToggle={this.handleToggle} />
      </div>
    );
  }
});

module.exports = TodoApp;

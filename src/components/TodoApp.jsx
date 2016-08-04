var React = require('react');
var moment = require('moment');

var TodoList = require('TodoList');
var TodoApi = require('TodoApi');
var AddTodo = require('AddTodo');
var TodoSearch = require('TodoSearch');


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
    this.setState({todos:TodoApi.getTodos()});
  },

  handleToggle : function(id) {
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
        <TodoSearch onSearch={this.handleSearch}/>
        <TodoList todos={filteredTodos} onToggle={this.handleToggle} />
        <AddTodo onAddTodo={this.handleAddTodo}/>
      </div>
    );
  }
});

module.exports = TodoApp;

var React = require('react');
var Todo = require('Todo');

var TodoList = React.createClass({

  render : function(){

    var { todos } = this.props
    var self = this;
    var renderTodos = function() {
      if(todos.length === 0){
        return (
          <p>No items to display</p>
        );
      }

      return todos.map(function(todo){
        return (
          <Todo key={self.id} {...todo} onToggle={self.props.onToggle} />
        );
      });
    };

    return (
      <div>
        {renderTodos()}
      </div>
    );

  }
});

module.exports = TodoList;

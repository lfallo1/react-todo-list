var React = require('react');

var AddTodo = React.createClass({

  handleSubmit : function(e){
    e.preventDefault();
    var text = this.refs.todoText.value.trim();
    if(text){
      this.refs.todoText.value = '';
      this.props.onAddTodo(text);
      return;
    }
    this.refs.todoText.focus();
  },

  render : function(){
    return (
      <div id="add-todo">
        <form onSubmit={this.handleSubmit}>
          <input ref="todoText" className="" placeholder="Enter todo..." type="text" />
          <button className="button expanded">Add Todo</button>
        </form>
      </div>
    );
  }

});

module.exports = AddTodo;

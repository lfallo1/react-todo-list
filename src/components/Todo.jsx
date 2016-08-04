var React = require('react');
var moment = require('moment');

var Todo = React.createClass({

  onToggle : function(){
    this.props.onToggle(this.props.id);
  },

  render : function(){

    var {id, text, completed, createdAt, completedAt} = this.props;

    var message = completed
      ? 'Completed ' + moment.unix(completedAt).format('MMM Do YYYY @ h:mm a')
      : 'Created ' + moment.unix(createdAt).format('MMM Do YYYY @ h:mm a');

    var className = completed ? 'todo-item todo-item-disabled' : 'todo-item';

    return (
      <div className={className} onClick={this.onToggle}>
        <input type="checkbox" checked={completed}/>
        <div className="todo-text">{text}</div>
        <div className="todo-message">{message}</div>
      </div>
    );

  }

});

module.exports = Todo;

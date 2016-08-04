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

    return (
      <label>
        {text} - {message}
        <input type="checkbox" checked={completed} onClick={this.onToggle}/>
      </label>
    );

  }

});

module.exports = Todo;

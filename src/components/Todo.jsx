var React = require('react');
var moment = require('moment');

var Todo = React.createClass({

  render : function(){

    var {id, text, completed, createdAt, completedAt} = this.props;

    var message = completed
      ? 'Completed ' + moment.unix(completedAt).format('MMM Do YYYY @ h:mm a')
      : 'Created ' + moment.unix(createdAt).format('MMM Do YYYY @ h:mm a');

    return (
      <div onClick={()=>{
          this.props.onToggle(id)
        }}>
        {text} - {message}
        <input type="checkbox" checked={completed} />
      </div>
    );

  }

});

module.exports = Todo;

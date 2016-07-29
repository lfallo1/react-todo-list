var React = require('react');

var TodoSearch = React.createClass({

  handleSearch: function(){
    this.props.onSearch(this.refs.searchText.value, this.refs.showCompleted.checked);
  },

  render : function(){
    return (
      <div>
        <div>
          <input ref="searchText" className="" placeholder="filter todo list..." type="text" onChange={this.handleSearch} />
        </div>
        <div>
          <input name="showCompleted" type="checkbox" ref="showCompleted" className="" onChange={this.handleSearch} />
          <label htmlFor="showCompleted">Show Completed</label>
        </div>
      </div>
    );
  }
});

module.exports = TodoSearch;

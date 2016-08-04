var React = require('react');

var TodoSearch = React.createClass({

  handleSearch: function(){
    this.props.onSearch(this.refs.searchText.value, this.refs.showCompleted.checked);
  },

  render : function(){
    return (
      <div id="search-todo">
        <div>
          <input ref="searchText" className="" placeholder="filter todo list..." type="text" onChange={this.handleSearch} />
        </div>
        <div>
          <label>
            <input type="checkbox" ref="showCompleted" className="" onChange={this.handleSearch} />
            Show Completed
          </label>
        </div>
      </div>
    );
  }
});

module.exports = TodoSearch;

var React = require('react');
var Todo = require('Todo');

var Home = (props) => {
  return (
    <div>
      <div className="callout primary">
        Home page
      </div>
      <Todo />
    </div>
  );
};

module.exports = Home;

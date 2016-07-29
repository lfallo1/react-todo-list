var uuid = require('node-uuid');
var moment = require('moment');

var todos = [
  {
    id : uuid(),
    text: 'Buy cornflakes',
    completed: false,
    createdAt: moment().unix(),
    completedAt: undefined
  },
  {
    id : uuid(),
    text: 'Build a castle',
    completed: false,
    createdAt: moment().unix(),
    completedAt: undefined
  },
  {
    id : uuid(),
    text: 'Eat cornflakes',
    completed: false,
    createdAt: moment().unix(),
    completedAt: moment().unix()
  }
];

var TodoApi = {

  addTodo : function(text){
    todos.push({
      id : uuid(),
      text: text,
      completed: false,
      createdAt: moment().unix(),
      completedAt: undefined
    });
  },

  getTodos : function(){
    return todos;
  },

  filterTodos : function(showCompleted, searchText){
    return todos.filter(function(todo){
      return (!searchText || todo.text.toLowerCase().indexOf(searchText.toLowerCase()) > -1) &&
        (!todo.completed || showCompleted)
    });
    //.sort((a,b)=>{return a.createdAt > b.createdAt ? 1 : a.createdAt < b.createdAt ? -1 : 0;})
  }

}

module.exports = TodoApi;

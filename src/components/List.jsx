var React = require('react');
var ListItem = require('ListItem');

var ingredients = [{id:1, name:'eggs'},{id:2,name:'bacon'},{id:3,name:'cheese'}];

var List = React.createClass({

   render : function(){

       var listItems = ingredients.map(function(item){
           return <ListItem key={item.id} id={item.id} ingredient={item.name} />;
       });

       return (
            <div className="row">
                <div className="col-md-5 col-md-offset-3">
                    <ul className="list-group">{listItems}</ul>
               </div>
            </div>
       );
   }
});

module.exports = List;
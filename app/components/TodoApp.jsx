var React = require('react');
var TodoList = require('TodoList');
var AddTodo = require('AddTodo');

var TodoApp = React.createClass({
    getInitialState: function () {
        return {
            todos: [
                {
                    id: 1,
                    text: "Get soap from farmer's market"
                }, {
                    id: 2,
                    text: "Walk to summit hill"
                }, {
                    id: 3,
                    text: "Study react"
                }, {
                    id: 4,
                    text: "text cassidy"
                }
            ]
        }
            
    },
    handleAddTodo: function (text) {
     alert ("New Todo: " + text);    
    },
    render: function () {
        var {todos} = this.state;
        
        return (
         <div>
            <TodoList todos={todos}/>
            <AddTodo onAddTodo={this.handleAddTodo}/>
         </div>   
        )
    }
});

module.exports = TodoApp;

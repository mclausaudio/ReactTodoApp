var React = require('react');
var TodoList = require('TodoList');
var AddTodo = require('AddTodo');
var TodoSearch = require('TodoSearch');

var TodoApp = React.createClass({
    getInitialState: function () {
        return {
            showCompleted: false,
            searchText: '',
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
    handleSearch: function (showCompleted, searchText) {
        this.setState({
            showCompleted: showCompleted, 
            searchText: searchText.toLowerCase()
        })    
    },
    render: function () {
        var {todos} = this.state;
        
        return (
         <div>
            <TodoSearch onSearch={this.handleSearch}/>
            <TodoList todos={todos}/>
            <AddTodo onAddTodo={this.handleAddTodo}/>
         </div>   
        )
    }
});

module.exports = TodoApp;

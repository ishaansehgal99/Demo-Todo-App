import React from 'react';
import './App.css';
import Todos from './Todos'
import Header from './Header'
import AddTodo from "./AddTodo";

export default class App extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            todos:[
                {
                    id: 1,
                    title: "Take out the trash",
                    completed:false
                },
                {
                    id: 2,
                    title: "Dinner with wife",
                    completed:false
                },
                {
                    id: 3,
                    title: 'Meeting with boss',
                    completed: false

                }
            ]
        }
    };

    markComplete = (id) => {
        this.setState({
            todos: this.state.todos.map(todo => {
                if(todo.id === id) todo.completed = !todo.completed;
                return todo;
            })
        });
    };

    addTodo = (text) => {
        const newTodo = {
            id: 4,
            title: text,
            completed:false
        };

        this.setState({todos: [...this.state.todos, newTodo]});
    };

    delTodo = (id) => {
        this.setState({
            todos: this.state.todos.filter(todo => todo.id !== id)
        });
    };

    render(){
        return (
            <div>
                <Header />
                <AddTodo addTodo = {this.addTodo}/>
                <Todos delTodo = {this.delTodo} markComplete = {this.markComplete} todos = {this.state.todos} />
            </div>
        );
    };

}

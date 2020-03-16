
import React from "react";
import TodoItem from './TodoItem'

import PropTypes from 'prop-types'

export default class Todos extends React.Component{
    render(){
        const {delTodo, markComplete} = this.props;
        return (

            this.props.todos.map((todo) => (

                <TodoItem key = {todo.id} delTodo = {delTodo} markComplete={markComplete} todo = {todo}/>

            ))
        );
    };
}

Todos.propTypes = {
    todos: PropTypes.array.isRequired
};



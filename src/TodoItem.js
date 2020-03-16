
import React from 'react';
import PropTypes from 'prop-types';

export default class TodoItem extends React.Component{
    getStyle = () => {
        return {
            textDecoration: this.props.todo.completed ? 'line-through' : 'none'
        }

    };

    render(){
        const {markComplete, delTodo} = this.props;
        const {id, title} = this.props.todo;

        return(
            <div style = {this.getStyle()}>

                <h1>
                    <input style = {{marginRight:'10px', marginBottom: '20px'}} type="checkbox" onChange={markComplete.bind(this, id)} />
                    {title}
                    <button onClick={delTodo.bind(this, id)}> x </button>
                </h1>

            </div>
        )
    };
}

TodoItem.propTypes = {
    todo:PropTypes.object.isRequired,
    markComplete:PropTypes.func.isRequired
};
import React, {Component} from 'react';
// import PropTypes from 'prop-types';

export default class AddTodo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text:""
        }

    }

    onChange = (e) => {
       this.setState({[e.target.name]:
        e.target.value});
    };

    onSubmit = (e) => {
        e.preventDefault();
        this.props.addTodo(this.state.text);
        this.setState({text: ""});
    }

    render() {
        return (
            <form onSubmit = {this.onSubmit} style = {{display:'flex'}}>
            <input
                type = "text"
                name = "text"
                style = {{flex:'10', padding:'5px'}}
                placeholder="Add Todo..."
                value = {this.state.text}
                onChange={this.onChange}
            />
            <input
                type="submit"
                value = "Submit"
                className = "btn"
                style = {{flex: '1'}}

            />


            </form>
        );
    }
}

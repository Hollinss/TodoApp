import React, { useState } from 'react';
import { connect } from 'react-redux';
import { createTodo } from './actions.js';
import './NewTodoForm.css'

//connect is a higher order function from the redux library which means it is called by two different arguments

const NewTodoForm = ({ todos, onCreatePressed }) => {
    const [inputValue, setInputValue] = useState('');
    return (
        <div className="new-todo-form">
            <input
                className="new-todo-input"
                type="text"
                placeholder="Type your new todo here"
                value={inputValue}
                onChange={e => setInputValue(e.target.value)} />
            <button onClick={()=>{
                const isDuplicateText =
                    todos.some(todo => todo.text === inputValue);
                if ( !isDuplicateText ) {
                    onCreatePressed(inputValue);
                    setInputValue('');
                }
            }}
                    className="new-todo-button">
                Create Todo</button>
        </div>
    );
}

const mapStateToProps = state => ({
    todos: state.todos,
});

const mapDispatchToProps = dispatch => ({
    onCreatePressed: text => dispatch(createTodo(text)),
});

export default connect(mapStateToProps,mapDispatchToProps)(NewTodoForm);

/**
 * connect()() returns a "connected" version of the...
            ^
   component that we want to connect
 ...components that we define. In this case, the component is "NewTodoForm"
 *
 *  mapStateToProps: the "state" object that gets passed in is an object that maps the entire redux state. This function takes the whole state, and returns only the necessary pieces that we need for our component
 *
 *  mapDispatchToProps: function which allows our components to trigger actions which our redux store will know how to respond to
 */
import React, {useState} from "react";
// useDispatch hook to call reducers
import {useDispatch, useSelector} from "react-redux";
import {addTodo, deleteTodo, todoDoneToggle} from "./reducers/todos-reducer";


const Todos = () => {
    // retrieve todos array
    const todos = useSelector(state => state.todos);
    const [todo, setTodo] = useState({do: ''});

    // use to invoke reducer functions -> changing global state
    const dispatch = useDispatch();

    // handle create event of button
    const createTodoClickHandler = () => {
        // passing new object as the payload in the action object
        dispatch(addTodo(todo))
    }

    // handle delete event of button
    const deleteTodoClickHandler = (index) => {
        dispatch(deleteTodo(index))
    }

    // handle global state update event
    const toggleTodoDone = (index) => {
        dispatch(todoDoneToggle(index))
    }

    // change component state
    const todoChangeHandler = (event) => {
        const doValue = event.target.value;
        const newTodo = {
            do: doValue
        };
        setTodo(newTodo);
    }

    return (
        <>
            <h3>Todos</h3>
            <ul className="list-group">
                <li className="list-group-item">
                    <button onClick={createTodoClickHandler}
                            className="btn btn-primary w-25
                          float-end">
                        Create
                    </button>
                    <input
                        onChange={todoChangeHandler}
                        value={todo.do}
                        className="form-control w-75"/>
                </li>
                {
                    todos.map((todo, index) =>
                        <li key={todo._id} className="list-group-item">
                            <input type="checkbox"
                                   checked={todo.done}
                                   onChange={() =>
                                       toggleTodoDone(todo._id)}
                                   className="me-2"/>
                            {todo.do}
                            <button onClick={() =>
                                deleteTodoClickHandler(index)}
                                    className="btn btn-danger float-end ms-2">
                                Delete
                            </button>
                        </li>
                    )
                }
            </ul>
        </>
    );
};
export default Todos;

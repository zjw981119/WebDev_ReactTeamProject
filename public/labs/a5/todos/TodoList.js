import TodoItem from "./TodoItem.js";
import todos from "./todos.js";

// The join() method creates and returns a new string
// by concatenating all the elements in an array
const TodoList = () => {
    return (`
       <ul>
           ${
                todos.map(todo => {
                    return (TodoItem(todo));
                }).join('')
            }
       </ul>
   `);
}
export default TodoList;


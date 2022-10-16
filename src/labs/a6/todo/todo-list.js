import TodoItem from "./todo-item";
import todos from "./todos.json";
const TodoList = () => {
    return(
        <div>
            <h3>Todo List</h3>
            <ul>
                {
                    todos.map(todo => {
                        return(<TodoItem todo={todo}/>);
                    })
                }
            </ul>
        </div>
    );
}
export default TodoList;

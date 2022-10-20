import {createSlice} from "@reduxjs/toolkit";

const initialTodos = [
    {
        _id: "123",
        do: "Accelerate the world's transition to sustainable energy",
        done: false
    },
    {
        _id: "234",
        do: "Reduce space transportation costs to become a spacefaring civilization",
        done: false
    },
];

const todosSlice = createSlice({
    name: 'todos',
    initialState: initialTodos,


    reducers: {
        // state: initialTodos array
        addTodo(state, action) {
            state.push({
                _id: (new Date()).getTime(),
                // _id: state.length,
                do: action.payload.do,
                done: false
            });

        },

        // delete
        deleteTodo(state, action) {
            const index = action.payload;
            state.splice(index, 1);
        },

        // toggle checkbox
        todoDoneToggle(state, action) {
            const todo = state.find((todo) => todo._id === action.payload);
            todo.done = !todo.done;
        }

    }

});

// export actions so we can call them from UI
export const {addTodo, deleteTodo, todoDoneToggle} = todosSlice.actions
export default todosSlice.reducer

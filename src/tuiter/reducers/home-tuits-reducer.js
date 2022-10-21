import { createSlice } from "@reduxjs/toolkit";
import tuits from '../data/home-tuits.json';

const currentUser = {
    "userName": "NASA",
    "handle": "@nasa",
    "avatar": "nasa.jpeg",
};

const templateTuit = {
    ...currentUser,
    "topic": "Space",
    "time": "2h",
    "liked": false,
    "replies": 0,
    "retuits": 0,
    "likes": 0,
}

const homeTuitsSlice = createSlice({
    name: 'home-tuits',
    initialState: tuits,

    reducers: {

        createTuit(state, action) {
            // adds one or more elements to the beginning of an array
            // and returns the new length of the array.
            state.unshift({
                ...action.payload,
                ...templateTuit,
                _id: (new Date()).getTime(),
            })
        },

        deleteTuit(state, action) {
            const index = state.findIndex(tuit => tuit._id === action.payload);
            // remove elements starting at index from array
            state.splice(index, 1);
        },

    }

});

export default homeTuitsSlice.reducer;
export const {createTuit, deleteTuit} = homeTuitsSlice.actions;

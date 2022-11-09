import { createSlice } from "@reduxjs/toolkit";
import {createTuitThunk, deleteTuitThunk, findTuitsThunk, updateTuitThunk} from "../services/tuits-thunks";


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

const initialState = {
    tuits: [],
    loading: false
}

const homeTuitsSlice = createSlice({
    name: 'home-tuits',
    initialState,
    extraReducers: {
        // when the request is first sent to the server
        [findTuitsThunk.pending]:
            (state) => {
                state.loading = true
                state.tuits = []
            },
        // when the server finally responds
        [findTuitsThunk.fulfilled]:
            (state, { payload }) => {
                state.loading = false
                state.tuits = payload
            },
        // if the server times out or responds with an error
        [findTuitsThunk.rejected]:
            (state) => {
                state.loading = false
            },

        // wait until server receive delete request,
        // although this reducer function is definitely not needed
        [deleteTuitThunk.fulfilled] :
            (state, { payload }) => {
                state.loading = false
                state.tuits = state.tuits
                    .filter(t => t._id !== payload)
            },

        [createTuitThunk.fulfilled]:
            (state, { payload }) => {
                state.loading = false
                state.tuits.push(payload)
            },

        [updateTuitThunk.fulfilled]:
            (state, { payload }) => {
                state.loading = false
                const tuitIndex = state.tuits
                    .findIndex((t) => t._id === payload._id)
                state.tuits[tuitIndex] = {
                    ...state.tuits[tuitIndex],
                    ...payload
                }
            }
    },

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

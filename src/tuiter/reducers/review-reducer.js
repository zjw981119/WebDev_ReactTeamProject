import { createSlice } from "@reduxjs/toolkit";
import {
    createReviewThunk,
    deleteReviewThunk,
    findReviewByRawgIdThunk,
    findReviewsThunk,
    updateReviewThunk
} from "../services/review-service/reviews-thunks";



const initialState = {
    reviews: [],
    loading: false
}

const ReviewsSlice = createSlice({
    name: 'reviews',
    initialState,
    extraReducers: {
        // when the request is first sent to the server
        [findReviewsThunk.pending]:
            (state) => {
                state.loading = true
                state.reviews = []
            },
        // when the server finally responds
        [findReviewsThunk.fulfilled]:
            (state, { payload }) => {
                state.loading = false
                state.reviews = payload
            },
        // if the server times out or responds with an error
        [findReviewsThunk.rejected]:
            (state) => {
                state.loading = false
            },


        [findReviewByRawgIdThunk.pending]:
            (state) => {
                state.loading = true
                state.reviews = []
            },
        // when the server finally responds
        [findReviewByRawgIdThunk.fulfilled]:
            (state, { payload }) => {
                state.loading = false
                state.reviews = payload
            },
        // if the server times out or responds with an error
        [findReviewByRawgIdThunk.rejected]:
            (state) => {
                state.loading = false
            },


        // wait until server receive delete request,
        // although this reducer function is definitely not needed
        [deleteReviewThunk.fulfilled] :
            (state, { payload }) => {
                state.loading = false
                state.reviews = state.reviews
                    .filter(t => t._id !== payload)
            },

        [createReviewThunk.fulfilled]:
            (state, { payload }) => {
                state.loading = false
                state.reviews.push(payload)
            },

        [updateReviewThunk.fulfilled]:
            (state, { payload }) => {
                state.loading = false
                const reviewIndex = state.reviews
                    .findIndex((t) => t._id === payload._id)
                state.reviews[reviewIndex] = {
                    ...state.reviews[reviewIndex],
                    ...payload
                }
            }
    },

    reducers: {

        creatReview(state, action) {
            // adds one or more elements to the beginning of an array
            // and returns the new length of the array.
            state.unshift({
                ...action.payload
            })
        },

        deleteReview(state, action) {
            const index = state.findIndex(review => review._id === action.payload);
            // remove elements starting at index from array
            state.splice(index, 1);
        },

    }

});

export default ReviewsSlice.reducer;
export const {createReview, deleteReview} = ReviewsSlice.actions;

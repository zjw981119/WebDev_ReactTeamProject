import { createSlice } from "@reduxjs/toolkit";
import {findGamesByIdThunk} from "../services/game-service/games-thunks";



const initialState = {
    games: [],
    loading: false
}

const GamesSlice = createSlice({
    name: 'games',
    initialState,
    extraReducers: {
        // when the request is first sent to the server
        [findGamesByIdThunk.pending]:
            (state) => {
                state.loading = true
                state.games = []
            },
        // when the server finally responds
        [findGamesByIdThunk.fulfilled]:
            (state, { payload }) => {
                state.loading = false
                state.games = payload
            },
        // if the server times out or responds with an error
        [findGamesByIdThunk.rejected]:
            (state) => {
                state.loading = false
            }

    }

});

export default GamesSlice.reducer;


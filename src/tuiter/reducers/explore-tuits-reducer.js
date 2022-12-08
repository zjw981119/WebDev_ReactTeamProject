import { createSlice } from "@reduxjs/toolkit";
import tuits from '../data/explore-tuits.json';

const exploreTuitsSlice = createSlice({
    name: 'explore-tuits',
    initialState: tuits
});

export default exploreTuitsSlice.reducer;

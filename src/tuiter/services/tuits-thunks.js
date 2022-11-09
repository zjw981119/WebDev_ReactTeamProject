import {createAsyncThunk} from "@reduxjs/toolkit"
import * as service from "./tuits-service"

// wrap an asynchronous HTTP function
export const findTuitsThunk = createAsyncThunk(
    'tuits/findTuits', async () =>
        // Returned data goes in redux action's payload
        await service.findTuits()
)

export const deleteTuitThunk = createAsyncThunk(
    'tuits/deleteTuit',
    async (tuitId) => {
        await service.deleteTuit(tuitId);
        return tuitId;
    })

export const createTuitThunk = createAsyncThunk(
    'tuits/createTuit',
    async (tuit) => {
        return await service.createTuit(tuit);
    })

export const updateTuitThunk = createAsyncThunk(
        'tuits/updateTuit',
        async (tuit) =>
            await service.updateTuit(tuit)
    )

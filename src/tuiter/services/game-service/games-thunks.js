import {createAsyncThunk} from "@reduxjs/toolkit"
import * as service from "./games-service"


export const createGameThunk = createAsyncThunk(
    'tuits/createGame',
    async (game) => {
        return await service.createGame(game);
    })


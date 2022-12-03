import {createAsyncThunk} from "@reduxjs/toolkit"
import * as service from "./games-service"
import {findGameByRwagId} from "./games-service";

// wrap an asynchronous HTTP function
export const findGamesThunk = createAsyncThunk(
    'tuits/findGames', async () =>
        // Returned data goes in redux action's payload
        await service.findGames()
)

export const findGamesByIdThunk = createAsyncThunk(
    'tuits/findGameById', async (RwagId) => {
        // Returned data goes in redux action's payload
        return await service.findGameByRwagId(RwagId);
    }
)

export const deleteGameThunk = createAsyncThunk(
    'tuits/deleteGame',
    async (gameId) => {
        await service.deleteGame(gameId);
        return gameId;
    })


export const createGameThunk = createAsyncThunk(
    'tuits/createGame',
    async (game) => {
        return await service.createGame(game);
    })

export const updateGameThunk = createAsyncThunk(
        'tuits/updateGame',
        async (game) =>
            await service.updateGame(game)
    )

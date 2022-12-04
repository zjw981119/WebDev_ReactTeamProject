import {createAsyncThunk} from "@reduxjs/toolkit"
import * as service from "./games-service"
import {getGameTrailerUrl} from "./games-service";


// wrap an asynchronous HTTP function
export const findGamesThunk = createAsyncThunk(
    'tuits/findGames', async () =>
        // Returned data goes in redux action's payload
        await service.findGames()
)

export const findGameByIdThunk = createAsyncThunk(
    'tuits/findGameByRawgId', async (RawgId) => {
        const res = await service.findGameByRawgId(RawgId)
        return res
    }
)

export const getGameTrailerUrlThunk = createAsyncThunk(
    'tuits/getGameTrailerUrl', async ( GameName) => {
        const res = await service.getGameTrailerUrl(GameName)
        return res
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

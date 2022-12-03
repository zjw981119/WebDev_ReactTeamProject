import {createAsyncThunk} from "@reduxjs/toolkit"
import * as service from "./rawg-games-service"
import {findRAWGGameDetail, searchRAWGGames} from "./rawg-games-service";

// wrap an asynchronous HTTP function
export const searchRAWGGamesThunk = createAsyncThunk(
    'RAWGgames/searchGames', async (searchInput) =>
        // Returned data goes in redux action's payload
        await service.searchRAWGGames(searchInput)
)

export const findRAWGGameDetailThunk = createAsyncThunk(
    'RAWGgames/findGameDetail', async (gameId) =>
        // Returned data goes in redux action's payload
        await service.findRAWGGameDetail(gameId)
)
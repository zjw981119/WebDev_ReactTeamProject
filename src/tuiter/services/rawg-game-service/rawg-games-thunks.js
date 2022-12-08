import {createAsyncThunk} from "@reduxjs/toolkit"
import * as service from "./rawg-games-service"
import {findRAWGRecommendedGame} from "./rawg-games-service";

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

export const findRAWGRecommendedGameThunk = createAsyncThunk(
    'RAWGgames/findRAWGRecommendedGame', async (gameId) =>
        // Returned data goes in redux action's payload
        await service.findRAWGRecommendedGame()
)

export const findTopGameThunk = createAsyncThunk(
    'RAWGgames/findTopGame', async (gameId) =>
        // Returned data goes in redux action's payload
        await service.findTopRatingRAWGGame()
)

export const findTrendingGameThunk = createAsyncThunk(
    'RAWGgames/findTrendingGame', async (gameId) =>
        // Returned data goes in redux action's payload
        await service.findTrendingRAWGGame()
)
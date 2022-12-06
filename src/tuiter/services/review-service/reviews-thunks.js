import {createAsyncThunk} from "@reduxjs/toolkit"
import * as service from "./reviews-service"
import {deleteReview, findReviewByRawgId, findReviewByUserId, findReviews, getGameTrailerUrl} from "./reviews-service";


// wrap an asynchronous HTTP function
export const findReviewsThunk = createAsyncThunk(
    'tuits/findReviews', async () =>
        // Returned data goes in redux action's payload
        await service.findReviews()
)

export const findReviewByUserIdThunk = createAsyncThunk(
    'tuits/findReviewByUserId', async (UserId) => {
        const res = await service.findReviewByUserId(UserId)
        return res
    }
)

export const findReviewByRawgIdThunk = createAsyncThunk(
    'tuits/findReviewByRawgId', async (RawgId) => {
        const res = await service.findReviewByRawgId(RawgId)
        return res
    }
)


export const deleteReviewThunk = createAsyncThunk(
    'tuits/deleteReview',
    async (ReviewId) => {
        await service.deleteReview(ReviewId);
        return ReviewId;
    })


export const createReviewThunk = createAsyncThunk(
    'tuits/createReview',
    async (review) => {
        return await service.createReview(review);
    })

export const updateReviewThunk = createAsyncThunk(
        'tuits/updateReview',
        async (review) =>
            await service.updateReview(review)
    )

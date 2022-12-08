import {createAsyncThunk} from "@reduxjs/toolkit"
import * as service from "./reviews-service"


export const deleteReviewThunk = createAsyncThunk(
    'tuits/deleteReview',
    async (ReviewId) => {
        await service.deleteReview(ReviewId);
        return ReviewId;
    })



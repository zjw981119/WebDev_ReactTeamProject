/**
 * @file Axios Request service API for likes && tuits resource
 */
import axios from "axios";

const BASE_URL = process.env.REACT_APP_BASE_URL;
const USERS_API = `${BASE_URL}/api/users`;

const api = axios.create({
    withCredentials: true
});

/**
 * Update tuit stats based on user's click event(toggles like button)
 * @param {string} uid Represents user that is toggling like button
 * @param {string} tid Represents the tuit being liked by user
 */
export const userLikesTuit = (uid, tid) =>
    api.put(`${USERS_API}/${uid}/likes/${tid}`)
        .then(response => response.data);

/**
 * Retrieve all tuits liked by user.
 * @param {string} uid Represents the login user
 */
export const findAllTuitsLikedByUser = (uid) =>
    api.get(`${USERS_API}/${uid}/likes`)
        .then(response => response.data);
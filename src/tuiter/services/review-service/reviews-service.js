import axios from 'axios';
const Reviews_API = 'http://localhost:4000/api/reviews';
const Base_API = 'http://localhost:4000/api';

// const TUITS_API = 'https://webdev-tuiter-server.herokuapp.com/api/tuits';

// use different path according to different machine
// REACT_APP_API_BASE is saved in .bash_profile in the local computer
//const API_BASE = process.env.REACT_APP_API_BASE2;
//const TUITS_API = `${API_BASE}/tuits`;

const api = axios.create({
    withCredentials: true
});

export const createReview = async (review, UserId) => {
    const response = await api.post(Reviews_API + "/" + UserId, review);
    return response.data;
}

export const findAllReviewsByUserId  = async (UserId) => {
    const req_API = Base_API + "reviews/users/" + UserId
    const response = await api.get(req_API);
    return response.data;
}


export const findReviewByRawgId  = async (RawgId) => {
    const req_API = Reviews_API + "/Rawg/" + RawgId
    const response = await api.get(req_API);
    return response.data;
}


// find all games
export const findReviews  = async () => {
    const response = await api.get(Reviews_API);
    return response.data;
}

// delete game by id
export const deleteReview = async (rid) => {
    const response = await api.delete(`${Reviews_API}/${rid}`)
    return response.data;
}

export const updateReview = async (game) => {
    await api.put(`${Reviews_API}/${game._id}`, game);
    return game;
}

export const getReviewedGames = async (uid) => {
    return api.get(Reviews_API + `/users/${uid}`).then(response => response.data)
}

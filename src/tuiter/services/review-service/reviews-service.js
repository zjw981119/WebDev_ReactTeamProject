import axios from 'axios';
const Reviews_API = 'http://localhost:4000/api/reviews';

// const TUITS_API = 'https://webdev-tuiter-server.herokuapp.com/api/tuits';

// use different path according to different machine
// REACT_APP_API_BASE is saved in .bash_profile in the local computer
//const API_BASE = process.env.REACT_APP_API_BASE2;
//const TUITS_API = `${API_BASE}/tuits`;

export const createReview = async (review) => {
    const response = await axios.post(Reviews_API, review);
    return response.data;
}

export const findReviewByUserId  = async (UserId) => {
    const req_API = Reviews_API + "/users/" + UserId
    const response = await axios.get(req_API);
    return response.data;
}

export const findReviewByRawgId  = async (RawgId) => {
    const req_API = Reviews_API + "/Rawg/" + RawgId
    const response = await axios.get(req_API);
    return response.data;
}


// find all games
export const findReviews  = async () => {
    const response = await axios.get(Reviews_API);
    return response.data;
}

// delete game by id
export const deleteReview = async (rid) => {
    const response = await axios.delete(`${Reviews_API}/${rid}`)
    return response.data;
}

export const updateReview = async (game) => {
    await axios.put(`${Reviews_API}/${game._id}`, game);
    return game;
}


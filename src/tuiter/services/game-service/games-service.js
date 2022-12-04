import axios from 'axios';
const Games_API = 'http://localhost:4000/api/games';
const Youtube_API_key = "AIzaSyBgU76k8BjLF-R94jVnUGbGKLNaAgPKnDo";
// const TUITS_API = 'https://webdev-tuiter-server.herokuapp.com/api/tuits';

// use different path according to different machine
// REACT_APP_API_BASE is saved in .bash_profile in the local computer
//const API_BASE = process.env.REACT_APP_API_BASE2;
//const TUITS_API = `${API_BASE}/tuits`;

export const createGame = async (game) => {
    const response = await axios.post(Games_API, game);
    return response.data;
}

export const findGameByRawgId  = async (RawgId) => {
    const req_API = Games_API + "/" + RawgId
    const response = await axios.get(req_API);
    return response.data;
}

export const getGameTrailerUrl  = async (GameName) => {
    const keyword = GameName + " Trailer";
    const req_API = "https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=1&q=" + keyword + "&key=" + Youtube_API_key;
    const response = await axios.get(req_API);
    const videoId = response.data.items[0].id.videoId;
    const trailer_url = "https://www.youtube.com/embed/" + videoId
    return trailer_url;
}


// find all games
export const findGames  = async () => {
    const response = await axios.get(Games_API);
    return response.data;
}

// delete game by id
export const deleteGame = async (gid) => {
    const response = await axios.delete(`${Games_API}/${gid}`)
    return response.data;
}

export const updateGame = async (game) => {
    await axios.put(`${Games_API}/${game._id}`, game);
    return game;
}


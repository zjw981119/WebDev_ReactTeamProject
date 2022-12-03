import axios from 'axios';
const Games_API = 'http://localhost:4000/api/games';
// const TUITS_API = 'https://webdev-tuiter-server.herokuapp.com/api/tuits';

// use different path according to different machine
// REACT_APP_API_BASE is saved in .bash_profile in the local computer
//const API_BASE = process.env.REACT_APP_API_BASE2;
//const TUITS_API = `${API_BASE}/tuits`;

export const createGame = async (game) => {
    const response = await axios.post(Games_API, game);
    return response.data;
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


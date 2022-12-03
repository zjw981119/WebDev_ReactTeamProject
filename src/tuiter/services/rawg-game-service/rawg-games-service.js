import axios from 'axios';
const rawg_search_API = 'https://api.rawg.io/api/games?key=7292389b6f3b4ef5a8dbfac340a07684&search=';
const key = "7292389b6f3b4ef5a8dbfac340a07684";
const rawg_detail_API = 'https://api.rawg.io/api/games/';


// find all games based on input
export const searchRAWGGames  = async (searchInput) => {
    const searchRequest = rawg_search_API + searchInput;
    const response = await axios.get(searchRequest);
    return response.data;
}

// get game detail information
export const findRAWGGameDetail  = async (gameId) => {
    const request = rawg_detail_API + gameId + '?key=' + key;
    const response = await axios.get(request);
    return response.data;
}


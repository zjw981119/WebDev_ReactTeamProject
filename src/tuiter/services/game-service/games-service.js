import axios from 'axios';

const BASE_URL = process.env.REACT_APP_BASE_URL;
const Games_API = BASE_URL + '/api/games';
const YOUTUBE_URL = process.env.REACT_APP_YOUTUBE_URL;
const SPOTIFT_URL = process.env.REACT_APP_SPOTIFY_URL;
const RapidAPI_Key = process.env.REACT_APP_RAPID_API_KEY;

const api = axios.create({
    withCredentials: true
});

export const createGame = async (game) => {
    const response = await api.post(Games_API, game);
    return response.data;
}

// retrieve game detail info from own database instead of external api
export const findGameByRawgId = async (RawgId) => {
    const req_API = Games_API + "/" + RawgId
    const response = await api.get(req_API);
    return response.data;
}

// get the game trailer video url
export const getGameTrailerUrl = async (GameName) => {
    const keyword = GameName + " Trailer";
    // configure request
    const options = {
        method: 'GET',
        url: YOUTUBE_URL,
        params: {query: keyword, lang: 'en', order_by: 'this_month', country: 'us'},
        headers: {
            'X-RapidAPI-Key': RapidAPI_Key,
            'X-RapidAPI-Host': 'youtube-v2.p.rapidapi.com'
        }
    };

    // return the game trailer video url
    const response = await axios.request(options);
    const videoId = response.data.videos[0].video_id;
    return "https://www.youtube.com/embed/" + videoId;
}

// get the game playlist uri
export const getGameMusicUrl = async (GameName) => {
    let keyword = GameName;
    if (keyword.includes(':') && keyword.indexOf(':') > keyword.length / 2) {
        keyword = keyword.substring(0, keyword.indexOf(':'))
    } else if (keyword.includes('-')) {
        keyword = keyword.substring(0, keyword.indexOf('-'))
    }
    // configure request
    const options = {
        method: 'GET',
        url: SPOTIFT_URL,
        params: {
            q: keyword,
            type: 'multi',
            offset: '0',
            limit: '10',
            numberOfTopResults: '5'
        },
        headers: {
            'X-RapidAPI-Key': RapidAPI_Key,
            'X-RapidAPI-Host': 'spotify23.p.rapidapi.com'
        }
    };
    // return the bg playlists uri
    const response = await axios.request(options);
    return response.data.playlists.items[0].data.uri.split(':')[2];
}




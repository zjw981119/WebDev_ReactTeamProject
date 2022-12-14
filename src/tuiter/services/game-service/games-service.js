import axios from 'axios';
const BASE_URL = process.env.REACT_APP_BASE_URL;
// const Games_API = 'http://localhost:4000/api/games';
const Games_API = BASE_URL + '/api/games';
const RapidAPI_Key = '6b661fe439msh3a879a9b179992bp107604jsn3cc592bd533e'

// const TUITS_API = 'https://webdev-tuiter-server.herokuapp.com/api/tuits';

// use different path according to different machine
// REACT_APP_API_BASE is saved in .bash_profile in the local computer
//const API_BASE = process.env.REACT_APP_API_BASE2;
//const TUITS_API = `${API_BASE}/tuits`;

const api = axios.create({
    withCredentials: true
});

export const createGame = async (game) => {
    const response = await api.post(Games_API, game);
    return response.data;
}

export const findGameByRawgId  = async (RawgId) => {
    const req_API = Games_API + "/" + RawgId
    const response = await api.get(req_API);
    return response.data;
}

export const getGameTrailerUrl  = async (GameName) => {
    const keyword = GameName + " Trailer";

    try {
        const req_fast_API = "https://youtube-v2.p.rapidapi.com/search/?query=" + keyword+"&lang=en&order_by=this_month&country=us";
        const response = await axios.get(req_fast_API, {
            headers: {
                'X-RapidAPI-Host': 'youtube-v2.p.rapidapi.com',
                'X-RapidAPI-Key': RapidAPI_Key
            }
        });
        const videoId = response.data.videos[0].video_id;
        const trailer_url = "https://www.youtube.com/embed/" + videoId
        return trailer_url;

    }
    catch (e) {
        console.log("trailer video is loading or cannot be found");
    }
}


export const getGameMusicUrl  = async (GameName) => {
    let keyword = GameName;
    if(keyword.includes(':') && keyword.indexOf(':') > keyword.length/2)
    {
        keyword = keyword.substring(0, keyword.indexOf(':'))
    }
    else if(keyword.includes('-'))
    {
        keyword = keyword.substring(0, keyword.indexOf('-'))
    }

    const req_fast_API = "https://spotify23.p.rapidapi.com/search/?q=" + keyword+"&type=multi&offset=0&limit=10&numberOfTopResults=5";

    const res = await axios.get(req_fast_API, {
        headers: {
            'X-RapidAPI-Host': 'spotify23.p.rapidapi.com',
            'X-RapidAPI-Key': RapidAPI_Key
        }
    });

    const SpotifyMusicId = res.data.playlists.items[0].data.uri.split(':')[2];

    return SpotifyMusicId

}




import axios from 'axios';
import {createGame} from "../game-service/games-service";
const BASE_URL = process.env.REACT_APP_RAWG_URL;
const KEY = process.env.REACT_APP_RAWG_API_KEY;
const rawg_search_API = `${BASE_URL}?key=${KEY}&search=`;
const rawg_detail_API = `${BASE_URL}/`;
const rawg_recommended_API = `${BASE_URL}?key=${KEY}`;

// find all games based on query
export const searchRAWGGames  = async (searchInput) => {
    const searchRequest = rawg_search_API + searchInput + "&ordering=-added";
    const response = await axios.get(searchRequest);
    return response.data;
}

// get game detail information
export const findRAWGGameDetail  = async (gameId) => {
    const request = rawg_detail_API + gameId + '?key=' + KEY;
    const response = await axios.get(request);
    return response.data;
}

// get recent two years games, sort by rating in descending order
// this api is for new games sidebar
export const findRAWGRecommendedGame  = async () => {
    const date = new Date();
    const curYear = date.getFullYear();
    // start from last year's first day
    const startDate = (curYear - 1) + "-01-01";
    // current year's last day
    const endDate = curYear + "-12-31";
    const request = rawg_recommended_API + "&dates=" + startDate + "," + endDate + "&ordering=-rating";
    const response = await axios.get(request);
    return response.data;
}

// get games with top ratings(40 records) since 2001-01-01, sort by metacritic score in descending order
export const findTopRatingRAWGGame  = async () => {
    const date = new Date();
    const endDate = date.getFullYear() + "-12-31";
    const request = rawg_recommended_API + "&dates=2001-01-01" +  "," + endDate + "&page_size=40&ordering=-metacritic";
    const response = await axios.get(request);
    return response.data;
}

// get recent 1 year games(40 records), sort by metacritic score in descending order
export const findTrendingRAWGGame  = async () => {
    const date = new Date();
    // getMonth() -> value[0,11]
    let startMonth = date.getMonth() + 1;
    // getDate() -> [1,31]
    let curDay = date.getDate();
    if(startMonth < 10) startMonth = "0" + startMonth;
    if(curDay < 10) curDay = "0" + curDay;
    const startDate = (date.getFullYear() - 1) + "-" + startMonth + "-01";
    const endDate = date.getFullYear() + "-" + startMonth + "-" + curDay;
    const request = rawg_recommended_API + "&dates=" + startDate +  "," + endDate + "&page_size=40&ordering=-metacritic";
    const response = await axios.get(request);
    return response.data;
}

// get recent 1 year games(40 records) based on different platform, sort by metacritic score in descending order
export const findPCRAWGGamebyPlatformId  = async (platformId) => {
    const date = new Date();
    // getMonth() -> value[0,11]
    let startMonth = date.getMonth() + 1;
    // getDate() -> [1,31]
    let curDay = date.getDate();
    if(startMonth < 10) startMonth = "0" + startMonth;
    if(curDay < 10) curDay = "0" + curDay;
    const startDate = (date.getFullYear() - 1) + "-" + startMonth + "-01";
    const endDate = date.getFullYear() + "-" + startMonth + "-" + curDay;
    const request = rawg_recommended_API + "&dates=" + startDate + "," +  endDate + "&page_size=40&ordering=-metacritic&platforms=" + platformId;
    const response = await axios.get(request);
    return response.data;
}




// add game info to database
export const AddGame  = async (SelectedId) =>
{
    const res = await findRAWGGameDetail(Number(SelectedId));
    let PlatformList = []

    for(let platforms_index in res.platforms)
    {
        PlatformList.push(res.platforms[platforms_index].platform.name);
    }

    let GenreList = []
    for(let genres_index in res.genres)
    {
        GenreList.push(res.genres[genres_index].name);
    }

    let DeveloperList = []

    for(let developers_index in res.developers)
    {
        DeveloperList.push(res.developers[developers_index].name);
    }

    let description =  res.description;
    const regex = /(<([^>]+)>)/gi;
    description = description.replace(regex, " ");

    const gameCreateReq =
        {
            "RawgId": res.id,
            "GameName": res.name,
            "Description": description,
            "Metacritic": res.metacritic,
            "ReleaseDate": res.released,
            "Image": res.background_image,
            "Website" : res.website,
            "Platforms" :PlatformList,
            "Genres" : GenreList,
            "Developers" : DeveloperList
        }
    await createGame(gameCreateReq);


}


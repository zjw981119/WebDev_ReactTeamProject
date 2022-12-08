import axios from 'axios';
import {createGame} from "../game-service/games-service";
const rawg_search_API = 'https://api.rawg.io/api/games?key=7292389b6f3b4ef5a8dbfac340a07684&search=';
const key = "b640803dd45b4af69427cc78f96539a0";
const rawg_detail_API = 'https://api.rawg.io/api/games/';
const rawg_recommended_API = 'https://api.rawg.io/api/games?key=';


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

export const findRAWGRecommendedGame  = async () => {
    const date = new Date();
    let Startmonth = date.getMonth() - 2;
    let Startyear = date.getFullYear();
    let Endmonth = date.getMonth();
    if(date.getMonth() - 2 <= 0)
    {
        Startmonth = 12 - date.getMonth() + 2;
    }

    if(date.getMonth() - 2 < 10)
    {
        Startmonth = "0" + Startmonth;
    }

    if(Endmonth < 10)
    {
        Endmonth = "0" + Endmonth;
    }

    const startDate = Startyear + "-" + Startmonth  + "-01"
    const endDate = (Startyear + 1) + "-" + Endmonth  + "-30"
    const request = rawg_recommended_API + key + "&dates="+startDate + "," + endDate + "&ordering=-rating";
    const response = await axios.get(request);
    return response.data;
}


export const findTopRatingRAWGGame  = async () => {
    const date = new Date();

    const endDate = date.getFullYear() + "-12" + "-30"
    const request = rawg_recommended_API + key + "&dates=2001-01-01" +  "," + endDate + "&page_size=100&ordering=-added";
    const response = await axios.get(request);
    return response.data;
}

export const findTrendingRAWGGame  = async () => {
    const date = new Date();
    let StartMonth = date.getMonth()
    if(StartMonth < 10)
    {
        StartMonth = "0" + StartMonth;
    }

    const endDate = date.getFullYear() + "-" + StartMonth + "-30"
    const request = rawg_recommended_API + key + "&dates=" + (date.getFullYear() - 1) + "-" + StartMonth +  "-01" +  "," + endDate + "&page_size=60&ordering=-added";
    const response = await axios.get(request);
    return response.data;
}

export const findPCRAWGGamebyPlatformId  = async (platformId) => {
    const date = new Date();
    let StartMonth = date.getMonth()
    if(StartMonth < 10)
    {
        StartMonth = "0" + StartMonth;
    }

    const endDate = date.getFullYear() + "-" + StartMonth + "-30"
    const request = rawg_recommended_API + key + "&dates=" + (date.getFullYear() - 1) + "-" + StartMonth +  "-01" +  "," + endDate + "&page_size=60&ordering=-added&platforms=" + platformId;
    const response = await axios.get(request);
    return response.data;
}





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


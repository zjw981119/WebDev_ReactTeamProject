import axios from 'axios';
const rawg_search_API = 'https://api.rawg.io/api/games?key=7292389b6f3b4ef5a8dbfac340a07684&search=';
const key = "7292389b6f3b4ef5a8dbfac340a07684";
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


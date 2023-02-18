import axios from 'axios';

const RapidAPI_Key = process.env.REACT_APP_RAPID_API_KEY;
const NEWS_URL = process.env.REACT_APP_NEWS_URL;
export const findGameNews  = async () => {

    const options = {
        method: 'GET',
        url: NEWS_URL,
        params: {query: 'Video Game', country: 'US', lang: 'en', time_published: '1d'},
        headers: {
            'X-RapidAPI-Key': RapidAPI_Key,
            'X-RapidAPI-Host': 'real-time-news-data.p.rapidapi.com'
        }
    };

    const response = await axios.request(options)
    return response.data;
}

export const findGameTrendingNews  = async () => {

    const options = {
        method: 'GET',
        url: NEWS_URL,
        params: {query: 'Game Release', country: 'US', lang: 'en', time_published: '1d'},
        headers: {
            'X-RapidAPI-Key': RapidAPI_Key,
            'X-RapidAPI-Host': 'real-time-news-data.p.rapidapi.com'
        }
    };

    const response = await axios.request(options)
    return await response.data;
}

export const findGameDeals  = async () => {

    const options = {
        method: 'GET',
        url: NEWS_URL,
        params: {query: 'Game Deal', country: 'US', lang: 'en', time_published: '1d'},
        headers: {
            'X-RapidAPI-Key': RapidAPI_Key,
            'X-RapidAPI-Host': 'real-time-news-data.p.rapidapi.com'
        }
    };

    const response = await axios.request(options)

    return await response.data;
}

export const findNewsByKeyWord  = async (keyword) => {
    const options = {
        method: 'GET',
        url: NEWS_URL,
        params: {query: keyword +" video game" , country: 'US', lang: 'en', time_published: '1d'},
        headers: {
            'X-RapidAPI-Key': RapidAPI_Key,
            'X-RapidAPI-Host': 'real-time-news-data.p.rapidapi.com'
        }
    };

    const response = await axios.request(options)

    return await response.data;
}

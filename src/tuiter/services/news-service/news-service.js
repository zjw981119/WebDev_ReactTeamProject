import axios from 'axios';

const API_Key = '6b661fe439msh3a879a9b179992bp107604jsn3cc592bd533e'

const api = axios.create({
    withCredentials: true
});

export const findGameNews  = async () => {

    const options = {
        method: 'GET',
        url: 'https://real-time-news-data.p.rapidapi.com/search',
        params: {query: 'Video Game', country: 'US', lang: 'en', time_published: '1d'},
        headers: {
            'X-RapidAPI-Key': API_Key,
            'X-RapidAPI-Host': 'real-time-news-data.p.rapidapi.com'
        }
    };

    const response = await api.request(options)
    return response.data;
}

export const findGameTrendingNews  = async () => {

    const options = {
        method: 'GET',
        url: 'https://real-time-news-data.p.rapidapi.com/search',
        params: {query: 'Game Release', country: 'US', lang: 'en', time_published: '1d'},
        headers: {
            'X-RapidAPI-Key': API_Key,
            'X-RapidAPI-Host': 'real-time-news-data.p.rapidapi.com'
        }
    };

    const response = await api.request(options)
    return await response.data;
}

export const findGameDeals  = async () => {

    const options = {
        method: 'GET',
        url: 'https://real-time-news-data.p.rapidapi.com/search',
        params: {query: 'Game Deal', country: 'US', lang: 'en', time_published: '1d'},
        headers: {
            'X-RapidAPI-Key': API_Key,
            'X-RapidAPI-Host': 'real-time-news-data.p.rapidapi.com'
        }
    };

    const response = await api.request(options)

    return await response.data;
}

export const findNewsByKeyWord  = async (keyword) => {
    const options = {
        method: 'GET',
        url: 'https://real-time-news-data.p.rapidapi.com/search',
        params: {query: keyword +" video game" , country: 'US', lang: 'en', time_published: '1d'},
        headers: {
            'X-RapidAPI-Key': API_Key,
            'X-RapidAPI-Host': 'real-time-news-data.p.rapidapi.com'
        }
    };

    const response = await api.request(options)

    return await response.data;
}

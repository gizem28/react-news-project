import {setLoadingFalseAction, setLoadingTrueAction} from "../actions/appActions";
import axios from 'axios';
import {setNewsListAction} from "../actions/newsActions";

export const getNewsThunk = () => async (dispatch, getState) => {
    try {
            dispatch(setLoadingTrueAction());
            const response = await axios.get('https://bing-news-search1.p.rapidapi.com/news', {
                params: {safeSearch: 'Off', textFormat: 'Raw'},
                headers: {
                    'X-BingApis-SDK': 'true',
                    'X-RapidAPI-Host': 'bing-news-search1.p.rapidapi.com',
                    'X-RapidAPI-Key': '75a3161b47msh6d6be0e179b4cd6p1b99bejsn7b2b46e92dab'
     }
    });
            console.log('response', response);
            dispatch(setNewsListAction(response.data.value));
        } catch (error) {
            console.log(error);
        } finally {
            dispatch(setLoadingFalseAction());
        }
}
import {    SET_SELECTED_NEWS, SET_NEW_LIST} from '../types/newsTypes';

export const setNewsListAction = (newsList) => {
    return {
        type: SET_NEW_LIST,
        payload: newsList,
    };
};

export const setSelectedNewsAction = (selectedNews) => {
    return {
        type: SET_SELECTED_NEWS,
        payload: selectedNews,
    };
}
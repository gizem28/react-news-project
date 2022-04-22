import {    SET_SELECTED_NEWS, SET_NEW_LIST} from '../types/newsTypes';

const initialState = {
    newsList: [],
    selectedNews: {}
};

export const newsReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case SET_NEW_LIST:
            return {
                ...state,
                newsList: payload,
            };
        case SET_SELECTED_NEWS:
            return {
                ...state,
                selectedNews: payload,
            };
        default:
            return state;
    }
}

export default newsReducer;
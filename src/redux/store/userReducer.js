import { red } from '@mui/material/colors';
import {SET_USER_LIST, SET_SELECTED_USER} from '../types';

const initialState = {
    userList: [],
    selectedUser: {},
};


export const userReducer = (state=initialState, {type, payload}) => {
    switch (type) {
        case SET_USER_LIST:
            return {
                ...state,
                userList: payload,
            };


            default:
                return state;
        }
}

export default userReducer
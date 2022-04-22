import { SET_SELECTED_USER, SET_USER_LIST } from "../types";

export const setUserListAction = (userList) => ({ type:SET_USER_LIST, payload:userList  });

export const setSelectedUserAction = (user) => ({ type:SET_SELECTED_USER, payload:user  });
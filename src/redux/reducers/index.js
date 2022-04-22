import appReducer from "./appReducer";
import { combineReducers } from "redux";
import userReducer from "../store/userReducer";
import newsReducer from "./newsReducer";

const rootReducer = combineReducers({
    app: appReducer,
    user: userReducer,
    news: newsReducer,
});

export default rootReducer;

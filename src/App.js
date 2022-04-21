import "./App.css";
import AppRouter from "./router/index.js";
import { applyMiddleware, compose, createStore  } from "redux";
import thunk from "redux-thunk";
import { Provider } from "react-redux";
import axios from 'axios';

const initialState = {
  loading: false,
  token: "",
  error: null,
  userList: [],
  language: "en",
  selectedUser: {},
  newList: [],
  selectedNews: {},
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_LOADING_FALSE":
      return {
        ...state,
        loading: false,
      };

    case "SET_LOADING_TRUE":
      return {
        ...state,
        loading: true,
      };
    case "SET_TOKEN":
      return {
        ...state,
        token: action.payload,
      };

    case "SET_ERROR":
      return {
        ...state,
        token: action.payload,
      };

    case "CLEAR_ERROR":
      return {
        ...state,
        error: action.payload,
      };
    
    case "SET_USER_LIST":
        return {
          ...state,
          userList: action.payload,
        };

    case "SET_SELECTED_USER":
      return {
        ...state,
        selectedUser: action.payload,
      };
    case "SET_NEWS_LIST":
      return {
        ...state,
        newsList: action.payload,
      };
    case "SET_SELECTED_NEWS":
      return {
        ...state,
        selectedNews: action.payload,
      };

    default:
      return state;
  }
};

let store;
if (process.env.NODE_ENV === "development") {
  // store = configureStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
  store = createStore(
    rootReducer,
    compose(
      applyMiddleware(thunk),
      window.__REDUX_DEVTOOLS_EXTENSION__ &&
        window.__REDUX_DEVTOOLS_EXTENSION__()
    )
  );
} else {
  // store = configureStore(rootReducer);
  store = createStore(rootReducer);
}

// const store=configureStore(rootReducer);

store.subscribe(() => {
  console.log(store.getState());
});
store.dispatch({
  type: "SET_LOADING_FALSE",
});


export const getUserList = async (dispatch, getState) => {
  try {
      dispatch({ type: 'SET_LOADING_TRUE'})
      const response = await axios.get('https://jsonplaceholder.typicode.com/users');
      dispatch({ type: 'SET_USER_LIST', payload: response.data })
      // console.log(response);
  } catch (error) {
      console.log(error)
  } finally{
      dispatch({ type: 'SET_LOADING_FALSE'})
  }
}

const App = () => {
  return (
    <Provider store={store}>
      <AppRouter />
    </Provider>
  );
};

export default App;

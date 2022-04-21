import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'reddux-thunk';
import rootReducer from './reducers/index';

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
}else{
    store = createStore(rootReducer, applyMiddleware(thunk));
}

export default store;
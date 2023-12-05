
import  addReducer from "./Reducer";
import thunk from 'redux-thunk';
import { createStore, applyMiddleware, compose } from 'redux';

const composeEnhancers = window.REDUX_DEVTOOLS_EXTENSION_COMPOSE || compose;
 const store = createStore(addReducer, /* preloadedState, */ composeEnhancers(
    applyMiddleware(thunk)
  ));
  export default store
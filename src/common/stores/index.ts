import { createStore, combineReducers, applyMiddleware } from 'redux';
// import thunk from 'redux-thunk';
import {mainReducer} from '../reducers/index';

const Reducers = combineReducers({
    mainReducer
});

// let devtools: any = window['devToolsExtension'] ? window['devToolsExtension']() : (f:any)=>f;

// export default applyMiddleware()(createStore)(Reducers,devtools);

export default applyMiddleware()(createStore)(Reducers);

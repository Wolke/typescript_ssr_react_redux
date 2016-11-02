"use strict";
var redux_1 = require('redux');
// import thunk from 'redux-thunk';
var index_1 = require('../reducers/index');
var Reducers = redux_1.combineReducers({
    mainReducer: index_1.mainReducer
});
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = redux_1.applyMiddleware()(redux_1.createStore)(Reducers);
//# sourceMappingURL=index.js.map
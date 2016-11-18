"use strict";
var redux_1 = require('redux');
// import thunk from 'redux-thunk';
var index_1 = require('../reducers/index');
var Reducers = redux_1.combineReducers({
    mainReducer: index_1.mainReducer
});
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = redux_1.applyMiddleware()(redux_1.createStore)(Reducers);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvY29tbW9uL3N0b3Jlcy9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsc0JBQThELE9BQU8sQ0FBQyxDQUFBO0FBQ3RFLG1DQUFtQztBQUNuQyxzQkFBMEIsbUJBQW1CLENBQUMsQ0FBQTtBQUU5QyxJQUFNLFFBQVEsR0FBRyx1QkFBZSxDQUFDO0lBQzdCLGdDQUFXO0NBQ2QsQ0FBQyxDQUFDO0FBTUg7a0JBQWUsdUJBQWUsRUFBRSxDQUFDLG1CQUFXLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyJ9
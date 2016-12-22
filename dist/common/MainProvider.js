"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require('react');
var react_redux_1 = require('react-redux');
var index_1 = require('./containers/index');
var MuiThemeProvider_1 = require('material-ui/styles/MuiThemeProvider');
var injectTapEventPlugin = require('react-tap-event-plugin');
injectTapEventPlugin();
var index_2 = require('./stores/index');
// import App from './containers/App';
// render(
//     <Provider store={store}>
//         <MuiThemeProvider>
//             <App />
//         </MuiThemeProvider>
//     </Provider>,
//     document.getElementById('app')
// )
// export const MainProvider = (
//       <Provider store={store}>
//       </Provider>
//   );
var MainProvider = (function (_super) {
    __extends(MainProvider, _super);
    function MainProvider() {
        _super.call(this);
    }
    MainProvider.prototype.render = function () {
        return (React.createElement(react_redux_1.Provider, {store: index_2.default}, 
            React.createElement(MuiThemeProvider_1.default, null, 
                React.createElement(index_1.Main, null)
            )
        ));
    };
    return MainProvider;
}(React.Component));
exports.MainProvider = MainProvider;
//# sourceMappingURL=MainProvider.js.map
"use strict";
var React = require("react");
var ReactDOM = require('react-dom');
var react_hot_loader_1 = require('react-hot-loader');
// import { Main } from './../common/index';
var MainProvider_1 = require('./../common/MainProvider');
var devtools = window['devToolsExtension'] ? window['devToolsExtension']() : function (f) { return f; };
function updateRender() {
    console.log("updateRender");
    // const App = require('./components').App;
    return ReactDOM.render(React.createElement(react_hot_loader_1.AppContainer, null, 
        React.createElement(MainProvider_1.MainProvider, null)
    ), document.getElementById("app"));
}
updateRender();
if (module.hot) {
    module.hot.accept('./../common/containers', function () { return updateRender(); });
}
//# sourceMappingURL=index.js.map
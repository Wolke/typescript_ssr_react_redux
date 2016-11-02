"use strict";
var React = require("react");
var ReactDOM = require('react-dom');
// import { AppContainer } from 'react-hot-loader';
// import { Main } from './../common/index';
var MainProvider_1 = require('./../common/MainProvider');
// let devtools: any = window['devToolsExtension'] ? window['devToolsExtension']() : (f:any)=>f;
ReactDOM.render(React.createElement(MainProvider_1.MainProvider, null), document.getElementById("app"));
// function updateRender() {
//     console.log("updateRender");
//     // const App = require('./components').App;
//     return ReactDOM.render(
//         <AppContainer>
//              <MainProvider />
//          </AppContainer>,
//         document.getElementById("app")
//     )
// }
// updateRender();
// if ((module as any).hot) {
//     (module as any).hot.accept(
//         './../common/containers',
//         () => updateRender())
// } 
//# sourceMappingURL=index.js.map
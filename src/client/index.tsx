import * as React from "react";
import * as ReactDOM from 'react-dom';

import { AppContainer } from 'react-hot-loader';


// import { Main } from './../common/index';
import { MainProvider } from './../common/MainProvider';
let devtools: any = window['devToolsExtension'] ? window['devToolsExtension']() : (f:any)=>f;

function updateRender() {
    console.log("updateRender");
    
    // const App = require('./components').App;

    return ReactDOM.render(
        <AppContainer>
             <MainProvider />
         </AppContainer>,
        document.getElementById("app")
    )
}

updateRender();

if ((module as any).hot) {
    (module as any).hot.accept(
        './../common/containers',
        () => updateRender())
}
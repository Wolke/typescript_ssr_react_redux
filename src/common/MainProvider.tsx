import * as React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import { Main } from './containers/index';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import * as injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

import store from './stores/index'
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


export class MainProvider extends React.Component<{},{}>{
    constructor(){
        super();
    }

    render(){
        return (
          <Provider store={store}>
            <MuiThemeProvider>
                <Main />
             </MuiThemeProvider>
          </Provider>
          )
    }
}
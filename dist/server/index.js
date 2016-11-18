"use strict";
var http = require("http");
var path = require("path");
var express = require("express");
// import express = require("express");
// import routes  = require("./../common/routes");
// import { createMemoryHistory , createLocation } from 'history';
// import * as cors from 'cors';
// import { RouterContext, match } from 'react-router';
// import * as UniversalRouter from 'universal-router';
var webpack = require('webpack');
var server_1 = require('react-dom/server');
var React = require("react");
var MainProvider_1 = require('./../common/MainProvider');
var app = express();
if (process.env.NODE_ENV == "develop") {
    var config = require('./webpack.config.dev').config;
    var compiler = webpack(config);
    app.use(require('webpack-dev-middleware')(compiler, {
        publicPath: config.output.publicPath,
        hot: true,
        historyApiFallback: true
    }));
    app.use(require('webpack-hot-middleware')(compiler));
}
var server = http.createServer(app);
var port = process.env.PORT || 3000;
app.use('/', express.static(path.join(__dirname, '../..', "static/dist")));
//add developer middle 2016.11.01
// const routes= {
//     path: "/",
//     children: [{
//         title: "Hello",
//         component: <Main />
//     }],
//     action:{}
// }
// const routes1 = {
//   path : "/",
//   children:[
//     {
//       title:"Hello",
//       component: <Main />
//     }
//   ],
//   async action({ next }) {
//     // Execute each child route until one of them return the result
//     const route = await next();
//     // Provide default values for title, description etc.
//     route.title = `${route.title || 'Untitled Page'} - www.reactstarterkit.com`;
//     route.description = route.description || '';
//     return route;
//   }
// };
//  const route = UniversalRouter.resolve(routes);
app.get("*", function (req, res) {
    res.end(renderFullPage(server_1.renderToString(React.createElement(MainProvider_1.MainProvider, null))));
});
server.listen(port, function () {
    console.log('Server listening on: ', port);
});
function renderFullPage(html) {
    return "\n    <!doctype html>\n    <html lang=\"en\">\n      <head>\n        <link rel=\"icon\" href=\"./favicon.ico\" type=\"image/x-icon\" />\n        <meta charset=\"utf-8\">\n        <meta name=\"viewport\" content=\"width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0\" />\n        <title>React Redux </title>\n      </head>\n      <body>\n        <container id=\"app\">" + html + "</container>\n        \n        <script src=\"/bundle.js\"></script>\n      </body>\n    </html>\n  ";
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvc2VydmVyL2luZGV4LnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsSUFBSSxJQUFJLEdBQUcsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0FBQzNCLElBQWEsSUFBSSxXQUFPLE1BQU0sQ0FBQyxDQUFBO0FBQy9CLElBQVksT0FBTyxXQUFNLFNBQVMsQ0FBQyxDQUFBO0FBQ25DLHVDQUF1QztBQUV2QyxrREFBa0Q7QUFFbEQsa0VBQWtFO0FBQ2xFLGdDQUFnQztBQUNoQyx1REFBdUQ7QUFDdkQsdURBQXVEO0FBQ3ZELElBQVksT0FBTyxXQUFNLFNBQVMsQ0FBQyxDQUFBO0FBQ25DLHVCQUErQixrQkFHL0IsQ0FBQyxDQUhnRDtBQUdqRCxJQUFZLEtBQUssV0FBTSxPQUFPLENBQUMsQ0FBQTtBQUUvQiw2QkFBNkIsMEJBRTdCLENBQUMsQ0FGc0Q7QUFFdkQsSUFBSSxHQUFHLEdBQUcsT0FBTyxFQUFFLENBQUM7QUFFcEIsRUFBRSxDQUFBLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxRQUFRLElBQUUsU0FBUyxDQUFDLENBQUEsQ0FBQztJQUVoQyxJQUFJLE1BQU0sR0FBRyxPQUFPLENBQUMsc0JBQXNCLENBQUMsQ0FBQyxNQUErQixDQUFDO0lBQzdFLElBQUksUUFBUSxHQUFHLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUUvQixHQUFHLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyx3QkFBd0IsQ0FBQyxDQUFDLFFBQVEsRUFBRTtRQUNoRCxVQUFVLEVBQUUsTUFBTSxDQUFDLE1BQU0sQ0FBQyxVQUFVO1FBQ3BDLEdBQUcsRUFBRSxJQUFJO1FBQ1Qsa0JBQWtCLEVBQUUsSUFBSTtLQUMzQixDQUFDLENBQUMsQ0FBQTtJQUVILEdBQUcsQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLHdCQUF3QixDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztBQUN6RCxDQUFDO0FBRUQsSUFBTSxNQUFNLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxHQUFHLENBQUMsQ0FBQztBQUN0QyxJQUFJLElBQUksR0FBRyxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksSUFBSSxJQUFJLENBQUM7QUFFcEMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsT0FBTyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxPQUFPLEVBQUcsYUFBYSxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBRTVFLGlDQUFpQztBQUVqQyxrQkFBa0I7QUFDbEIsaUJBQWlCO0FBQ2pCLG1CQUFtQjtBQUNuQiwwQkFBMEI7QUFDMUIsOEJBQThCO0FBQzlCLFVBQVU7QUFDVixnQkFBZ0I7QUFDaEIsSUFBSTtBQUVKLG9CQUFvQjtBQUNwQixnQkFBZ0I7QUFDaEIsZUFBZTtBQUNmLFFBQVE7QUFDUix1QkFBdUI7QUFDdkIsNEJBQTRCO0FBQzVCLFFBQVE7QUFDUixPQUFPO0FBQ1AsNkJBQTZCO0FBQzdCLHNFQUFzRTtBQUN0RSxrQ0FBa0M7QUFFbEMsNERBQTREO0FBQzVELG1GQUFtRjtBQUNuRixtREFBbUQ7QUFFbkQsb0JBQW9CO0FBQ3BCLE1BQU07QUFDTixLQUFLO0FBQ0wsa0RBQWtEO0FBR2xELEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFDLFVBQUMsR0FBRyxFQUFDLEdBQUc7SUFFakIsR0FBRyxDQUFDLEdBQUcsQ0FBQyxjQUFjLENBQUMsdUJBQWMsQ0FBQyxvQkFBQywyQkFBWSxPQUFHLENBQUMsQ0FBQyxDQUFDLENBQUE7QUFFNUQsQ0FBQyxDQUFDLENBQUE7QUFHRixNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksRUFBQztJQUNoQixPQUFPLENBQUMsR0FBRyxDQUFDLHVCQUF1QixFQUFFLElBQUksQ0FBQyxDQUFDO0FBQzlDLENBQUMsQ0FBQyxDQUFBO0FBR0Ysd0JBQXdCLElBQUk7SUFDMUIsTUFBTSxDQUFDLHNZQVVxQixJQUFJLHlHQUsvQixDQUFBO0FBQ0gsQ0FBQyJ9
import * as http from "http";
import * as path from 'path';
import * as express from "express";

let app = express();
const server = http.createServer(app);
let port = process.env.PORT || 3000;

app.use('/', express.static(path.join(__dirname, '../..' , "static")));

//add developer middle 2016.11.01

app.get("*",(req,res)=>{
    res.end(renderFullPage())
})

server.listen(port,()=>{
   console.log('Server listening on: ', port);
})


function renderFullPage() {
  return `
    <!doctype html>
    <html lang="en">
      <head>
        <link rel="icon" href="./favicon.ico" type="image/x-icon" />
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0" />
        <title>React Redux </title>
      </head>
      <body>
        <container id="app"></container>
        
        <script src="/dist/bundle.js"></script>
      </body>
    </html>
  `
}

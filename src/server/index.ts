import * as http from "http";
import * as express from "express";

let app = express();
const server = http.createServer(app);
let port = process.env.PORT || 3000;

app.get("*",(req,res)=>{
    res.end("hello world!!!ddd!!")
})

server.listen(port,()=>{
   console.log('Server listening on: ', port);
})


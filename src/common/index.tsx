import * as React from "react";


export class Main extends React.Component<{},{}>{
    constructor(){
        super();
    }

    render(){
        return <div >
        <h1>hello day!!
        </h1>
        <button onClick={(e)=>{
            e.preventDefault();
            console.log("click me")
        }} >
        Click
        </button>
        </div>;
    }

}
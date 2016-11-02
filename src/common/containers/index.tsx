import {DO} from "./../constants"

import * as React from "react";
import FontIcon from 'material-ui/FontIcon';
import FlatButton from 'material-ui/FlatButton';

const iconStyles = {
  marginRight: 24,
};

export class Main extends React.Component<{},{}>{
    constructor(){
        super();
    }
    render(){
        return (
            <div >
                <FlatButton label="Default" onClick={(e)=>{
                    e.preventDefault();
                    console.log("click me!!")
                }} />
                
                <h1>hello!o!!!!!!
                </h1>
               
            </div>);
    }


}
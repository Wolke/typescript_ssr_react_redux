import {DO} from "./../constants"

import * as React from "react";

import AppBar from 'material-ui/AppBar';

import FontIcon from 'material-ui/FontIcon';
import FlatButton from 'material-ui/FlatButton';

const iconStyles = {
  marginRight: 24,
};

export class Main extends React.Component<{},{}>{
    constructor(){
        super();
    }
    render() {
        let style = {
            height: "100%",
            width: "100%",
            overflow: "hidden",
            backgroundColor: "#e6e6e6",
            position: "fixed",
            top: "0px",
            left: "0px",
            boxShadow: "0px 3px 3px 0px rgba(50, 50, 50, 0.5)"
        }

        return (
            <div style={style}>
                <AppBar title="1797" iconClassNameRight="muidocs-icon-navigation-expand-more"/>
                 <FlatButton label="Default!!!!!!" onClick={(e)=>{
                    e.preventDefault();
                    console.log("fuck me!!!!!!")
                }} />
            </div>
        )
    }

  

}
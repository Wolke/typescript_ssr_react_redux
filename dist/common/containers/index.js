"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require("react");
var AppBar_1 = require('material-ui/AppBar');
var FlatButton_1 = require('material-ui/FlatButton');
var iconStyles = {
    marginRight: 24,
};
var Main = (function (_super) {
    __extends(Main, _super);
    function Main() {
        _super.call(this);
    }
    Main.prototype.render = function () {
        var style = {
            height: "100%",
            width: "100%",
            overflow: "hidden",
            backgroundColor: "#e6e6e6",
            position: "fixed",
            top: "0px",
            left: "0px",
            boxShadow: "0px 3px 3px 0px rgba(50, 50, 50, 0.5)"
        };
        return (React.createElement("div", {style: style}, 
            React.createElement(AppBar_1.default, {title: "1797", iconClassNameRight: "muidocs-icon-navigation-expand-more"}), 
            React.createElement(FlatButton_1.default, {label: "Default!!", onClick: function (e) {
                e.preventDefault();
                console.log("fuck me!!");
            }})));
    };
    return Main;
}(React.Component));
exports.Main = Main;
//# sourceMappingURL=index.js.map
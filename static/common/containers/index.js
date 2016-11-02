"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require("react");
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
        return (React.createElement("div", null, 
            React.createElement(FlatButton_1.default, {label: "Default!!", onClick: function (e) {
                e.preventDefault();
                console.log("click me!!");
            }})
        ));
    };
    return Main;
}(React.Component));
exports.Main = Main;
//# sourceMappingURL=index.js.map
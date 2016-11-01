"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require("react");
var Main = (function (_super) {
    __extends(Main, _super);
    function Main() {
        _super.call(this);
    }
    Main.prototype.render = function () {
        return React.createElement("div", null, 
            React.createElement("h1", null, "hello day!!")
        );
    };
    return Main;
}(React.Component));
exports.Main = Main;
//# sourceMappingURL=index.js.map
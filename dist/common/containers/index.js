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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvY29tbW9uL2NvbnRhaW5lcnMvaW5kZXgudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUVBLElBQVksS0FBSyxXQUFNLE9BQU8sQ0FBQyxDQUFBO0FBRS9CLDJCQUF1Qix3QkFBd0IsQ0FBQyxDQUFBO0FBRWhELElBQU0sVUFBVSxHQUFHO0lBQ2pCLFdBQVcsRUFBRSxFQUFFO0NBQ2hCLENBQUM7QUFFRjtJQUEwQix3QkFBc0I7SUFDNUM7UUFDSSxpQkFBTyxDQUFDO0lBQ1osQ0FBQztJQUNELHFCQUFNLEdBQU47UUFDSSxNQUFNLENBQUMsQ0FDSCxxQkFBQyxHQUFHO1lBQ0Esb0JBQUMsb0JBQVUsR0FBQyxLQUFLLEVBQUMsV0FBVyxFQUFDLE9BQU8sRUFBRSxVQUFDLENBQUM7Z0JBQ3JDLENBQUMsQ0FBQyxjQUFjLEVBQUUsQ0FBQztnQkFDbkIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsQ0FBQTtZQUM3QixDQUFFLEVBQUc7U0FDSCxDQUFDLENBQUM7SUFDaEIsQ0FBQztJQUdMLFdBQUM7QUFBRCxDQUFDLEFBZkQsQ0FBMEIsS0FBSyxDQUFDLFNBQVMsR0FleEM7QUFmWSxZQUFJLE9BZWhCLENBQUEifQ==
"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require('react');
var react_redux_1 = require('react-redux');
// import { RouterContext } from 'react-router';
var index_1 = require('./containers/index');
var MuiThemeProvider_1 = require('material-ui/styles/MuiThemeProvider');
var injectTapEventPlugin = require('react-tap-event-plugin');
injectTapEventPlugin();
var index_2 = require('./stores/index');
var MainProvider = (function (_super) {
    __extends(MainProvider, _super);
    function MainProvider() {
        _super.call(this);
    }
    MainProvider.prototype.render = function () {
        return (React.createElement(react_redux_1.Provider, {store: index_2.default}, 
            React.createElement(MuiThemeProvider_1.default, null, 
                React.createElement(index_1.Main, null)
            )
        ));
    };
    return MainProvider;
}(React.Component));
exports.MainProvider = MainProvider;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTWFpblByb3ZpZGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2NvbW1vbi9NYWluUHJvdmlkZXIudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLElBQVksS0FBSyxXQUFNLE9BQU8sQ0FBQyxDQUFBO0FBRS9CLDRCQUF5QixhQUFhLENBQUMsQ0FBQTtBQUN2QyxnREFBZ0Q7QUFDaEQsc0JBQXFCLG9CQUFvQixDQUFDLENBQUE7QUFHMUMsaUNBQTZCLHFDQUFxQyxDQUFDLENBQUE7QUFDbkUsSUFBWSxvQkFBb0IsV0FBTSx3QkFBd0IsQ0FBQyxDQUFBO0FBQy9ELG9CQUFvQixFQUFFLENBQUM7QUFFdkIsc0JBQWtCLGdCQUlsQixDQUFDLENBSmlDO0FBSWxDO0lBQWtDLGdDQUFzQjtJQUNwRDtRQUNJLGlCQUFPLENBQUM7SUFFWixDQUFDO0lBRUQsNkJBQU0sR0FBTjtRQUNJLE1BQU0sQ0FBQyxDQUNMLG9CQUFDLHNCQUFRLEdBQUMsS0FBSyxFQUFFLGVBQU07WUFDckIsb0JBQUMsMEJBQWdCO2dCQUNiLG9CQUFDLFlBQUksT0FBRzthQUNRO1NBQ1gsQ0FDVixDQUFBO0lBQ1AsQ0FBQztJQUNMLG1CQUFDO0FBQUQsQ0FBQyxBQWZELENBQWtDLEtBQUssQ0FBQyxTQUFTLEdBZWhEO0FBZlksb0JBQVksZUFleEIsQ0FBQSJ9
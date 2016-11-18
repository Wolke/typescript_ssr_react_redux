"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var React = require('react');
// import React from 'react';
var react_1 = require('react');
// import { Link } from 'react-router';
var react_redux_1 = require('react-redux');
var App = (function (_super) {
    __extends(App, _super);
    function App() {
        _super.apply(this, arguments);
    }
    App.prototype.render = function () {
        var dispatch = this.props.dispatch;
        return (React.createElement("div", null, 
            React.createElement("input", {type: "text"})
        ));
    };
    App = __decorate([
        react_redux_1.connect()
    ], App);
    return App;
}(react_1.Component));
exports.App = App;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQXBwLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2NvbW1vbi9jb250YWluZXJzL0FwcC50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUEsSUFBYSxLQUFLLFdBQU0sT0FHeEIsQ0FBQyxDQUg4QjtBQUMvQiw2QkFBNkI7QUFFN0Isc0JBQXNDLE9BQU8sQ0FBQyxDQUFBO0FBQzlDLHVDQUF1QztBQUN2Qyw0QkFBd0IsYUFBYSxDQUFDLENBQUE7QUFVdEM7SUFBeUIsdUJBQXdDO0lBQWpFO1FBQXlCLDhCQUF3QztJQVlqRSxDQUFDO0lBVkcsb0JBQU0sR0FBTjtRQUNTLGtDQUFRLENBQWU7UUFFNUIsTUFBTSxDQUFDLENBQ0gscUJBQUMsR0FBRztZQUNBLHFCQUFDLEtBQUssSUFBQyxJQUFJLEVBQUMsTUFBTSxFQUFJO1NBRXBCLENBQ1QsQ0FBQTtJQUNMLENBQUM7SUFaTDtRQUFDLHFCQUFPLEVBQUU7V0FBQTtJQWFWLFVBQUM7QUFBRCxDQUFDLEFBWkQsQ0FBeUIsaUJBQVMsR0FZakM7QUFaWSxXQUFHLE1BWWYsQ0FBQSJ9
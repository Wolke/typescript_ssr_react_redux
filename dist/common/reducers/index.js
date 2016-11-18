"use strict";
var constants_1 = require("./../constants");
exports.mainReducer = function (state, action) {
    if (state === void 0) { state = {}; }
    switch (action.type) {
        case constants_1.DO.SPEAK:
            return state;
        case constants_1.DO.LISTEN:
            return state;
        default:
            return state;
    }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvY29tbW9uL3JlZHVjZXJzL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSwwQkFBaUIsZ0JBR2pCLENBQUMsQ0FIZ0M7QUFHcEIsbUJBQVcsR0FBRyxVQUFDLEtBQVUsRUFBRSxNQUFNO0lBQWxCLHFCQUFVLEdBQVYsVUFBVTtJQUNsQyxNQUFNLENBQUEsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztRQUNqQixLQUFLLGNBQUUsQ0FBQyxLQUFLO1lBQ1QsTUFBTSxDQUFDLEtBQUssQ0FBQztRQUVqQixLQUFLLGNBQUUsQ0FBQyxNQUFNO1lBRVYsTUFBTSxDQUFDLEtBQUssQ0FBQztRQUNqQjtZQUNJLE1BQU0sQ0FBQyxLQUFLLENBQUM7SUFDckIsQ0FBQztBQUNMLENBQUMsQ0FBQSJ9
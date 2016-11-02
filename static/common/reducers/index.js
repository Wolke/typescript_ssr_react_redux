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
//# sourceMappingURL=index.js.map
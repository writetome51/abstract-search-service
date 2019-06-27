"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var has_value_no_value_1 = require("@writetome51/has-value-no-value");
// Skeletal functionality for search operations.
var AbstractSearchService = /** @class */ (function () {
    function AbstractSearchService() {
    }
    Object.defineProperty(AbstractSearchService.prototype, "results", {
        get: function () {
            if (has_value_no_value_1.noValue(this._searchAlgorithm)) {
                throw new Error('The \'_searchAlgorithm\' property must be set before you can access the \'results\' property');
            }
            return this._searchAlgorithm();
        },
        enumerable: true,
        configurable: true
    });
    return AbstractSearchService;
}());
exports.AbstractSearchService = AbstractSearchService;

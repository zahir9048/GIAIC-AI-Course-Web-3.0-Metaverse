var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
//Exercise 45
console.log("\nExercise 45");
function carInfo(manufacturer, modelName) {
    var additionalInfo = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        additionalInfo[_i - 2] = arguments[_i];
    }
    var carInfo = __assign({ manufacturer: manufacturer, modelName: modelName }, additionalInfo.reduce(function (acc, item) { return (__assign(__assign({}, acc), item)); }, {}));
    return carInfo;
}
var carObject = carInfo("Toyota", "Corolla X", { color: "White" }, { optionalFeature: "Sunroof" });
console.log(carObject);

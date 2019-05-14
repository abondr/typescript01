var Logger = /** @class */ (function () {
    function Logger() {
    }
    Logger.prototype.log = function (arg) {
        if (typeof console.log === "function") {
            console.log(arg);
        }
        else {
            alert(arg);
        }
    };
    return Logger;
}());
var loger = new Logger();
loger.log("line 1");
loger.log("line 2");
loger.log("line 3");
loger.log("line 4");

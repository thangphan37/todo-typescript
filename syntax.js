var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
//Boolean
var isDone = false;
//Number
var decimal = 6;
//String
var color = "blue";
//Array
var list = [1, 2, 3];
//Tuple
var x;
x = ["hello", 5];
//Enum
var Color;
(function (Color) {
    Color[Color["Red"] = 3] = "Red";
    Color[Color["Green"] = 4] = "Green";
    Color[Color["Blue"] = 5] = "Blue";
})(Color || (Color = {}));
var c = Color[5];
console.log("c la gi", c);
//Any
var notSure = 4;
//Void
function warnUser() {
    console.log("This is my warning message");
}
//Never
function error(message) {
    throw new Error(message);
}
//Type assertions
var someValue = "this is a string";
var strLength = someValue.length;
console.log(strLength);
//Property renaming
var _a = { a: 3, b: 4 }, newName1 = _a.a, newName2 = _a.b;
console.log("newName1", newName1);
//Default values
var _b = { a: 5 }, a = _b.a, _c = _b.b, b = _c === void 0 ? 1001 : _c;
console.log("default values", b);
//Spread
var C = /** @class */ (function () {
    function C() {
        this.p = 12;
    }
    C.prototype.m = function () { };
    return C;
}());
var cTest = new C();
var clone = __assign({}, cTest);
clone.p; //ok
function printLabel(labeledObj) {
    console.log(labeledObj.label);
}
var myObj = { size: 10, label: "Size 10 Object" };
printLabel(myObj);
//ReadonlyArray
var numbers = [1, 2, 3, 4];
var roNumber = numbers;
roNumber[0]; //error!
function createSquare(square) {
    console.log("square", square);
    return square;
}
createSquare({ colour: "red" });
var mySearch;
mySearch = function (src, sub) {
    var result = src.search(sub);
    return result > -1;
};
var myArray;
myArray = ["Bob", "Fred"];
var myStr = myArray[0];
function createClock(ctor, hour, minute) {
    return new ctor(hour, minute);
}
var DigitalClock = /** @class */ (function () {
    function DigitalClock(h, m) {
    }
    DigitalClock.prototype.tick = function () {
        console.log("beep beep");
    };
    return DigitalClock;
}());
var digital = createClock(DigitalClock, 12, 17);
console.log("Digital", digital);
var Control = /** @class */ (function () {
    function Control() {
    }
    return Control;
}());
var Button = /** @class */ (function (_super) {
    __extends(Button, _super);
    function Button() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Button.prototype.select = function () { };
    return Button;
}(Control));
var TextBox = /** @class */ (function (_super) {
    __extends(TextBox, _super);
    function TextBox() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TextBox.prototype.select = function () { };
    return TextBox;
}(Control));
var tet = new Control();
console.log("tet", tet);
var text1 = new TextBox();
console.log("text111", text1.select());
var text2 = new Button();
console.log("text111", text2.select());

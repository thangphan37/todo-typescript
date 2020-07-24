//Boolean
let isDone: boolean = false;

//Number
let decimal: number = 6;

//String
let color: string = "blue";

//Array
let list: number[] = [1, 2, 3];

//Tuple
let x: [string, number];
x = ["hello", 5];

//Enum
enum Color {
  Red = 3,
  Green,
  Blue
}
let c: string = Color[5];
console.log("c la gi", c);

//Any
let notSure: any = 4;

//Void
function warnUser(): void {
  console.log("This is my warning message");
}

//Never
function error(message: string): never {
  throw new Error(message);
}

//Type assertions
let someValue: any = "this is a string";
let strLength: number = (<string>someValue).length;
console.log(strLength);

//Property renaming
let { a: newName1, b: newName2 } = { a: 3, b: 4 };
console.log("newName1", newName1);

//Default values
let { a, b = 1001 } = { a: 5 };
console.log("default values", b);

//Spread
class C {
  p = 12;
  m() {}
}

let cTest = new C();
let clone = { ...cTest };
clone.p; //ok

//Interface
interface LabeledValue {
  label: string;
}

function printLabel(labeledObj: LabeledValue) {
  console.log(labeledObj.label);
}

let myObj = { size: 10, label: "Size 10 Object" };
printLabel(myObj);

//ReadonlyArray
let numbers: number[] = [1, 2, 3, 4];
let roNumber: ReadonlyArray<number> = numbers;
roNumber[0]; //error!

interface SquareConfig {
  color?: string;
  witdh?: number;
  [propName: string]: any;
}

function createSquare(square: SquareConfig): SquareConfig {
  console.log("square", square);
  return square;
}

createSquare({ colour: "red" });

interface SearchFunc {
  (source: string, subString: string): boolean;
}

let mySearch: SearchFunc;
mySearch = function(src, sub) {
  let result = src.search(sub);
  return result > -1;
};

//Indexable Types
interface StringArray {
  [index: number]: string;
}

let myArray: StringArray;
myArray = ["Bob", "Fred"];

let myStr: string = myArray[0];

interface ClockInterface {
  tick(): void;
}

interface ClockConstructor {
  new (hour: number, minute: number): ClockInterface;
}

function createClock(
  ctor: ClockConstructor,
  hour: number,
  minute: number
): ClockInterface {
  return new ctor(hour, minute);
}

class DigitalClock implements ClockInterface {
  constructor(h: number, m: number) {}
  tick() {
    console.log("beep beep");
  }
}

let digital = createClock(DigitalClock, 12, 17);
console.log("Digital", digital);

class Control {
  private state: any;
}

interface SelectableControl extends Control {
  select(): void;
}
class Button extends Control implements SelectableControl {
  select() {}
}

class TextBox extends Control {
  select() {}
}

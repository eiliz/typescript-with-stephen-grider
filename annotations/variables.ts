let apples: number = 5;
let speed: string = 'fast';
let hasName: boolean = true;
let nothingMuch: null = null;
let now: Date = new Date();

let colors: string[] = ['pink', 'magenta', 'mauve'];
let numbers: number[] = [1, 7, 8];
let bools: boolean[] = [true, true, false];

class Car {}

let car: Car = new Car();

// Object literal
let point: { x: number; y: number } = {
  x: 10,
  y: 20
};

// Function
const logNumber: (i: number) => void = (i: number) => {
  console.log(i);
};

const json = '{"x":10, "y":20}';
// const coords = JSON.parse(json);
const coords: { x: number; y: number } = JSON.parse(json);
console.log(coords);

let words = ['red', 'green', 'blue'];
let foundWord: boolean;

for (let i = 0; i < words.length; i++) {
  if (words[i] === 'green') {
    foundWord = true;
  }
}

// Variable whose cannot be correctly inferred
let numbersArr = [-10, -1, 12];
let numberAboveZero: boolean | number = false;

for (let i = 0; i < numbers.length; i++) {
  if (numbersArr[i] > 0) {
    numberAboveZero = numbersArr[i];
  }
}

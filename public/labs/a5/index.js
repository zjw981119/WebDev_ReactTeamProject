// alert('Hello World!');
console.log('Hello World!');

// print out variables
console.log('SECTION 2.4')
console.log('Variables and Constants');
global1 = 10;
var functionScoped = 2;
let blockScoped = 5;
const constant1 = global1
    + functionScoped
    - blockScoped;
console.log(global1);
console.log(functionScoped);
console.log(blockScoped);
console.log(constant1);

// print out variable types
console.log('Variable types');
let numberVariable = 123;
let floatingPointNumber = 234.345;
let stringVariable = 'Hello World!';
let booleanVariable = true;
let isNumber = typeof numberVariable;
let isString = typeof stringVariable;
let isBoolean = typeof booleanVariable;
console.log(numberVariable);
console.log(floatingPointNumber);
console.log(stringVariable);
console.log(booleanVariable);
console.log(isNumber);
console.log(isString);
console.log(isBoolean);

// Boolean Variables
console.log('Boolean Variables');
let true1 = true;
let false1 = false;
let false2 = true1 && false1;
let true2 = true1 || false1;
let true3 = !false2;
let true4 = numberVariable === 123;
let true5 = floatingPointNumber !== 321.432;
let false3 = numberVariable < 100;
// '==' will attempt to convert and compare operands that are of different types.
let sortaTrue = '1' == 1
// '===' strict equality operator
let notTrue   = '1' === 1
console.log(true1);
console.log(false1);
console.log(false2);
console.log(true2);
console.log(true3);
console.log(true4);
console.log(true5);
console.log(false3);
console.log(sortaTrue);
console.log(notTrue);

// If Else
console.log('SECTION 2.5')
console.log('If else');
if(true1) {
    console.log(true);
}

if(!false1) {
    console.log('!false1');
} else {
    console.log('false1');
}

// Ternary Conditional Operator
console.log('Ternary conditional operator');
const loggedIn = true;
const greeting = loggedIn ? 'Welcome!' : 'Please login';
console.log(greeting)

// function
console.log('SECTION 2.6')
console.log('Legacy ES5 function')
function add (a, b) {
    return a + b;
}
const twoPlusFour = add(2, 4);
console.log(twoPlusFour);

// arrow function
console.log('New ES6 functions')
const subtract = (a, b) => {
    return a - b;
}
const threeMinusOne = subtract(3, 1);
console.log(threeMinusOne);

// implied returns
console.log('implied returns');
const multiply = (a, b) => a * b;
const fourTimesFive = multiply(4, 5);
console.log(fourTimesFive);

// optional parameter parenthesis if functions have only one parameter
console.log('Parenthesis and parameters');
const square = a => a * a;
const plusOne = a => a + 1;
const twoSquared = square(2);
const threePlusOne = plusOne(3);
console.log(twoSquared);
console.log(threePlusOne);

// Arrays
console.log('SECTION 2.7')
console.log('Arrays');
let numberArray1 = [1, 2, 3, 4, 5];
let stringArray1 = ['string1', 'string2'];
let variableArray1 = [
    functionScoped,
    blockScoped,
    constant1,
    numberArray1,
    stringArray1
];

console.log(numberArray1);
console.log(stringArray1);
console.log(variableArray1);

// array index and length
console.log('Array index and length');
const length1 = numberArray1.length;
const index1 = numberArray1.indexOf(3);
console.log(length1);
console.log(index1);

// update array

// adding new items
console.log('Add and remove data to arrays');
numberArray1.push(6);
stringArray1.push('string3');

// remove 1 item starting on 3rd spot
numberArray1.splice(2, 1);
stringArray1.splice(1, 1);
console.log(numberArray1);
console.log(stringArray1);

// iterate array
console.log('For loops');
for (let i=0; i<stringArray1.length; i++) {
    const string1 = stringArray1[i];
    console.log(string1);
}

// map
// iterate over an array's values, apply a function to each value,
// and collate all the results in a new array.
console.log('Map function');
const squares = numberArray1.map(square);
const cubes = numberArray1.map(a => a * a * a);
console.log(squares);
console.log(cubes);

// find
// search for an item in an array and return the element it finds.
console.log('Find function');
const four = numberArray1.find(a => a === 4);
const string3 = stringArray1.find(a => a === 'string3');
console.log(four);
console.log(string3);

console.log('Find index');
const fourIndex = numberArray1
    .findIndex(a => a === 4);
const string3Index = stringArray1
    .findIndex(a => a === 'string3');
console.log(fourIndex);
console.log(string3Index);

// filter
console.log('Filter function');
const numbersGreaterThan2 = numberArray1
    .filter(a => a > 2);
const evenNumbers = numberArray1
    .filter(a => a % 2 === 0);
const oddNumbers = numberArray1
    .filter(a => a % 2 !== 0);
console.log(numbersGreaterThan2);
console.log(evenNumbers);
console.log(oddNumbers);

// template Strings
const five = 2 + 3;
const result1 = "2 + 3 = " + five;
console.log(result1);

const result2 = `2 + 3 = ${2 + 3}`;
console.log(result2);

const username = "alice";
const greeting1 = `Welcome home ${username}`;
console.log(greeting1);

loggedIn2 = false;
const greeting2 = `Logged in: ${loggedIn2 ? "Yes" : "No"}`;
console.log(greeting2)

// JQuery
// jQuery waits for the document to load, the DOM to be generated,
// and then it invokes the initialization function.
const init = () => {
    // binding to the DOM
    console.log('Hello world from jQuery');
    /* do the rest of the lab work here */
    const bindById = $('#bind-by-id');
    const bindByClass = $('.bind-by-class');
    console.log('Binding to DOM');
    console.log(bindById);
    console.log(bindByClass);

    // change style
    const changeStyle = $('#change-style');
    const changeStyle2 = $('.change-style');
    changeStyle.css('color', 'red');
    changeStyle2.css('color', 'blue');

    // get attributes
    console.log('Get and set attributes');
    const getIdAttr = $("#get-id-attr");
    const id = getIdAttr.attr('id');
    console.log(id);

    // set attributes
    const setClassAttr = $("#set-class-attr");
    setClassAttr.attr('class', 'class-0');

    // use addClass to set class attribute
    const addClass1Example = $("#add-class-1");
    addClass1Example.addClass('class-1');

    // remove class attribute
    const removeClass1Example = $("#remove-class-1");
    removeClass1Example.removeClass('class-2');

    // hide content
    const hideMe = $("#hide-me");
    hideMe.hide();

    // show content
    const showMe = $("#show-me");
    showMe.show();


}
$(init);
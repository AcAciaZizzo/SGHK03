//Arithmetic Operations
let x = 8;
let y = 5;

let sum = x + y;
console.log("Sum: ", sum);

let diff = x - y;
console.log("Difference: ", diff);

let mult = x * y;
console.log("Product: ", mult);

let divn = x / y;
console.log("Quotient: ", divn);

let remainder = x % y;
console.log("Remainder: ", remainder);

//String Expressions
console.log("Hello, " + "I am " + "Abbi.");

//Logical Expressions
let sunny = true;
let warm = false;

/* AND, OR, Not
true && true = true
false && true = false
or ||
true || true = true
false || true = true
true || false = true
false || false = false
not !
!true = false */

console.log("Sunny AND Warm: ", sunny && warm);
console.log("Sunny OR Warm: ", sunny || warm);
console.log("NOT Sunny: ", !sunny);

//Assignment Expressions
let a = 10;
let b = 5;

//a = a + b;
a += b;
console.log("a: ", a);

a -= b;
console.log("a: ", a);

a *= b;
console.log("a: ", a);

a /= b;
console.log("a: ", a);

// Conditional statements
let age = 21;

if (age >= 18){
    console.log("You are eligible to vote!")
} else {
    console.log("You are not old enough to vote!")
}

let temp = -2;

if (temp < 0){
    console.log("It's freezing!");
} else if (temp >= 0 && temp < 20){
    console.log("It's cool outside.")
} else {
    console.log("It's a warm day!")
}
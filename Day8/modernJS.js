//箭头函数更简单，可以省略花括号，function， return等
//Arrow Functions
const greet = (name) => console.log("Hi, ", name);

greet('Abbi');

const square = (a) => a*a;

console.log(square(5));

//Template literals
let name = 'Abbi';
let age = 25;

// console.log("Hi! I'm "+ name + "and I am "+ age + " yrs old.")
//无法检测换行
console.log(`Hi! I'm ${name} and 
I am ${age} years old.`)//可以检测到空格和换行

//数组可以显示出字符串而对象显示数据？

//desctructuring
//array
let nums = [1,2,3];

let [first, second, third] = nums;
console.log(`${first}, ${second}, ${third}`);

//objects
const numbers = {
    firstNum: 4,
    secondNum: 5,
    thirdNum: 6
}

let {firstNum, secondNum, thirdNum} = numbers;
console.log(firstNum, secondNum, thirdNum);

/* var person = {
    name: 'John',
    age: 30,
    sayHello: function() {
      console.log('Hello!');
    }
} */
//可以之后赋值 或使用之前的值
//Enhanced Object Literals
const person = {
    name: 'John',
    age,//使用之前的age值
    greet(){
        return `Hi! I'm ${this.name} and I am ${age} years old.`//age没有加this因为不在对象内
    }
}

console.log(person.greet())

//Spread and Rest
//Spread

function sum(x, y, z){
    return x+y+z;
}

const numbersArr = [13, 23, 24];
console.log(sum(...numbersArr));

//Rest
function myFunction(firstArg, secondArg, ...restOfArgs) {
    console.log('First value: ', firstArg);
    console.log('Second value: ', secondArg);
    console.log('Rest of the values: ', restOfArgs);
}

myFunction('one', 'two', 'three', 'four');

//Default parameters
function multiply(a, b = 5){//b值已给出，后续可省略
    return a*b;
}

console.log(multiply(8));//使用原始b值
console.log(multiply(8, 10));//b值可重新设定